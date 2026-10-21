// Friendly AI Bot & Coach Hints Engine
// Kid-friendly chess opponent with adaptable difficulty & advice

const PIECE_VALUES = {
  p: 100,
  n: 320,
  b: 330,
  r: 500,
  q: 900,
  k: 20000
};

// Simple positional tables for basic sound play
const CENTER_BONUS = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 5, 5, 5, 5, 5, 5, 0],
  [0, 5, 15, 20, 20, 15, 5, 0],
  [0, 5, 20, 30, 30, 20, 5, 0],
  [0, 5, 20, 30, 30, 20, 5, 0],
  [0, 5, 15, 20, 20, 15, 5, 0],
  [0, 5, 5, 5, 5, 5, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

class CoachBotEngine {
  constructor() {
    this.name = 'Coach Pawny';
    this.difficulty = 'gentle'; // 'gentle' | 'playful' | 'clever'
  }

  // Get all legal moves for a given side
  getAllLegalMoves(board, color, options = {}) {
    const moves = [];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (piece && ChessRules.getColor(piece) === color) {
          const pieceMoves = ChessRules.getLegalMoves(board, r, c, options);
          pieceMoves.forEach(m => {
            moves.push({
              from: { r, c },
              to: { r: m.r, c: m.c },
              piece,
              capture: m.capture,
              castling: m.castling,
              enPassant: m.enPassant
            });
          });
        }
      }
    }
    return moves;
  }

  // Evaluate board score from Black's perspective
  evaluate(board) {
    let score = 0;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (!piece || piece === '*' || piece === '#') continue;
        const val = PIECE_VALUES[piece.toLowerCase()] || 0;
        const posBonus = CENTER_BONUS[r][c];
        if (ChessRules.isBlack(piece)) {
          score += val + posBonus;
        } else {
          score -= (val + posBonus);
        }
      }
    }
    return score;
  }

  // Choose the best move for Black
  chooseMove(board, options = {}) {
    const legalMoves = this.getAllLegalMoves(board, 'b', options);
    if (legalMoves.length === 0) return null;

    // 1. Immediate winning promotion
    const winningMove = legalMoves.find(m => m.piece === 'p' && m.to.r === 7);
    if (winningMove) return winningMove;

    // 2. Immediate capture (eat attacking piece)
    const captures = legalMoves.filter(m => m.capture);
    if (captures.length > 0) {
      // 80% of the time, capture immediately to teach player to protect pieces
      if (Math.random() < 0.85) {
        return captures[Math.floor(Math.random() * captures.length)];
      }
    }

    // 3. Pawn Race / Mini-game logic: advance pawns towards promotion
    const pawnAdvances = legalMoves.filter(m => m.piece === 'p' && m.to.r > m.from.r);
    if (pawnAdvances.length > 0 && legalMoves.every(m => m.piece.toLowerCase() === 'p')) {
      // In Pawn Wars, sort by most advanced pawn
      pawnAdvances.sort((a, b) => b.to.r - a.to.r);
      const furthest = pawnAdvances[0].to.r;
      const topAdvances = pawnAdvances.filter(m => m.to.r === furthest);
      return topAdvances[Math.floor(Math.random() * topAdvances.length)];
    }

    // Gentle mode for full game: 40% random, 60% capture / advance
    if (this.difficulty === 'gentle') {
      if (captures.length > 0) {
        return captures[Math.floor(Math.random() * captures.length)];
      }
      return legalMoves[Math.floor(Math.random() * legalMoves.length)];
    }

    // Clever mode: 1-ply mini-max with position evaluation
    let bestScore = -Infinity;
    let bestMoves = [];

    for (const move of legalMoves) {
      // Clone and simulate
      const clone = board.map(row => [...row]);
      clone[move.to.r][move.to.c] = move.piece;
      clone[move.from.r][move.from.c] = null;

      // Handle pawn promotion for bot
      if (move.piece === 'p' && move.to.r === 7) {
        clone[move.to.r][move.to.c] = 'q';
      }

      let evalScore = this.evaluate(clone);
      evalScore += (Math.random() * 20 - 10);

      if (evalScore > bestScore) {
        bestScore = evalScore;
        bestMoves = [move];
      } else if (Math.abs(evalScore - bestScore) < 5) {
        bestMoves.push(move);
      }
    }

    return bestMoves[Math.floor(Math.random() * bestMoves.length)];
  }

  // Generate a friendly coaching tip for the human player
  getHint(board, options = {}) {
    const whiteMoves = this.getAllLegalMoves(board, 'w', options);
    if (whiteMoves.length === 0) {
      if (ChessRules.isCheck(board, 'w')) {
        return "Checkmate! The game is over.";
      }
      return "Stalemate! Nobody wins, it's a friendly tie!";
    }

    // Is White in check?
    if (ChessRules.isCheck(board, 'w')) {
      return "⚠️ <b>Grandpa King is in danger (CHECK)!</b> Use C.P.R.: Capture the attacker, Protect with a shield, or Run away!";
    }

    // Can White capture an undefended high-value piece?
    const highCaptures = whiteMoves.filter(m => {
      const target = board[m.to.r][m.to.c];
      return target && 'qrbn'.includes(target);
    });

    if (highCaptures.length > 0) {
      const best = highCaptures[0];
      const targetName = PIECE_INFO[board[best.to.r][best.to.c].toUpperCase()].name;
      return `💡 <b>Snack Opportunity!</b> You can capture Black's ${targetName} at ${ChessRules.toAlgebraic(best.to.r, best.to.c)}!`;
    }

    // Suggest opening principle: develop knights/bishops or control center
    const centerMoves = whiteMoves.filter(m => (m.to.r === 4 || m.to.r === 3) && (m.to.c === 3 || m.to.c === 4));
    if (centerMoves.length > 0) {
      return "🎯 <b>Rule of the Sandbox:</b> Move toward the center (e4, d4) to control the board!";
    }

    return "⭐ Look around for a piece that hasn't moved yet and bring it out to play!";
  }
}

// Single shared bot instance
const _coachBotInstance = new CoachBotEngine();

// Export as CoachBot so both CoachBot.method() and window.CoachBot.method() work everywhere
var CoachBot = _coachBotInstance;
window.CoachBot = _coachBotInstance;
window.CoachBotEngine = CoachBotEngine;
