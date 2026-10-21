// Chess Curriculum for Absolute Beginners (Ages 3 to 103!)
// Progressive, story-based interactive lessons

const CHAPTERS = [
  { id: 1, title: 'Chapter 1: Meet the Heroes', icon: '⭐', desc: 'Learn how each piece moves by collecting shiny stars!' },
  { id: 2, title: 'Chapter 2: Captures & Values', icon: '⚔️', desc: 'Learn who is worth more points and how to win trades.' },
  { id: 3, title: 'Chapter 3: King in Danger (Check & Checkmate)', icon: '👑', desc: 'Learn C.P.R. to escape checks and how to deliver checkmate!' },
  { id: 4, title: 'Chapter 4: Secret Superpowers', icon: '✨', desc: 'Castling, Pawn Promotion, and the sneaky En Passant!' },
  { id: 5, title: 'Chapter 5: Mini-Games & Practice', icon: '🏆', desc: 'Fun mini-battles and playing against Coach Bot!' }
];

const LEVELS = [
  // ================= CHAPTER 1: MEET THE HEROES =================
  {
    id: 1,
    chapterId: 1,
    title: 'The Rook Rocket!',
    piece: 'R',
    badge: '♖ Rook',
    parMoves: 1,
    story: 'Meet <b>Rocky the Rook</b>! He lives in the castle towers and zooms straight like a rocket across empty squares.',
    goal: 'Zoom straight up to collect the shiny star! ⭐',
    hint: 'Click Rocky, then tap the glowing green dot on the star!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, '*',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'R',  null, null, null]
    ]
  },
  {
    id: 2,
    chapterId: 1,
    title: 'Rook: Turn the Corner!',
    piece: 'R',
    badge: '♖ Rook',
    parMoves: 2,
    story: 'Rooks can drive straight forward, backward, left, or right! After one straight move, you can turn sideways on your next turn.',
    goal: 'Grab the first star, then turn right to grab the second star!',
    hint: 'Move up to row 4 first, then drive right across row 4!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, '*',  null, null, null, '*',  null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'R',  null, null, null, null, null]
    ]
  },
  {
    id: 3,
    chapterId: 1,
    title: 'The Bishop\'s Diagonal Magic!',
    piece: 'B',
    badge: '♗ Bishop',
    parMoves: 2,
    story: 'Meet <b>Barnaby the Bishop</b>! He is a magician who slides diagonally like an "X". Notice how he starts on a light square—he can NEVER step on a dark square!',
    goal: 'Slide diagonally to collect both stars!',
    hint: 'Slide up-left to c4 to grab star 1, then slide up-right to f7 to grab star 2!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, '*',  null, null], // f7 (row 1, col 5)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, '*',  null, null, null, null, null], // c4 (row 4, col 2)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, 'B',  null, null]  // f1 (row 7, col 5)
    ]
  },
  {
    id: 4,
    chapterId: 1,
    title: 'The Dark-Square Magician!',
    piece: 'B',
    badge: '♗ Bishop',
    parMoves: 2,
    story: 'Every kingdom has TWO Bishops! One stays on light squares forever, and this one stays on dark squares forever!',
    goal: 'Zig-zag along the dark diagonal tiles to collect both stars!',
    hint: 'Slide up-right to f4, then up-left to c7!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, '*',  null, null, null, null, null], // c7 (row 1, col 2)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, '*',  null, null], // f4 (row 4, col 5)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'B',  null, null, null, null, null]  // c1 (row 7, col 2)
    ]
  },
  {
    id: 5,
    chapterId: 1,
    title: 'The Queen: The Superhero!',
    piece: 'Q',
    badge: '♕ Queen',
    parMoves: 3,
    story: 'Meet <b>Queen Quick</b>! She has the powers of BOTH the Rook and the Bishop combined. She can zoom straight OR diagonally as far as she wants!',
    goal: 'Use your superhero moves to collect all 3 stars in 3 moves!',
    hint: 'Zoom straight up to d7, drive straight right to g7, then slide diagonally down to b2!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, '*',  null, null, '*',  null], // d7 (row 1, col 3) & g7 (row 1, col 6)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'Q',  null, null, null, null], // d4 (row 4, col 3)
      [null, null, null, null, null, null, null, null],
      [null, '*',  null, null, null, null, null, null], // b2 (row 6, col 1)
      [null, null, null, null, null, null, null, null]
    ]
  },
  {
    id: 6,
    chapterId: 1,
    title: 'Grandpa King\'s Baby Steps!',
    piece: 'K',
    badge: '♔ King',
    parMoves: 3,
    story: 'Meet <b>Grandpa King</b>! He is the most important leader of the kingdom, but he is old and walks with a cane: only 1 baby step in any direction.',
    goal: 'Help Grandpa King walk step-by-step to collect all 3 stars!',
    hint: 'King moves exactly 1 square at a time: up, down, left, right, or diagonal.',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, '*',  null, null, null],
      [null, null, null, '*',  null, null, null, null],
      [null, null, '*',  null, null, null, null, null],
      [null, 'K',  null, null, null, null, null, null]
    ]
  },
  {
    id: 7,
    chapterId: 1,
    title: 'The Knight: Gallop, Gallop, Turn!',
    piece: 'N',
    badge: '♘ Knight',
    parMoves: 2,
    story: 'Meet <b>Knight Gallop</b>! The horse has a funny dance move: 2 squares forward, then 1 square turn to make an "L" shape! <i>Neighhh!</i>',
    goal: 'Gallop in an L-shape to collect the carrots/stars!',
    hint: 'Hop to c3 first (2 up, 1 right), then hop to e4 (1 up, 2 right)!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, '*',  null, null, null], // e4 (row 4, col 4)
      [null, null, '*',  null, null, null, null, null], // c3 (row 5, col 2)
      [null, null, null, null, null, null, null, null],
      [null, 'N',  null, null, null, null, null, null]  // b1 (row 7, col 1)
    ]
  },
  {
    id: 8,
    chapterId: 1,
    title: 'The Knight Jumps Over Walls!',
    piece: 'N',
    badge: '♘ Knight',
    parMoves: 1,
    story: 'Here is the Knight\'s magical superpower: <b>HE CAN JUMP OVER ANY PIECE!</b> No piece can block a horse. Look at those stones blocking the way—just leap right over them!',
    goal: 'Jump over the stone wall and grab the star!',
    hint: 'The pawns in front cannot stop the horse! Leap right over to f5!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, '*',  null, null],
      [null, null, null, 'p',  'p',  'p',  null, null],
      [null, null, null, null, 'N',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ]
  },
  {
    id: 9,
    chapterId: 1,
    title: 'The Brave Pawn Marches Forward!',
    piece: 'P',
    badge: '♙ Pawn',
    parMoves: 2,
    story: 'Pawns have 2 special movement rules:<br><b>1. Always Forward:</b> Pawns only march straight forward. They can NEVER walk backwards!<br><b>2. Starting Leap Option:</b> ONLY on its very first move from home (Row 2), a pawn has the option to leap <b>2 squares forward</b> (or 1 step). After that, it can only walk 1 step at a time!',
    goal: 'Use your starting 2-step leap to grab star 1 on e4, then take 1 normal step to grab star 2 on e5!',
    hint: 'First move: take the 2-step leap from e2 to e4! Second move: take 1 step to e5!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, '*',  null, null, null], // e5 (row 3, col 4)
      [null, null, null, null, '*',  null, null, null], // e4 (row 4, col 4)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'P',  null, null, null], // e2 (row 6, col 4)
      [null, null, null, null, null, null, null, null]
    ]
  },
  {
    id: 10,
    chapterId: 1,
    title: 'Pawn Attack: Diagonal Strike!',
    piece: 'P',
    badge: '♙ Pawn Attack',
    parMoves: 2,
    story: 'Here is the most important pawn rule that confuses beginners:<br><b>Can a pawn capture straight ahead? NO, NEVER!</b> If an enemy is directly in front of your pawn, you are blocked like a brick wall.<br><b>How do pawns capture? DIAGONALLY FORWARD!</b> Pawns only attack 1 square diagonally (up-left or up-right) like thrusting a spear!',
    goal: 'Capture the black pawns by striking diagonally forward!',
    hint: 'Pawns capture 1 square diagonally forward. Tap the diagonal enemy pawn at e5, then at f6!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, 'p',  null, null], // f6 (row 2, col 5)
      [null, null, null, null, 'p',  null, null, null], // e5 (row 3, col 4)
      [null, null, null, 'P',  null, null, null, null], // d4 (row 4, col 3)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ]
  },
  {
    id: 11,
    chapterId: 1,
    title: 'Pawn Superpower: Promotion!',
    piece: 'P',
    badge: '♙ Pawn',
    parMoves: 1,
    story: 'If a brave little Pawn marches all the way across the board to the other end (rank 8), magic happens! 🌟 <b>PROMOTION!</b> He can transform into a mighty Queen!',
    goal: 'Step forward onto the 8th row to transform into a Queen!',
    hint: 'Just take 1 step forward into the crown square!',
    board: [
      [null, null, null, null, '*',  null, null, null],
      [null, null, null, null, 'P',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ]
  },

  // ================= CHAPTER 2: CAPTURES & VALUES =================
  {
    id: 12,
    chapterId: 2,
    title: 'Combat 101: Free Snack!',
    piece: 'R',
    badge: '⚔️ Capturing',
    parMoves: 1,
    story: 'When an enemy piece is standing in your path and nobody is guarding it, you can capture it! You take its place on the square.',
    goal: 'Use your Rook to capture the undefended black Knight!',
    hint: 'Drive your Rook straight up into the square where the black horse is sitting!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, 'n',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'R',  null, null, null, null, null]
    ]
  },
  {
    id: 13,
    chapterId: 2,
    title: 'Piece Points: The Smart Trade!',
    piece: 'B',
    badge: '💰 Point Values',
    parMoves: 1,
    story: 'In chess, every piece has point values!<br><b>Pawn = 1 point</b> ♙<br><b>Knight/Bishop = 3 points</b> ♘♗<br><b>Rook = 5 points</b> ♖<br><b>Queen = 9 points</b> ♕<br>Don\'t capture a 1-point pawn if you can get a 5-point Rook!',
    goal: 'Your Bishop can capture the 1-point pawn on c5 OR the 5-point Rook on g7. Capture the high-value Rook on g7!',
    hint: 'The black Rook is worth 5 points! Slide your Bishop up-right to g7 to take it!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'r',  null], // g7 (row 1, col 6 - Rook: 5 pts)
      [null, null, null, null, null, null, null, null],
      [null, null, 'p',  null, null, null, null, null], // c5 (row 3, col 2 - Pawn: 1 pt)
      [null, null, null, 'B',  null, null, null, null], // d4 (row 4, col 3 - Bishop)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    targetPiece: 'r'
  },
  {
    id: 14,
    chapterId: 2,
    title: 'Guard Your Friends!',
    piece: 'B',
    badge: '🛡️ Defending',
    parMoves: 1,
    story: 'A good kingdom protects its friends! Look at your Knight on c3—the black Rook on c8 is staring at him with laser eyes! Bring your Bishop to defend the Knight so Black won\'t dare capture it!',
    goal: 'Move your Bishop to b2 to protect your Knight friend, or jump your Knight away to safety!',
    hint: 'Move your Bishop from a1 to b2 so it aims diagonally at the Knight to guard him!',
    board: [
      [null, null, 'r',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'N',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['B',  null, null, null, null, null, null, null]
    ],
    validateMove: (from, to) => (from.r === 7 && from.c === 0 && to.r === 6 && to.c === 1) || (from.r === 5 && from.c === 2 && to.c !== 2)
  },

  // ================= CHAPTER 3: KING IN DANGER =================
  {
    id: 15,
    chapterId: 3,
    title: 'Say "CHECK!"',
    piece: 'Q',
    badge: '⚠️ Check!',
    parMoves: 1,
    story: 'When you aim directly at the enemy King, that is called <b>CHECK!</b> It means: <i>"Look out King, you are under attack!"</i>',
    goal: 'Move your Queen to deliver CHECK to the black King!',
    hint: 'Move your Queen onto the same diagonal or same straight line as the black King!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'Q',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      // White delivers check to black king
      return ChessRules.isCheck(board, 'b');
    }
  },
  {
    id: 16,
    chapterId: 3,
    title: 'C.P.R. Escape #1: RUN!',
    piece: 'K',
    badge: '🏃 Run Away',
    parMoves: 1,
    story: 'When you are in CHECK, remember <b>C.P.R.</b>:<br><b>C</b> = Capture the attacker<br><b>P</b> = Protect (block with a piece)<br><b>R</b> = Run away!<br>Here, the enemy Rook is attacking Grandpa King. Run away to a safe square!',
    goal: 'Move Grandpa King to a safe square where the Rook cannot hit him!',
    hint: 'Don\'t stay on the "e" file! Step sideways to d1 or f1.',
    board: [
      [null, null, null, null, 'r',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null]
    ],
    validateMove: (from, to, board) => {
      return !ChessRules.isCheck(board, 'w');
    }
  },
  {
    id: 17,
    chapterId: 3,
    title: 'C.P.R. Escape #2: BLOCK!',
    piece: 'R',
    badge: '🛡️ Block & Shield',
    parMoves: 1,
    story: 'Grandpa King is in check from a far-away enemy Rook, but Grandpa cannot run away easily! Use <b>P = Protect</b>: slide your own Rook in the middle to block the laser beam!',
    goal: 'Slide your Rook between the enemy Rook and your King to shield him!',
    hint: 'Move your Rook to e4 to intercept the attack line!',
    board: [
      [null, null, null, null, 'r',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'R',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null]
    ],
    validateMove: (from, to, board) => {
      return !ChessRules.isCheck(board, 'w');
    }
  },
  {
    id: 18,
    chapterId: 3,
    title: 'C.P.R. Escape #3: CAPTURE!',
    piece: 'B',
    badge: '😋 Chomp!',
    parMoves: 1,
    story: 'The most fun way to escape check is <b>C = CAPTURE!</b> A rude black Queen is checking your King. Can your Bishop eat her? Yes! Chomp!',
    goal: 'Use your Bishop to capture the attacking black Queen!',
    hint: 'Slide your Bishop diagonally right into the black Queen!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'q',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'B',  null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null]
    ],
    targetPiece: 'q'
  },
  {
    id: 19,
    chapterId: 3,
    title: 'CHECKMATE! The Victory Trap!',
    piece: 'Q',
    badge: '🏆 Checkmate',
    parMoves: 1,
    story: 'When the enemy King is attacked (Check) AND cannot Run, Block, or Capture: that is <b>CHECKMATE!</b> The game ends instantly and you win! 🎉',
    goal: 'Deliver checkmate with your Queen with backup from your King!',
    hint: 'Move your Queen to b7 right in front of the King. The King is trapped in the corner and cannot eat the Queen because your White King protects her!',
    board: [
      ['k',  null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['K',  null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'Q',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      // Must be checkmate
      const isCheck = ChessRules.isCheck(board, 'b');
      // Black king has no moves
      const moves = ChessRules.getLegalMoves(board, 0, 0);
      return isCheck && moves.length === 0;
    }
  },
  {
    id: 20,
    chapterId: 3,
    title: 'Beware of Stalemate! (The Oopsie Tie)',
    piece: 'Q',
    badge: '⚠️ Stalemate Warning',
    parMoves: 1,
    story: 'Watch out! If the enemy King is <b>NOT in check</b>, but has <b>ZERO legal moves</b>, that is a <b>Stalemate</b> (a tie game)! To win, you MUST attack the King on the final move. Don\'t trap him without check!',
    goal: 'Deliver true CHECKMATE by zooming your Queen straight up to e8! (Notice: if you trapped him without checking him, that would be a Stalemate tie!)',
    hint: 'Drive your Queen straight up the e-file to e8 to check the King on a8!',
    board: [
      ['k',  null, null, null, null, null, null, null], // a8 (row 0, col 0)
      [null, null, null, null, null, null, null, null],
      [null, 'K',  null, null, null, null, null, null], // b6 (row 2, col 1 - guards a7 & b7)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'Q',  null, null, null], // e4 (row 4, col 4)
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 0);
      return isCheck && moves.length === 0;
    }
  },

  // ================= CHAPTER 4: SPECIAL SUPERPOWERS =================
  {
    id: 21,
    chapterId: 4,
    title: 'Castling: King\'s Castle Bedtime!',
    piece: 'K',
    badge: '🏰 Castling',
    parMoves: 1,
    story: '<b>Castling</b> is the ONLY time in all of chess you move <b>TWO pieces in one single turn</b>!<br><br>' +
           '<b>1. How it works:</b> Grandpa King takes 2 steps toward the corner (e1 to g1), and Rocky the Rook leaps over him to land on f1!<br>' +
           '<b>2. Why do it?</b> It tucks Grandpa King safely behind a shield of pawns and brings the powerful Rook into the battle!<br>' +
           '<i>(Rules: Neither piece can have moved yet, no pieces in between, and King cannot castle out of, through, or into Check).</i>',
    goal: 'Castle Kingside! Click Grandpa King on e1, then tap the highlighted square on g1.',
    hint: 'Click King on e1, then tap g1. Notice how Rocky the Rook automatically jumps over him to f1!',
    options: { castling: { K: true, Q: false } },
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  'P',  'P',  'P',  'P',  'P'],
      ['R',  null, null, null, 'K',  null, null, 'R']
    ],
    validateMove: (from, to, board, moveData) => {
      return moveData && moveData.castling === 'K';
    }
  },
  {
    id: 22,
    chapterId: 4,
    title: 'En Passant: The Ghost Capture!',
    piece: 'P',
    badge: '👻 En Passant',
    parMoves: 1,
    story: '<b>En Passant</b> (*ahn-pah-SAHN*) is French for <i>"in passing"</i>—the most surprising rule in chess!<br><br>' +
           '<b>The Story:</b> When pawns were given the 2-step boost, players tried to sprint past defending pawns without getting eaten. The rule makers said: <i>"You cannot sprint past a guard!"</i><br><br>' +
           '<b>How it works:</b> The black pawn on f5 just leaped 2 steps from f7 right past your pawn on e5. You can strike <b>diagonally into f6</b> (the square it leaped over) as if it had only moved 1 step! The black pawn on f5 vanishes!<br><br>' +
           '<b>⚠️ Golden Rule:</b> You must do it on the <b>very next turn</b> ("use it or lose it")!',
    goal: 'Perform En Passant! Click your White pawn on e5 and step diagonally into f6 to capture the black pawn!',
    hint: 'Click your White pawn on e5, then tap the highlighted square on f6! The black pawn on f5 will disappear!',
    options: { enPassant: { r: 2, c: 5 } },
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, '*',  null, null],
      [null, null, null, null, 'P',  'p',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null]
    ],
    validateMove: (from, to, board, moveData) => {
      return moveData && moveData.enPassant;
    }
  },

  // ================= CHAPTER 5: MINI-GAMES =================
  {
    id: 23,
    chapterId: 5,
    title: 'Pawn Wars Mini-Game!',
    piece: 'P',
    badge: '⚔️ Pawn Battle',
    parMoves: 8,
    story: 'Welcome to your first real battle against Coach Pawny! This is the famous <b>Pawn Race</b> mini-game:<br><br>' +
           '<b>The Setup:</b> 4 White Pawns vs 4 Black Pawns. No other pieces!<br>' +
           '<b>The Winning Rule:</b> The first player to march <b>ANY ONE PAWN</b> all the way to the other end (Row 8) and transform into a Queen wins immediately!<br><br>' +
           '<b>🧠 3 Winning Tips:</b><br>' +
           '1. <b>Protect your friends:</b> Keep your pawns diagonal to each other so they guard each other.<br>' +
           '2. <b>Block enemy pawns:</b> Stand directly in front of enemy pawns to freeze them in place.<br>' +
           '3. <b>Create a "Passed Pawn":</b> Once a pawn has a clear highway with no enemy pawns in front of it, SPRINT to the finish line!',
    goal: 'Be the first to march any pawn to Row 8 and crown a Queen! Take your time and make smart captures.',
    hint: 'Advance your pawns together. If Black captures one of your pawns, recapture immediately with your supporting pawn!',
    isMiniGame: true,
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, 'p',  'p',  'p',  'p',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'P',  'P',  'P',  'P',  null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateGameEnd: (board) => {
      // White wins if white pawn reaches row 0
      for (let c = 0; c < 8; c++) {
        if (board[0][c] === 'P' || board[0][c] === 'Q') return 'win';
        if (board[7][c] === 'p' || board[7][c] === 'q') return 'loss';
      }
      return null;
    }
  },
  {
    id: 24,
    chapterId: 5,
    title: 'Corner the King (Queen + King Mate)',
    piece: 'Q',
    badge: '👑 Royal Finish',
    parMoves: 2,
    story: 'Teamwork makes the dream work! Queen and King work together to corner the enemy King against the edge of the board and deliver checkmate!',
    goal: 'Deliver checkmate to the black King in 2 moves or less!',
    hint: 'Trap the King on the back rank, then deliver the final blow!',
    board: [
      [null, null, null, 'k',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'K',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'Q',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 3);
      return isCheck && moves.length === 0;
    }
  }
];

window.CHAPTERS = CHAPTERS;
window.LEVELS = LEVELS;
