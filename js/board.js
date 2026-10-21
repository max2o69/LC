// Interactive Chessboard Component
// Supports Click-to-Move, Drag-and-Drop, Move Hints & Visual Effects

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
    this.interactive = true;

    this.draggedPiece = null;
    this.dragStartSquare = null;

    this.initDOM();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="chessboard-wrapper select-none">
        <div class="board-frame">
          <div class="board-row">
            <div class="rank-labels">
              ${[8, 7, 6, 5, 4, 3, 2, 1].map(r => `<span>${r}</span>`).join('')}
            </div>
            <div class="board-grid" id="grid-container">
              <!-- 64 squares -->
            </div>
          </div>
          <div class="file-labels">
            ${['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(f => `<span>${f}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    this.gridEl = this.container.querySelector('#grid-container');
    this.createSquares();
  }

  createSquares() {
    this.gridEl.innerHTML = '';
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const isLight = (r + c) % 2 === 0;
        const sq = document.createElement('div');
        sq.className = `square ${isLight ? 'light' : 'dark'}`;
        sq.dataset.row = r;
        sq.dataset.col = c;

        sq.addEventListener('click', (e) => this.handleSquareClick(r, c));
        
        // Touch & Drag events
        sq.addEventListener('dragover', (e) => e.preventDefault());
        sq.addEventListener('drop', (e) => this.handleDrop(e, r, c));

        this.gridEl.appendChild(sq);
      }
    }
  }

  setBoard(matrix, options = {}) {
    this.boardState = matrix.map(row => [...row]);
    this.options = { ...options };
    this.selectedSquare = null;
    this.validMoves = [];
    this.lastMove = null;
    this.checkSquare = null;
    this.render();
  }

  getSquareEl(r, c) {
    return this.gridEl.children[r * 8 + c];
  }

  render() {
    // Check if white king or black king is in check
    const isWhiteCheck = ChessRules.isCheck(this.boardState, 'w');
    const isBlackCheck = ChessRules.isCheck(this.boardState, 'b');
    const whiteKing = ChessRules.findKing(this.boardState, 'w');
    const blackKing = ChessRules.findKing(this.boardState, 'b');

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const sq = this.getSquareEl(r, c);
        sq.innerHTML = '';
        sq.className = `square ${(r + c) % 2 === 0 ? 'light' : 'dark'}`;

        // Highlight last move
        if (this.lastMove) {
          if ((this.lastMove.from.r === r && this.lastMove.from.c === c) ||
              (this.lastMove.to.r === r && this.lastMove.to.c === c)) {
            sq.classList.add('last-move');
            if (this.lastMove.isBot) {
              sq.classList.add('bot-move');
            }
          }
        }

        // Highlight selected
        if (this.selectedSquare && this.selectedSquare.r === r && this.selectedSquare.c === c) {
          sq.classList.add('selected');
        }

        // Highlight King in check
        if (isWhiteCheck && whiteKing && whiteKing.r === r && whiteKing.c === c) {
          sq.classList.add('in-check');
        }
        if (isBlackCheck && blackKing && blackKing.r === r && blackKing.c === c) {
          sq.classList.add('in-check');
        }

        const cell = this.boardState[r][c];
        if (cell) {
          if (cell === '*') {
            // Star collectible
            const starDiv = document.createElement('div');
            starDiv.className = 'item-star';
            starDiv.innerHTML = PIECE_SVGS.star;
            sq.appendChild(starDiv);
          } else if (cell === '#') {
            // Stone obstacle
            const stoneDiv = document.createElement('div');
            stoneDiv.className = 'item-stone';
            stoneDiv.textContent = '🧱';
            sq.appendChild(stoneDiv);
          } else {
            // Regular chess piece
            const pieceDiv = document.createElement('div');
            pieceDiv.className = 'piece-wrapper';
            pieceDiv.innerHTML = PIECE_SVGS[cell] || cell;
            pieceDiv.draggable = this.interactive && ChessRules.isWhite(cell);

            pieceDiv.addEventListener('dragstart', (e) => this.handleDragStart(e, r, c));
            sq.appendChild(pieceDiv);
          }
        }

        // Render valid move indicators
        const move = this.validMoves.find(m => m.r === r && m.c === c);
        if (move) {
          const hint = document.createElement('div');
          if (move.capture) {
            hint.className = 'move-hint-capture';
          } else {
            hint.className = 'move-hint-dot';
          }
          sq.appendChild(hint);
        }
      }
    }
  }

  handleSquareClick(r, c) {
    if (!this.interactive) return;

    // If already selected a piece, check if clicking a valid move square
    if (this.selectedSquare) {
      const move = this.validMoves.find(m => m.r === r && m.c === c);
      if (move) {
        this.executeMove(this.selectedSquare, { r, c }, move);
        return;
      }
    }

    // Otherwise select a piece
    const piece = this.boardState[r][c];
    if (piece && ChessRules.isWhite(piece)) {
      this.selectedSquare = { r, c };
      this.validMoves = ChessRules.getLegalMoves(this.boardState, r, c, this.options);
      this.render();
    } else {
      // Clear selection if clicking an empty or invalid square
      if (this.selectedSquare) {
        this.selectedSquare = null;
        this.validMoves = [];
        this.render();
      }
    }
  }

  handleDragStart(e, r, c) {
    if (!this.interactive) return;
    this.selectedSquare = { r, c };
    this.validMoves = ChessRules.getLegalMoves(this.boardState, r, c, this.options);
    this.render();
    e.dataTransfer.setData('text/plain', `${r},${c}`);
  }

  handleDrop(e, r, c) {
    e.preventDefault();
    if (!this.selectedSquare) return;
    const move = this.validMoves.find(m => m.r === r && m.c === c);
    if (move) {
      this.executeMove(this.selectedSquare, { r, c }, move);
    }
  }

  executeMove(from, to, moveData, isBotMove = false) {
    const piece = this.boardState[from.r][from.c];
    if (!piece) return;
    const target = this.boardState[to.r][to.c];

    // Play appropriate sound safely
    try {
      if (target === '*') {
        sounds.playStar();
      } else if (target && target !== '*') {
        sounds.playCapture();
      } else {
        sounds.playMove();
      }
    } catch (e) {
      console.warn('Audio play error ignored:', e);
    }

    // Update board state
    this.boardState[to.r][to.c] = piece;
    this.boardState[from.r][from.c] = null;

    // Handle Castling Rook move
    if (moveData && moveData.castling) {
      if (moveData.castling === 'K') {
        this.boardState[7][5] = 'R';
        this.boardState[7][7] = null;
      } else if (moveData.castling === 'Q') {
        this.boardState[7][3] = 'R';
        this.boardState[7][0] = null;
      } else if (moveData.castling === 'k') {
        this.boardState[0][5] = 'r';
        this.boardState[0][7] = null;
      } else if (moveData.castling === 'q') {
        this.boardState[0][3] = 'r';
        this.boardState[0][0] = null;
      }
    }

    // Update castling rights if King or Rook moved
    if (this.options && this.options.castling) {
      if (piece === 'K') {
        this.options.castling.K = false;
        this.options.castling.Q = false;
      } else if (piece === 'k') {
        this.options.castling.k = false;
        this.options.castling.q = false;
      } else if (piece === 'R') {
        if (from.r === 7 && from.c === 7) this.options.castling.K = false;
        if (from.r === 7 && from.c === 0) this.options.castling.Q = false;
      } else if (piece === 'r') {
        if (from.r === 0 && from.c === 7) this.options.castling.k = false;
        if (from.r === 0 && from.c === 0) this.options.castling.q = false;
      }
    }

    // Handle En Passant capture
    if (moveData && moveData.enPassant) {
      const epR = ChessRules.getColor(piece) === 'w' ? to.r + 1 : to.r - 1;
      this.boardState[epR][to.c] = null;
      sounds.playCapture();
    }

    // Update or clear en passant target for next turn
    if (piece === 'P' && from.r === 6 && to.r === 4) {
      this.options.enPassant = { r: 5, c: from.c };
    } else if (piece === 'p' && from.r === 1 && to.r === 3) {
      this.options.enPassant = { r: 2, c: from.c };
    } else {
      this.options.enPassant = null;
    }

    // Handle Pawn Promotion (Pawn reaches 8th rank)
    if (piece === 'P' && to.r === 0) {
      this.boardState[to.r][to.c] = 'Q'; // Auto-promote to Queen for fun & simplicity
      try { sounds.playWin(); } catch (e) {}
    }
    if (piece === 'p' && to.r === 7) {
      this.boardState[to.r][to.c] = 'q';
      try { sounds.playCapture(); } catch (e) {}
    }

    this.lastMove = { from, to, isBot: isBotMove };
    this.selectedSquare = null;
    this.validMoves = [];
    this.render();

    if (this.onMoveCallback && !isBotMove) {
      this.onMoveCallback(from, to, moveData);
    }
  }

  highlightHint(from, to) {
    const fromEl = this.getSquareEl(from.r, from.c);
    const toEl = this.getSquareEl(to.r, to.c);
    if (fromEl) fromEl.classList.add('hint-from');
    if (toEl) toEl.classList.add('hint-to');
    setTimeout(() => {
      if (fromEl) fromEl.classList.remove('hint-from');
      if (toEl) toEl.classList.remove('hint-to');
    }, 2500);
  }
}

window.ChessBoardUI = ChessBoardUI;
