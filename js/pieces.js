// Chess Pieces SVG definitions and metadata
// Designed for crystal-clear rendering on any display

const PIECE_INFO = {
  P: { name: 'Pawn', nickname: 'The Brave Soldier', points: 1, symbol: '♙', role: 'Soldier', tip: 'Steps 1 square forward (or 2 on move 1). Captures diagonally!' },
  N: { name: 'Knight', nickname: 'The Jumping Horse', points: 3, symbol: '♘', role: 'Horse', tip: 'Gallop, gallop, turn! Moves in an L-shape and hops over anything!' },
  B: { name: 'Bishop', nickname: 'The Sneaky Magician', points: 3, symbol: '♗', role: 'Magician', tip: 'Zooms diagonally in an X. Stays on its own tile color forever!' },
  R: { name: 'Rook', nickname: 'The Castle Rocket', points: 5, symbol: '♖', role: 'Tower', tip: 'Drives straight like a rocket: forward, backward, left, or right!' },
  Q: { name: 'Queen', nickname: 'The Superhero', points: 9, symbol: '♕', role: 'Superhero', tip: 'The most powerful friend! Moves any distance, straight or diagonal!' },
  K: { name: 'King', nickname: 'Grandpa King', points: 1000, symbol: '♔', role: 'King', tip: 'The Boss! Moves 1 baby step in any direction. Protect him at all costs!' }
};

// Clean, high-contrast SVG pieces
const PIECE_SVGS = {
  // White Pieces
  P: `<svg viewBox="0 0 45 45" class="chess-piece">
    <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 l 23,0 c 0,-7.92 -4.41,-12.41 -7.41,-13.47 C 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z"
      fill="#ffffff" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  R: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#ffffff" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 9,39 L 36,39 L 36,36 L 9,36 z"/>
      <path d="M 12,36 L 12,32 L 33,32 L 33,36 z"/>
      <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"/>
      <path d="M 34,14 L 31,17 L 14,17 L 11,14"/>
      <path d="M 14,17 L 14,29.5 L 31,29.5 L 31,17"/>
      <path d="M 14,29.5 L 11,32 L 34,32 L 31,29.5"/>
      <circle cx="17.5" cy="22" r="1.5" fill="#222222"/>
      <circle cx="27.5" cy="22" r="1.5" fill="#222222"/>
    </g>
  </svg>`,

  N: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#ffffff" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" />
      <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.95,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.99,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,7.4 17.5,7 18,10 C 20,9 22.5,9.5 24,11.5" />
      <circle cx="15.5" cy="17.5" r="1.5" fill="#222222"/>
    </g>
  </svg>`,

  B: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#ffffff" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 9,36 C 12.33,35 17.67,34.5 22.5,34.5 C 27.33,34.5 32.67,35 36,36 L 36,39 L 9,39 L 9,36 z"/>
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,22 28,17 C 26,12 25,9 22.5,9 C 20,9 19,12 17,17 C 15,22 14.5,30.5 15,32 z"/>
      <path d="M 22.5,6 L 22.5,9"/>
      <path d="M 21,7.5 L 24,7.5"/>
      <path d="M 17.5,26 L 27.5,26" stroke-width="1.2"/>
      <circle cx="22.5" cy="20" r="1.5" fill="#222222"/>
    </g>
  </svg>`,

  Q: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#ffffff" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.5 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.5 L 14,25 L 6.5,13.5 z"/>
      <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10,39 L 35,39 C 34.5,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 z"/>
      <circle cx="6" cy="12" r="2" fill="#ffffff" stroke="#222222"/>
      <circle cx="14" cy="9" r="2" fill="#ffffff" stroke="#222222"/>
      <circle cx="22.5" cy="8" r="2" fill="#ffffff" stroke="#222222"/>
      <circle cx="31" cy="9" r="2" fill="#ffffff" stroke="#222222"/>
      <circle cx="39" cy="12" r="2" fill="#ffffff" stroke="#222222"/>
    </g>
  </svg>`,

  K: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#ffffff" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 22.5,11.63 L 22.5,6"/>
      <path d="M 20,8 L 25,8"/>
      <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 24,11.5 21,11.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"/>
      <path d="M 11.5,37 C 17,40.5 28,40.5 33.5,37 C 36.5,35 37.5,30 35.5,25.5 C 33.5,21 31,19 28.5,19 C 26,19 24.5,21 22.5,23 C 20.5,21 19,19 16.5,19 C 14,19 11.5,21 9.5,25.5 C 7.5,30 8.5,35 11.5,37 z"/>
      <path d="M 11.5,30 C 17,27 28,27 33.5,30"/>
      <path d="M 11.5,33.5 C 17,30.5 28,30.5 33.5,33.5"/>
      <path d="M 11.5,37 C 17,34 28,34 33.5,37"/>
    </g>
  </svg>`,

  // Black Pieces
  p: `<svg viewBox="0 0 45 45" class="chess-piece">
    <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 l 23,0 c 0,-7.92 -4.41,-12.41 -7.41,-13.47 C 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z"
      fill="#292724" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  r: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#292724" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 9,39 L 36,39 L 36,36 L 9,36 z"/>
      <path d="M 12,36 L 12,32 L 33,32 L 33,36 z"/>
      <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"/>
      <path d="M 34,14 L 31,17 L 14,17 L 11,14"/>
      <path d="M 14,17 L 14,29.5 L 31,29.5 L 31,17"/>
      <path d="M 14,29.5 L 11,32 L 34,32 L 31,29.5"/>
    </g>
  </svg>`,

  n: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#292724" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" />
      <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.95,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.99,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,7.4 17.5,7 18,10 C 20,9 22.5,9.5 24,11.5" />
      <circle cx="15.5" cy="17.5" r="1.5" fill="#ffffff"/>
    </g>
  </svg>`,

  b: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#292724" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 9,36 C 12.33,35 17.67,34.5 22.5,34.5 C 27.33,34.5 32.67,35 36,36 L 36,39 L 9,39 L 9,36 z"/>
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,22 28,17 C 26,12 25,9 22.5,9 C 20,9 19,12 17,17 C 15,22 14.5,30.5 15,32 z"/>
      <path d="M 22.5,6 L 22.5,9"/>
      <path d="M 21,7.5 L 24,7.5"/>
    </g>
  </svg>`,

  q: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#292724" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.5 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.5 L 14,25 L 6.5,13.5 z"/>
      <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10,39 L 35,39 C 34.5,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 z"/>
      <circle cx="6" cy="12" r="2" fill="#ffffff"/>
      <circle cx="14" cy="9" r="2" fill="#ffffff"/>
      <circle cx="22.5" cy="8" r="2" fill="#ffffff"/>
      <circle cx="31" cy="9" r="2" fill="#ffffff"/>
      <circle cx="39" cy="12" r="2" fill="#ffffff"/>
    </g>
  </svg>`,

  k: `<svg viewBox="0 0 45 45" class="chess-piece">
    <g fill="#292724" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 22.5,11.63 L 22.5,6"/>
      <path d="M 20,8 L 25,8"/>
      <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 24,11.5 21,11.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"/>
      <path d="M 11.5,37 C 17,40.5 28,40.5 33.5,37 C 36.5,35 37.5,30 35.5,25.5 C 33.5,21 31,19 28.5,19 C 26,19 24.5,21 22.5,23 C 20.5,21 19,19 16.5,19 C 14,19 11.5,21 9.5,25.5 C 7.5,30 8.5,35 11.5,37 z"/>
      <path d="M 11.5,30 C 17,27 28,27 33.5,30"/>
      <path d="M 11.5,33.5 C 17,30.5 28,30.5 33.5,33.5"/>
      <path d="M 11.5,37 C 17,34 28,34 33.5,37"/>
    </g>
  </svg>`,

  // Special Items for Lessons
  star: `<svg viewBox="0 0 24 24" class="board-star animate-bounce">
    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
      fill="#facc15" stroke="#ca8a04" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`,

  crown: `<svg viewBox="0 0 24 24" class="board-crown">
    <path d="M 3,18 L 21,18 L 19,8 L 14,13 L 12,5 L 10,13 L 5,8 z"
      fill="#f59e0b" stroke="#b45309" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`
};

// Movement Calculation Engine
const ChessRules = {
  isWhite: (piece) => piece && piece === piece.toUpperCase() && piece !== '*' && piece !== '#',
  isBlack: (piece) => piece && piece === piece.toLowerCase() && piece !== '*' && piece !== '#',
  getColor: (piece) => {
    if (!piece || piece === '*' || piece === '#') return null;
    return piece === piece.toUpperCase() ? 'w' : 'b';
  },

  getRawMoves(board, r, c, options = {}) {
    const piece = board[r][c];
    if (!piece) return [];
    const color = this.getColor(piece);
    const type = piece.toUpperCase();
    const moves = [];

    const isInside = (nr, nc) => nr >= 0 && nr < 8 && nc >= 0 && nc < 8;

    // ROOK
    if (type === 'R' || type === 'Q') {
      const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dr, dc] of dirs) {
        let step = 1;
        while (true) {
          const nr = r + dr * step;
          const nc = c + dc * step;
          if (!isInside(nr, nc)) break;
          const target = board[nr][nc];
          if (!target || target === '*') {
            moves.push({ r: nr, c: nc, capture: false, star: target === '*' });
          } else {
            if (this.getColor(target) !== color) {
              moves.push({ r: nr, c: nc, capture: true });
            }
            break;
          }
          step++;
        }
      }
    }

    // BISHOP
    if (type === 'B' || type === 'Q') {
      const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
      for (const [dr, dc] of dirs) {
        let step = 1;
        while (true) {
          const nr = r + dr * step;
          const nc = c + dc * step;
          if (!isInside(nr, nc)) break;
          const target = board[nr][nc];
          if (!target || target === '*') {
            moves.push({ r: nr, c: nc, capture: false, star: target === '*' });
          } else {
            if (this.getColor(target) !== color) {
              moves.push({ r: nr, c: nc, capture: true });
            }
            break;
          }
          step++;
        }
      }
    }

    // KNIGHT
    if (type === 'N') {
      const deltas = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
      ];
      for (const [dr, dc] of deltas) {
        const nr = r + dr;
        const nc = c + dc;
        if (!isInside(nr, nc)) continue;
        const target = board[nr][nc];
        if (!target || target === '*') {
          moves.push({ r: nr, c: nc, capture: false, star: target === '*' });
        } else if (this.getColor(target) !== color) {
          moves.push({ r: nr, c: nc, capture: true });
        }
      }
    }

    // KING
    if (type === 'K') {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr;
          const nc = c + dc;
          if (!isInside(nr, nc)) continue;
          const target = board[nr][nc];
          if (!target || target === '*') {
            moves.push({ r: nr, c: nc, capture: false, star: target === '*' });
          } else if (this.getColor(target) !== color) {
            moves.push({ r: nr, c: nc, capture: true });
          }
        }
      }

      // Castling (if allowed in options)
      if (options.castling && !options.ignoreCastling) {
        if (color === 'w' && r === 7 && c === 4) {
          // Kingside (O-O)
          if (options.castling.K && !board[7][5] && !board[7][6] && board[7][7] === 'R') {
            if (!this.isSquareAttacked(board, 7, 4, 'b') &&
                !this.isSquareAttacked(board, 7, 5, 'b') &&
                !this.isSquareAttacked(board, 7, 6, 'b')) {
              moves.push({ r: 7, c: 6, castling: 'K' });
            }
          }
          // Queenside (O-O-O)
          if (options.castling.Q && !board[7][3] && !board[7][2] && !board[7][1] && board[7][0] === 'R') {
            if (!this.isSquareAttacked(board, 7, 4, 'b') &&
                !this.isSquareAttacked(board, 7, 3, 'b') &&
                !this.isSquareAttacked(board, 7, 2, 'b')) {
              moves.push({ r: 7, c: 2, castling: 'Q' });
            }
          }
        } else if (color === 'b' && r === 0 && c === 4) {
          if (options.castling.k && !board[0][5] && !board[0][6] && board[0][7] === 'r') {
            if (!this.isSquareAttacked(board, 0, 4, 'w') &&
                !this.isSquareAttacked(board, 0, 5, 'w') &&
                !this.isSquareAttacked(board, 0, 6, 'w')) {
              moves.push({ r: 0, c: 6, castling: 'k' });
            }
          }
          if (options.castling.q && !board[0][3] && !board[0][2] && !board[0][1] && board[0][0] === 'r') {
            if (!this.isSquareAttacked(board, 0, 4, 'w') &&
                !this.isSquareAttacked(board, 0, 3, 'w') &&
                !this.isSquareAttacked(board, 0, 2, 'w')) {
              moves.push({ r: 0, c: 2, castling: 'q' });
            }
          }
        }
      }
    }

    // PAWN
    if (type === 'P') {
      const fwd = color === 'w' ? -1 : 1;
      const startRow = color === 'w' ? 6 : 1;

      // 1 step forward
      const fwdR = r + fwd;
      if (isInside(fwdR, c) && (!board[fwdR][c] || board[fwdR][c] === '*')) {
        moves.push({ r: fwdR, c, capture: false, star: board[fwdR][c] === '*' });
        // 2 steps forward on first move
        const fwdR2 = r + fwd * 2;
        if (r === startRow && !board[fwdR][c] && (!board[fwdR2][c] || board[fwdR2][c] === '*')) {
          moves.push({ r: fwdR2, c, capture: false, star: board[fwdR2][c] === '*' });
        }
      }

      // Diagonal Captures
      for (const dc of [-1, 1]) {
        const nr = r + fwd;
        const nc = c + dc;
        if (isInside(nr, nc)) {
          const target = board[nr][nc];
          if (target && target !== '*' && this.getColor(target) !== color) {
            moves.push({ r: nr, c: nc, capture: true });
          } else if (options.enPassant && options.enPassant.r === nr && options.enPassant.c === nc) {
            moves.push({ r: nr, c: nc, capture: true, enPassant: true });
          }
        }
      }
    }

    return moves;
  },

  isSquareAttacked(board, targetR, targetC, byColor) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (piece && this.getColor(piece) === byColor) {
          const moves = this.getRawMoves(board, r, c, { ignoreCastling: true });
          if (moves.some(m => m.r === targetR && m.c === targetC)) {
            return true;
          }
        }
      }
    }
    return false;
  },

  findKing(board, color) {
    const kingSymbol = color === 'w' ? 'K' : 'k';
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (board[r][c] === kingSymbol) {
          return { r, c };
        }
      }
    }
    return null;
  },

  isCheck(board, color) {
    const king = this.findKing(board, color);
    if (!king) return false;
    const enemyColor = color === 'w' ? 'b' : 'w';
    return this.isSquareAttacked(board, king.r, king.c, enemyColor);
  },

  // Filters out moves that leave own king in check (Standard Chess rule)
  getLegalMoves(board, r, c, options = {}) {
    const piece = board[r][c];
    if (!piece) return [];
    const color = this.getColor(piece);
    const rawMoves = this.getRawMoves(board, r, c, options);

    // If game mode is puzzle with no King on board, all raw moves are valid
    const king = this.findKing(board, color);
    if (!king) {
      return rawMoves;
    }

    // Otherwise, simulate move and ensure own King is not in check
    return rawMoves.filter(move => {
      const clone = board.map(row => [...row]);
      clone[move.r][move.c] = piece;
      clone[r][c] = null;
      // Handle en passant simulation
      if (move.enPassant) {
        const epR = color === 'w' ? move.r + 1 : move.r - 1;
        clone[epR][move.c] = null;
      }
      return !this.isCheck(clone, color);
    });
  },

  // Coordinate helpers: (7, 4) -> 'e1'
  toAlgebraic(r, c) {
    const files = 'abcdefgh';
    return `${files[c]}${8 - r}`;
  },

  fromAlgebraic(str) {
    const files = 'abcdefgh';
    const c = files.indexOf(str[0].toLowerCase());
    const r = 8 - parseInt(str[1], 10);
    return { r, c };
  }
};

window.PIECE_INFO = PIECE_INFO;
window.PIECE_SVGS = PIECE_SVGS;
window.ChessRules = ChessRules;
