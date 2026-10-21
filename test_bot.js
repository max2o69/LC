// Test bot moves in Level 23 and Free Play
global.window = global;
global.document = {
  getElementById: (id) => ({
    textContent: '',
    innerHTML: '',
    classList: { add: () => {}, remove: () => {} },
    addEventListener: () => {},
    children: [],
    appendChild: () => {}
  }),
  createElement: () => ({
    innerHTML: '',
    textContent: '',
    className: '',
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
eval(fs.readFileSync('js/board.js', 'utf8'));

ChessBoardUI.prototype.initDOM = function() {
  this.gridEl = {
    innerHTML: '',
    children: Array(64).fill(null).map(() => ({
      innerHTML: '',
      className: '',
      classList: { add: () => {}, remove: () => {} },
      appendChild: () => {},
      addEventListener: () => {}
    })),
    appendChild: () => {}
  };
};

eval(fs.readFileSync('js/app.js', 'utf8') + '\nwindow.ChessGameApp = ChessGameApp;');

const app = new window.ChessGameApp();
console.log('App created. Current level index:', app.currentLevelIndex);

// Test Level 23 (Pawn Wars)
console.log('\n--- TESTING LEVEL 23 (PAWN WARS) BOT MOVE ---');
app.startLevel(22); // Level 23 is index 22
console.log('Level title:', LEVELS[app.currentLevelIndex].title);
console.log('Playing move c2 -> c4 on Level 23...');
app.boardUI.handleSquareClick(6, 2); // select c2
console.log('Valid moves from c2 count:', app.boardUI.validMoves.length);
app.boardUI.handleSquareClick(4, 2); // click c4
console.log('Player Move count:', app.moveCount);

setTimeout(() => {
  console.log('After bot turn:');
  console.log('Board row 1 (Black pawns):', app.boardUI.boardState[1]);
  console.log('Board row 2:', app.boardUI.boardState[2]);
  console.log('Board row 3:', app.boardUI.boardState[3]);
  const hasMoved = app.boardUI.boardState[2].some(p => p === 'p') || app.boardUI.boardState[3].some(p => p === 'p');
  console.log('Did black pawn move in Level 23?', hasMoved);

  // Now test Free Play
  console.log('\n--- TESTING FREE PLAY BOT MOVE ---');
  app.startFreePlay();
  console.log('Playing e2 -> e4 in Free Play...');
  app.boardUI.handleSquareClick(6, 4); // select e2
  app.boardUI.handleSquareClick(4, 4); // click e4
  console.log('Free play move count:', app.moveCount);

  setTimeout(() => {
    console.log('Free play board row 1 (Black pawns):', app.boardUI.boardState[1]);
    const blackMoved = app.boardUI.boardState[1].filter(p => p === 'p').length < 8 ||
                       app.boardUI.boardState[0].filter(p => p !== null).length < 8 ||
                       app.boardUI.boardState[2].some(p => p !== null) ||
                       app.boardUI.boardState[3].some(p => p !== null);
    console.log('Did black move in Free Play?', blackMoved);
    process.exit(0);
  }, 900);
}, 900);
