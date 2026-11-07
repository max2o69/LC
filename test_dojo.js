// Test suite verifying all 120 puzzles (1-move, 2-3 move Master Combos, and Black Counter-Tactics) in js/dojo.js
const fs = require('fs');

global.window = global;
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

eval(fs.readFileSync('js/pieces.js', 'utf8'));
eval(fs.readFileSync('js/dojo.js', 'utf8'));

console.log('=== VERIFYING ALL 120 TACTICS DOJO PUZZLES (WHITE & BLACK, 1-MOVE & COMBOS) ===');

if (!Array.isArray(DOJO_PUZZLES) || DOJO_PUZZLES.length !== 120) {
  console.error(`FAIL: Expected 120 DOJO_PUZZLES, found ${DOJO_PUZZLES ? DOJO_PUZZLES.length : 0}`);
  process.exit(1);
}

let passCount = 0;

DOJO_PUZZLES.forEach(p => {
  let board = p.board.map(r => [...r]);
  const expectedColor = p.turn || 'w';
  const oppColor = expectedColor === 'w' ? 'b' : 'w';

  if (p.sequence && p.sequence.length > 0) {
    TacticsDojo.activatePuzzle(p);
    p.sequence.forEach((step, idx) => {
      const [fStr, tStr] = step.move.split('-');
      const from = ChessRules.fromAlgebraic(fStr);
      const to = ChessRules.fromAlgebraic(tStr);
      const piece = board[from.r][from.c];
      if (!piece || ChessRules.getColor(piece) !== expectedColor) {
        console.error(`FAIL: Combo #${p.id} step ${idx + 1}: Expected ${expectedColor} piece at ${fStr}!`);
        process.exit(1);
      }
      const moves = ChessRules.getLegalMoves(board, from.r, from.c);
      const mv = moves.find(m => m.r === to.r && m.c === to.c);
      if (!mv) {
        console.error(`FAIL: Combo #${p.id} step ${idx + 1}: Illegal move ${step.move}!`);
        process.exit(1);
      }
      if (!TacticsDojo.checkMove(from, to)) {
        console.error(`FAIL: Combo #${p.id} step ${idx + 1}: checkMove returned false!`);
        process.exit(1);
      }
      board = ChessRules.applyMove(board, from, to, mv).board;

      if (step.response) {
        const [rfStr, rtStr] = step.response.split('-');
        const rf = ChessRules.fromAlgebraic(rfStr);
        const rt = ChessRules.fromAlgebraic(rtStr);
        const rPiece = board[rf.r][rf.c];
        if (!rPiece || ChessRules.getColor(rPiece) !== oppColor) {
          console.error(`FAIL: Combo #${p.id} step ${idx + 1}: Expected ${oppColor} response piece at ${rfStr}!`);
          process.exit(1);
        }
        const rMoves = ChessRules.getLegalMoves(board, rf.r, rf.c);
        const rMv = rMoves.find(m => m.r === rt.r && m.c === rt.c);
        if (!rMv) {
          console.error(`FAIL: Combo #${p.id} step ${idx + 1}: Illegal response ${step.response}!`);
          process.exit(1);
        }
        board = ChessRules.applyMove(board, rf, rt, rMv).board;
        TacticsDojo.currentStepIndex++;
      }
    });
  } else {
    const from = ChessRules.fromAlgebraic(p.from);
    const to = ChessRules.fromAlgebraic(p.to);
    const piece = board[from.r][from.c];
    if (!piece || ChessRules.getColor(piece) !== expectedColor) {
      console.error(`FAIL: Puzzle #${p.id} (${p.title}): Expected ${expectedColor} piece at ${p.from}!`);
      process.exit(1);
    }

    const moves = ChessRules.getLegalMoves(board, from.r, from.c);
    const isLegal = moves.some(m => m.r === to.r && m.c === to.c);
    if (!isLegal) {
      console.error(`FAIL: Puzzle #${p.id} (${p.title}): Move ${p.from}->${p.to} is NOT legal!`);
      process.exit(1);
    }

    TacticsDojo.activatePuzzle(p);
    if (!TacticsDojo.checkMove(from, to)) {
      console.error(`FAIL: Puzzle #${p.id}: TacticsDojo.checkMove() returned false!`);
      process.exit(1);
    }
  }

  passCount++;
});

console.log(`✓ All ${passCount} Tactics Dojo puzzles (including Master Combos & Black Counter-Tactics) are 100% chess-legal!`);

// Test rating, adaptive category filter & spaced repetition tracking
TacticsDojo.stats = { rating: 1000, streak: 0, bestStreak: 0, solvedCount: 0, missedIds: [], recentIds: [] };
TacticsDojo.getPuzzleById(1);
const winRes = TacticsDojo.handleSuccess();
if (winRes.rating < 1015 || winRes.streak !== 1) {
  console.error('FAIL: Dojo handleSuccess rating/streak incorrect', winRes);
  process.exit(1);
}

TacticsDojo.getPuzzleById(101);
const failRes = TacticsDojo.handleFailure();
if (failRes.streak !== 0 || !TacticsDojo.stats.missedIds.includes(101)) {
  console.error('FAIL: Dojo handleFailure missedIds spaced repetition tracking incorrect', failRes);
  process.exit(1);
}

TacticsDojo.setCategory('combo');
const comboPuzzle = TacticsDojo.getRandomPuzzle();
if (comboPuzzle.cat !== 'combo') {
  console.error('FAIL: Dojo category filter did not return a combo puzzle');
  process.exit(1);
}

console.log('✓ TacticsDojo adaptive rating, category filtering & spaced-repetition engine verified.');
console.log('\n🎉 TACTICS DOJO TEST PASSED 100%!');
