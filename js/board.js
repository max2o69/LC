// Interactive Chessboard Component
// Supports White/Black Perspective Flip, Click-to-Move, Desktop & Touch Drag-and-Drop,
// Underpromotion Picker, Coach Highlights & Threat Pulse

class ChessBoardUI {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    this.options = options;
    this.boardState = Array(8).fill(null).map(() => Array(8).fill(null));
    this.selectedSquare = null;
    this.validMoves = [];
    this.lastMove = null;
    this.checkSquare = null;
    this.onMoveCallback = null;
    this.onPromotionChoice = null; // Optional UI chooser(color, callback(promoChar))
    this.allowPromotionChoice = false;
    this.interactive = true;
    this.playerColor = 'w'; // 'w' | 'b'
    this.flipped = false;
    this.coachHighlight = null;
    this.coachHintSquare = null; // Piece-only progressive hint square
    this.dangerSquares = [];

    this.touchDragState = null;

    this.initDOM();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="chessboard-wrapper select-none">
        <div class="board-frame">
          <div class="board-row">
            <div class="rank-labels" id="rank-labels">
              ${[8, 7, 6, 5, 4, 3, 2, 1].map(r => `<span>${r}</span>`).join('')}
            </div>
            <div class="board-grid" id="grid-container">
              <!-- 64 squares -->
            </div>
          </div>
          <div class="file-labels" id="file-labels">
            ${['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(f => `<span>${f}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    this.gridEl = this.container.querySelector('#grid-container');
    this.rankLabelsEl = this.container.querySelector('#rank-labels');
    this.fileLabelsEl = this.container.querySelector('#file-labels');
    this.createSquares();
  }

  updateCoordinateLabels() {
    if (this.rankLabelsEl) {
      const ranks = this.flipped ? [1, 2, 3, 4, 5, 6, 7, 8] : [8, 7, 6, 5, 4, 3, 2, 1];
      this.rankLabelsEl.innerHTML = ranks.map(r => `<span>${r}</span>`).join('');
    }
    if (this.fileLabelsEl) {
      const files = this.flipped ? ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'] : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      this.fileLabelsEl.innerHTML = files.map(f => `<span>${f}</span>`).join('');
    }
  }

  setFlipped(flipped) {
    this.flipped = !!flipped;
    this.updateCoordinateLabels();
    this.render();
  }

  flip() {
    this.setFlipped(!this.flipped);
    return this.flipped;
  }

  // Convert visual grid index (vr, vc) <-> logical board coordinate (r, c)
  visualToLogical(vr, vc) {
    return this.flipped ? { r: 7 - vr, c: 7 - vc } : { r: vr, c: vc };
  }

  createSquares() {
    this.gridEl.innerHTML = '';
    for (let vr = 0; vr < 8; vr++) {
      for (let vc = 0; vc < 8; vc++) {
        const sq = document.createElement('div');
        sq.className = `square ${(vr + vc) % 2 === 0 ? 'light' : 'dark'}`;
        sq.dataset && (sq.dataset.vrow = vr);
        sq.dataset && (sq.dataset.vcol = vc);

        sq.addEventListener('click', () => {
          const { r, c } = this.visualToLogical(vr, vc);
          this.handleSquareClick(r, c);
        });

        sq.addEventListener('dragover', (e) => e.preventDefault());
        sq.addEventListener('drop', (e) => {
          const { r, c } = this.visualToLogical(vr, vc);
          this.handleDrop(e, r, c);
        });

        this.gridEl.appendChild(sq);
      }
    }
  }

  setBoard(matrix, options = {}) {
    this.boardState = matrix.map(row => [...row]);
    this.options = options ? JSON.parse(JSON.stringify(options)) : {};
    this.selectedSquare = null;
    this.validMoves = [];
    this.lastMove = null;
    this.checkSquare = null;
    this.coachHighlight = null;
    this.coachHintSquare = null;
    this.dangerSquares = [];
    this.updateCoordinateLabels();
    this.render();
  }

  getSquareEl(r, c) {
    const vr = this.flipped ? (7 - r) : r;
    const vc = this.flipped ? (7 - c) : c;
    return this.gridEl.children[vr * 8 + vc];
  }

  canControlPiece(piece) {
    if (!piece || piece === '*' || piece === '#') return false;
    return ChessRules.getColor(piece) === this.playerColor;
  }

  render() {
    const isWhiteCheck = ChessRules.isCheck(this.boardState, 'w');
    const isBlackCheck = ChessRules.isCheck(this.boardState, 'b');
    const whiteKing = ChessRules.findKing(this.boardState, 'w');
    const blackKing = ChessRules.findKing(this.boardState, 'b');

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const sq = this.getSquareEl(r, c);
        if (!sq) continue;
        sq.innerHTML = '';
        sq.className = `square ${(r + c) % 2 === 0 ? 'light' : 'dark'}`;
        if (sq.dataset) {
          sq.dataset.row = r;
          sq.dataset.col = c;
        }

        if (this.lastMove) {
          if ((this.lastMove.from.r === r && this.lastMove.from.c === c) ||
              (this.lastMove.to.r === r && this.lastMove.to.c === c)) {
            sq.classList.add('last-move');
            if (this.lastMove.isBot) {
              sq.classList.add('bot-move');
            }
          }
        }

        if (this.coachHintSquare && this.coachHintSquare.r === r && this.coachHintSquare.c === c) {
          sq.classList.add('coach-from');
        }

        if (this.coachHighlight) {
          if (this.coachHighlight.from && this.coachHighlight.from.r === r && this.coachHighlight.from.c === c) {
            sq.classList.add('coach-from');
          }
          if (this.coachHighlight.to && this.coachHighlight.to.r === r && this.coachHighlight.to.c === c) {
            sq.classList.add('coach-to');
          }
        }

        if (this.dangerSquares && this.dangerSquares.some(pos => pos && pos.r === r && pos.c === c)) {
          sq.classList.add('danger-attacked');
        }

        if (this.selectedSquare && this.selectedSquare.r === r && this.selectedSquare.c === c) {
          sq.classList.add('selected');
        }

        if (isWhiteCheck && whiteKing && whiteKing.r === r && whiteKing.c === c) {
          sq.classList.add('in-check');
        }
        if (isBlackCheck && blackKing && blackKing.r === r && blackKing.c === c) {
          sq.classList.add('in-check');
        }

        const cell = this.boardState[r][c];
        if (cell) {
          if (cell === '*') {
            const starDiv = document.createElement('div');
            starDiv.className = 'item-star';
            starDiv.innerHTML = PIECE_SVGS.star;
            sq.appendChild(starDiv);
          } else if (cell === '#') {
            const stoneDiv = document.createElement('div');
            stoneDiv.className = 'item-stone';
            stoneDiv.textContent = '🧱';
            sq.appendChild(stoneDiv);
          } else {
            const pieceDiv = document.createElement('div');
            pieceDiv.className = 'piece-wrapper';
            pieceDiv.innerHTML = PIECE_SVGS[cell] || cell;
            const controllable = this.interactive && this.canControlPiece(cell);
            pieceDiv.draggable = controllable;

            pieceDiv.addEventListener('dragstart', (e) => this.handleDragStart(e, r, c));
            if (controllable) {
              pieceDiv.addEventListener('touchstart', (e) => this.handleTouchStart(e, r, c), { passive: true });
              pieceDiv.addEventListener('touchend', (e) => this.handleTouchEnd(e));
            }
            sq.appendChild(pieceDiv);
          }
        }

        const move = this.validMoves.find(m => m.r === r && m.c === c);
        if (move) {
          const hint = document.createElement('div');
          hint.className = move.capture ? 'move-hint-capture' : 'move-hint-dot';
          sq.appendChild(hint);
        }
      }
    }
  }

  handleSquareClick(r, c) {
    if (!this.interactive) return;

    if (this.selectedSquare) {
      const move = this.validMoves.find(m => m.r === r && m.c === c);
      if (move) {
        this.tryPlayerMove(this.selectedSquare, { r, c }, move);
        return;
      }
    }

    const piece = this.boardState[r][c];
    if (piece && this.canControlPiece(piece)) {
      this.selectedSquare = { r, c };
      this.validMoves = ChessRules.getLegalMoves(this.boardState, r, c, this.options);
      this.render();
    } else if (this.selectedSquare) {
      this.selectedSquare = null;
      this.validMoves = [];
      this.render();
    }
  }

  handleDragStart(e, r, c) {
    if (!this.interactive) return;
    const piece = this.boardState[r][c];
    if (!this.canControlPiece(piece)) return;
    this.selectedSquare = { r, c };
    this.validMoves = ChessRules.getLegalMoves(this.boardState, r, c, this.options);
    this.render();
    if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', `${r},${c}`);
    }
  }

  handleDrop(e, r, c) {
    e.preventDefault();
    if (!this.interactive || !this.selectedSquare) return;
    const move = this.validMoves.find(m => m.r === r && m.c === c);
    if (move) {
      this.tryPlayerMove(this.selectedSquare, { r, c }, move);
    }
  }

  handleTouchStart(e, r, c) {
    if (!this.interactive) return;
    this.touchDragState = { r, c };
    this.selectedSquare = { r, c };
    this.validMoves = ChessRules.getLegalMoves(this.boardState, r, c, this.options);
    this.render();
  }

  handleTouchEnd(e) {
    if (!this.interactive || !this.touchDragState || !e.changedTouches || !e.changedTouches[0]) return;
    const touch = e.changedTouches[0];
    if (typeof document !== 'undefined' && document.elementFromPoint) {
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      const sqEl = el && el.closest ? el.closest('.square') : null;
      if (sqEl && sqEl.dataset && sqEl.dataset.row !== undefined) {
        const tr = parseInt(sqEl.dataset.row, 10);
        const tc = parseInt(sqEl.dataset.col, 10);
        if (tr !== this.touchDragState.r || tc !== this.touchDragState.c) {
          const move = this.validMoves.find(m => m.r === tr && m.c === tc);
          if (move) {
            e.preventDefault();
            this.tryPlayerMove(this.selectedSquare, { r: tr, c: tc }, move);
          }
        }
      }
    }
    this.touchDragState = null;
  }

  // Intercepts human pawn promotion when underpromotion picker is enabled
  tryPlayerMove(from, to, moveData) {
    const piece = this.boardState[from.r][from.c];
    const isPromo = (piece === 'P' && to.r === 0) || (piece === 'p' && to.r === 7);

    if (isPromo && this.allowPromotionChoice && typeof this.onPromotionChoice === 'function' && !(moveData && moveData.promotion)) {
      const color = ChessRules.getColor(piece);
      this.onPromotionChoice(color, (chosenType) => {
        if (!chosenType) return;
        this.executeMove(from, to, { ...moveData, promotion: chosenType }, false);
      });
      return;
    }

    this.executeMove(from, to, moveData, false);
  }

  executeMove(from, to, moveData = {}, isBotMove = false) {
    const piece = this.boardState[from.r][from.c];
    if (!piece) return;
    const target = this.boardState[to.r][to.c];
    const boardBefore = this.boardState.map(row => [...row]);
    const optionsBefore = JSON.parse(JSON.stringify(this.options || {}));

    const sim = ChessRules.applyMove(this.boardState, from, to, moveData, this.options || {});
    this.boardState = sim.board;
    this.options = sim.options;

    try {
      if (target === '*') {
        sounds.playStar();
      } else if (sim.promotedTo && !isBotMove) {
        sounds.playWin();
      } else if (sim.captured) {
        sounds.playCapture();
      } else {
        const oppColor = ChessRules.getColor(piece) === 'w' ? 'b' : 'w';
        if (ChessRules.isCheck(this.boardState, oppColor)) {
          sounds.playCheck();
        } else {
          sounds.playMove();
        }
      }
    } catch (e) {
      // Ignore audio errors in headless environments
    }

    this.lastMove = { from, to, isBot: isBotMove, captured: sim.captured, promotedTo: sim.promotedTo };
    this.selectedSquare = null;
    this.validMoves = [];
    this.coachHintSquare = null;
    this.render();

    if (this.onMoveCallback && !isBotMove) {
      this.onMoveCallback(from, to, { ...moveData, captured: sim.captured, promotedTo: sim.promotedTo, castling: sim.castling, enPassant: sim.enPassant }, boardBefore, optionsBefore);
    }
  }

  highlightHint(from, to) {
    const fromEl = this.getSquareEl(from.r, from.c);
    const toEl = to ? this.getSquareEl(to.r, to.c) : null;
    if (fromEl) fromEl.classList.add('hint-from');
    if (toEl) toEl.classList.add('hint-to');
    setTimeout(() => {
      if (fromEl) fromEl.classList.remove('hint-from');
      if (toEl) toEl.classList.remove('hint-to');
    }, 2500);
  }

  setCoachHintPiece(square) {
    this.coachHintSquare = square;
    this.coachHighlight = null;
    this.render();
  }

  setCoachHighlight(from, to) {
    this.coachHintSquare = null;
    this.coachHighlight = { from, to };
    this.render();
  }

  setDangerSquares(squares) {
    this.dangerSquares = squares || [];
    this.render();
  }

  clearCoachHighlights() {
    this.coachHighlight = null;
    this.coachHintSquare = null;
    this.dangerSquares = [];
    this.render();
  }
}

window.ChessBoardUI = ChessBoardUI;
