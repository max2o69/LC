// Chess Pieces SVG definitions and metadata
// Designed for crystal-clear rendering on any display

const PIECE_INFO = {
  P: {
    name: 'Pawn',
    nickname: 'The Brave Foot-Soldier',
    points: 1,
    symbol: '♙',
    role: 'Soldier',
    howItMoves: 'Steps 1 square straight forward. Only on its first move from home does it have a special one-time option to leap 2 squares forward!',
    howItCaptures: 'Captures 1 square DIAGONALLY forward (up-left or up-right). It can NEVER capture straight forward!',
    canGoBackwards: 'NO! The only piece in chess that can never walk backwards or retreat.',
    canJump: 'NO! If any piece is directly in front of it, the pawn is completely blocked like hitting a brick wall.',
    mythBuster: '❌ Myth: "Can a pawn eat the piece right in front of it?" NO! If an enemy stands in front of your pawn, neither can walk forward. Pawns only strike diagonally!'
  },
  N: {
    name: 'Knight',
    nickname: 'The Jumping Horse',
    points: 3,
    symbol: '♘',
    role: 'Horse',
    howItMoves: 'Moves in an "L" shape: 2 squares in one direction, then 1 square to the side (e.g., 2 up, 1 right). Always lands on a different color square!',
    howItCaptures: 'Lands directly on an enemy piece to capture it. It does NOT capture pieces it jumps over!',
    canGoBackwards: 'YES! Can jump in all directions (forward, backward, left, right).',
    canJump: 'YES! The ONLY piece in the entire game that can leap over other pieces.',
    mythBuster: '❌ Myth: "Do I jump and eat like in Checkers?" NO! In chess, you only capture the piece on your exact landing square.'
  },
  B: {
    name: 'Bishop',
    nickname: 'The Diagonal Magician',
    points: 3,
    symbol: '♗',
    role: 'Magician',
    howItMoves: 'Slides diagonally in an "X" shape across as many open squares as it wants.',
    howItCaptures: 'Slides diagonally into an enemy piece and takes its place.',
    canGoBackwards: 'YES! Along any open diagonal in any direction.',
    canJump: 'NO! It cannot jump over any pieces.',
    mythBuster: '❌ Myth: "Can a Bishop switch square colors?" NEVER! A light-square Bishop stays on light squares for the entire game. A dark-square Bishop stays on dark squares forever.'
  },
  R: {
    name: 'Rook',
    nickname: 'The Castle Rocket',
    points: 5,
    symbol: '♖',
    role: 'Tower',
    howItMoves: 'Drives straight like a rocket along rows (ranks) and columns (files) as far as the path is clear.',
    howItCaptures: 'Drives straight into an enemy piece and replaces it.',
    canGoBackwards: 'YES! Forward, backward, left, or right.',
    canJump: 'NO! It cannot jump over other pieces.',
    mythBuster: '⭐ Superpower: The Rook teams up with the King for the special "Castling" move to tuck the King into safety!'
  },
  Q: {
    name: 'Queen',
    nickname: 'The Superhero',
    points: 9,
    symbol: '♕',
    role: 'Superhero',
    howItMoves: 'The most powerful piece! Combines Rook + Bishop: moves straight AND diagonal as far as she wants.',
    howItCaptures: 'Moves along any straight or diagonal line to take the enemy square.',
    canGoBackwards: 'YES! In all 8 directions.',
    canJump: 'NO! She cannot jump over other pieces.',
    mythBuster: '⚠️ Warning: While the Queen is your strongest attacker, keeping Grandpa King safe is what wins the game!'
  },
  K: {
    name: 'King',
    nickname: 'Grandpa King',
    points: 1000,
    symbol: '♔',
    role: 'King',
    howItMoves: 'Moves exactly 1 baby step in any direction (straight or diagonal).',
    howItCaptures: 'Steps 1 square into an unprotected enemy piece.',
    canGoBackwards: 'YES! 1 step in any direction.',
    canJump: 'NO! Except during the special 2-square Castling maneuver with a Rook.',
    mythBuster: '👑 Golden Rule: The King can NEVER move into check (danger). Two Kings can NEVER touch or stand next to each other!'
  }
};

// Clean, high-contrast SVG pieces
const PIECE_SVGS = {
  P: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><path fill="#fff" stroke="#000" stroke-linecap="round" stroke-width="1.5" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,

  R: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9zm3-3v-4h21v4zm-1-22V9h4v2h5V9h5v2h5V9h4v5"/><path d="m34 14-3 3H14l-3-3"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v12.5H14V17"/><path d="m31 29.5 1.5 2.5h-20l1.5-2.5"/><path fill="none" stroke-linejoin="miter" d="M11 14h23"/></g></svg>`,

  N: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#fff" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#fff" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#000" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0m5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5"/></g></svg>`,

  B: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,

  Q: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0m16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0M41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0M16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0M33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0"/><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,

  K: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#fff" d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10z"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,

  p: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><path stroke="#000" stroke-linecap="round" stroke-width="1.5" d="M22.5 9a4 4 0 0 0-3.22 6.38 6.48 6.48 0 0 0-.87 10.65c-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47a6.46 6.46 0 0 0-.87-10.65A4.01 4.01 0 0 0 22.5 9z"/></svg>`,

  r: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9zm3.5-7 1.5-2.5h17l1.5 2.5zm-.5 4v-4h21v4z"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M14 29.5v-13h17v13z"/><path stroke-linecap="butt" d="M14 16.5 11 14h23l-3 2.5zM11 14V9h4v2h5V9h5v2h5V9h4v5z"/><path fill="none" stroke="#ececec" stroke-linejoin="miter" stroke-width="1" d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"/></g></svg>`,

  n: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#000" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#000" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.04-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-1-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-2 2.5-3c1 0 1 3 1 3"/><path fill="#ececec" stroke="#ececec" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0m5.43-9.75a.5 1.5 30 1 1-.86-.5.5 1.5 30 1 1 .86.5"/><path fill="#ececec" stroke="none" d="m24.55 10.4-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34s-5.79-6.64-9.19-7.16z"/></g></svg>`,

  b: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.4-1 10.1.4 13.5-2 3.4 2.4 10.1 1 13.5 2 0 0 1.6.5 3 2-.7 1-1.6 1-3 .5-3.4-1-10.1.5-13.5-1-3.4 1.5-10.1 0-13.5 1-1.4.5-2.3.5-3-.5 1.4-2 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke="#ececec" stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,

  q: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" width="45" height="45" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g stroke="none"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" stroke-linecap="butt" d="M11 38.5a35 35 1 0 0 23 0"/><path fill="none" stroke="#ececec" d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0"/></g></svg>`,

  k: `<svg class="chess-piece" xmlns="http://www.w3.org/2000/svg" style="color-scheme:light only" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.6V6"/><path fill="#000" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#000" d="M11.5 37a22.3 22.3 0 0 0 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10z"/><path stroke-linejoin="miter" d="M20 8h5"/><path stroke="#ececec" d="M32 29.5s8.5-4 6-9.7C34.1 14 25 18 22.5 24.6v2.1-2.1C20 18 9.9 14 7 19.9c-2.5 5.6 4.8 9 4.8 9"/><path stroke="#ececec" d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,

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
