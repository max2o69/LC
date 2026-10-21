// Chess Curriculum for Absolute Beginners (Ages 3 to 103!)
// Progressive, story-based interactive lessons

const CHAPTERS = [
  { id: 1, title: 'Chapter 1: Meet the Heroes', icon: '⭐', desc: 'Learn how each piece moves by collecting shiny stars!' },
  { id: 2, title: 'Chapter 2: Captures & Values', icon: '⚔️', desc: 'Learn who is worth more points and how to win trades.' },
  { id: 3, title: 'Chapter 3: King in Danger (Check & Checkmate)', icon: '👑', desc: 'Learn C.P.R. to escape checks and how to deliver checkmate!' },
  { id: 4, title: 'Chapter 4: Secret Superpowers', icon: '✨', desc: 'Castling, Pawn Promotion, and the sneaky En Passant!' },
  { id: 5, title: 'Chapter 5: Mini-Games & Practice', icon: '🏆', desc: 'Fun mini-battles and playing against Coach Bot!' },
  { id: 6, title: 'Chapter 6: Tactical Superpowers', icon: '⚡', desc: 'The Fork, The Pin, The Skewer, Discovered Attack & Back-Rank Mate!' },
  { id: 7, title: 'Chapter 7: Master the Opening & Endgames', icon: '🎓', desc: 'Center Control, Development, Busting Scholar’s Mate, and Lawnmower Mate!' },
  { id: 8, title: 'Chapter 8: Deadly Combinations', icon: '💥', desc: 'Double Check, Smothered Mate, Deflection & The Greek Gift!' },
  { id: 9, title: 'Chapter 9: Opening Repertoire', icon: '🏛️', desc: 'Italian Game, Queen’s Gambit, Sicilian & London System!' },
  { id: 10, title: 'Chapter 10: Endgame Masterclass', icon: '👑', desc: 'King + Rook Mate, The Opposition, Pawn Escort & Kiss of Death!' }
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
  },

  // ================= CHAPTER 6: TACTICAL SUPERPOWERS =================
  {
    id: 25,
    chapterId: 6,
    title: 'The Knight Fork: Royal Double Strike!',
    piece: 'N',
    badge: '⚡ The Fork',
    parMoves: 1,
    story: '<b>The Fork</b> is one of the most feared tricks in chess! Like a dinner fork sticking into two meatballs at once, one of your pieces attacks two enemy pieces simultaneously.<br><br>' +
           'The Knight is the absolute king of forks because it jumps in an L-shape over other pieces!<br><br>' +
           'Jump your Knight from <b>d5</b> to <b>c7</b>: you will attack the Black King on e8 (CHECK!) and the Black Queen on a8 at the exact same moment! Black must save the King, leaving the Queen helpless!',
    goal: 'Jump your Knight from d5 to c7 to deliver the Royal Fork on the King and Queen!',
    hint: 'Tap your Knight on d5, then click the highlighted square on c7!',
    board: [
      ['q',  null, null, null, 'k',  null, null, 'r' ],
      ['p',  'p',  null, 'p',  'p',  'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'N',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      return to.r === 1 && to.c === 2 && isCheck;
    }
  },
  {
    id: 26,
    chapterId: 6,
    title: 'The Pin: Frozen Like an Ice Cube!',
    piece: 'R',
    badge: '🧊 The Pin',
    parMoves: 1,
    story: '<b>The Pin</b> freezes enemy pieces right in their tracks! 🧊<br><br>' +
           'When your piece aims through an enemy piece toward their King, that enemy piece is <b>pinned</b>. It is illegal for it to step aside because that would expose its King to danger!<br><br>' +
           'Slide your White Rook across to <b>e1</b>. Now the Black Queen on e5 is pinned directly in front of the Black King on e8—she is completely frozen!',
    goal: 'Slide your Rook from a1 to e1 to pin the Black Queen against her King!',
    hint: 'Click your Rook on a1 and slide across to e1 on the same file as the Black King!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'q',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['R',  null, null, null, null, null, 'K',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 7 && to.c === 4;
    }
  },
  {
    id: 27,
    chapterId: 6,
    title: 'The Skewer: The X-Ray Attack!',
    piece: 'R',
    badge: '🍢 The Skewer',
    parMoves: 1,
    story: '<b>The Skewer</b> is like a shish kebab! 🍢 Unlike a pin where the valuable piece hides in the back, in a skewer the <b>big boss (the King) is in front</b>!<br><br>' +
           'Slide your White Rook up from <b>a1 to a4</b>! You will say CHECK to the Black King on e4. When the King runs away, the Black Queen on h4 is completely exposed for the taking!',
    goal: 'Move your Rook from a1 to a4 to skewer the King and Queen on the 4th rank!',
    hint: 'Zoom your Rook straight up to a4. The King will be checked and forced to abandon the Queen!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'k',  null, null, 'q' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['R',  null, null, null, null, null, 'K',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 4 && to.c === 0 && ChessRules.isCheck(board, 'b');
    }
  },
  {
    id: 28,
    chapterId: 6,
    title: 'Discovered Attack: The Ninja Ambush!',
    piece: 'N',
    badge: '🥷 Ambush',
    parMoves: 1,
    story: 'A <b>Discovered Attack</b> is chess’s greatest ninja surprise! 🥷<br><br>' +
           'Your White Rook on d1 wants to blast the Black Queen on d8, but your own Knight on d4 is standing in the way!<br><br>' +
           'Jump your Knight to <b>c6</b> to deliver CHECK to the King on b8! Because the King is in danger, Black has no time to save the Queen from your Rook’s newly opened laser beam!',
    goal: 'Jump your Knight from d4 to c6 with check to uncover your Rook’s attack on the Queen!',
    hint: 'Click the Knight on d4 and jump to c6! Watch the Rook’s line of fire open up!',
    board: [
      [null, 'k',  null, 'q',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'N',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'R',  null, null, 'K',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 2 && to.c === 2 && ChessRules.isCheck(board, 'b');
    }
  },
  {
    id: 29,
    chapterId: 6,
    title: 'Back-Rank Mate: The Castle Trap!',
    piece: 'R',
    badge: '🏰 Trap Mate',
    parMoves: 1,
    story: 'The <b>Back-Rank Checkmate</b> is one of the most common ways beginner games end!<br><br>' +
           'The Black King castled safely behind three pawns on f7, g7, and h7, but forgot to open a window (called <i>"Luft"</i>)! The King is trapped against the back wall!<br><br>' +
           'Zoom your White Rook straight into <b>d8</b> on the back rank for an instant CHECKMATE!',
    goal: 'Move your Rook from d1 all the way up to d8 to deliver the Back-Rank Checkmate!',
    hint: 'Zoom your Rook to d8! The Black King cannot step forward because of its own pawns!',
    board: [
      [null, null, null, null, null, null, 'k',  null],
      [null, null, null, null, null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'K',  'R',  null, 'P',  'P',  'P' ]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 6);
      return to.r === 0 && to.c === 3 && isCheck && moves.length === 0;
    }
  },

  // ================= CHAPTER 7: MASTER THE OPENING & ENDGAMES =================
  {
    id: 30,
    chapterId: 7,
    title: 'Rule of the Center: The Golden Hilltop!',
    piece: 'P',
    badge: '⛰️ Center Hill',
    parMoves: 1,
    story: 'Why do grandmasters always open with the <b>e</b> or <b>d</b> pawns? Because the center four squares (<b>e4, d4, e5, d5</b>) are the hilltop of the chessboard!<br><br>' +
           'From the center, your pieces can see and reach every corner of the board.<br><br>' +
           'Start the game like a master: step your King’s Pawn two squares forward from <b>e2 to e4</b>!',
    goal: 'March your e2 pawn 2 steps forward to e4 to claim the center hilltop!',
    hint: 'Click the pawn in front of King on e2, then click the glowing dot on e4!',
    board: [
      ['r',  'n',  'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  'p',  'p',  'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  'P',  'P',  'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 4 && to.c === 4;
    }
  },
  {
    id: 31,
    chapterId: 7,
    title: 'Develop Your Army: Knights Before Bishops!',
    piece: 'N',
    badge: '🐎 Development',
    parMoves: 1,
    story: '<b>Golden Rule of Openings:</b> Bring out your Knights before your Bishops!<br><br>' +
           'Why? Knights only have one best square to control the center (f3 or c3), while Bishops need to wait to see which diagonal opens up.<br><br>' +
           'Both sides have pushed their pawns to e4 and e5. Bring your Knight out from <b>g1 to f3</b> to attack Black’s e5 pawn and prepare for King castling!',
    goal: 'Develop your Knight from g1 to f3 to attack the center!',
    hint: 'Click the Knight on g1 and jump to f3!',
    board: [
      ['r',  'n',  'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  'p',  null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'p',  null, null, null],
      [null, null, null, null, 'P',  null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  'P',  null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 5 && to.c === 5;
    }
  },
  {
    id: 32,
    chapterId: 7,
    title: 'Bust the Scholar’s Mate! (Defend the Trick)',
    piece: 'P',
    badge: '🛡️ Defense',
    parMoves: 1,
    story: '<b>The Scholar’s Mate Trap:</b> The most famous beginner trick in the world! Black brought their Queen to h4 and Bishop to c5, both aiming right at your weak <b>f2 pawn</b> for an instant checkmate!<br><br>' +
           '<b>Don’t panic!</b> You don’t need to give up. Push your pawn from <b>g2 to g3</b>! This puts up a sturdy shield in front of f2 AND attacks Black’s Queen, forcing her to run away in embarrassment!',
    goal: 'Push your g2 pawn to g3 to shut down the Scholar’s Mate attack!',
    hint: 'Click the pawn on g2 and step forward to g3 to block the Queen’s laser beam!',
    board: [
      ['r',  'n',  'b',  null, 'k',  null, 'n',  'r' ],
      ['p',  'p',  'p',  'p',  null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, 'b',  null, null, null, null, null],
      [null, null, null, null, 'P',  null, null, 'q' ],
      [null, null, null, 'P',  null, null, null, null],
      ['P',  'P',  'P',  null, null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 5 && to.c === 6;
    }
  },
  {
    id: 33,
    chapterId: 7,
    title: 'The Lawnmower Mate (Two Rooks Staircase)',
    piece: 'R',
    badge: '🚜 Lawnmower',
    parMoves: 1,
    story: 'The <b>Lawnmower Mate</b> (or Staircase Mate) is the smoothest endgame in chess! 🚜<br><br>' +
           'Two Rooks work like a tag team: One Rook guards row 7 so the King can never step forward, while the other Rook rolls into the King’s rank to deliver the knockout blow!<br><br>' +
           'Your Rook on b7 holds the guard rail on rank 7. Roll your second Rook from <b>a1 all the way to a8</b> to mow down the back rank for CHECKMATE!',
    goal: 'Drive your a1 Rook straight up to a8 to deliver the Lawnmower Checkmate!',
    hint: 'Zoom your a1 Rook to a8. The King is trapped between the board edge and your b7 Rook!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, 'R',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['R',  null, null, null, null, null, null, 'K' ]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 4);
      return to.r === 0 && to.c === 0 && isCheck && moves.length === 0;
    }
  },

  // ================= CHAPTER 8: DEADLY COMBINATIONS =================
  {
    id: 34,
    chapterId: 8,
    title: 'Double Check: The Unstoppable Shock!',
    piece: 'N',
    badge: '💥 Double Check',
    parMoves: 1,
    story: '<b>Double Check</b> is the most lethal attack in all of chess! ⚡<br><br>' +
           'When TWO pieces check the King at the same time, it is impossible to block both, and impossible to capture both. The enemy King has only one choice: <b>RUN!</b><br><br>' +
           'Your White Rook sits on e1, and your White Knight is on e4. Jump your Knight to <b>d6</b>: the Knight checks the King on e8 AND opens the e-file for the Rook to check as well!',
    goal: 'Jump your Knight from e4 to d6 to deliver an unstoppable Double Check!',
    hint: 'Move your Knight from e4 to d6! Both the Knight and the Rook will check the King!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'N',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'R',  null, 'K',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 2 && to.c === 3 && ChessRules.isCheck(board, 'b');
    }
  },
  {
    id: 35,
    chapterId: 8,
    title: 'The Smothered Mate: Trapped by Friends!',
    piece: 'N',
    badge: '🐴 Smothered',
    parMoves: 1,
    story: 'The <b>Smothered Mate</b> is a legendary checkmate! The enemy King is completely boxed in and suffocated by its own army.<br><br>' +
           'The Black King on h8 is trapped by its own Rook on g8 and pawns on g7 and h7. It has zero escape squares!<br><br>' +
           'Jump your White Knight from <b>e5 to f7</b> to leap over the walls and deliver the famous Smothered Checkmate!',
    goal: 'Jump your Knight from e5 to f7 to deliver the Smothered Checkmate!',
    hint: 'Click your Knight on e5 and jump to f7 right into the corner nest!',
    board: [
      [null, null, null, null, null, null, 'r',  'k' ],
      [null, null, null, null, null, null, 'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'N',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['K',  null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 7);
      return to.r === 1 && to.c === 5 && isCheck && moves.length === 0;
    }
  },
  {
    id: 36,
    chapterId: 8,
    title: 'Deflection: Removing the Guard!',
    piece: 'Q',
    badge: '🎯 Deflection',
    parMoves: 1,
    story: '<b>Deflection</b> is distracting a guard so you can sneak inside! 🥷<br><br>' +
           'The Black Rook on f8 is guarding the back rank. If the Rook leaves, White can deliver instant checkmate with the d1 Rook!<br><br>' +
           'Offer your White Queen on <b>c8</b> (`c4-c8`)! Black must take your Queen, pulling the defender off the back rank!',
    goal: 'Slide your Queen to c8 to deflect the Black Rook!',
    hint: 'Move your Queen from c4 to c8 on the back rank!',
    board: [
      [null, null, null, null, null, 'r',  null, 'k' ],
      [null, null, null, null, null, null, 'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'Q',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'R',  null, null, 'K',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 0 && to.c === 2;
    }
  },
  {
    id: 37,
    chapterId: 8,
    title: 'The Overworked Piece: Too Many Chores!',
    piece: 'N',
    badge: '🧹 Overworked',
    parMoves: 1,
    story: 'An <b>Overworked Piece</b> has two jobs at once! When you attack one job, it has to abandon the other.<br><br>' +
           'The Black Queen on d7 must guard against back-rank mate at d8 AND protect the Bishop on b5. Capture the undefended Bishop with your Knight on <b>b5</b> (`c3-b5`)!',
    goal: 'Capture Black’s Bishop on b5 with your Knight!',
    hint: 'Jump your Knight from c3 to b5 to capture the Bishop!',
    board: [
      [null, null, null, null, null, null, 'k',  null],
      [null, null, null, 'q',  null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, 'b',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'N',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'R',  null, null, 'K',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 3 && to.c === 1;
    }
  },
  {
    id: 38,
    chapterId: 8,
    title: 'Trap the Greedy Queen!',
    piece: 'B',
    badge: '🕸️ Trap',
    parMoves: 1,
    story: 'Beginners often bring their Queen out early hoping for quick snacks. A smart player punishes this by trapping her!<br><br>' +
           'The Black Queen has wandered to <b>a5</b>. Step your Bishop to <b>d2</b> (`c1-d2`) to attack her while keeping all her escape squares cut off!',
    goal: 'Step your Bishop from c1 to d2 to trap the Black Queen!',
    hint: 'Move your Bishop from c1 to d2 to attack the Queen!',
    board: [
      ['r',  'n',  'b',  null, 'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  'p',  'p',  'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      ['q',  null, null, null, null, null, null, null],
      [null, null, null, 'P',  'P',  null, null, null],
      [null, null, 'P',  null, null, null, null, null],
      ['P',  'P',  null, null, null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  null, 'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 6 && to.c === 3;
    }
  },
  {
    id: 39,
    chapterId: 8,
    title: 'The Greek Gift: Royal Sacrifice!',
    piece: 'B',
    badge: '🎁 Greek Gift',
    parMoves: 1,
    story: 'The <b>Greek Gift Sacrifice</b> is the most famous attacking sacrifice in chess history! 🎁<br><br>' +
           'Sacrifice your Bishop by capturing the pawn on <b>h7</b> with check (`d3-h7+`). This blows open Black’s castle doors and drags the King into the line of fire!',
    goal: 'Capture the pawn on h7 with your Bishop to deliver check!',
    hint: 'Click your Bishop on d3 and capture the pawn on h7!',
    board: [
      [null, null, null, null, null, null, 'k',  null],
      [null, null, null, null, null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'B',  null, 'N',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'K',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 1 && to.c === 7 && ChessRules.isCheck(board, 'b');
    }
  },

  // ================= CHAPTER 9: OPENING REPERTOIRE =================
  {
    id: 40,
    chapterId: 9,
    title: 'The Italian Game: Giuoco Piano',
    piece: 'B',
    badge: '🏛️ Italian Game',
    parMoves: 1,
    story: 'The <b>Italian Game</b> has been played for over 500 years and is the cleanest opening for beginners!<br><br>' +
           'After 1. e4 e5 and 2. Nf3 Nc6, develop your light-squared Bishop to <b>c4</b> (`f1-c4`). From c4, your Bishop controls the center and lasers in on Black’s weakest square: f7!',
    goal: 'Develop your Bishop from f1 to c4 to complete the Italian Game setup!',
    hint: 'Move your Bishop from f1 diagonally to c4!',
    board: [
      ['r',  null, 'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  'p',  null, 'p',  'p',  'p' ],
      [null, null, 'n',  null, null, null, null, null],
      [null, null, null, null, 'p',  null, null, null],
      [null, null, null, null, 'P',  null, null, null],
      [null, null, null, null, null, 'N',  null, null],
      ['P',  'P',  'P',  'P',  null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  null, 'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 4 && to.c === 2;
    }
  },
  {
    id: 41,
    chapterId: 9,
    title: 'The Fried Liver Attack: Double Strike!',
    piece: 'N',
    badge: '🍗 Fried Liver',
    parMoves: 1,
    story: 'The <b>Fried Liver Attack</b> is every beginner’s favorite weapon! 🍗<br><br>' +
           'In the Italian Game, your Bishop already attacks f7 from c4. Jump your Knight to <b>g5</b> (`f3-g5`) so both pieces double-team the f7 square with unstoppable firepower!',
    goal: 'Jump your Knight from f3 to g5 to double-attack f7!',
    hint: 'Click the Knight on f3 and leap to g5!',
    board: [
      ['r',  null, 'b',  'q',  'k',  'b',  null, 'r' ],
      ['p',  'p',  'p',  'p',  null, 'p',  'p',  'p' ],
      [null, null, 'n',  null, null, 'n',  null, null],
      [null, null, null, null, 'p',  null, null, null],
      [null, null, 'B',  null, 'P',  null, null, null],
      [null, null, null, null, null, 'N',  null, null],
      ['P',  'P',  'P',  'P',  null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  null, null, 'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 3 && to.c === 6;
    }
  },
  {
    id: 42,
    chapterId: 9,
    title: 'The Queen’s Gambit: The Center Offer',
    piece: 'P',
    badge: '👑 Queen’s Gambit',
    parMoves: 1,
    story: 'The <b>Queen’s Gambit</b> is the most popular opening at the World Championship level!<br><br>' +
           'After 1. d4 d5, offer your c-pawn by playing <b>c4</b> (`c2-c4`). If Black accepts, you dominate the center with e4!',
    goal: 'Push your c2 pawn two squares to c4 to launch the Queen’s Gambit!',
    hint: 'Click your pawn on c2 and march to c4!',
    board: [
      ['r',  'n',  'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  null, 'p',  'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'p',  null, null, null, null],
      [null, null, null, 'P',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  null, 'P',  'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 4 && to.c === 2;
    }
  },
  {
    id: 43,
    chapterId: 9,
    title: 'Facing the Sicilian Defense!',
    piece: 'N',
    badge: '🛡️ Sicilian',
    parMoves: 1,
    story: 'When you play 1. e4, Black often responds with the sharp <b>Sicilian Defense</b> (1... c5)!<br><br>' +
           'Develop your Knight to <b>f3</b> (`g1-f3`) to prepare your central breakthrough with d4!',
    goal: 'Develop your Knight to f3 against the Sicilian Defense!',
    hint: 'Move your Knight from g1 to f3!',
    board: [
      ['r',  'n',  'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  null, 'p',  'p',  'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, 'p',  null, null, null, null, null],
      [null, null, null, null, 'P',  null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  'P',  null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 5 && to.c === 5;
    }
  },
  {
    id: 44,
    chapterId: 9,
    title: 'The London System: The Unbreakable Wall',
    piece: 'B',
    badge: '🏰 London System',
    parMoves: 1,
    story: 'The <b>London System</b> is famous for being rock-solid and super easy to learn!<br><br>' +
           'After 1. d4 d5, bring your dark-squared Bishop outside the pawn wall to <b>f4</b> (`c1-f4`) BEFORE you push e3!',
    goal: 'Develop your Bishop from c1 to f4 in the London System!',
    hint: 'Slide your Bishop diagonally from c1 to f4!',
    board: [
      ['r',  'n',  'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  null, 'p',  'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'p',  null, null, null, null],
      [null, null, null, 'P',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  null, 'P',  'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 4 && to.c === 5;
    }
  },
  {
    id: 45,
    chapterId: 9,
    title: 'Never Play f6! Punish the Weakness',
    piece: 'Q',
    badge: '⚠️ f6 Trap',
    parMoves: 1,
    story: 'Grandmasters have a famous saying: <i>"Never play f6!"</i> Pushing the f-pawn opens the fatal diagonal to the King.<br><br>' +
           'Black carelessly played 1... f6. Punish them immediately: fly your Queen out to <b>h5</b> (`d1-h5`) with CHECK!',
    goal: 'Fly your Queen from d1 to h5 to punish the weakened diagonal!',
    hint: 'Zoom your Queen diagonally to h5 to say check!',
    board: [
      ['r',  'n',  'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  'p',  'p',  null, 'p',  'p' ],
      [null, null, null, null, null, 'p',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'P',  null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  'P',  null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  'N',  'R' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 3 && to.c === 7 && ChessRules.isCheck(board, 'b');
    }
  },

  // ================= CHAPTER 10: ENDGAME MASTERCLASS =================
  {
    id: 46,
    chapterId: 10,
    title: 'King & Rook Checkmate: The Box Method',
    piece: 'R',
    badge: '📦 The Box',
    parMoves: 1,
    story: 'A Rook cannot checkmate a lone King by itself—it needs Grandpa King’s help!<br><br>' +
           'White’s King stands opposite on e6, blocking all three escape squares (d7, e7, f7). Drop your Rook to <b>a8</b> (`a7-a8`) for CHECKMATE!',
    goal: 'Drop your Rook from a7 to a8 to deliver the King & Rook checkmate!',
    hint: 'Zoom your Rook to a8 to deliver the final blow!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      ['R',  null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 4);
      return to.r === 0 && to.c === 0 && isCheck && moves.length === 0;
    }
  },
  {
    id: 47,
    chapterId: 10,
    title: 'The Magic of Opposition: Taking the Lead!',
    piece: 'K',
    badge: '👑 Opposition',
    parMoves: 1,
    story: 'In King and pawn endgames, <b>Opposition</b> means putting your King directly opposite the enemy King with one square in between.<br><br>' +
           'Black’s King stands on d7. Step your King forward from <b>d4 to d5</b> (`d4-d5`) to seize the vertical Opposition! Now Black must step aside!',
    goal: 'Step your King to d5 to seize the Opposition against Black’s King!',
    hint: 'Move your King from d4 straight up to d5!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'k',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'K',  null, null, null, null],
      [null, null, null, 'P',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 3 && to.c === 3;
    }
  },
  {
    id: 48,
    chapterId: 10,
    title: 'The Square of the Pawn: The Mental Box',
    piece: 'P',
    badge: '📐 Rule of Square',
    parMoves: 1,
    story: 'Can the enemy King catch your runaway pawn? Count the squares to the back rank to create a mental square box! If the enemy King cannot step inside the box, the pawn CANNOT be caught!<br><br>' +
           'Sprint your pawn from <b>a5 to a6</b> (`a5-a6`). The Black King is outside the box and can never catch you!',
    goal: 'Sprint your passed pawn from a5 to a6!',
    hint: 'Step your pawn forward to a6!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, 'k',  null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, 'K' ]
    ],
    validateMove: (from, to, board) => {
      return to.r === 2 && to.c === 0;
    }
  },
  {
    id: 49,
    chapterId: 10,
    title: 'Promoting with King Escort!',
    piece: 'P',
    badge: '🛡️ Escort',
    parMoves: 1,
    story: 'A King must escort its pawn to the promotion square! Your King stands proudly on c7, shielding the runway.<br><br>' +
           'Push your pawn forward to <b>d7</b> (`d6-d7`): on your next turn, you will crown a new Queen!',
    goal: 'Push your pawn from d6 to d7 under the King’s protection!',
    hint: 'March your pawn to d7 right beside the King!',
    board: [
      [null, null, null, null, null, 'k',  null, null],
      [null, null, 'K',  null, null, null, null, null],
      [null, null, null, 'P',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 1 && to.c === 3;
    }
  },
  {
    id: 50,
    chapterId: 10,
    title: 'The Kiss of Death Checkmate!',
    piece: 'Q',
    badge: '💋 Kiss of Death',
    parMoves: 1,
    story: 'The most famous Queen checkmate is called <b>The Kiss of Death</b>! 💋<br><br>' +
           'The Queen steps directly in front of the enemy King with King protection. Fly your Queen to <b>g7</b> (`b2-g7`) right into the King’s face for CHECKMATE!',
    goal: 'Fly your Queen from b2 to g7 to deliver the Kiss of Death checkmate!',
    hint: 'Zoom your Queen to g7! The King cannot take her because your King on g6 protects her!',
    board: [
      [null, null, null, null, null, null, null, 'k' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'K',  null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'Q',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 7);
      return to.r === 1 && to.c === 6 && isCheck && moves.length === 0;
    }
  },
  {
    id: 51,
    chapterId: 10,
    title: 'The Desperado Stalemate Trick!',
    piece: 'Q',
    badge: '🎭 Desperado',
    parMoves: 1,
    story: 'Down on material? Don’t resign—aim for a <b>Stalemate</b>! If your King has no legal moves and isn’t in check, you save a draw!<br><br>' +
           'White’s King on a1 is completely trapped. Throw your Queen to <b>g3</b> with check (`g1-g3+`). When Black takes your Queen, it’s instant STALEMATE!',
    goal: 'Sacrifice your Queen to g3 to save a draw by stalemate!',
    hint: 'Move your Queen to g3 with check! Black is forced to capture, triggering stalemate!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'q',  'k',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['K',  null, null, null, null, null, 'Q',  null]
    ],
    validateMove: (from, to, board) => {
      return to.r === 5 && to.c === 6 && ChessRules.isCheck(board, 'b');
    }
  },
  {
    id: 52,
    chapterId: 10,
    title: 'The Master Graduation: Final Checkmate!',
    piece: 'Q',
    badge: '🎓 Master Final',
    parMoves: 1,
    story: '<b>Your Final Exam:</b> You have learned every piece, rule, opening, tactic, and endgame in the royal game!<br><br>' +
           'Bring home the championship: your Bishop on c4 is aiming at f7. Strike with your Queen from <b>f6 to f7</b> (`f6-f7`) for the Grandmaster CHECKMATE!',
    goal: 'Deliver the championship checkmate with your Queen on f7!',
    hint: 'Fly your Queen to f7! The Bishop on c4 backs her up for checkmate!',
    board: [
      [null, null, null, null, null, 'k',  null, 'r' ],
      [null, null, null, 'p',  null, null, 'p',  'p' ],
      [null, null, null, null, null, 'Q',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'B',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null]
    ],
    validateMove: (from, to, board) => {
      const isCheck = ChessRules.isCheck(board, 'b');
      const moves = ChessRules.getLegalMoves(board, 0, 5);
      return to.r === 1 && to.c === 5 && isCheck && moves.length === 0;
    }
  }
];

window.CHAPTERS = CHAPTERS;
window.LEVELS = LEVELS;
