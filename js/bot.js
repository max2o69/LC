// Tactical Chess Engine & Adaptive Opponent (Alpha-Beta + Quiescence + PSTs + Opening Book)
// Powers both opponent play (White or Black, 4 difficulty tiers) and deep Coach analysis!

const PIECE_VALUES = {
  p: 100,
  n: 320,
  b: 335,
  r: 500,
  q: 900,
  k: 20000
};

// Piece-Square Tables from White's perspective (row 0 = rank 8, row 7 = rank 1)
const PST = {
  P: [
    [  0,   0,   0,   0,   0,   0,   0,   0],
    [ 55,  60,  60,  65,  65,  60,  60,  55],
    [ 18,  20,  28,  35,  35,  28,  20,  18],
    [  8,  10,  18,  28,  28,  18,  10,   8],
    [  2,   4,  10,  25,  25,  10,   4,   2],
    [  4,  -4,  -6,   4,   4,  -6,  -4,   4],
    [  5,  10,  10, -20, -20,  10,  10,   5],
    [  0,   0,   0,   0,   0,   0,   0,   0]
  ],
  N: [
    [-50, -40, -30, -30, -30, -30, -40, -50],
    [-40, -20,   0,   4,   4,   0, -20, -40],
    [-30,   4,  14,  18,  18,  14,   4, -30],
    [-30,   6,  18,  24,  24,  18,   6, -30],
    [-30,   4,  18,  24,  24,  18,   4, -30],
    [-30,   6,  14,  18,  18,  14,   6, -30],
    [-40, -20,   0,   5,   5,   0, -20, -40],
    [-50, -35, -28, -28, -28, -28, -35, -50]
  ],
  B: [
    [-20, -10, -10, -10, -10, -10, -10, -20],
    [-10,   4,   0,   0,   0,   0,   4, -10],
    [-10,   6,  10,  14,  14,  10,   6, -10],
    [-10,   8,  12,  16,  16,  12,   8, -10],
    [-10,   4,  14,  16,  16,  14,   4, -10],
    [-10,  12,  12,  14,  14,  12,  12, -10],
    [-10,   8,   2,   2,   2,   2,   8, -10],
    [-20, -12, -12, -10, -10, -12, -12, -20]
  ],
  R: [
    [  0,   2,   4,   6,   6,   4,   2,   0],
    [ 10,  16,  16,  18,  18,  16,  16,  10],
    [ -4,   0,   2,   4,   4,   2,   0,  -4],
    [ -4,   0,   2,   4,   4,   2,   0,  -4],
    [ -4,   0,   2,   4,   4,   2,   0,  -4],
    [ -4,   0,   2,   4,   4,   2,   0,  -4],
    [ -4,   0,   2,   6,   6,   2,   0,  -4],
    [  0,   0,   4,  10,  10,   4,   0,   0]
  ],
  Q: [
    [-20, -10, -10,  -5,  -5, -10, -10, -20],
    [-10,   0,   2,   2,   2,   2,   0, -10],
    [-10,   2,   6,   6,   6,   6,   2, -10],
    [ -5,   2,   6,   8,   8,   6,   2,  -5],
    [  0,   2,   6,   8,   8,   6,   2,  -5],
    [-10,   5,   6,   6,   6,   6,   2, -10],
    [-10,   0,   4,   2,   2,   0,   0, -10],
    [-20, -10, -10,  -4,  -4, -10, -10, -20]
  ],
  K_MID: [
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-30, -40, -40, -50, -50, -40, -40, -30],
    [-20, -30, -30, -40, -40, -30, -30, -20],
    [-10, -20, -20, -20, -20, -20, -20, -10],
    [ 18,  20,  -5,  -8,  -8,  -5,  20,  18],
    [ 20,  32,  14,  -5,   0,   8,  34,  22]
  ],
  K_END: [
    [-40, -25, -20, -15, -15, -20, -25, -40],
    [-25, -10,   0,   5,   5,   0, -10, -25],
    [-20,   0,  15,  20,  20,  15,   0, -20],
    [-15,   5,  20,  28,  28,  20,   5, -15],
    [-15,   5,  20,  28,  28,  20,   5, -15],
    [-20,   0,  15,  20,  20,  15,   0, -20],
    [-25, -10,   0,   5,   5,   0, -10, -25],
    [-40, -25, -20, -15, -15, -20, -25, -40]
  ]
};

// Opening book responses keyed by space-joined algebraic coordinate history
const BOT_OPENING_BOOK = {
  '': ['e2-e4', 'd2-d4', 'g1-f3', 'c2-c4'],
  'e2-e4': ['e7-e5', 'c7-c5', 'e7-e6', 'c7-c6'],
  'd2-d4': ['d7-d5', 'g8-f6', 'e7-e6'],
  'c2-c4': ['e7-e5', 'c7-c5', 'g8-f6'],
  'g1-f3': ['d7-d5', 'g8-f6', 'c7-c5'],
  'e2-e4 e7-e5': ['g1-f3', 'b1-c3', 'f1-c4'],
  'e2-e4 e7-e5 g1-f3': ['b8-c6', 'g8-f6'],
  'e2-e4 e7-e5 g1-f3 b8-c6': ['f1-c4', 'f1-b5', 'd2-d4'],
  'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4': ['f8-c5', 'g8-f6'],
  'e2-e4 e7-e5 g1-f3 b8-c6 f1-b5': ['a7-a6', 'g8-f6'],
  'e2-e4 c7-c5': ['g1-f3', 'b1-c3'],
  'e2-e4 c7-c5 g1-f3': ['d7-d6', 'b8-c6', 'e7-e6'],
  'e2-e4 c7-c5 g1-f3 d7-d6': ['d2-d4'],
  'e2-e4 c7-c5 g1-f3 d7-d6 d2-d4': ['c5-d4'],
  'e2-e4 e7-e6': ['d2-d4'],
  'e2-e4 e7-e6 d2-d4': ['d7-d5'],
  'e2-e4 c7-c6': ['d2-d4'],
  'e2-e4 c7-c6 d2-d4': ['d7-d5'],
  'd2-d4 d7-d5': ['c2-c4', 'c1-f4', 'g1-f3'],
  'd2-d4 d7-d5 c2-c4': ['e7-e6', 'c7-c6', 'd5-c4'],
  'd2-d4 d7-d5 c1-f4': ['g8-f6', 'c7-c5', 'e7-e6'],
  'd2-d4 g8-f6': ['c2-c4', 'c1-f4', 'g1-f3'],
  'e2-e4 e7-e5 d1-h5': ['b8-c6'],
  'e2-e4 e7-e5 f1-c4 b8-c6 d1-h5': ['g7-g6', 'd8-e7']
};

const DIFFICULTY_PROFILES = {
  gentle:     { label: '🐣 Gentle (~650)',     depth: 1, quiesceDepth: 0, noise: 110, blunderChance: 0.25, useBook: false },
  playful:    { label: '🦊 Club (~1050)',      depth: 2, quiesceDepth: 2, noise: 35,  blunderChance: 0.05, useBook: true  },
  challenger: { label: '⚔️ Challenger (~1400)', depth: 3, quiesceDepth: 3, noise: 10,  blunderChance: 0,    useBook: true  },
  master:     { label: '👑 Master (~1750)',    depth: 4, quiesceDepth: 4, noise: 0,   blunderChance: 0,    useBook: true  }
};

class CoachBotEngine {
  constructor() {
    this.name = 'Coach Pawny';
    this.difficulty = 'challenger'; // 'gentle' | 'playful' | 'challenger' | 'master'
    this.nodesSearched = 0;
    this.tt = new Map(); // Transposition Table for faster deep tactical search
  }

  setDifficulty(level) {
    if (DIFFICULTY_PROFILES[level]) {
      this.difficulty = level;
    }
    return this.difficulty;
  }

  getDifficultyProfile(level) {
    return DIFFICULTY_PROFILES[level || this.difficulty] || DIFFICULTY_PROFILES.challenger;
  }

  getAllLegalMoves(board, color, options = {}) {
    return ChessRules.getAllLegalMoves(board, color, options);
  }

  // Evaluate board score in centipawns from White's perspective (+ = White better, - = Black better)
  evaluateWhite(board) {
    let whiteMat = 0;
    let blackMat = 0;
    let whiteBishops = 0;
    let blackBishops = 0;
    let nonPawnMat = 0;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p || p === '*' || p === '#') continue;
        const lower = p.toLowerCase();
        if (lower === 'k') continue;
        const val = PIECE_VALUES[lower] || 0;
        if (lower !== 'p') nonPawnMat += val;
        if (ChessRules.isWhite(p)) {
          whiteMat += val;
          if (lower === 'b') whiteBishops++;
        } else {
          blackMat += val;
          if (lower === 'b') blackBishops++;
        }
      }
    }

    const isEndgame = nonPawnMat <= 2600;
    let score = whiteMat - blackMat;
    if (whiteBishops >= 2) score += 30;
    if (blackBishops >= 2) score -= 30;

    let wKing = null;
    let bKing = null;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p || p === '*' || p === '#') continue;
        const isW = ChessRules.isWhite(p);
        const type = p.toUpperCase();
        const tableRow = isW ? r : (7 - r);

        let pstBonus = 0;
        if (type === 'K') {
          if (isW) wKing = { r, c };
          else bKing = { r, c };
          pstBonus = isEndgame ? PST.K_END[tableRow][c] : PST.K_MID[tableRow][c];
        } else if (PST[type]) {
          pstBonus = PST[type][tableRow][c];
        }

        // Passed pawn bonus in middlegame/endgame
        if (type === 'P') {
          const enemyPawn = isW ? 'p' : 'P';
          const dir = isW ? -1 : 1;
          let passed = true;
          for (let pr = r + dir; pr >= 0 && pr < 8; pr += dir) {
            for (let pc = Math.max(0, c - 1); pc <= Math.min(7, c + 1); pc++) {
              if (board[pr][pc] === enemyPawn) {
                passed = false;
                break;
              }
            }
            if (!passed) break;
          }
          if (passed) {
            const ranksAdvanced = isW ? (6 - r) : (r - 1);
            pstBonus += (isEndgame ? 18 : 8) * Math.max(0, ranksAdvanced);
          }
        }

        score += isW ? pstBonus : -pstBonus;
      }
    }

    // Endgame Mop-Up: help winning side drive enemy King to corner and bring own King close
    if (isEndgame && wKing && bKing && Math.abs(score) >= 300) {
      const losingKing = score > 0 ? bKing : wKing;
      const winningKing = score > 0 ? wKing : bKing;
      const distFromCenter = Math.abs(3.5 - losingKing.r) + Math.abs(3.5 - losingKing.c);
      const kingDist = Math.abs(winningKing.r - losingKing.r) + Math.abs(winningKing.c - losingKing.c);
      const mopUp = Math.round(distFromCenter * 12 + (14 - kingDist) * 5);
      score += score > 0 ? mopUp : -mopUp;
    }

    return score;
  }

  // Legacy evaluate() returns score from Black's perspective (kept for compatibility)
  evaluate(board) {
    return -this.evaluateWhite(board);
  }

  // Evaluate board from a specific color's perspective ('w' or 'b')
  evaluateFor(board, color) {
    const wScore = this.evaluateWhite(board);
    return color === 'w' ? wScore : -wScore;
  }

  // Fast Static Exchange Evaluation (SEE) approximation for capturing on `to` from `from`
  seeCapture(board, from, to) {
    const attacker = board[from.r][from.c];
    if (!attacker) return 0;
    const color = ChessRules.getColor(attacker);
    const oppColor = color === 'w' ? 'b' : 'w';
    const target = board[to.r][to.c];
    const victimVal = (target && target !== '*' && target !== '#') ? (PIECE_VALUES[target.toLowerCase()] || 0) : 0;
    const attackerVal = PIECE_VALUES[attacker.toLowerCase()] || 0;

    const { board: afterCap } = ChessRules.applyMove(board, from, to, { capture: true }, {});
    if (!ChessRules.isSquareAttacked(afterCap, to.r, to.c, oppColor)) {
      return victimVal;
    }

    // Find cheapest enemy recapturer
    let minEnemyAttacker = Infinity;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = afterCap[r][c];
        if (p && ChessRules.getColor(p) === oppColor) {
          const moves = ChessRules.getRawMoves(afterCap, r, c, { ignoreCastling: true, attacksOnly: p.toUpperCase() === 'P' });
          if (moves.some(m => m.r === to.r && m.c === to.c)) {
            const v = PIECE_VALUES[p.toLowerCase()] || 0;
            if (v < minEnemyAttacker) minEnemyAttacker = v;
          }
        }
      }
    }

    if (minEnemyAttacker === Infinity) return victimVal;

    // Check if our square is defended after our move
    const probe = afterCap.map(row => [...row]);
    probe[to.r][to.c] = color === 'w' ? 'p' : 'P';
    const weDefend = ChessRules.isSquareAttacked(probe, to.r, to.c, color);

    if (!weDefend) {
      return victimVal - attackerVal;
    }
    return victimVal - attackerVal + Math.min(attackerVal, minEnemyAttacker);
  }

  // Score moves for Alpha-Beta ordering (captures MVV-LVA, promotions, castling, center)
  orderMoves(board, moves) {
    return moves.slice().sort((a, b) => {
      return this.scoreMoveOrder(board, b) - this.scoreMoveOrder(board, a);
    });
  }

  scoreMoveOrder(board, m) {
    let s = 0;
    const target = board[m.to.r][m.to.c];
    if (target && target !== '*' && target !== '#') {
      const victimVal = PIECE_VALUES[target.toLowerCase()] || 100;
      const aggVal = PIECE_VALUES[m.piece.toLowerCase()] || 100;
      s += 10000 + victimVal * 10 - aggVal;
    } else if (m.enPassant) {
      s += 9900;
    }
    if ((m.piece === 'P' && m.to.r === 0) || (m.piece === 'p' && m.to.r === 7)) {
      s += 9000;
    }
    if (m.castling) s += 600;
    if ((m.to.r === 3 || m.to.r === 4) && (m.to.c === 3 || m.to.c === 4)) s += 80;
    return s;
  }

  // Quiescence search to resolve tactical capture sequences at leaf nodes
  quiesce(board, color, options, alpha, beta, qDepth) {
    this.nodesSearched++;
    const inCheck = ChessRules.isCheck(board, color);
    const standPat = this.evaluateFor(board, color);

    if (!inCheck) {
      if (standPat >= beta) return beta;
      if (standPat > alpha) alpha = standPat;
      if (qDepth <= 0) return standPat;
    }

    const allMoves = ChessRules.getAllLegalMoves(board, color, options);
    if (allMoves.length === 0) {
      return inCheck ? -19000 : 0;
    }

    const tacticalMoves = inCheck
      ? this.orderMoves(board, allMoves)
      : this.orderMoves(
          board,
          allMoves.filter(m => m.capture || m.enPassant || (m.piece === 'P' && m.to.r === 0) || (m.piece === 'p' && m.to.r === 7))
        );

    const oppColor = color === 'w' ? 'b' : 'w';
    for (const m of tacticalMoves) {
      if (!inCheck && qDepth <= 0) break;
      const sim = ChessRules.applyMove(board, m.from, m.to, m, options);
      const score = -this.quiesce(sim.board, oppColor, sim.options, -beta, -alpha, qDepth - 1);
      if (score >= beta) return beta;
      if (score > alpha) alpha = score;
    }

    return alpha;
  }

  // Negamax Alpha-Beta Search with Transposition Table
  negamax(board, color, options, depth, alpha, beta, qDepth) {
    this.nodesSearched++;
    const origAlpha = alpha;
    const ttKey = depth >= 2 ? `${ChessRules.getPositionKey(board, color, options)}|${depth}` : null;
    if (ttKey && this.tt.has(ttKey)) {
      const entry = this.tt.get(ttKey);
      if (entry.flag === 0) return entry.score;
      if (entry.flag === -1 && entry.score <= alpha) return entry.score;
      if (entry.flag === 1 && entry.score >= beta) return entry.score;
    }

    const legalMoves = ChessRules.getAllLegalMoves(board, color, options);
    const inCheck = ChessRules.isCheck(board, color);

    if (legalMoves.length === 0) {
      return inCheck ? -(19000 + depth * 100) : 0;
    }

    if (ChessRules.isInsufficientMaterial(board)) {
      return 0;
    }

    if (depth <= 0) {
      return this.quiesce(board, color, options, alpha, beta, qDepth);
    }

    const ordered = this.orderMoves(board, legalMoves);
    const oppColor = color === 'w' ? 'b' : 'w';
    let best = -Infinity;

    for (const m of ordered) {
      const sim = ChessRules.applyMove(board, m.from, m.to, m, options);
      const score = -this.negamax(sim.board, oppColor, sim.options, depth - 1, -beta, -alpha, qDepth);
      if (score > best) best = score;
      if (score > alpha) alpha = score;
      if (alpha >= beta) break;
    }

    if (ttKey) {
      if (this.tt.size > 35000) this.tt.clear();
      const flag = best <= origAlpha ? -1 : (best >= beta ? 1 : 0);
      this.tt.set(ttKey, { score: best, flag });
    }

    return best;
  }

  // Search best move and top candidate moves with evaluations in centipawns (from `color`'s perspective)
  searchBestMove(board, color = 'w', options = {}, customDepth = null, customQDepth = null) {
    this.nodesSearched = 0;
    const legalMoves = ChessRules.getAllLegalMoves(board, color, options);
    if (legalMoves.length === 0) {
      return { move: null, score: ChessRules.isCheck(board, color) ? -19000 : 0, candidates: [] };
    }

    const profile = this.getDifficultyProfile();
    let depth = customDepth !== null ? customDepth : profile.depth;
    const qDepth = customQDepth !== null ? customQDepth : profile.quiesceDepth;

    // Adaptive cap when branching factor is huge (>= 42 moves) at depth 4 to keep browser snappy (< 120ms)
    if (depth >= 4 && legalMoves.length > 38) {
      depth = 3;
    }

    const ordered = this.orderMoves(board, legalMoves);
    const oppColor = color === 'w' ? 'b' : 'w';
    const scored = [];
    let alpha = -Infinity;
    const beta = Infinity;

    for (const m of ordered) {
      const sim = ChessRules.applyMove(board, m.from, m.to, m, options);
      // Evaluates full depth-1 with open window on top candidates so candidate scores are accurate
      const windowAlpha = scored.length < 3 ? -Infinity : -alpha - 25;
      let score = -this.negamax(sim.board, oppColor, sim.options, depth - 1, -beta, -windowAlpha, qDepth);
      if (scored.length >= 3 && score > alpha) {
        score = -this.negamax(sim.board, oppColor, sim.options, depth - 1, -beta, -alpha, qDepth);
      }
      scored.push({ move: m, score });
      if (score > alpha) alpha = score;
    }

    scored.sort((a, b) => b.score - a.score);
    return {
      move: scored[0].move,
      score: scored[0].score,
      candidates: scored
    };
  }

  // Choose an opponent move for `color` ('b' default, or 'w' when human plays Black!)
  chooseMove(board, options = {}, color = 'b', moveHistory = []) {
    const legalMoves = this.getAllLegalMoves(board, color, options);
    if (legalMoves.length === 0) return null;

    // 1. Mini-game Pawn Race check (e.g., Level 23 Pawn Wars — no Kings on board)
    const pawnWinRank = color === 'w' ? 0 : 7;
    const winningPromo = legalMoves.find(m => m.piece.toLowerCase() === 'p' && m.to.r === pawnWinRank);
    if (!ChessRules.findKing(board, color) && winningPromo) {
      return winningPromo;
    }
    if (!ChessRules.findKing(board, color) && legalMoves.every(m => m.piece.toLowerCase() === 'p')) {
      const captures = legalMoves.filter(m => m.capture);
      if (captures.length > 0) return captures[Math.floor(Math.random() * captures.length)];
      const sorted = legalMoves.slice().sort((a, b) => color === 'b' ? (b.to.r - a.to.r) : (a.to.r - b.to.r));
      const bestR = sorted[0].to.r;
      const top = sorted.filter(m => m.to.r === bestR);
      return top[Math.floor(Math.random() * top.length)];
    }

    const profile = this.getDifficultyProfile();

    // 2. Opening Book lookup for natural GM-style openings
    if (profile.useBook && Array.isArray(moveHistory) && moveHistory.length <= 8) {
      const key = moveHistory.map(m => `${m.fromStr}-${m.toStr}`).join(' ');
      const bookChoices = BOT_OPENING_BOOK[key];
      if (bookChoices && bookChoices.length > 0) {
        const validBookMoves = [];
        for (const str of bookChoices) {
          const [fStr, tStr] = str.split('-');
          const f = ChessRules.fromAlgebraic(fStr);
          const t = ChessRules.fromAlgebraic(tStr);
          const found = legalMoves.find(m => m.from.r === f.r && m.from.c === f.c && m.to.r === t.r && m.to.c === t.c);
          if (found) validBookMoves.push(found);
        }
        if (validBookMoves.length > 0) {
          return validBookMoves[Math.floor(Math.random() * validBookMoves.length)];
        }
      }
    }

    // 3. Gentle mode: occasional forgiving inaccuracy for brand-new learners
    if (this.difficulty === 'gentle' && Math.random() < profile.blunderChance && legalMoves.length > 3) {
      return legalMoves[Math.floor(Math.random() * legalMoves.length)];
    }

    // 4. Engine Alpha-Beta + Quiescence search
    const result = this.searchBestMove(board, color, options, profile.depth, profile.quiesceDepth);
    if (!result.candidates || result.candidates.length === 0) return legalMoves[0];

    if (profile.noise <= 0) {
      // Master mode: tie-break among practically equal top moves (within 8 cp)
      const topScore = result.candidates[0].score;
      const tied = result.candidates.filter(c => topScore - c.score <= 8);
      return tied[Math.floor(Math.random() * tied.length)].move;
    }

    // Add slight human variety within `profile.noise` centipawns (never blundering mate!)
    const topScore = result.candidates[0].score;
    if (topScore > 15000) return result.candidates[0].move; // Always play forced mate!

    const pool = result.candidates.filter(c => (topScore - c.score) <= profile.noise && c.score > -15000);
    const chosen = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : result.candidates[0];
    return chosen.move;
  }

  // Friendly coaching hint fallback
  getHint(board, options = {}, color = 'w') {
    const moves = this.getAllLegalMoves(board, color, options);
    if (moves.length === 0) {
      return ChessRules.isCheck(board, color)
        ? 'Checkmate! The game is over.'
        : "Stalemate! Nobody wins, it's a draw!";
    }

    if (ChessRules.isCheck(board, color)) {
      const best = this.searchBestMove(board, color, options, 2, 2);
      const san = best.move ? ChessRules.toSAN(board, best.move.from, best.move.to, best.move, options) : '';
      return `⚠️ <b>Your King is in CHECK!</b> Use C.P.R. (Capture, Protect, or Run). Best defense: <b>${san}</b>!`;
    }

    const search = this.searchBestMove(board, color, options, 2, 2);
    if (search.move) {
      const san = ChessRules.toSAN(board, search.move.from, search.move.to, search.move, options);
      const fromSq = ChessRules.toAlgebraic(search.move.from.r, search.move.from.c);
      const toSq = ChessRules.toAlgebraic(search.move.to.r, search.move.to.c);
      return `💡 <b>Coach Tip:</b> Consider playing <b>${san}</b> (${fromSq} ➔ ${toSq})!`;
    }

    return '⭐ Develop an unmoved piece toward the center and keep your King safe!';
  }
}

const _coachBotInstance = new CoachBotEngine();
var CoachBot = _coachBotInstance;
if (typeof window !== 'undefined') {
  window.CoachBot = _coachBotInstance;
  window.CoachBotEngine = CoachBotEngine;
}
if (typeof module !== 'undefined') {
  module.exports = { CoachBot: _coachBotInstance, CoachBotEngine, PIECE_VALUES };
}
