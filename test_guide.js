// Comprehensive Test Suite for Engine Strength, White/Black Coach Guide, SAN & FIDE Draws
global.window = global;
global.document = {
  getElementById: (id) => ({
    id,
    textContent: '',
    innerHTML: '',
    className: '',
    value: 'challenger',
    style: {},
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    addEventListener: () => {},
    children: [],
    appendChild: () => {}
  }),
  querySelector: () => ({
    textContent: '',
    innerHTML: '',
    className: '',
    classList: { add: () => {}, remove: () => {} }
  }),
  createElement: () => ({
    innerHTML: '',
    textContent: '',
    className: '',
    dataset: {},
    style: {},
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {},
    addEventListener: () => {}
  }),
  addEventListener: () => {}
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

const fs = require('fs');
eval(fs.readFileSync('js/sound.js', 'utf8'));
eval(fs.readFileSync('js/pieces.js', 'utf8'));
eval(fs.readFileSync('js/levels.js', 'utf8'));
eval(fs.readFileSync('js/bot.js', 'utf8'));
eval(fs.readFileSync('js/guide.js', 'utf8'));
eval(fs.readFileSync('js/board.js', 'utf8'));

ChessBoardUI.prototype.initDOM = function() {
  this.gridEl = {
    innerHTML: '',
    children: Array(64).fill(null).map(() => ({
      innerHTML: '',
      className: '',
      dataset: {},
      classList: { add: () => {}, remove: () => {} },
      appendChild: () => {},
      addEventListener: () => {}
    })),
    appendChild: () => {}
  };
};

eval(fs.readFileSync('js/app.js', 'utf8') + '\nwindow.ChessGameApp = ChessGameApp;');

function assert(cond, msg) {
  if (!cond) {
    console.error('✗ ASSERTION FAILED:', msg);
    process.exit(1);
  }
}

console.log('=== TEST 1: ENGINE ALPHA-BETA & QUIESCENCE TACTICAL STRENGTH ===');

const startBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// Verify Quiescence prevents bot from sacrificing Queen for a defended pawn!
const baitBoard = [
  [null, null, null, 'q', 'k', null, null, null],
  [null, null, null, null, 'p', 'p', 'p', null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, 'P', null, null, null, null], // White pawn on d4 defended by c3 pawn!
  [null, null, 'P', null, null, null, null, null],
  [null, null, null, null, null, 'P', 'P', 'P'],
  [null, null, null, null, 'K', null, null, null]
];
CoachBot.setDifficulty('challenger');
const botReply = CoachBot.chooseMove(baitBoard, {}, 'b', [{ fromStr: 'x', toStr: 'y' }]);
assert(!(botReply.from.r === 0 && botReply.from.c === 3 && botReply.to.r === 4 && botReply.to.c === 3),
  'Engine must NOT blunder Queen on defended d4 pawn!');
console.log('✓ Quiescence search prevents Queen-for-defended-pawn blunder');

// Verify Engine finds forced Mate in 2 (1. Qe8+! Rxe8 2. Rxe8#)
const mate2Board = [
  ['r', null, null, null, null, null, 'k', null],
  ['p', 'p', null, null, null, 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, 'Q', null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['P', 'P', null, null, null, 'P', 'P', 'P'],
  [null, null, null, null, 'R', null, 'K', null]
];
const m2Search = CoachBot.searchBestMove(mate2Board, 'w', {}, 4, 3);
assert(m2Search.move.from.r === 3 && m2Search.move.from.c === 1 && m2Search.move.to.r === 0 && m2Search.move.to.c === 4,
  'Engine must find Queen sacrifice 1. Qe8+! for Mate in 2');
console.log('✓ Alpha-Beta Engine finds forced Queen-sacrifice Mate-in-2 (1. Qe8+!)');

console.log('\n=== TEST 2: COACH MOVE EVALUATION (NO MORE FALSE PRAISE) ===');

// Case A: Undefended Queen hung to a pawn
const beforeHang = startBoard.map(r => [...r]);
beforeHang[2][2] = 'p'; // Black pawn on c6
beforeHang[6][3] = null; // Clear d2 so Qd1->d5 is open
const afterHang = ChessRules.applyMove(beforeHang, { r: 7, c: 3 }, { r: 3, c: 3 }).board; // Qd5!
const hangEval = CoachGuide.evaluateMove({ r: 7, c: 3 }, { r: 3, c: 3 }, beforeHang, afterHang);
assert(hangEval.rating === 'blunder', `Expected blunder for hanging Queen on d5, got ${hangEval.rating}`);
console.log('✓ Hanging Queen accurately flagged as Blunder:', hangEval.badge);

// Case B: DEFENDED Queen moved onto square attacked by enemy Pawn (losing 9 pts for 1 pt!)
const beforeBadTrade = beforeHang.map(r => [...r]);
beforeBadTrade[5][2] = 'N'; // White Knight on c3 DEFENDS d5!
const afterBadTrade = ChessRules.applyMove(beforeBadTrade, { r: 7, c: 3 }, { r: 3, c: 3 }).board;
const badTradeEval = CoachGuide.evaluateMove({ r: 7, c: 3 }, { r: 3, c: 3 }, beforeBadTrade, afterBadTrade);
assert(badTradeEval.rating === 'blunder', `Expected blunder when defended Queen steps in front of pawn, got ${badTradeEval.rating}`);
console.log('✓ Defended Queen attacked by 1-pt Pawn accurately flagged as Blunder:', badTradeEval.badge);

console.log('\n=== TEST 3: BLACK-SIDE COACHING, SAN NOTATION & FIDE DRAWS ===');

// SAN notation check
const sanE4 = ChessRules.toSAN(startBoard, { r: 6, c: 4 }, { r: 4, c: 4 }, {}, { castling: { K: true, Q: true, k: true, q: true } });
assert(sanE4 === 'e4', `Expected SAN 'e4', got '${sanE4}'`);
const sanNf3 = ChessRules.toSAN(startBoard, { r: 7, c: 6 }, { r: 5, c: 5 });
assert(sanNf3 === 'Nf3', `Expected SAN 'Nf3', got '${sanNf3}'`);
console.log('✓ Standard Algebraic Notation (SAN) verified (e4, Nf3)');

// Insufficient material check (K+B vs K)
const kbk = Array(8).fill(null).map(() => Array(8).fill(null));
kbk[0][4] = 'k';
kbk[7][4] = 'K';
kbk[5][2] = 'B';
const drawStatus = ChessRules.getGameStatus(kbk, 'w');
assert(drawStatus.over && drawStatus.reason === 'insufficient_material', 'K+B vs K must be insufficient material draw');
console.log('✓ FIDE Insufficient Material Draw (K+B vs K) verified');

// Coach advising BLACK side
const after1e4 = ChessRules.applyMove(startBoard, { r: 6, c: 4 }, { r: 4, c: 4 }).board;
const blackRec = CoachGuide.getRecommendation(after1e4, { castling: { K: true, Q: true, k: true, q: true } }, [{ fromStr: 'e2', toStr: 'e4' }], 'b');
assert(blackRec && blackRec.move && ChessRules.isBlack(blackRec.move.piece), 'Coach must recommend a Black move when coaching Black!');
assert(Array.isArray(blackRec.candidates) && blackRec.candidates.length >= 2, 'Coach must supply top candidate moves for Black!');
console.log('✓ Black-side Coach recommendation & candidate moves verified:', blackRec.san);

// App integration test (White + Undo + Black side)
const app = new window.ChessGameApp();
app.startFreePlay('w');
app.boardUI.handleSquareClick(6, 4);
app.boardUI.handleSquareClick(4, 4);
assert(app.freePlayMoveList[0].san === 'e4', 'Move log must record SAN e4');
app.undoCoachMove();
assert(app.freePlayHistory.length === 1, 'Takeback must restore initial state');
console.log('✓ Guided App White-play, SAN move log & Takeback verified');

app.startFreePlay('b');
assert(app.boardUI.playerColor === 'b' && app.boardUI.flipped === true, 'Playing Black must flip board and set playerColor="b"');
app.clearPendingBotTimer();
console.log('✓ Guided App Black-side orientation & controls verified');

console.log('\n🎉 ALL ENGINE, COACH, BLACK-SIDE, SAN & FIDE TESTS PASSED 100%!');
