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
  { id: 9, title: 'Chapter 9: Opening Repertoire', icon: '🏛️', desc: 'Italian Game, Fried Liver, Queen’s Gambit, Sicilian & London System!' },
  { id: 10, title: 'Chapter 10: Endgame Masterclass', icon: '👑', desc: 'King + Rook Box Method, Opposition, Pawn Escort & Anastasia’s Mate!' }
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
      [null, null, null, null, null, '*',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, '*',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, 'B',  null, null]
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
      [null, null, '*',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, '*',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'B',  null, null, null, null, null]
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
      [null, null, null, '*',  null, null, '*',  null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'Q',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, '*',  null, null, null, null, null, null],
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
    story: 'Meet <b>Ned the Knight</b>! He is a jumping horse who always moves in an "L-shape": <b>Gallop 2 squares straight, then Turn 1 square sideways!</b>',
    goal: 'Gallop your Knight to collect both stars!',
    hint: 'Move 2 squares up and 1 square right to c3, then 2 squares up and 1 square right to e4!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, '*',  null, null, null],
      [null, null, '*',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'N',  null, null, null, null, null, null]
    ]
  },
  {
    id: 8,
    chapterId: 1,
    title: 'The Knight Jumps Over Walls!',
    piece: 'N',
    badge: '♘ Knight',
    parMoves: 2,
    story: 'Here is the Knight\'s magical superpower: <b>HE CAN JUMP OVER ANY PIECE!</b> No piece can block a horse. Look at those pawns blocking the way—just leap right over them!',
    goal: 'Leap over the wall to grab star 1 on f6, then leap to grab star 2 on h7!',
    hint: 'First jump: leap over the wall to f6! Second jump: leap to h7!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, '*' ],
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
      [null, null, null, null, '*',  null, null, null],
      [null, null, null, null, '*',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'P',  null, null, null],
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
      [null, null, null, null, null, 'p',  null, null],
      [null, null, null, null, 'p',  null, null, null],
      [null, null, null, 'P',  null, null, null, null],
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
    parMoves: 2,
    story: 'If a brave little Pawn marches all the way across the board to the 8th row, magic happens! 🌟 <b>PROMOTION!</b> He transforms into a mighty Queen!',
    goal: 'Step forward to e7, then march into e8 to transform into a Queen!',
    hint: 'First march to e7, then step onto e8 to crown your Queen!',
    board: [
      [null, null, null, null, '*',  null, null, null],
      [null, null, null, null, '*',  null, null, null],
      [null, null, null, null, 'P',  null, null, null],
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
    parMoves: 2,
    story: 'When an enemy piece is sitting undefended with no friends protecting it, that\'s a <b>Free Snack!</b> Grab the undefended Knight on c7, then zoom across the 7th rank to grab the undefended Bishop on g7!',
    goal: 'Capture the Knight on c7, then capture the Bishop on g7!',
    hint: 'First zoom Rook up to c7, then slide right to g7!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, 'n',  null, null, null, 'b',  null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'R',  null, 'K',  null, null, null]
    ],
    sequence: [
      {
        move: 'c1-c7',
        goal: 'Capture the undefended Knight on c7!',
        hint: 'Zoom your Rook straight up from c1 to c7!',
        explanation: 'Yum! Knight captured! Black King steps to f8.',
        response: 'e8-f8'
      },
      {
        move: 'c7-g7',
        goal: 'Now zoom across the 7th rank to capture the free Bishop on g7!',
        hint: 'Drive your Rook right from c7 to g7!',
        explanation: 'Awesome! You captured two undefended pieces back-to-back!'
      }
    ]
  },
  {
    id: 13,
    chapterId: 2,
    title: 'Piece Points: The Smart Trade!',
    piece: 'B',
    badge: '💰 Point Values',
    parMoves: 2,
    story: 'In chess, every piece has point values!<br><b>Pawn = 1 point</b> ♙<br><b>Knight / Bishop = 3 points</b> ♘♗<br><b>Rook = 5 points</b> ♖<br><b>Queen = 9 points</b> ♕<br><br>' +
           'A <b>Smart Trade</b> means giving up a piece of lower value to win a piece of higher value! Trade your 3-point Bishop for Black\'s 9-point Queen on f7 (+6 points profit), then capture the free Rook on d8!',
    goal: 'Trade your Bishop for Black\'s Queen on f7, then capture the Rook on d8!',
    hint: 'First slide Bishop to f7 to take Queen. Then zoom your Queen up to d8!',
    board: [
      [null, null, null, 'r',  'k',  null, null, null],
      [null, null, null, null, null, 'q',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'B',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'Q',  null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'c4-f7',
        goal: 'Capture Black\'s 9-point Queen on f7 with your 3-point Bishop!',
        hint: 'Slide Bishop diagonally from c4 to f7!',
        explanation: 'Bxf7+! You won the Queen! Black King is forced to recapture your Bishop.',
        response: 'e8-f7'
      },
      {
        move: 'd1-d8',
        goal: 'Now zoom your Queen up the d-file to capture the undefended Rook on d8!',
        hint: 'Drive Queen from d1 straight up to d8!',
        explanation: 'Magnificent! You traded a 3-point Bishop for a Queen and Rook (+11 points ahead)!'
      }
    ]
  },
  {
    id: 14,
    chapterId: 2,
    title: 'Guard Your Friends!',
    piece: 'R',
    badge: '🛡️ Defending',
    parMoves: 2,
    story: 'A good kingdom protects its friends! The Black Queen on c8 wants to eat your Bishop on b7. Move your Rook from a1 to b1 to <b>guard</b> your Bishop! When the greedy Queen takes anyway, recapture her with your Rook!',
    goal: 'Slide Rook to b1 to guard your Bishop, then recapture the greedy Queen on b7!',
    hint: 'Move Rook from a1 to b1 to protect the b-file!',
    board: [
      [null, null, 'q',  null, null, null, 'k',  null],
      [null, 'B',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['R',  null, null, null, null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'a1-b1',
        goal: 'Slide your Rook to b1 to guard the Bishop on b7!',
        hint: 'Move Rook from a1 to b1!',
        explanation: 'Great guard! Your Rook now guards the Bishop. Black Queen greedily takes: Qxb7!',
        response: 'c8-b7'
      },
      {
        move: 'b1-b7',
        goal: 'The Queen took your guarded Bishop! Recapture her with your Rook on b7!',
        hint: 'Drive your Rook straight up from b1 to b7 to capture the Queen!',
        explanation: 'Brilliant! Because you guarded your Bishop, you traded 3 points for 9 points!'
      }
    ]
  },

  // ================= CHAPTER 3: KING IN DANGER =================
  {
    id: 15,
    chapterId: 3,
    title: 'Say "CHECK!"',
    piece: 'R',
    badge: '⚠️ Check!',
    parMoves: 2,
    story: 'When you say <b>CHECK!</b>, the enemy King is under attack and MUST react! While the King is running for his life, his army is left completely defenseless.',
    goal: 'Drive your Rook to c8 to say CHECK, then capture the free Knight on a8!',
    hint: 'Drive Rook to c8 with check, then take the Knight on a8!',
    board: [
      ['n',  null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'R',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'c4-c8',
        goal: 'Drive your Rook up to c8 to say CHECK to the Black King!',
        hint: 'Zoom Rook from c4 to c8!',
        explanation: 'CHECK! Black King is in danger and must run to f7!',
        response: 'e8-f7'
      },
      {
        move: 'c8-a8',
        goal: 'The King ran away! Now slide your Rook left to capture the free Knight on a8!',
        hint: 'Move Rook from c8 to a8 to win the Knight!',
        explanation: 'Superb! Giving check forced the King to flee and won you a free Knight!'
      }
    ]
  },
  {
    id: 16,
    chapterId: 3,
    title: 'C.P.R. Escape #1: RUN!',
    piece: 'K',
    badge: '🏃 Run Away',
    parMoves: 2,
    story: 'When you are in CHECK, remember <b>C.P.R.</b>:<br><b>C</b> = Capture the attacker<br><b>P</b> = Protect (block with a piece)<br><b>R</b> = <b>RUN AWAY!</b><br><br>' +
           'The enemy Rook on e8 is checking Grandpa King on e1! Step sideways to d1 to escape. When the Rook chases you with Rd8+, step safely behind your pawn to c1!',
    goal: 'Run Grandpa King to d1, then run to safety on c1!',
    hint: 'Step King to d1, then to c1!',
    board: [
      [null, null, null, null, 'r',  null, 'k',  null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'P',  'P',  null, null, null, null],
      [null, null, null, null, 'K',  null, null, null]
    ],
    sequence: [
      {
        move: 'e1-d1',
        goal: 'King is in check! Run to d1 away from the e-file laser beam!',
        hint: 'Step King from e1 to d1!',
        explanation: 'Escape #1 successful! Black Rook chases you with Rd8+.',
        response: 'e8-d8'
      },
      {
        move: 'd1-c1',
        goal: 'The Rook is chasing! Step King to c1 behind your sturdy pawn shield!',
        hint: 'Step King to c1!',
        explanation: 'Safe and sound! Grandpa King successfully ran away from the attacker!'
      }
    ]
  },
  {
    id: 17,
    chapterId: 3,
    title: 'C.P.R. Escape #2: BLOCK!',
    piece: 'B',
    badge: '🛡️ Block & Shield',
    parMoves: 2,
    story: 'Grandpa King is in check from a far-away enemy Rook on e8! Use <b>P = Protect / Block</b>: slide your Bishop to e2 to intercept the laser beam like a shield! Then develop your Knight to f3!',
    goal: 'Slide Bishop to e2 to block the check, then develop Knight to f3!',
    hint: 'Move Bishop from f1 to e2 to put up the shield!',
    board: [
      [null, null, null, null, 'r',  null, 'k',  null],
      [null, null, null, 'p',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  'P',  'P',  null, null, 'P',  'P',  'P' ],
      [null, null, null, null, 'K',  'B',  'N',  null]
    ],
    sequence: [
      {
        move: 'f1-e2',
        goal: 'Slide your Bishop to e2 to block the Rook\'s check on your King!',
        hint: 'Move Bishop from f1 to e2!',
        explanation: 'Shield is up! The check is blocked. Black pushes pawn d7-d5.',
        response: 'd7-d5'
      },
      {
        move: 'g1-f3',
        goal: 'Grandpa King is safe! Now develop your Knight to f3 toward the center!',
        hint: 'Jump Knight from g1 to f3!',
        explanation: 'Brilliant defense! You blocked the dangerous check and mobilized your army!'
      }
    ]
  },
  {
    id: 18,
    chapterId: 3,
    title: 'C.P.R. Escape #3: CAPTURE!',
    piece: 'B',
    badge: '😋 Chomp!',
    parMoves: 2,
    story: 'The most satisfying way to escape check is <b>C = CAPTURE!</b> A rude Black Queen is checking your King from e5. Chomp her with your Bishop on b2, then develop your Knight to f3!',
    goal: 'Capture the checking Queen with your Bishop on e5, then develop Knight to f3!',
    hint: 'Slide Bishop from b2 to e5 to chomp the Queen!',
    board: [
      [null, null, null, null, null, null, 'k',  null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'p',  null, null, null, null],
      [null, null, null, null, 'q',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'B',  null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, 'N',  null]
    ],
    sequence: [
      {
        move: 'b2-e5',
        goal: 'Black Queen is checking your King from e5! Capture her with your Bishop!',
        hint: 'Slide Bishop diagonally from b2 to e5!',
        explanation: 'Chomp! Attacker captured! Black recaptures with pawn d6xe5.',
        response: 'd6-e5'
      },
      {
        move: 'g1-f3',
        goal: 'The check is gone! Develop your Knight from g1 to f3 to claim the center!',
        hint: 'Jump Knight to f3!',
        explanation: 'Awesome! You solved the check with C-Capture and took control of the board!'
      }
    ]
  },
  {
    id: 19,
    chapterId: 3,
    title: 'CHECKMATE! The Victory Trap!',
    piece: 'Q',
    badge: '🏆 Checkmate',
    parMoves: 2,
    story: 'When the enemy King is attacked (Check) AND cannot Run, Block, or Capture: that is <b>CHECKMATE!</b> The game ends instantly and you win! 🎉<br><br>' +
           'Step 1: Check the King with Queen across to f8! Step 2: Bring Queen to g7 right next to the King for CHECKMATE!',
    goal: 'Check the King with Queen to f8, then deliver Checkmate on g7!',
    hint: 'Move Queen from a8 to f8, then step down to g7 supported by your King on f6!',
    board: [
      ['Q',  null, null, null, null, null, null, 'k' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, 'K',  null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    sequence: [
      {
        move: 'a8-f8',
        goal: 'Zoom your Queen across to f8 to check the King on the 8th rank!',
        hint: 'Drive Queen from a8 across row 8 to f8!',
        explanation: 'CHECK! Black King has only one legal square: h7.',
        response: 'h8-h7'
      },
      {
        move: 'f8-g7',
        goal: 'Deliver CHECKMATE on g7! White King on f6 protects the Queen!',
        hint: 'Slide Queen diagonally from f8 to g7 right next to the King!',
        explanation: 'VICTORY! CHECKMATE! King has no escape squares!'
      }
    ]
  },
  {
    id: 20,
    chapterId: 3,
    title: 'Beware of Stalemate! (The Oopsie Tie)',
    piece: 'R',
    badge: '⚠️ Stalemate Warning',
    parMoves: 2,
    story: 'Watch out! If the enemy King is <b>NOT in check</b>, but has <b>ZERO legal moves</b>, that is a <b>Stalemate</b> (an accidental tie)!<br><br>' +
           'To win, you must keep the King under check! Check with your Rook on h4, then deliver checkmate on g7 with Queen!',
    goal: 'Check with Rh4+, then deliver true Checkmate on g7 with Queen!',
    hint: 'First slide Rook to h4 with check, then Queen to g7!',
    board: [
      [null, null, null, null, null, null, null, 'k' ],
      [null, 'Q',  null, null, null, null, null, null],
      [null, null, null, null, null, null, 'K',  null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'R',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    sequence: [
      {
        move: 'e4-h4',
        goal: 'Give check with your Rook on h4 to force the King to move without stalemating!',
        hint: 'Slide Rook from e4 to h4 with check!',
        explanation: 'CHECK! Black King is forced to step to g8.',
        response: 'h8-g8'
      },
      {
        move: 'b7-g7',
        goal: 'Now deliver CHECKMATE with Queen on g7 supported by your King!',
        hint: 'Slide Queen from b7 to g7!',
        explanation: 'CHECKMATE! You avoided stalemate by keeping the checks flowing!'
      }
    ]
  },

  // ================= CHAPTER 4: SPECIAL SUPERPOWERS =================
  {
    id: 21,
    chapterId: 4,
    title: 'Castling: King\'s Castle Bedtime!',
    piece: 'K',
    badge: '🏰 Castling',
    parMoves: 2,
    story: '<b>Castling</b> is the ONLY time in chess you move <b>TWO pieces in one single turn</b>!<br><br>' +
           'King jumps 2 squares to g1, and Rook leaps over to f1! Then slide your new castle Rook to e1 to take control of the open e-file with check!',
    goal: 'Castle Kingside (e1 to g1), then slide Rook to e1+ with check!',
    hint: 'Move King from e1 to g1 to castle! Then move Rook from f1 to e1!',
    options: { castling: { K: true, Q: false } },
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, 'p',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, 'R' ]
    ],
    sequence: [
      {
        move: 'e1-g1',
        goal: 'Castle Kingside! Move Grandpa King 2 squares from e1 to g1!',
        hint: 'Click King on e1, tap g1!',
        explanation: 'Castled! King is tucked in bed and Rook leaps to f1! Black plays ...d7-d5.',
        response: 'd7-d5'
      },
      {
        move: 'f1-e1',
        goal: 'Your castle Rook is ready! Slide Rook to e1+ to attack down the open file with check!',
        hint: 'Slide Rook from f1 to e1!',
        explanation: 'Awesome! Castling made your King completely safe and activated your Rook!'
      }
    ]
  },
  {
    id: 22,
    chapterId: 4,
    title: 'En Passant: The Ghost Capture!',
    piece: 'P',
    badge: '👻 En Passant',
    parMoves: 2,
    story: '<b>En Passant</b> (*ahn-pah-SAHN*) is French for <i>"in passing"</i>! When Black\'s pawn sprints 2 squares past your pawn on e5, you can strike diagonally into f6 as if it only moved 1 step! Then push your pawn to f7 toward Queening!',
    goal: 'Capture en passant on f6, then advance pawn to f7!',
    hint: 'Step pawn diagonally to f6 to capture the passing pawn, then march to f7!',
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
    sequence: [
      {
        move: 'e5-f6',
        goal: 'Perform En Passant! Strike diagonally into f6 to vaporize the black pawn on f5!',
        hint: 'Step pawn from e5 diagonally into f6!',
        explanation: 'Ghost capture! The f5 pawn vanished into thin air! Black King runs to d7.',
        response: 'e8-d7'
      },
      {
        move: 'f6-f7',
        goal: 'Sprint forward to f7! Just one step away from crowning a Queen!',
        hint: 'Push pawn from f6 straight up to f7!',
        explanation: 'Magnificent! En Passant opened a clear highway for your pawn!'
      }
    ]
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
           '1. <b>Protect your friends:</b> Keep your pawns diagonal to each other.<br>' +
           '2. <b>Block enemy pawns:</b> Stand directly in front of enemy pawns.<br>' +
           '3. <b>Create a "Passed Pawn":</b> Sprint down the clear highway!',
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
    story: 'Teamwork makes the dream work! Queen and King work together to corner the enemy King against the board edge and deliver checkmate in 2 moves!',
    goal: 'Cut off the King on the 7th rank with Qa7, then deliver Checkmate on f7!',
    hint: 'Slide Queen to a7 to trap the King on the back rank, then deliver Qf7#!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null],
      [null, null, null, null, null, null, null, null],
      ['Q',  null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    sequence: [
      {
        move: 'a4-a7',
        goal: 'Cut off the King! Slide Queen to a7 so the Black King cannot leave rank 8!',
        hint: 'Slide Queen to a7!',
        explanation: 'King trapped on the back wall! Black King is forced to f8.',
        response: 'e8-f8'
      },
      {
        move: 'a7-f7',
        goal: 'Now deliver CHECKMATE on f7! Your King on e6 supports the Queen!',
        hint: 'Slide Queen to f7!',
        explanation: 'CHECKMATE! The King and Queen worked together to corner and defeat the King!'
      }
    ]
  },

  // ================= CHAPTER 6: TACTICAL SUPERPOWERS =================
  {
    id: 25,
    chapterId: 6,
    title: 'The Knight Fork: Royal Double Strike!',
    piece: 'N',
    badge: '⚡ The Fork',
    parMoves: 2,
    story: '<b>The Fork</b> is one of the most feared tricks in chess! Like a dinner fork sticking into two meatballs at once, one of your pieces attacks two enemy pieces simultaneously.<br><br>' +
           'Step 1: Jump your Knight from d5 to c7: you check the King on e8 AND attack the Queen on a8! Black must save the King, leaving the Queen helpless on move 2!',
    goal: 'Deliver the Royal Fork with Nd5-c7+, then capture the Queen on a8!',
    hint: 'Jump Knight to c7 with check, then jump to a8 to take the Queen!',
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
    sequence: [
      {
        move: 'd5-c7',
        goal: 'Jump Knight to c7 to fork the King and Queen!',
        hint: 'Move Knight from d5 to c7 with check!',
        explanation: 'Royal Fork! Black King is in check and must run to d8!',
        response: 'e8-d8'
      },
      {
        move: 'c7-a8',
        goal: 'The King ran away! Jump Knight to a8 to capture the helpless Queen (+9 points)!',
        hint: 'Jump Knight from c7 to a8!',
        explanation: 'Spectacular! You executed the Knight Fork and captured the Queen!'
      }
    ]
  },
  {
    id: 26,
    chapterId: 6,
    title: 'The Pin: Frozen Like an Ice Cube!',
    piece: 'R',
    badge: '🧊 The Pin',
    parMoves: 2,
    story: '<b>The Pin</b> freezes enemy pieces right in their tracks! 🧊 When your piece aims through an enemy piece toward their King, that piece is pinned and cannot step aside!<br><br>' +
           'Step 1: Slide Rook to e1 to pin Black\'s Queen to her King. Step 2: Capture the frozen Queen on e5!',
    goal: 'Pin the Queen with Ra1-e1, then capture her on e5!',
    hint: 'Slide Rook across to e1, then capture the pinned Queen on e5!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, 'p',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'q',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['R',  null, null, null, null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'a1-e1',
        goal: 'Slide Rook to e1 to pin the Queen directly to the Black King!',
        hint: 'Move Rook from a1 to e1!',
        explanation: 'Frozen! The Queen cannot move because her King would be in check! Black defends with d7-d6.',
        response: 'd7-d6'
      },
      {
        move: 'e1-e5',
        goal: 'The Queen is completely frozen! Capture her with your Rook on e5!',
        hint: 'Zoom Rook straight up to e5 to capture the Queen!',
        explanation: 'Brilliant! You pinned the Queen and captured her for huge profit!'
      }
    ]
  },
  {
    id: 27,
    chapterId: 6,
    title: 'The Skewer: The X-Ray Attack!',
    piece: 'R',
    badge: '🍢 The Skewer',
    parMoves: 2,
    story: '<b>The Skewer</b> is like a shish kebab! 🍢 Unlike a pin where the big piece hides in back, in a skewer the <b>King is in front</b>!<br><br>' +
           'Step 1: Move Rook to a4 to check the King on e4. When King runs to d5, the Queen on h4 is completely exposed for the taking!',
    goal: 'Skewer King and Queen with Ra1-a4+, then capture the Queen on h4!',
    hint: 'Zoom Rook to a4 with check, then drive across to h4 to take the Queen!',
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
    sequence: [
      {
        move: 'a1-a4',
        goal: 'Zoom Rook up to a4 to check King and skewer the Queen on the 4th rank!',
        hint: 'Drive Rook from a1 to a4!',
        explanation: 'SKEWER! Black King is checked and forced to step away to d5!',
        response: 'e4-d5'
      },
      {
        move: 'a4-h4',
        goal: 'The King ran away! Zoom your Rook across to h4 to capture the exposed Queen!',
        hint: 'Drive Rook across rank 4 to h4!',
        explanation: 'Delicious! The skewer forced the King away and won the Queen!'
      }
    ]
  },
  {
    id: 28,
    chapterId: 6,
    title: 'Discovered Attack: The Ninja Ambush!',
    piece: 'N',
    badge: '🥷 Ambush',
    parMoves: 2,
    story: 'A <b>Discovered Attack</b> is chess\'s greatest ninja surprise! 🥷<br><br>' +
           'Step 1: Jump Knight to c6 with check to Black King on b8! This opens up your Rook\'s laser beam at Black\'s Queen on d8. Black King must run to a8, leaving Queen doomed on move 2!',
    goal: 'Jump Knight to c6 with check, then capture the Queen on d8 with your Rook!',
    hint: 'Move Knight to c6 with check, then zoom Rook up to d8!',
    board: [
      [null, 'k',  null, 'q',  null, null, null, null],
      ['p',  'p',  'p',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'N',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'R',  null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'd4-c6',
        goal: 'Jump Knight to c6 with check to uncover the Rook\'s attack on the Queen!',
        hint: 'Move Knight from d4 to c6!',
        explanation: 'Ninja Ambush! Check on the King! Black King must flee to a8.',
        response: 'b8-a8'
      },
      {
        move: 'd1-d8',
        goal: 'Now zoom your Rook straight up to d8 to capture the Queen for CHECKMATE!',
        hint: 'Drive Rook from d1 to d8!',
        explanation: 'CHECKMATE! The discovered attack won the Queen and finished the game!'
      }
    ]
  },
  {
    id: 29,
    chapterId: 6,
    title: 'Back-Rank Mate: The Castle Trap!',
    piece: 'R',
    badge: '🏰 Trap Mate',
    parMoves: 2,
    story: 'The <b>Back-Rank Checkmate</b> is one of the most common ways beginner games end! Black\'s King is trapped behind his pawns. Sacrifice Queen on d8 to deflect Black\'s defending Rook, then deliver CHECKMATE with your second Rook!',
    goal: 'Sacrifice Queen with Qd2-d8+, then deliver checkmate with Rd1xd8#!',
    hint: 'Zoom Queen to d8 with check. After Black takes, recapture with Rook from d1 to d8!',
    board: [
      [null, null, 'r',  null, null, null, 'k',  null],
      [null, null, null, null, null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'Q',  null, null, null, null],
      [null, null, null, 'R',  null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'd2-d8',
        goal: 'Sacrifice Queen on d8 to blast through the back rank!',
        hint: 'Zoom Queen from d2 straight up to d8!',
        explanation: 'Qd2-d8+! Black Rook is forced to capture: Rxd8.',
        response: 'c8-d8'
      },
      {
        move: 'd1-d8',
        goal: 'Now recapture on d8 with your Rook for CHECKMATE!',
        hint: 'Drive Rook from d1 to d8!',
        explanation: 'CHECKMATE! The trapped King had nowhere to run!'
      }
    ]
  },

  // ================= CHAPTER 7: MASTER THE OPENING =================
  {
    id: 30,
    chapterId: 7,
    title: 'Rule of the Center: The Golden Hilltop!',
    piece: 'P',
    badge: '🏔️ The Center',
    parMoves: 3,
    story: '<b>The #1 Golden Rule of Chess:</b> Control the 4 center squares (d4, e4, d5, e5)!<br><br>' +
           'Step 1: Push e2-e4! Step 2: Push d2-d4 to build the double-center! Step 3: Recapture with Queen on d4 to rule the golden hilltop!',
    goal: 'Play 1. e4, 2. d4, and 3. Qxd4 to master the center!',
    hint: 'Push e4, then d4, then capture on d4 with Queen!',
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
    sequence: [
      {
        move: 'e2-e4',
        goal: 'Stake your claim in the center! Push pawn to e4!',
        hint: 'Push pawn from e2 to e4!',
        explanation: 'Great start! Black matches you with 1... e5.',
        response: 'e7-e5'
      },
      {
        move: 'd2-d4',
        goal: 'Build the full pawn center! Push your d-pawn to d4!',
        hint: 'Push pawn from d2 to d4!',
        explanation: 'Center duo! Black trades pawns with 2... exd4.',
        response: 'e5-d4'
      },
      {
        move: 'd1-d4',
        goal: 'Recapture in the center with your Queen on d4!',
        hint: 'Slide Queen from d1 to d4!',
        explanation: 'Magnificent! You controlled the golden hilltop center with active pieces!'
      }
    ]
  },
  {
    id: 31,
    chapterId: 7,
    title: 'Develop Your Army: Knights Before Bishops!',
    piece: 'N',
    badge: '🐎 Development',
    parMoves: 3,
    story: '<b>Opening Principle:</b> Bring out your Knights first, then your Bishops, then Castle your King!<br><br>' +
           'Step 1: Jump Knight to f3! Step 2: Bring Bishop to c4! Step 3: Castle your King to safety!',
    goal: 'Develop 1. Nf3, 2. Bc4, and 3. O-O (castle)!',
    hint: 'Knight to f3, Bishop to c4, King to g1!',
    options: { castling: { K: true, Q: true, k: true, q: true } },
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
    sequence: [
      {
        move: 'g1-f3',
        goal: 'Knights before Bishops! Jump Knight to f3 attacking Black\'s e5 pawn!',
        hint: 'Jump Knight from g1 to f3!',
        explanation: 'Active Knight! Black defends with 1... Nc6.',
        response: 'b8-c6'
      },
      {
        move: 'f1-c4',
        goal: 'Now bring out your Bishop to c4 pointing at Black\'s weak f7 square!',
        hint: 'Move Bishop from f1 diagonally to c4!',
        explanation: 'Active Bishop! Black develops with 2... Bc5.',
        response: 'f8-c5'
      },
      {
        move: 'e1-g1',
        goal: 'Now Castle kingside (e1 to g1) to tuck Grandpa King into safety!',
        hint: 'Move King from e1 to g1 to castle!',
        explanation: 'Perfection! Both minor pieces developed and King castled to safety!'
      }
    ]
  },
  {
    id: 32,
    chapterId: 7,
    title: 'Bust the Scholar’s Mate! (Defend the Trick)',
    piece: 'P',
    badge: '🛡️ Defense',
    parMoves: 3,
    story: '<b>The Scholar’s Mate Trap:</b> Black brought Queen to h4 and Bishop to c5 aiming at weak f2!<br><br>' +
           'Step 1: Push g2-g3 to block the Queen. Step 2: When Queen retreats to f6 still threatening mate, jump Knight to f3! Step 3: Develop Knight to c3!',
    goal: 'Shut down the Scholar’s Mate with 1. g3, 2. Nf3, and 3. Nc3!',
    hint: 'Push g3, jump Knight to f3, then jump Knight to c3!',
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
    sequence: [
      {
        move: 'g2-g3',
        goal: 'Black threatens mate on f2! Push g2 to g3 to shield your King and attack the Queen!',
        hint: 'Move pawn from g2 to g3!',
        explanation: 'Shield up! Queen retreats to f6, still threatening mate on f2!',
        response: 'h4-f6'
      },
      {
        move: 'g1-f3',
        goal: 'Jump Knight to f3 to block the Queen\'s laser beam and develop with tempo!',
        hint: 'Jump Knight from g1 to f3!',
        explanation: 'Threat neutralized! Black plays 2... d6.',
        response: 'd7-d6'
      },
      {
        move: 'b1-c3',
        goal: 'Now develop your Queen\'s Knight to c3 to take full center control!',
        hint: 'Jump Knight from b1 to c3!',
        explanation: 'Scholar\'s Mate completely busted! You are fully developed with total control!'
      }
    ]
  },
  {
    id: 33,
    chapterId: 7,
    title: 'The Lawnmower Mate (Two Rooks Staircase)',
    piece: 'R',
    badge: '🚜 Lawnmower',
    parMoves: 3,
    story: 'The <b>Lawnmower Mate</b> (or Staircase Mate) is the smoothest endgame in chess! 🚜<br><br>' +
           'Two Rooks work like a tag team, pushing the enemy King rank by rank to the edge of the board until checkmate!',
    goal: 'Roll your Rooks in a staircase: 1. Ra5+, 2. Rb6+, and 3. Ra8# Checkmate!',
    hint: 'Check with Rook to a5, then check with Rook to b6, then deliver mate with Ra8!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      ['R',  null, null, null, null, null, null, null],
      [null, 'R',  null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, 'K' ]
    ],
    sequence: [
      {
        move: 'a4-a5',
        goal: 'Roll Rook to a5 to check the King and push him back to rank 7!',
        hint: 'Move Rook from a4 to a5 with check!',
        explanation: 'CHECK! Black King is pushed back to e7.',
        response: 'e6-e7'
      },
      {
        move: 'b3-b6',
        goal: 'Now roll your second Rook to b6 to push the King back to the 8th rank!',
        hint: 'Move Rook from b3 to b6 with check!',
        explanation: 'CHECK! Black King is pushed to the back wall on e8.',
        response: 'e7-e8'
      },
      {
        move: 'a5-a8',
        goal: 'Roll your first Rook all the way to a8 for LAWNMOWER CHECKMATE!',
        hint: 'Drive Rook from a5 to a8!',
        explanation: 'CHECKMATE! The two Rooks mowed down the King rank by rank!'
      }
    ]
  },

  // ================= CHAPTER 8: DEADLY COMBINATIONS =================
  {
    id: 34,
    chapterId: 8,
    title: 'Double Check: The Unstoppable Shock!',
    piece: 'N',
    badge: '💥 Double Check',
    parMoves: 2,
    story: '<b>Double Check</b> is the most lethal attack in chess! When TWO pieces check the King at once, it is impossible to block both, and impossible to capture both. The King MUST run!<br><br>' +
           'Step 1: Jump Knight to d6+ for double check! Step 2: Drive Rook to e8 for CHECKMATE!',
    goal: 'Deliver Double Check with Ne4-d6+, then deliver Checkmate with Re1-e8#!',
    hint: 'Jump Knight to d6 with check, then drive Rook up to e8!',
    board: [
      [null, null, null, null, 'k',  null, null, null],
      ['p',  'p',  'p',  null, null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'N',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'R',  null, null, 'K' ]
    ],
    sequence: [
      {
        move: 'e4-d6',
        goal: 'Jump Knight to d6: both the Knight AND Rook check the King at once!',
        hint: 'Move Knight from e4 to d6!',
        explanation: 'DOUBLE CHECK! Impossible to block or capture! King must run to f8.',
        response: 'e8-f8'
      },
      {
        move: 'e1-e8',
        goal: 'Drive your Rook to e8 for CHECKMATE! Knight on d6 guards e8!',
        hint: 'Zoom Rook from e1 to e8!',
        explanation: 'CHECKMATE! The unstoppable Double Check finished the game!'
      }
    ]
  },
  {
    id: 35,
    chapterId: 8,
    title: 'The Smothered Mate: Trapped by Friends!',
    piece: 'N',
    badge: '🐴 Smothered Mate',
    parMoves: 2,
    story: 'The legendary <b>Philidor Smothered Mate</b>: the King is suffocated by his own loyal defenders!<br><br>' +
           'Step 1: Sacrifice Queen on g8 with check! Black King cannot take (Knight protects g8), so Black Rook must capture! Step 2: Jump Knight to f7 for SMOTHERED CHECKMATE!',
    goal: 'Sacrifice Queen with Qc4-g8+, then jump Knight to f7 for Smothered Mate!',
    hint: 'Queen to g8 with check, then Knight to f7!',
    board: [
      [null, null, null, null, null, 'r',  null, 'k' ],
      [null, null, null, null, null, null, 'p',  'p' ],
      [null, null, null, null, null, null, null, 'N' ],
      [null, null, null, null, null, null, null, null],
      [null, null, 'Q',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, 'K' ]
    ],
    sequence: [
      {
        move: 'c4-g8',
        goal: 'Sacrifice your Queen on g8! Knight on h6 protects her!',
        hint: 'Slide Queen diagonally to g8 with check!',
        explanation: 'Qg8+! King cannot take! Black Rook must capture: Rxg8.',
        response: 'f8-g8'
      },
      {
        move: 'h6-f7',
        goal: 'Jump Knight to f7 for SMOTHERED CHECKMATE! The King is trapped by his own army!',
        hint: 'Jump Knight from h6 to f7!',
        explanation: 'LEGENDARY CHECKMATE! The King is smothered by his own pieces!'
      }
    ]
  },
  {
    id: 36,
    chapterId: 8,
    title: 'Deflection: Removing the Guard!',
    piece: 'R',
    badge: '🤹 Deflection',
    parMoves: 2,
    story: '<b>Deflection</b> is a master trick: lure an enemy piece away from the square it is guarding!<br><br>' +
           'Step 1: Sacrifice Rook on c8! The Black Rook guarding Queen must capture it. Step 2: Capture the defenseless Queen on d8 for CHECKMATE!',
    goal: 'Deflect the defending Rook with Rc1-c8+, then deliver mate with Qd1xd8#!',
    hint: 'Rook to c8 with check, then Queen captures on d8!',
    board: [
      ['r',  null, null, 'q',  null, null, 'k',  null],
      [null, null, null, null, null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, 'R',  'Q',  null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'c1-c8',
        goal: 'Zoom Rook to c8 to deflect the Black Rook guarding the Queen!',
        hint: 'Drive Rook from c1 straight up to c8!',
        explanation: 'Deflection! Black Rook is pulled away from guarding Queen: Rxc8.',
        response: 'a8-c8'
      },
      {
        move: 'd1-d8',
        goal: 'Now zoom Queen to d8 to capture the unguarded Queen for CHECKMATE!',
        hint: 'Drive Queen from d1 to d8!',
        explanation: 'CHECKMATE! The deflection tactic stripped the King\'s defense!'
      }
    ]
  },
  {
    id: 37,
    chapterId: 8,
    title: 'The Overworked Piece: Too Many Chores!',
    piece: 'Q',
    badge: '🧹 Overworked',
    parMoves: 2,
    story: 'An <b>Overworked Piece</b> has too many jobs at once! Black Queen on d7 is guarding BOTH the Rook on d8 AND the Knight on b7.<br><br>' +
           'Step 1: Take Rook with Qd1xd8+! When Queen recaptures, capture the abandoned Knight on b7!',
    goal: 'Overwork the Queen: 1. Qd1xd8+, then 2. Nc5xb7!',
    hint: 'Capture Rook on d8 with Queen, then capture Knight on b7 with Knight!',
    board: [
      [null, null, null, 'r',  null, null, 'k',  null],
      [null, 'n',  null, null, 'q',  'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, 'N',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'Q',  null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'd1-d8',
        goal: 'Capture the Rook on d8 with your Queen with check!',
        hint: 'Drive Queen from d1 to d8!',
        explanation: 'Qxd8+! Queen on e7 is forced to abandon the Knight to recapture: Qxd8.',
        response: 'e7-d8'
      },
      {
        move: 'c5-b7',
        goal: 'Now jump your Knight to b7 to capture the abandoned Knight!',
        hint: 'Jump Knight from c5 to b7!',
        explanation: 'Superb! The overworked Queen couldn\'t guard two pieces at once!'
      }
    ]
  },
  {
    id: 38,
    chapterId: 8,
    title: 'Trap the Greedy Queen!',
    piece: 'B',
    badge: '🕸️ Trapped',
    parMoves: 2,
    story: 'Never bring your Queen out too early to hunt pawns! Black\'s greedy Queen ventured into b2.<br><br>' +
           'Step 1: Move Bishop to d2 to cut off her escape! When Queen tries to flee to a3, step 2: capture her with Rook on a1!',
    goal: 'Trap the Queen with 1. Bc1-d2, then capture her with 2. Ra1xa3!',
    hint: 'Move Bishop to d2, then capture Queen on a3 with Rook!',
    board: [
      [null, null, null, null, null, null, 'k',  null],
      [null, null, null, null, null, 'p',  'p',  'p' ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, 'q',  null, null, null, null, null, null],
      ['R',  null, 'B',  null, null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'c1-d2',
        goal: 'Move Bishop to d2 to cut off the Queen\'s escape routes!',
        hint: 'Move Bishop from c1 to d2!',
        explanation: 'Trapped! Queen tries to squirm away to a3.',
        response: 'b2-a3'
      },
      {
        move: 'a1-a3',
        goal: 'Capture the trapped Queen with your Rook on a3!',
        hint: 'Drive Rook from a1 straight up to a3!',
        explanation: 'Caught! You trapped and eliminated the greedy Queen!'
      }
    ]
  },
  {
    id: 39,
    chapterId: 8,
    title: 'The Greek Gift: Royal Sacrifice!',
    piece: 'B',
    badge: '🎁 Greek Gift',
    parMoves: 3,
    story: 'The most famous sacrifice in chess history: <b>The Greek Gift (Bxh7+!)</b><br><br>' +
           'Step 1: Sacrifice Bishop on h7! Step 2: Jump Knight to g5+ with check! Step 3: Bring Queen to h5 threatening unstoppable checkmate!',
    goal: 'Execute the Greek Gift: 1. Bxh7+, 2. Ng5+, and 3. Qh5!',
    hint: 'Sacrifice Bishop on h7, check with Knight on g5, then bring Queen to h5!',
    board: [
      ['r',  null, 'b',  'q',  null, 'r',  'k',  null],
      ['p',  'p',  'p',  null, null, 'p',  'p',  'p' ],
      [null, null, 'n',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'B',  null, 'N',  null, null],
      ['P',  'P',  'P',  null, null, 'P',  'P',  'P' ],
      ['R',  null, null, 'Q',  null, 'R',  'K',  null]
    ],
    sequence: [
      {
        move: 'd3-h7',
        goal: 'Sacrifice your Bishop on h7 to smash the King\'s castle wall!',
        hint: 'Slide Bishop from d3 to h7 with check!',
        explanation: 'Bxh7+! The Greek Gift! King is forced to accept: Kxh7.',
        response: 'g8-h7'
      },
      {
        move: 'f3-g5',
        goal: 'Jump Knight to g5+ with check to keep the attack rolling!',
        hint: 'Jump Knight from f3 to g5 with check!',
        explanation: 'Check! King retreats to g8.',
        response: 'h7-g8'
      },
      {
        move: 'd1-h5',
        goal: 'Now bring your Queen to h5 to set up unstoppable Qh7# checkmate!',
        hint: 'Slide Queen from d1 to h5!',
        explanation: 'Magnificent! The Greek Gift sacrifice created an unstoppable mating attack!'
      }
    ]
  },

  // ================= CHAPTER 9: OPENING REPERTOIRE =================
  {
    id: 40,
    chapterId: 9,
    title: 'The Italian Game: Giuoco Piano',
    piece: 'B',
    badge: '🏛️ Italian Game',
    parMoves: 3,
    story: 'The <b>Italian Game</b> has been played by masters for over 500 years! It develops pieces rapidly and takes aim at Black\'s weak f7 square.<br><br>' +
           'Step 1: Push e4! Step 2: Develop Knight to f3! Step 3: Place Italian Bishop on c4!',
    goal: 'Play the Italian Game: 1. e4, 2. Nf3, and 3. Bc4!',
    hint: 'Pawn to e4, Knight to f3, Bishop to c4!',
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
    sequence: [
      {
        move: 'e2-e4',
        goal: 'Open with King\'s pawn to e4!',
        hint: 'Push pawn from e2 to e4!',
        explanation: 'Black replies symmetrically with 1... e5.',
        response: 'e7-e5'
      },
      {
        move: 'g1-f3',
        goal: 'Develop Knight to f3 attacking e5!',
        hint: 'Jump Knight from g1 to f3!',
        explanation: 'Black defends with 2... Nc6.',
        response: 'b8-c6'
      },
      {
        move: 'f1-c4',
        goal: 'Deploy the Italian Bishop to c4 pointing right at f7!',
        hint: 'Move Bishop from f1 diagonally to c4!',
        explanation: 'The classic Italian Game! Perfectly developed and ready to control the match!'
      }
    ]
  },
  {
    id: 41,
    chapterId: 9,
    title: 'The Fried Liver Attack: Double Strike!',
    piece: 'N',
    badge: '🍳 Fried Liver',
    parMoves: 3,
    story: 'The <b>Fried Liver Attack</b> is the most aggressive opening trick in chess!<br><br>' +
           'Step 1: Jump Knight to g5 attacking f7! Step 2: When Black blocks with d5, take with pawn exd5! Step 3: When Knight takes on d5, sacrifice Knight on f7 for the royal fork!',
    goal: 'Launch the Fried Liver: 1. Ng5, 2. exd5, and 3. Nxf7!',
    hint: 'Knight to g5, pawn takes d5, then Knight forks on f7!',
    board: [
      ['r',  null, 'b',  'q',  'k',  null, null, 'r' ],
      ['p',  'p',  'p',  'p',  null, 'p',  'p',  'p' ],
      [null, null, 'n',  null, null, 'n',  null, null],
      [null, null, null, null, 'p',  null, null, null],
      [null, null, 'B',  null, 'P',  null, null, null],
      [null, null, null, null, null, 'N',  null, null],
      ['P',  'P',  'P',  'P',  null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  null, null, 'R' ]
    ],
    sequence: [
      {
        move: 'f3-g5',
        goal: 'Jump Knight to g5: Bishop and Knight both attack weak f7!',
        hint: 'Jump Knight from f3 to g5!',
        explanation: 'Double attack! Black desperately blocks with 4... d5.',
        response: 'd7-d5'
      },
      {
        move: 'e4-d5',
        goal: 'Capture the blocking pawn with your e-pawn: exd5!',
        hint: 'Pawn on e4 takes d5!',
        explanation: 'Black makes a mistake and recaptures: 5... Nxd5?!',
        response: 'f6-d5'
      },
      {
        move: 'g5-f7',
        goal: 'THE FRIED LIVER SACRIFICE! Jump Knight to f7 forking Queen and Rook!',
        hint: 'Jump Knight to f7 to strike the royal fork!',
        explanation: 'KABOOM! The Fried Liver Attack blows open Black\'s King and wins material!'
      }
    ]
  },
  {
    id: 42,
    chapterId: 9,
    title: 'The Queen’s Gambit: The Center Offer',
    piece: 'P',
    badge: '👑 Queen\'s Gambit',
    parMoves: 3,
    story: 'The famous <b>Queen’s Gambit</b>: offering a side pawn on c4 to seize complete ownership of the center!<br><br>' +
           'Step 1: Open with 1. d4! Step 2: Offer the gambit with 2. c4! Step 3: When Black accepts, push 3. e4 to claim the whole center!',
    goal: 'Play the Queen’s Gambit: 1. d4, 2. c4, and 3. e4!',
    hint: 'Pawn to d4, pawn to c4, pawn to e4!',
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
    sequence: [
      {
        move: 'd2-d4',
        goal: 'Open with Queen\'s pawn to d4!',
        hint: 'Push pawn from d2 to d4!',
        explanation: 'Solid start! Black plays 1... d5.',
        response: 'd7-d5'
      },
      {
        move: 'c2-c4',
        goal: 'Offer the Queen\'s Gambit with c2-c4!',
        hint: 'Push pawn from c2 to c4!',
        explanation: 'Gambit offered! Black accepts: 2... dxc4.',
        response: 'd5-c4'
      },
      {
        move: 'e2-e4',
        goal: 'Seize the full center with 3. e4! Your Bishop will easily regain c4!',
        hint: 'Push pawn from e2 to e4!',
        explanation: 'Masterful! You gave up a side pawn to conquer the entire center!'
      }
    ]
  },
  {
    id: 43,
    chapterId: 9,
    title: 'Facing the Sicilian Defense!',
    piece: 'N',
    badge: '⚔️ Sicilian Defense',
    parMoves: 3,
    story: 'The <b>Sicilian Defense (1... c5)</b> is Black\'s most popular weapon at the Grandmaster level! Meet it with the active Open Sicilian:<br><br>' +
           'Step 1: Open with 1. e4! Step 2: Develop Knight with 2. Nf3! Step 3: Break the center open with 3. d4!',
    goal: 'Play the Open Sicilian setup: 1. e4, 2. Nf3, and 3. d4!',
    hint: 'Pawn to e4, Knight to f3, pawn to d4!',
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
    sequence: [
      {
        move: 'e2-e4',
        goal: 'Open with 1. e4!',
        hint: 'Push pawn from e2 to e4!',
        explanation: 'Black chooses the sharp Sicilian Defense: 1... c5.',
        response: 'c7-c5'
      },
      {
        move: 'g1-f3',
        goal: 'Develop your Knight to f3 preparing to break open the center!',
        hint: 'Jump Knight from g1 to f3!',
        explanation: 'Black prepares with 2... d6.',
        response: 'd7-d6'
      },
      {
        move: 'd2-d4',
        goal: 'Strike in the center with 3. d4! Bust open lines for your army!',
        hint: 'Push pawn from d2 to d4!',
        explanation: 'Excellent! You unlocked the Open Sicilian and seized the initiative!'
      }
    ]
  },
  {
    id: 44,
    chapterId: 9,
    title: 'The London System: The Unbreakable Wall',
    piece: 'B',
    badge: '🧱 London System',
    parMoves: 3,
    story: 'The <b>London System</b> is the favorite solid opening of World Champions! You develop your dark-squared Bishop outside the pawn chain before locking the center into a granite pyramid.<br><br>' +
           'Step 1: Push 1. d4! Step 2: Develop Bishop to f4! Step 3: Solidify the pyramid with 3. e3!',
    goal: 'Build the London System: 1. d4, 2. Bf4, and 3. e3!',
    hint: 'Pawn to d4, Bishop to f4, pawn to e3!',
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
    sequence: [
      {
        move: 'd2-d4',
        goal: 'Begin the London System with 1. d4!',
        hint: 'Push pawn from d2 to d4!',
        explanation: 'Black matches with 1... d5.',
        response: 'd7-d5'
      },
      {
        move: 'c1-f4',
        goal: 'Develop your London Bishop outside the pawn chain to f4!',
        hint: 'Slide Bishop from c1 to f4!',
        explanation: 'Black develops Knight: 2... Nf6.',
        response: 'g8-f6'
      },
      {
        move: 'e2-e3',
        goal: 'Lock the center with 3. e3! The granite London pyramid is complete!',
        hint: 'Push pawn from e2 to e3!',
        explanation: 'Unbreakable! The London System gives you a safe, rock-solid fortress!'
      }
    ]
  },
  {
    id: 45,
    chapterId: 9,
    title: 'Never Play f6! Punish the Weakness',
    piece: 'Q',
    badge: '⚠️ Never Play f6',
    parMoves: 3,
    story: 'Grandmasters have a proverb: <i>"Never play f6!"</i> It weakens the diagonal straight to the King.<br><br>' +
           'Black foolishly played 2... f6?. Step 1: Sacrifice Knight on e5! Step 2: Check with Queen on h5+! Step 3: Chomp pawn on e5+ with check!',
    goal: 'Punish Black\'s bad move: 1. Nxe5, 2. Qh5+, and 3. Qxe5+!',
    hint: 'Knight takes e5, Queen to h5 with check, Queen takes e5 with check!',
    board: [
      ['r',  'n',  'b',  'q',  'k',  'b',  'n',  'r' ],
      ['p',  'p',  'p',  'p',  null, null, 'p',  'p' ],
      [null, null, null, null, null, 'p',  null, null],
      [null, null, null, null, 'p',  null, null, null],
      [null, null, null, null, 'P',  null, null, null],
      [null, null, null, null, null, 'N',  null, null],
      ['P',  'P',  'P',  'P',  null, 'P',  'P',  'P' ],
      ['R',  'N',  'B',  'Q',  'K',  'B',  null, 'R' ]
    ],
    sequence: [
      {
        move: 'f3-e5',
        goal: 'Punish the weak diagonal! Sacrifice your Knight on e5: Nxe5!',
        hint: 'Jump Knight from f3 to e5!',
        explanation: 'Black takes the bait: 3... fxe5?. The diagonal is wide open!',
        response: 'f6-e5'
      },
      {
        move: 'd1-h5',
        goal: 'Zoom Queen to h5+ to strike the exposed King along the fatal diagonal!',
        hint: 'Slide Queen from d1 diagonally to h5!',
        explanation: 'CHECK! Black King is forced to stumble forward to e7.',
        response: 'e8-e7'
      },
      {
        move: 'h5-e5',
        goal: 'Recapture on e5 with your Queen with check: Qxe5+!',
        hint: 'Slide Queen to e5 to capture the pawn with check!',
        explanation: 'Total destruction! Black\'s King is stranded in the center with no defense!'
      }
    ]
  },

  // ================= CHAPTER 10: ENDGAME MASTERCLASS =================
  {
    id: 46,
    chapterId: 10,
    title: 'King & Rook Checkmate: The Box Method',
    piece: 'R',
    badge: '📦 The Box Method',
    parMoves: 3,
    story: 'In King + Rook endgames, use the <b>Box Method</b> to shrink the King\'s territory until he is trapped against the edge!<br><br>' +
           'Step 1: Shrink the box with Ra7-b7! Step 2: Step King in opposition with Ke6-d6! Step 3: Deliver Checkmate on the back rank with Rb7-b8#!',
    goal: 'Shrink the box with 1. Rb7, 2. Kd6, and deliver mate with 3. Rb8#!',
    hint: 'Rook to b7, King to d6, Rook to b8!',
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
    sequence: [
      {
        move: 'a7-b7',
        goal: 'Shrink the box! Slide Rook to b7 to cut off the King\'s space!',
        hint: 'Slide Rook from a7 to b7!',
        explanation: 'Box shrunk! Black King steps to d8.',
        response: 'e8-d8'
      },
      {
        move: 'e6-d6',
        goal: 'Bring your King into opposition with Ke6-d6 to take away escape squares!',
        hint: 'Step King from e6 to d6!',
        explanation: 'Opposition! Black King is forced into the corner on c8.',
        response: 'd8-c8'
      },
      {
        move: 'b7-b8',
        goal: 'Deliver CHECKMATE with Rook to b8! White King on d6 seals all escapes!',
        hint: 'Zoom Rook from b7 up to b8!',
        explanation: 'CHECKMATE! The Box Method cornered and defeated the King!'
      }
    ]
  },
  {
    id: 47,
    chapterId: 10,
    title: 'The Magic of Opposition: Taking the Lead!',
    piece: 'K',
    badge: '👑 Opposition',
    parMoves: 2,
    story: '<b>The Opposition</b> is the secret weapon of King & Pawn endgames! When Kings stand 1 square apart facing each other, whoever\'s turn it is MUST step aside.<br><br>' +
           'Step 1: Step King to d5 to take the opposition! Black King must give way. Step 2: Outflank the King by stepping to c6 to escort your pawn home!',
    goal: 'Take the opposition with 1. Kd5, then outflank with 2. Kc6!',
    hint: 'Step King from d4 to d5, then outflank to c6!',
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
    sequence: [
      {
        move: 'd4-d5',
        goal: 'Take direct opposition! Step King to d5 directly in front of Black King!',
        hint: 'Step King from d4 to d5!',
        explanation: 'Opposition taken! Black King must step aside: 1... Ke7.',
        response: 'd7-e7'
      },
      {
        move: 'd5-c6',
        goal: 'Outflank the King! Step to c6 to open a clear runway for your pawn!',
        hint: 'Step King to c6!',
        explanation: 'Masterful! You took the opposition and paved the way for pawn promotion!'
      }
    ]
  },
  {
    id: 48,
    chapterId: 10,
    title: 'The Square of the Pawn: The Mental Box',
    piece: 'P',
    badge: '📐 Pawn Square',
    parMoves: 3,
    story: 'Can the enemy King catch your sprinting pawn? Draw a mental square from your pawn to the promotion rank! If the King cannot step inside the square, sprint full speed!<br><br>' +
           'Step 1: Push a6! Step 2: Push a7! Step 3: Crown your Queen on a8!',
    goal: 'Sprint your passed pawn to victory: 1. a6, 2. a7, and 3. a8=Q!',
    hint: 'Push pawn to a6, then a7, then crown Queen on a8!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P',  null, null, null, null, null, null, null],
      [null, null, null, null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, 'K' ]
    ],
    sequence: [
      {
        move: 'a5-a6',
        goal: 'Sprint your passed pawn forward to a6!',
        hint: 'Push pawn from a5 to a6!',
        explanation: 'Sprint! Black King tries to chase: 1... Kd5.',
        response: 'e4-d5'
      },
      {
        move: 'a6-a7',
        goal: 'Push pawn to a7! The King is outside the square and cannot catch you!',
        hint: 'Push pawn from a6 to a7!',
        explanation: 'Black King is too slow: 2... Kc6.',
        response: 'd5-c6'
      },
      {
        move: 'a7-a8',
        goal: 'Cross the finish line on a8 to transform into a mighty Queen!',
        hint: 'Step pawn onto a8 to promote to Queen!',
        explanation: 'CROWNED! The pawn outran the King and won the game!'
      }
    ]
  },
  {
    id: 49,
    chapterId: 10,
    title: 'Promoting with King Escort!',
    piece: 'K',
    badge: '🛡️ King Escort',
    parMoves: 3,
    story: 'A King must escort his loyal pawn all the way to the crown!<br><br>' +
           'Step 1: Step King to e7 to take the key escort square! Step 2: Push pawn to d6! Step 3: Push pawn to d7!',
    goal: 'Escort your pawn: 1. Ke7, 2. d6, and 3. d7!',
    hint: 'Move King to e7, push pawn to d6, push pawn to d7!',
    board: [
      [null, null, 'k',  null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'K',  null, null, null, null],
      [null, null, null, 'P',  null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    sequence: [
      {
        move: 'd6-e7',
        goal: 'Step King to e7 to seize the key escort square and shield the runway!',
        hint: 'Move King from d6 to e7!',
        explanation: 'Escort in position! Black King steps to c7.',
        response: 'c8-c7'
      },
      {
        move: 'd5-d6',
        goal: 'March your pawn to d6 under the King\'s protection!',
        hint: 'Push pawn from d5 to d6!',
        explanation: 'Check! Black King is pushed back to c8.',
        response: 'c7-c8'
      },
      {
        move: 'd6-d7',
        goal: 'Push pawn to d7! The pawn is 1 step away from queening and Black is helpless!',
        hint: 'Push pawn from d6 to d7!',
        explanation: 'Unstoppable! With the King\'s escort, the pawn is guaranteed to promote!'
      }
    ]
  },
  {
    id: 50,
    chapterId: 10,
    title: 'The Kiss of Death Checkmate!',
    piece: 'Q',
    badge: '💋 Kiss of Death',
    parMoves: 2,
    story: 'The most famous checkmate in chess: <b>The Kiss of Death</b>! The Queen kisses the enemy King directly on the cheek, supported safely by her King from behind.<br><br>' +
           'Step 1: Check with Queen to d7+ to corner the King! White King on e6 protects her. Step 2: Kiss the King with Qf7# for CHECKMATE!',
    goal: 'Deliver the Kiss of Death: 1. Qd7+, then 2. Qf7# Checkmate!',
    hint: 'Queen to d7 with check, then Queen to f7 with checkmate!',
    board: [
      [null, null, 'Q',  null, 'k',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, 'K',  null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    sequence: [
      {
        move: 'c8-d7',
        goal: 'Step Queen to d7 with check to corner the Black King! White King on e6 protects her!',
        hint: 'Move Queen diagonally from c8 to d7 with check!',
        explanation: 'CHECK! Black King is forced to f8.',
        response: 'e8-f8'
      },
      {
        move: 'd7-f7',
        goal: 'Deliver the KISS OF DEATH on f7! White King on e6 protects the Queen!',
        hint: 'Slide Queen to f7 right in the King\'s face!',
        explanation: 'CHECKMATE! The Kiss of Death finishes the battle!'
      }
    ]
  },
  {
    id: 51,
    chapterId: 10,
    title: 'The Desperado Stalemate Trick!',
    piece: 'R',
    badge: '🤠 Desperado',
    parMoves: 1,
    story: 'You are completely lost and about to be crushed! But wait... look at Grandpa King on h1: he has <b>NO legal moves</b>! If only you didn\'t have a Rook on g1, it would be STALEMATE!<br><br>' +
           'Sacrifice your Rook with <b>Rg3+!</b> Black is forced to capture, leaving you with zero legal moves for a miraculous draw!',
    goal: 'Sacrifice your Rook with Rg1-g3+ to force an unbelievable Stalemate draw!',
    hint: 'Slide Rook to g3 with check! When Black takes, you have no moves left: Stalemate!',
    board: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'p',  'k' ],
      [null, null, null, null, null, 'q',  null, null],
      [null, null, null, null, null, null, 'R',  'K' ]
    ],
    validateMove: (from, to, board) => {
      // White plays Rg3+
      return to.r === 5 && to.c === 6 && ChessRules.isCheck(board, 'b');
    }
  },
  {
    id: 52,
    chapterId: 10,
    title: 'The Master Graduation: Anastasia’s Mate!',
    piece: 'Q',
    badge: '🎓 Grand Graduation',
    parMoves: 2,
    story: 'Your final graduation challenge: <b>Anastasia’s Mate!</b><br><br>' +
           'Your Knight on e7 controls the escape squares g8 and g6. Step 1: Sacrifice Queen on h7 with check! Step 2: Zoom your Rook across to h5 for a magnificent CHECKMATE!',
    goal: 'Execute Anastasia’s Mate: 1. Qxh7+, then 2. Rh5# Checkmate!',
    hint: 'Sacrifice Queen on h7, then zoom Rook to h5 for checkmate!',
    board: [
      [null, null, null, null, null, 'r',  'k',  null],
      ['p',  'p',  'p',  null, 'N',  'p',  'p',  null],
      [null, null, null, null, null, null, null, null],
      ['R',  null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, 'Q',  null, null, null, null],
      ['P',  'P',  'P',  null, null, 'P',  'P',  'P' ],
      [null, null, null, null, null, null, 'K',  null]
    ],
    sequence: [
      {
        move: 'd3-h7',
        goal: 'Sacrifice your Queen on h7 to tear open the King\'s shelter!',
        hint: 'Zoom Queen from d3 to h7 with check!',
        explanation: 'Qxh7+! Black King is forced to capture: Kxh7.',
        response: 'g8-h7'
      },
      {
        move: 'a5-h5',
        goal: 'Zoom your Rook to h5 for ANASTASIA’S CHECKMATE! Knight on e7 seals g6 and g8!',
        hint: 'Drive Rook across rank 5 to h5!',
        explanation: 'CONGRATULATIONS GRANDMASTER! You completed the curriculum with a world-class checkmate!'
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.CHAPTERS = CHAPTERS;
  window.LEVELS = LEVELS;
}
if (typeof module !== 'undefined') {
  module.exports = { CHAPTERS, LEVELS };
}
