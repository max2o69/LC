// Test suite verifying all 100 puzzles in js/dojo.js
const fs = require('fs');

global.window = global;
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

eval(fs.readFileSync('js/pieces.js', 'utf8'));
eval(fs.readFileSync('js/dojo.js', 'utf8'));

console.log('=== VERIFYING ALL 100 TACTICS DOJO PUZZLES ===');

if (!Array.isArray(DOJO_PUZZLES) || DOJO_PUZZLES.length !== 100) {
  console.error(`FAIL: Expected 100 DOJO_PUZZLES, found ${DOJO_PUZZLES ? DOJO_PUZZLES.length : 0}`);
  process.exit(1);
}

let passCount = 0;

DOJO_PUZZLES.forEach(p => {
  const from = ChessRules.fromAlgebraic(p.from);
  const to = ChessRules.fromAlgebraic(p.to);
  const piece = p.board[from.r][from.c];
  if (!piece || !ChessRules.isWhite(piece)) {
    console.error(`FAIL: Puzzle #${p.id} (${p.title}): No white piece at ${p.from}!`);
    process.exit(1);
  }

  const moves = ChessRules.getLegalMoves(p.board, from.r, from.c);
  const isLegal = moves.some(m => m.r === to.r && m.c === to.c);
  if (!isLegal) {
    console.error(`FAIL: Puzzle #${p.id} (${p.title}): Move ${p.from}->${p.to} is NOT in legal moves for ${piece}!`);
    process.exit(1);
  }

  // Also test TacticsDojo.checkMove()
  TacticsDojo.currentPuzzle = p;
  const correct = TacticsDojo.checkMove(from, to);
  if (!correct) {
    console.error(`FAIL: Puzzle #${p.id}: TacticsDojo.checkMove() returned false for correct solution!`);
    process.exit(1);
  }

  passCount++;
});

console.log(`✓ All ${passCount} Tactics Dojo puzzles are 100% chess-legal and verified!`);

// Test rating & streak system
TacticsDojo.stats = { rating: 1000, streak: 0, bestStreak: 0, solvedCount: 0 };
const winRes = TacticsDojo.handleSuccess();
if (winRes.rating !== 1015 || winRes.streak !== 1) {
  console.error('FAIL: Dojo handleSuccess rating/streak incorrect');
  process.exit(1);
}

const failRes = TacticsDojo.handleFailure();
if (failRes.streak !== 0 || failRes.rating !== 1010) {
  console.error('FAIL: Dojo handleFailure streak/rating incorrect');
  process.exit(1);
}

console.log('✓ TacticsDojo stats & streak engine verified.');
console.log('\n🎉 TACTICS DOJO TEST PASSED 100%!');
