// Live Chess Coach Guide Engine (White & Black Side Support + Engine-Backed Evaluation)
// Provides real-time threat radar, tactical spotting (mates, forks, pins, safe trades),
// opening book & GM checklist for either side, opponent move decoder, and accurate move grading!

class CoachGuideEngine {
  constructor() {
    this.pieceValues = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 1000 };

    // Ordered most-specific first so deeper book lines match before 1-move prefixes
    this.openingBook = [
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'f1-c4', 'g8-f6', 'f3-g5'], name: '🔥 Two Knights: Knight Attack', desc: 'Sharp tactical pressure directly on f7! Black usually counters with ...d5.' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'f1-c4', 'f8-c5'], name: '🏛️ Giuoco Piano (Italian Game)', desc: 'Classic Italian duel! Prepare c3 & d4 or castle Kingside and connect Rooks.' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'f1-c4', 'g8-f6'], name: '⚔️ Two Knights Defense', desc: 'Black counter-attacks e4 rather than passively defending!' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'f1-b5', 'a7-a6'], name: '🇪🇸 Ruy Lopez: Morphy Defense', desc: 'Black questions the b5 Bishop immediately—retreat Ba4 or trade Bxc6!' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'f1-c4'], name: '🏛️ Italian Game', desc: 'Targets f7, develops rapidly, and clears the path for Kingside castling!' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'f1-b5'], name: '🇪🇸 Ruy Lopez (Spanish Opening)', desc: 'Pressures the c6 Knight defending Black’s e5 center pawn!' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'd2-d4'], name: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotch Game', desc: 'Blasts open the center right away to unleash active piece play!' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3', 'g8-f6'], name: '🛡️ Petrov’s (Russian) Defense', desc: 'Symmetrical counter-attack on White’s e4 pawn!' },
      { moves: ['e2-e4', 'c7-c5', 'g1-f3', 'd7-d6', 'd2-d4'], name: '⚔️ Open Sicilian Defense', desc: 'Dynamic asymmetrical battle! White gets central space; Black gets the c-file.' },
      { moves: ['e2-e4', 'c7-c5', 'g1-f3'], name: '⚔️ Sicilian Defense: Main Line', desc: 'Prepare d4 to break open the center, or Nc3 for Closed Sicilian!' },
      { moves: ['e2-e4', 'c7-c5'], name: '⚔️ Sicilian Defense', desc: 'Fighting asymmetrical defense! Develop Knights and contest the d4 square.' },
      { moves: ['e2-e4', 'e7-e6', 'd2-d4', 'd7-d5'], name: '🛡️ French Defense', desc: 'Solid center chain! White attacks Kingside; Black counter-punches d4 with ...c5.' },
      { moves: ['e2-e4', 'e7-e6'], name: '🛡️ French Defense', desc: 'Solid light-square fortress preparing to challenge the center with ...d5!' },
      { moves: ['e2-e4', 'c7-c6', 'd2-d4', 'd7-d5'], name: '🛡️ Caro-Kann Defense', desc: 'Granite center structure while keeping Black’s light-squared Bishop free!' },
      { moves: ['e2-e4', 'c7-c6'], name: '🛡️ Caro-Kann Defense', desc: 'Ultra-solid preparation for ...d5 without locking in the c8 Bishop!' },
      { moves: ['e2-e4', 'd7-d5'], name: '⚡ Scandinavian Defense', desc: 'Challenges the e4 pawn on move 1 to open lines immediately!' },
      { moves: ['d2-d4', 'd7-d5', 'c2-c4', 'e7-e6'], name: '👑 Queen’s Gambit Declined', desc: 'Classical, rock-solid central defense holding d5 firmly with pawns!' },
      { moves: ['d2-d4', 'd7-d5', 'c2-c4', 'c7-c6'], name: '🛡️ Slav Defense', desc: 'Defends d5 solidly while keeping the c8 Bishop open for action!' },
      { moves: ['d2-d4', 'd7-d5', 'c2-c4', 'd5-c4'], name: '👑 Queen’s Gambit Accepted', desc: 'Black takes the c4 pawn and aims for fast piece counterplay!' },
      { moves: ['d2-d4', 'd7-d5', 'c2-c4'], name: '👑 Queen’s Gambit', desc: 'Offers a wing pawn to undermine Black’s d5 stronghold!' },
      { moves: ['d2-d4', 'd7-d5', 'c1-f4'], name: '🧱 London System', desc: 'Develops the dark Bishop outside the e3-d4-c3 pawn pyramid!' },
      { moves: ['d2-d4', 'g8-f6', 'c2-c4', 'g7-g6'], name: '🐉 King’s Indian Defense', desc: 'Hypermodern fianchetto setup aiming for dynamic central counter-strikes!' },
      { moves: ['d2-d4', 'g8-f6', 'c2-c4', 'e7-e6'], name: '🧠 Nimzo / Queen’s Indian Complex', desc: 'FlexibleGrandmaster control over the dark e4 and d5 squares!' },
      { moves: ['d2-d4', 'g8-f6'], name: '🐴 Indian Defense', desc: 'Flexible Knight development controlling e4 before committing central pawns!' },
      { moves: ['e2-e4', 'e7-e5', 'd1-h5'], name: '⚠️ Wayward Queen (Scholar’s Attack)', desc: 'Early Queen raid on e5 & f7—defend e5 with ...Nc6, then kick Queen with ...Nf6!' },
      { moves: ['e2-e4', 'e7-e5', 'g1-f3'], name: '🌱 King’s Knight Opening', desc: 'Attacks e5 while clearing the Kingside for rapid castling!' },
      { moves: ['e2-e4', 'e7-e5'], name: '🌱 Open Game (1. e4 e5)', desc: 'Direct classical fight for the center! Develop Knights before Bishops.' },
      { moves: ['c2-c4'], name: '🇬🇧 English Opening (1. c4)', desc: 'Flank strike controlling d5 from the wing!' },
      { moves: ['g1-f3'], name: '🦅 Réti Opening (1. Nf3)', desc: 'Flexible hypermodern development keeping central pawn options open!' },
      { moves: ['e2-e4'], name: '🌱 King’s Pawn Opening (1. e4)', desc: 'Claims central space and opens diagonals for Queen and Bishop.' },
      { moves: ['d2-d4'], name: '🌱 Queen’s Pawn Opening (1. d4)', desc: 'Protected center stake backed right from move 1 by the Queen.' }
    ];
  }

  getPieceValue(p) {
    if (!p) return 0;
    return this.pieceValues[p.toLowerCase()] || 0;
  }

  getPieceName(p) {
    if (!p) return 'piece';
    const info = PIECE_INFO[p.toUpperCase()];
    return info ? info.name : p;
  }

  // Whether a piece of `color` on (r, c) is guarded by at least one friendly piece
  isFriendlyDefended(board, r, c, color) {
    const clone = board.map(row => [...row]);
    clone[r][c] = color === 'w' ? 'p' : 'P';
    return ChessRules.isSquareAttacked(clone, r, c, color);
  }

  // Return all enemy attackers and friendly defenders of square (r, c)
  getSquareSecurity(board, r, c, color) {
    const oppColor = color === 'w' ? 'b' : 'w';
    const clone = board.map(row => [...row]);
    clone[r][c] = color === 'w' ? 'p' : 'P';

    const attackers = [];
    const defenders = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (!piece || piece === '*' || piece === '#' || (row === r && col === c)) continue;
        const pColor = ChessRules.getColor(piece);
        if (pColor === oppColor) {
          const rawMoves = ChessRules.getRawMoves(board, row, col, { ignoreCastling: true, attacksOnly: piece.toUpperCase() === 'P' });
          if (rawMoves.some(m => m.r === r && m.c === c)) {
            attackers.push({ r: row, c: col, piece, value: this.getPieceValue(piece) });
          }
        } else if (pColor === color) {
          const rawMoves = ChessRules.getRawMoves(clone, row, col, { ignoreCastling: true, attacksOnly: piece.toUpperCase() === 'P' });
          if (rawMoves.some(m => m.r === r && m.c === c)) {
            defenders.push({ r: row, c: col, piece, value: this.getPieceValue(piece) });
          }
        }
      }
    }

    attackers.sort((a, b) => a.value - b.value);
    defenders.sort((a, b) => a.value - b.value);
    return { attackers, defenders };
  }

  // Calculate material balance and captured pieces
  getMaterial(board) {
    const values = this.pieceValues;
    let whiteScore = 0;
    let blackScore = 0;

    const initialCounts = { P: 8, N: 2, B: 2, R: 2, Q: 1, p: 8, n: 2, b: 2, r: 2, q: 1 };
    const currentCounts = { P: 0, N: 0, B: 0, R: 0, Q: 0, p: 0, n: 0, b: 0, r: 0, q: 0 };

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p || p === '*' || p === '#') continue;
        const lower = p.toLowerCase();
        if (values[lower] !== undefined && lower !== 'k') {
          if (ChessRules.isWhite(p)) {
            whiteScore += values[lower];
            currentCounts[p] = (currentCounts[p] || 0) + 1;
          } else {
            blackScore += values[lower];
            currentCounts[p] = (currentCounts[p] || 0) + 1;
          }
        }
      }
    }

    const capturedByWhite = [];
    ['q', 'r', 'b', 'n', 'p'].forEach(type => {
      const lost = Math.max(0, (initialCounts[type] || 0) - (currentCounts[type] || 0));
      for (let i = 0; i < lost; i++) capturedByWhite.push(type);
    });

    const capturedByBlack = [];
    ['Q', 'R', 'B', 'N', 'P'].forEach(type => {
      const lost = Math.max(0, (initialCounts[type] || 0) - (currentCounts[type] || 0));
      for (let i = 0; i < lost; i++) capturedByBlack.push(type);
    });

    const diff = whiteScore - blackScore;
    let diffText = 'Even (0)';
    if (diff > 0) diffText = `+${diff} (White ahead)`;
    else if (diff < 0) diffText = `${diff} (Black ahead)`;

    return { whiteScore, blackScore, diff, diffText, capturedByWhite, capturedByBlack };
  }

  // Detect game phase (Opening / Middlegame / Endgame)
  getGamePhase(board, moveCount = 0) {
    let nonPawnPieces = 0;
    let queensCount = 0;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (p && 'rnbqRNBQ'.includes(p)) nonPawnPieces++;
        if (p && 'qQ'.includes(p)) queensCount++;
      }
    }

    if (moveCount < 14 && nonPawnPieces >= 10) {
      return {
        phase: 'opening',
        badge: '🌱 Opening',
        goal: 'Claim the center, develop Knights & Bishops once each, and Castle your King to safety!'
      };
    }

    if (queensCount === 0 || nonPawnPieces <= 4) {
      return {
        phase: 'endgame',
        badge: '👑 Endgame',
        goal: 'March your King toward the center, create & escort passed pawns, and cut off the enemy King!'
      };
    }

    return {
      phase: 'middlegame',
      badge: '⚔️ Middlegame',
      goal: 'Connect Rooks on open files, hunt undefended pieces, and calculate forks, pins, and checkmates!'
    };
  }

  identifyOpening(moveHistory = []) {
    const moves = moveHistory.map(m => `${m.fromStr}-${m.toStr}`);
    for (const op of this.openingBook) {
      if (op.moves.length <= moves.length && op.moves.every((m, idx) => moves[idx] === m)) {
        return op;
      }
    }
    return { name: '♟️ Classical Battle', desc: 'Contest the center, coordinate your pieces, and keep your King safe!' };
  }

  // Color-aware GM Opening Checklist (works for BOTH White AND Black!)
  getOpeningChecklist(board, color = 'w') {
    if (color === 'b') {
      const centerControl = (
        board[3][4] === 'p' || board[3][3] === 'p' || board[3][2] === 'p' ||
        board[2][4] === 'p' || board[2][3] === 'p'
      );
      const n1 = board[0][1] !== 'n';
      const n2 = board[0][6] !== 'n';
      const knightsDeveloped = (n1 && n2) ? 2 : ((n1 || n2) ? 1 : 0);

      const b1 = board[0][2] !== 'b';
      const b2 = board[0][5] !== 'b';
      const bishopsDeveloped = (b1 && b2) ? 2 : ((b1 || b2) ? 1 : 0);

      const kingPos = ChessRules.findKing(board, 'b');
      const kingCastled = !!(kingPos && kingPos.r === 0 && (kingPos.c === 6 || kingPos.c === 2));

      return { centerControl, knightsDeveloped, bishopsDeveloped, kingCastled };
    }

    const centerControl = (
      board[4][4] === 'P' || board[4][3] === 'P' || board[4][2] === 'P' ||
      board[5][4] === 'P' || board[5][3] === 'P'
    );
    const n1 = board[7][1] !== 'N';
    const n2 = board[7][6] !== 'N';
    const knightsDeveloped = (n1 && n2) ? 2 : ((n1 || n2) ? 1 : 0);

    const b1 = board[7][2] !== 'B';
    const b2 = board[7][5] !== 'B';
    const bishopsDeveloped = (b1 && b2) ? 2 : ((b1 || b2) ? 1 : 0);

    const kingPos = ChessRules.findKing(board, 'w');
    const kingCastled = !!(kingPos && kingPos.r === 7 && (kingPos.c === 6 || kingPos.c === 2));

    return { centerControl, knightsDeveloped, bishopsDeveloped, kingCastled };
  }

  // Scan all threats against `color` ('w' default, or 'b' when coaching Black!)
  scanThreats(board, color = 'w', options = {}) {
    const oppColor = color === 'w' ? 'b' : 'w';
    const oppLabel = oppColor === 'w' ? 'White' : 'Black';
    const threats = [];

    // 1. King in Check
    if (ChessRules.isCheck(board, color)) {
      const king = ChessRules.findKing(board, color);
      threats.push({
        level: 'danger',
        type: 'check',
        square: king,
        value: 1000,
        title: '🚨 Your King is in CHECK!',
        text: `${oppLabel} is attacking your King! Use <b>C.P.R.</b>: <b>C</b>apture the attacker, <b>P</b>rotect with a block, or <b>R</b>un to a safe square!`
      });
    } else {
      // 1b. Does opponent threaten Checkmate in 1 if we pass our turn?
      const oppMoves = ChessRules.getAllLegalMoves(board, oppColor, options);
      for (const om of oppMoves) {
        const sim = ChessRules.applyMove(board, om.from, om.to, om, options);
        if (ChessRules.isCheck(sim.board, color)) {
          const replies = ChessRules.getAllLegalMoves(sim.board, color, sim.options);
          if (replies.length === 0) {
            const mateSan = ChessRules.toSAN(board, om.from, om.to, om, options);
            threats.push({
              level: 'danger',
              type: 'mate_threat',
              square: om.to,
              value: 900,
              title: `🚨 MATE THREAT: Watch out for ${mateSan}!`,
              text: `${oppLabel} is threatening <b>CHECKMATE on ${ChessRules.toAlgebraic(om.to.r, om.to.c)}</b> (${mateSan})! Guard that square, capture the attacker, or create escape air!`
            });
            break;
          }
        }
      }
    }

    // 2. Hanging, unfavorably-attacked, or outnumbered friendly pieces
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (!piece || ChessRules.getColor(piece) !== color || piece.toUpperCase() === 'K') continue;

        const { attackers, defenders } = this.getSquareSecurity(board, r, c, color);
        if (attackers.length === 0) continue;

        const pVal = this.getPieceValue(piece);
        const name = this.getPieceName(piece);
        const sqStr = ChessRules.toAlgebraic(r, c);
        const cheapestAttacker = attackers[0];
        const attackerName = this.getPieceName(cheapestAttacker.piece);
        const attSq = ChessRules.toAlgebraic(cheapestAttacker.r, cheapestAttacker.c);

        if (defenders.length === 0) {
          threats.push({
            level: pVal >= 3 ? 'danger' : 'warning',
            type: 'hanging',
            square: { r, c },
            piece,
            value: pVal * 10 + 5,
            title: `⚠️ Hanging ${name} on ${sqStr}!`,
            text: `Your <b>${name}</b> (${pVal} pt${pVal > 1 ? 's' : ''}) on <b>${sqStr}</b> is attacked by ${oppLabel}’s ${attackerName} on ${attSq} with <b>zero defenders</b>!`
          });
        } else if (cheapestAttacker.value < pVal) {
          threats.push({
            level: 'danger',
            type: 'unfavorable_trade',
            square: { r, c },
            piece,
            value: (pVal - cheapestAttacker.value) * 10 + 4,
            title: `⚠️ ${name} Attacked by ${attackerName}!`,
            text: `Your <b>${name}</b> (${pVal} pts) on <b>${sqStr}</b> is attacked by ${oppLabel}’s ${attackerName} (${cheapestAttacker.value} pt${cheapestAttacker.value > 1 ? 's' : ''}) on ${attSq}. Even if defended, trading loses ${pVal - cheapestAttacker.value} pts!`
          });
        } else if (attackers.length > defenders.length) {
          threats.push({
            level: 'warning',
            type: 'outnumbered',
            square: { r, c },
            piece,
            value: pVal * 6,
            title: `⚠️ Outnumbered ${name} on ${sqStr}!`,
            text: `Your ${name} on <b>${sqStr}</b> has ${attackers.length} attackers vs only ${defenders.length} defender(s)! Reinforce it or retreat.`
          });
        }
      }
    }

    threats.sort((a, b) => (b.value || 0) - (a.value || 0));
    return threats;
  }

  // Scan tactical opportunities for `color`: Mate in 1, Mate in 2, Forks, Safe Free Snacks, Safe Winning Trades
  scanOpportunities(board, options = {}, color = 'w') {
    const oppColor = color === 'w' ? 'b' : 'w';
    const oppLabel = oppColor === 'w' ? 'White' : 'Black';
    const bot = window.CoachBot || CoachBot;
    const myMoves = ChessRules.getAllLegalMoves(board, color, options);
    const opportunities = [];

    // 1. Checkmate in 1
    for (const m of myMoves) {
      const sim = ChessRules.applyMove(board, m.from, m.to, m, options);
      if (ChessRules.isCheck(sim.board, oppColor)) {
        const oppReplies = ChessRules.getAllLegalMoves(sim.board, oppColor, sim.options);
        if (oppReplies.length === 0) {
          const san = ChessRules.toSAN(board, m.from, m.to, m, options);
          opportunities.push({
            type: 'mate1',
            level: 'win',
            move: m,
            targetVal: 1000,
            title: '🏆 CHECKMATE IN 1 MOVE!',
            text: `Deliver instant checkmate with <b>${san}</b> (${ChessRules.toAlgebraic(m.from.r, m.from.c)} ➔ ${ChessRules.toAlgebraic(m.to.r, m.to.c)})!`
          });
          return opportunities;
        }
      }
    }

    // 2. Forced Checkmate in 2 (check checking moves & major threats)
    const forcingCandidates = myMoves.filter(m => {
      const sim = ChessRules.applyMove(board, m.from, m.to, m, options);
      return ChessRules.isCheck(sim.board, oppColor) || m.capture;
    });
    for (const m of forcingCandidates.slice(0, 14)) {
      const sim1 = ChessRules.applyMove(board, m.from, m.to, m, options);
      const oppReplies = ChessRules.getAllLegalMoves(sim1.board, oppColor, sim1.options);
      if (oppReplies.length > 0 && oppReplies.length <= 8) {
        const forcedMate2 = oppReplies.every(or => {
          const sim2 = ChessRules.applyMove(sim1.board, or.from, or.to, or, sim1.options);
          const nextMoves = ChessRules.getAllLegalMoves(sim2.board, color, sim2.options);
          return nextMoves.some(nm => {
            const sim3 = ChessRules.applyMove(sim2.board, nm.from, nm.to, nm, sim2.options);
            return ChessRules.isCheck(sim3.board, oppColor) &&
                   ChessRules.getAllLegalMoves(sim3.board, oppColor, sim3.options).length === 0;
          });
        });
        if (forcedMate2) {
          const san = ChessRules.toSAN(board, m.from, m.to, m, options);
          opportunities.push({
            type: 'mate2',
            level: 'win',
            move: m,
            targetVal: 900,
            title: '🔥 FORCED MATE IN 2!',
            text: `Start a unstoppable 2-move checkmate combination with <b>${san}</b> (${ChessRules.toAlgebraic(m.from.r, m.from.c)} ➔ ${ChessRules.toAlgebraic(m.to.r, m.to.c)})!`
          });
          break;
        }
      }
    }

    // 3. Safe Captures (Free Snacks & Winning Trades verified with SEE)
    for (const m of myMoves) {
      if (m.capture || m.enPassant) {
        const target = m.enPassant ? (oppColor === 'b' ? 'p' : 'P') : board[m.to.r][m.to.c];
        if (!target || target === '*' || target === '#') continue;

        const isEnemyDefended = !m.enPassant && this.isFriendlyDefended(board, m.to.r, m.to.c, oppColor);
        const targetVal = this.getPieceValue(target);
        const myVal = this.getPieceValue(m.piece);
        const seeGain = bot && bot.seeCapture ? bot.seeCapture(board, m.from, m.to) : (isEnemyDefended ? (targetVal - myVal) * 100 : targetVal * 100);

        if (seeGain < 80) continue; // Skip losing or equal swaps

        const san = ChessRules.toSAN(board, m.from, m.to, m, options);
        const targetName = this.getPieceName(target);
        const myName = this.getPieceName(m.piece);
        const toSq = ChessRules.toAlgebraic(m.to.r, m.to.c);

        if (!isEnemyDefended) {
          opportunities.push({
            type: 'free_snack',
            level: 'opportunity',
            move: m,
            targetVal,
            title: `💎 Free Snack: Capture ${oppLabel}’s ${targetName}!`,
            text: `${oppLabel} left their ${targetName} on <b>${toSq}</b> undefended! Play <b>${san}</b> with your ${myName} (+${targetVal} pt${targetVal > 1 ? 's' : ''})!`
          });
        } else if (targetVal > myVal) {
          opportunities.push({
            type: 'smart_trade',
            level: 'opportunity',
            move: m,
            targetVal: targetVal - myVal,
            title: `💰 Winning Trade: ${san} (+${targetVal - myVal} pts)!`,
            text: `Trade your ${myName} (${myVal} pts) for ${oppLabel}’s ${targetName} (${targetVal} pts) on <b>${toSq}</b> with <b>${san}</b>!`
          });
        }
      }
    }

    // 4. Tactical Fork Detector (a safe landing square attacking >= 2 higher-value or undefended enemy pieces!)
    for (const m of myMoves) {
      if (m.capture) continue;
      const sim = ChessRules.applyMove(board, m.from, m.to, m, options);
      // Must not just hang the forking piece for free to a cheaper/any defender
      const secAfter = this.getSquareSecurity(sim.board, m.to.r, m.to.c, color);
      const myVal = this.getPieceValue(m.piece);
      if (secAfter.attackers.length > 0 && (secAfter.defenders.length === 0 || secAfter.attackers[0].value < myVal)) {
        continue;
      }

      const rawAttacks = ChessRules.getRawMoves(sim.board, m.to.r, m.to.c, { ignoreCastling: true, attacksOnly: m.piece.toUpperCase() === 'P' });
      const forkedTargets = [];
      for (const a of rawAttacks) {
        const t = sim.board[a.r][a.c];
        if (t && ChessRules.getColor(t) === oppColor) {
          const tVal = this.getPieceValue(t);
          const tDef = this.isFriendlyDefended(sim.board, a.r, a.c, oppColor);
          if (t.toUpperCase() === 'K' || tVal > myVal || (!tDef && tVal >= 3)) {
            forkedTargets.push({ piece: t, r: a.r, c: a.c, val: tVal });
          }
        }
      }
      if (forkedTargets.length >= 2) {
        const san = ChessRules.toSAN(board, m.from, m.to, m, options);
        const names = forkedTargets.slice(0, 2).map(x => `${this.getPieceName(x.piece)} (${ChessRules.toAlgebraic(x.r, x.c)})`).join(' & ');
        opportunities.push({
          type: 'fork',
          level: 'opportunity',
          move: m,
          targetVal: 4.5,
          title: `⚡ Tactical Fork: ${san}!`,
          text: `Play <b>${san}</b> to fork ${oppLabel}’s <b>${names}</b> at the same time!`
        });
      }
    }

    opportunities.sort((a, b) => (b.targetVal || 0) - (a.targetVal || 0));
    return opportunities;
  }

  // Decode opponent's last move so the player understands WHY the bot played it and what it threatens!
  explainOpponentMove(lastMove, boardAfter, playerColor = 'w', options = {}) {
    if (!lastMove || !lastMove.san) return null;
    const oppColor = playerColor === 'w' ? 'b' : 'w';
    const oppName = oppColor === 'w' ? 'White' : 'Black';
    const to = lastMove.to;
    const movedPiece = boardAfter[to.r][to.c];
    if (!movedPiece) return null;

    if (ChessRules.isCheck(boardAfter, playerColor)) {
      return `🚨 <b>${oppName} played ${lastMove.san} — CHECK!</b> Address the attack on your King immediately using C.P.R.!`;
    }

    if (lastMove.san === 'O-O' || lastMove.san === 'O-O-O') {
      return `🏰 <b>${oppName} played ${lastMove.san}:</b> Castled King to safety and activated the Rook toward the center.`;
    }

    // Did this move newly attack one of player's pieces?
    const rawAttacks = ChessRules.getRawMoves(boardAfter, to.r, to.c, { ignoreCastling: true, attacksOnly: movedPiece.toUpperCase() === 'P' });
    const threatened = [];
    for (const a of rawAttacks) {
      const target = boardAfter[a.r][a.c];
      if (target && ChessRules.getColor(target) === playerColor && target.toUpperCase() !== 'K') {
        const tVal = this.getPieceValue(target);
        const mVal = this.getPieceValue(movedPiece);
        const def = this.isFriendlyDefended(boardAfter, a.r, a.c, playerColor);
        if (!def || mVal < tVal) {
          threatened.push({ piece: target, sq: ChessRules.toAlgebraic(a.r, a.c), undefended: !def, val: tVal });
        }
      }
    }
    threatened.sort((a, b) => b.val - a.val);

    if (threatened.length >= 2) {
      return `⚡ <b>${oppName} played ${lastMove.san} (Double Attack!):</b> Threatens both your ${this.getPieceName(threatened[0].piece)} (${threatened[0].sq}) and ${this.getPieceName(threatened[1].piece)} (${threatened[1].sq})!`;
    }
    if (threatened.length === 1) {
      const t = threatened[0];
      return `👀 <b>${oppName} played ${lastMove.san}:</b> Attacks your ${t.undefended ? 'undefended ' : ''}<b>${this.getPieceName(t.piece)} on ${t.sq}</b>! Decide whether to defend, move, or counter-attack.`;
    }

    if (lastMove.captured) {
      return `⚔️ <b>${oppName} played ${lastMove.san}:</b> Captured your ${this.getPieceName(lastMove.captured)}—check if you should recapture!`;
    }

    const pType = movedPiece.toUpperCase();
    if (pType === 'N' || pType === 'B') {
      return `🧭 <b>${oppName} played ${lastMove.san}:</b> Develops the ${this.getPieceName(movedPiece)} toward active central squares.`;
    }
    if (pType === 'P' && (to.c === 3 || to.c === 4 || to.c === 2)) {
      return `🏔️ <b>${oppName} played ${lastMove.san}:</b> Stakes space in the center and opens lines for pieces behind.`;
    }

    return `♟️ <b>${oppName} played ${lastMove.san}:</b> Repositions the ${this.getPieceName(movedPiece)}—scan for new tactics before moving!`;
  }

  // Engine-backed Best Move + Top Candidate Moves recommendation for `color` ('w' or 'b')
  getRecommendation(board, options = {}, moveHistory = [], color = 'w') {
    const bot = window.CoachBot || CoachBot;
    const legalMoves = ChessRules.getAllLegalMoves(board, color, options);
    if (legalMoves.length === 0) return null;

    // Run engine search (depth 3 + quiescence) so every coach recommendation is tactically sound!
    const search = bot.searchBestMove(board, color, options, 3, 3);
    const evalWhiteCp = color === 'w' ? search.score : -search.score;

    // Build human-readable top 3 candidate moves list
    const candidates = (search.candidates || []).slice(0, 3).map(c => {
      const san = ChessRules.toSAN(board, c.move.from, c.move.to, c.move, options);
      const cp = color === 'w' ? c.score : -c.score;
      const evalStr = Math.abs(cp) > 15000
        ? (cp > 0 ? 'Mate' : '-Mate')
        : `${cp >= 0 ? '+' : ''}${(cp / 100).toFixed(1)}`;
      return {
        move: c.move,
        san,
        fromSq: ChessRules.toAlgebraic(c.move.from.r, c.move.from.c),
        toSq: ChessRules.toAlgebraic(c.move.to.r, c.move.to.c),
        score: c.score,
        evalStr
      };
    });

    const opps = this.scanOpportunities(board, options, color);

    // 1. Checkmate in 1 or 2
    const mateOpp = opps.find(o => o.type === 'mate1' || o.type === 'mate2');
    if (mateOpp) {
      const san = ChessRules.toSAN(board, mateOpp.move.from, mateOpp.move.to, mateOpp.move, options);
      return {
        move: mateOpp.move,
        san,
        badge: mateOpp.type === 'mate1' ? '🏆 Winning Mate' : '🔥 Mate in 2',
        title: mateOpp.title,
        hintPrompt: `Look closely at the enemy King! One of your ${this.getPieceName(mateOpp.move.piece)}s has a lethal checkmate pattern.`,
        text: mateOpp.text,
        candidates,
        evalWhiteCp
      };
    }

    // 2. Escape Check using the ENGINE'S #1 escape (never arbitrary whiteMoves[0]!)
    if (ChessRules.isCheck(board, color)) {
      const bestEscape = search.move || legalMoves[0];
      const san = ChessRules.toSAN(board, bestEscape.from, bestEscape.to, bestEscape, options);
      const method = bestEscape.capture
        ? 'captures the checking piece'
        : (bestEscape.piece.toUpperCase() === 'K' ? 'moves your King to the safest square' : 'blocks the check safely');
      return {
        move: bestEscape,
        san,
        badge: '🛡️ Best Escape',
        title: 'Defend Your King!',
        hintPrompt: `Your King is in check! Compare C.P.R.: can you safely Capture the attacker, Block it, or Run?`,
        text: `Best C.P.R. defense is <b>${san}</b> (${ChessRules.toAlgebraic(bestEscape.from.r, bestEscape.from.c)} ➔ ${ChessRules.toAlgebraic(bestEscape.to.r, bestEscape.to.c)}), which ${method}!`,
        candidates,
        evalWhiteCp
      };
    }

    // 3. If engine's top move matches a verified tactical opportunity (free snack, winning trade, fork), explain the tactic!
    const bestMove = search.move || legalMoves[0];
    const bestSan = ChessRules.toSAN(board, bestMove.from, bestMove.to, bestMove, options);
    const matchingOpp = opps.find(o =>
      o.move.from.r === bestMove.from.r && o.move.from.c === bestMove.from.c &&
      o.move.to.r === bestMove.to.r && o.move.to.c === bestMove.to.c
    );
    if (matchingOpp) {
      return {
        move: bestMove,
        san: bestSan,
        badge: matchingOpp.type === 'fork' ? '⚡ Tactical Fork' : (matchingOpp.type === 'free_snack' ? '💎 Free Snack' : '💰 Winning Trade'),
        title: matchingOpp.title,
        hintPrompt: `Tactical alert! Your <b>${this.getPieceName(bestMove.piece)}</b> on ${ChessRules.toAlgebraic(bestMove.from.r, bestMove.from.c)} has a winning strike.`,
        text: matchingOpp.text,
        candidates,
        evalWhiteCp
      };
    }

    // 4. Save a high-value threatened piece if engine's top choice rescues or defends it
    const threats = this.scanThreats(board, color, options);
    const urgentThreat = threats.find(t => t.piece && this.getPieceValue(t.piece) >= 3);
    if (urgentThreat) {
      const movedThreatened = bestMove.from.r === urgentThreat.square.r && bestMove.from.c === urgentThreat.square.c;
      return {
        move: bestMove,
        san: bestSan,
        badge: movedThreatened ? '🏃 Rescue Piece' : '🛡️ Tactical Defense',
        title: urgentThreat.title,
        hintPrompt: `Danger check! Your <b>${this.getPieceName(urgentThreat.piece)}</b> on ${ChessRules.toAlgebraic(urgentThreat.square.r, urgentThreat.square.c)} is in danger—how can you save or counter-defend it?`,
        text: movedThreatened
          ? `Retreat or redeploy with <b>${bestSan}</b> (${ChessRules.toAlgebraic(bestMove.from.r, bestMove.from.c)} ➔ ${ChessRules.toAlgebraic(bestMove.to.r, bestMove.to.c)}) so your ${this.getPieceName(urgentThreat.piece)} stays safe!`
          : `Play <b>${bestSan}</b> to resolve the threat on your ${this.getPieceName(urgentThreat.piece)} while keeping strong counterplay!`,
        candidates,
        evalWhiteCp
      };
    }

    // 5. Opening Principle Coaching (checks that the opening move isn't losing > 45 cp to a tactic!)
    const phase = this.getGamePhase(board, moveHistory.length);
    if (phase.phase === 'opening') {
      const topScore = search.score;
      const pickSoundMove = (pred) => {
        const cand = (search.candidates || []).find(c => pred(c.move) && (topScore - c.score) <= 45);
        return cand ? cand.move : null;
      };

      const castleMove = pickSoundMove(m => !!m.castling);
      if (castleMove) {
        const san = ChessRules.toSAN(board, castleMove.from, castleMove.to, castleMove, options);
        return {
          move: castleMove,
          san,
          badge: '🏰 Castle King',
          title: 'Castle Your King to Safety!',
          hintPrompt: 'Your Kingside/Queenside path is clear—tuck your King into safety and activate your Rook!',
          text: `Play <b>${san}</b>! Castling shields your King behind pawns and brings your Rook into the game.`,
          candidates,
          evalWhiteCp
        };
      }

      const startPawnRow = color === 'w' ? 6 : 1;
      const targetPawnRow = color === 'w' ? 4 : 3;
      const centerPush = pickSoundMove(m =>
        m.piece.toUpperCase() === 'P' && m.from.r === startPawnRow && m.to.r === targetPawnRow && (m.from.c === 4 || m.from.c === 3)
      );
      if (centerPush) {
        const san = ChessRules.toSAN(board, centerPush.from, centerPush.to, centerPush, options);
        return {
          move: centerPush,
          san,
          badge: '🏔️ Center Control',
          title: `Stake the Center with ${san}!`,
          hintPrompt: 'Opening Principle #1: Claim central squares with a center pawn to free your Bishops and Queen!',
          text: `Push <b>${san}</b> (${ChessRules.toAlgebraic(centerPush.from.r, centerPush.from.c)} ➔ ${ChessRules.toAlgebraic(centerPush.to.r, centerPush.to.c)}) to claim the center hilltop and open diagonals!`,
          candidates,
          evalWhiteCp
        };
      }

      const homeBackRow = color === 'w' ? 7 : 0;
      const knightDev = pickSoundMove(m =>
        m.piece.toUpperCase() === 'N' && m.from.r === homeBackRow && (m.to.c === 2 || m.to.c === 5)
      );
      if (knightDev) {
        const san = ChessRules.toSAN(board, knightDev.from, knightDev.to, knightDev, options);
        return {
          move: knightDev,
          san,
          badge: '🐎 Develop Knight',
          title: `Develop Knight with ${san}!`,
          hintPrompt: 'Opening Principle #2: Develop Knights before Bishops toward central squares (c3/f3 or c6/f6)!',
          text: `Play <b>${san}</b> to control key central squares and prepare castling!`,
          candidates,
          evalWhiteCp
        };
      }

      const bishopDev = pickSoundMove(m => m.piece.toUpperCase() === 'B' && m.from.r === homeBackRow);
      if (bishopDev) {
        const san = ChessRules.toSAN(board, bishopDev.from, bishopDev.to, bishopDev, options);
        return {
          move: bishopDev,
          san,
          badge: '♗ Develop Bishop',
          title: `Deploy Bishop with ${san}!`,
          hintPrompt: 'Bring an unmoved Bishop onto an active diagonal and clear your back rank for castling!',
          text: `Play <b>${san}</b> (${ChessRules.toAlgebraic(bishopDev.from.r, bishopDev.from.c)} ➔ ${ChessRules.toAlgebraic(bishopDev.to.r, bishopDev.to.c)}) to activate your Bishop and clear the castling lane!`,
          candidates,
          evalWhiteCp
        };
      }
    }

    // 6. Engine Positional / Strategic Best Move
    const pName = this.getPieceName(bestMove.piece);
    const fromSq = ChessRules.toAlgebraic(bestMove.from.r, bestMove.from.c);
    const toSq = ChessRules.toAlgebraic(bestMove.to.r, bestMove.to.c);
    return {
      move: bestMove,
      san: bestSan,
      badge: '🎯 Best Plan',
      title: `Play ${bestSan}!`,
      hintPrompt: `Think about improving your <b>${pName}</b> currently on <b>${fromSq}</b>—where is its most active square?`,
      text: `Play <b>${bestSan}</b> (${fromSq} ➔ ${toSq}) with your ${pName} to maximize piece activity and keep tactical pressure!`,
      candidates,
      evalWhiteCp
    };
  }

  // Deep Engine + Tactical Post-Move Grader (works for White or Black!)
  evaluateMove(from, to, boardBefore, boardAfter, options = {}, explicitColor = null) {
    const movedPiece = boardBefore[from.r][from.c];
    if (!movedPiece) return { rating: 'good', badge: '👍 Solid Move', text: 'Good move!' };

    const color = explicitColor || ChessRules.getColor(movedPiece) || 'w';
    const oppColor = color === 'w' ? 'b' : 'w';
    const oppLabel = oppColor === 'w' ? 'White' : 'Black';
    const bot = window.CoachBot || CoachBot;
    const pName = this.getPieceName(movedPiece);
    const pVal = this.getPieceValue(movedPiece);
    const toSq = ChessRules.toAlgebraic(to.r, to.c);
    const playedSan = ChessRules.toSAN(boardBefore, from, to, {}, options);
    const capturedTarget = boardBefore[to.r][to.c];
    const capturedVal = (capturedTarget && capturedTarget !== '*' && capturedTarget !== '#') ? this.getPieceValue(capturedTarget) : 0;

    // 1. Delivered Checkmate!
    const oppLegal = ChessRules.getAllLegalMoves(boardAfter, oppColor, options);
    if (oppLegal.length === 0 && ChessRules.isCheck(boardAfter, oppColor)) {
      return {
        rating: 'brilliant',
        badge: '👑 CHECKMATE!',
        text: `🎉 Brilliant! <b>${playedSan}</b> delivers unstoppable CHECKMATE!`
      };
    }

    // 2. Accidental Stalemate when winning!
    if (oppLegal.length === 0 && !ChessRules.isCheck(boardAfter, oppColor)) {
      const mat = this.getMaterial(boardAfter);
      const myAdvantage = color === 'w' ? mat.diff : -mat.diff;
      if (myAdvantage >= 3) {
        return {
          rating: 'blunder',
          badge: '⚠️ Oops! Stalemate Trap',
          text: `Careful! <b>${playedSan}</b> leaves ${oppLabel} with zero legal moves and NO check—forcing a Stalemate draw when you were winning! Tap <b>↶ Takeback</b>!`
        };
      }
    }

    // 3. Check immediate square safety on `to` (catches BOTH undefended pieces AND defended pieces attacked by cheaper pieces!)
    if (movedPiece.toUpperCase() !== 'K') {
      const { attackers, defenders } = this.getSquareSecurity(boardAfter, to.r, to.c, color);

      if (attackers.length > 0) {
        const cheapestAtt = attackers[0];
        const attName = this.getPieceName(cheapestAtt.piece);
        const attSq = ChessRules.toAlgebraic(cheapestAtt.r, cheapestAtt.c);

        if (defenders.length === 0 && pVal > capturedVal) {
          return {
            rating: 'blunder',
            badge: `🚨 Blunder: Hanging ${pName}!`,
            text: `Watch out! <b>${playedSan}</b> leaves your <b>${pName}</b> (${pVal} pt${pVal > 1 ? 's' : ''}) undefended on <b>${toSq}</b> where ${oppLabel}’s ${attName} (${attSq}) can capture it for free! Tap <b>↶ Takeback</b> to try again.`
          };
        }

        if (defenders.length > 0 && (pVal - cheapestAtt.value - capturedVal) >= 2) {
          return {
            rating: 'blunder',
            badge: `🚨 Bad Trade: ${pName} in Danger!`,
            text: `Even though <b>${toSq}</b> is defended, ${oppLabel}’s <b>${attName}</b> (${cheapestAtt.value} pt${cheapestAtt.value > 1 ? 's' : ''}) on ${attSq} can capture your <b>${pName}</b> (${pVal} pts)—losing ${pVal - cheapestAtt.value - capturedVal} points! Tap <b>↶ Takeback</b>.`
          };
        }
      }
    }

    // 4. Engine Centipawn Comparison (Best Move Before vs Position After Played Move)
    if (bot && bot.searchBestMove) {
      const beforeSearch = bot.searchBestMove(boardBefore, color, options, 2, 2);
      const afterReplySearch = bot.searchBestMove(boardAfter, oppColor, options, 2, 2);
      const bestEval = beforeSearch.score;
      const playedEval = -afterReplySearch.score;
      const cpLoss = Math.max(0, bestEval - playedEval);
      const bestMove = beforeSearch.move;
      const bestSan = bestMove ? ChessRules.toSAN(boardBefore, bestMove.from, bestMove.to, bestMove, options) : '';
      const refutationSan = afterReplySearch.move
        ? ChessRules.toSAN(boardAfter, afterReplySearch.move.from, afterReplySearch.move.to, afterReplySearch.move, options)
        : '';

      if (bestEval > 15000 && playedEval < 5000) {
        return {
          rating: 'blunder',
          badge: '⚠️ Missed Checkmate!',
          text: `You had a forced checkmate available with <b>${bestSan}</b>! Tap <b>↶ Takeback</b> to spot the winning blow.`
        };
      }

      if (playedEval < -15000 && bestEval > -10000) {
        return {
          rating: 'blunder',
          badge: '🚨 Blunder: Walks into Mate!',
          text: `Danger! <b>${playedSan}</b> allows ${oppLabel} to force checkmate${refutationSan ? ` starting with <b>${refutationSan}</b>` : ''}! Tap <b>↶ Takeback</b>!`
        };
      }

      if (cpLoss >= 250) {
        return {
          rating: 'blunder',
          badge: '🚨 Blunder',
          text: `<b>${playedSan}</b> drops material${refutationSan ? ` (${oppLabel} has <b>${refutationSan}</b>)` : ''}. Stronger was <b>${bestSan}</b>! Tap <b>↶ Takeback</b> to retry.`
        };
      }

      if (cpLoss >= 120) {
        return {
          rating: 'inaccuracy',
          badge: '🤔 Mistake / Inaccuracy',
          text: `<b>${playedSan}</b> gives ${oppLabel} an edge${refutationSan ? ` via <b>${refutationSan}</b>` : ''}. Consider <b>${bestSan}</b> instead!`
        };
      }

      // Great moves: Castling, winning free material, or #1 engine move in sharp spots
      if (movedPiece.toUpperCase() === 'K' && Math.abs(to.c - from.c) === 2) {
        return {
          rating: 'great',
          badge: '🏰 Castled Safely!',
          text: `Excellent! <b>${playedSan}</b> tucks your King into safety and activates your Rook!`
        };
      }

      if (capturedTarget && capturedTarget !== '*' && cpLoss <= 30) {
        const wasDefended = this.isFriendlyDefended(boardBefore, to.r, to.c, oppColor);
        const tName = this.getPieceName(capturedTarget);
        if (!wasDefended) {
          return {
            rating: 'great',
            badge: '💎 Free Snack!',
            text: `Sharp eyes! <b>${playedSan}</b> wins ${oppLabel}’s undefended ${tName}!`
          };
        }
        if (this.getPieceValue(capturedTarget) > pVal) {
          return {
            rating: 'great',
            badge: '💰 Winning Trade!',
            text: `Great calculation! <b>${playedSan}</b> wins material in the exchange!`
          };
        }
      }

      if (cpLoss <= 15) {
        return {
          rating: 'great',
          badge: '🌟 Best Move!',
          text: `Spot on! <b>${playedSan}</b> matches the Coach’s top choice!`
        };
      }
    }

    return {
      rating: 'good',
      badge: '👍 Solid Move',
      text: `Good move (<b>${playedSan}</b>)! Keep coordinating your pieces and watching for tactics.`
    };
  }
}

const _coachGuideInstance = new CoachGuideEngine();
var CoachGuide = _coachGuideInstance;
if (typeof window !== 'undefined') {
  window.CoachGuide = _coachGuideInstance;
  window.CoachGuideEngine = CoachGuideEngine;
}
if (typeof module !== 'undefined') {
  module.exports = { CoachGuide: _coachGuideInstance, CoachGuideEngine };
}
