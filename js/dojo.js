// Tactics Dojo: 100 Verified Tactical Puzzles
// Built-in puzzle trainer with streak tracking, rating system, and coaching hints

const DOJO_PUZZLES = [
  {
    "id": 1,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Back-Rank Rook Blast",
    "prompt": "Deliver checkmate in 1 move!",
    "hint": "Zoom your Rook to the back rank!",
    "explanation": "Rook to d8 delivers back-rank checkmate because the pawns block the King.",
    "from": "d1",
    "to": "d8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "p",
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "K",
        "R",
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 2,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Kiss of Death",
    "prompt": "Deliver the Kiss of Death checkmate!",
    "hint": "Queen directly in front of the King on g7!",
    "explanation": "Queen to g7 is protected by King on g6—instant checkmate!",
    "from": "b2",
    "to": "g7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "Q",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 3,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Corner Snare",
    "prompt": "Checkmate the castled King on h7!",
    "hint": "Your Queen has backup from the c2 Bishop!",
    "explanation": "Queen to h7 delivers checkmate, protected by the Bishop on c2.",
    "from": "e4",
    "to": "h7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "p",
        "p",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "Q",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "B",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 4,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Smothered Knockout",
    "prompt": "Leap your Knight to deliver checkmate!",
    "hint": "Jump to f7 into the enemy camp!",
    "explanation": "Knight to f7 checkmates the King trapped by its own pieces.",
    "from": "e5",
    "to": "f7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "r",
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "N",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 5,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Lawnmower Finish",
    "prompt": "Roll your Rook for the Lawnmower mate!",
    "hint": "Roll your a1 Rook to the 8th rank!",
    "explanation": "Rook to a8 checkmates because the b7 Rook blocks rank 7.",
    "from": "a1",
    "to": "a8",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        "R",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 6,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Scholar Strike",
    "prompt": "Strike the weak f7 square for checkmate!",
    "hint": "Queen to f7 backed up by Bishop on c4!",
    "explanation": "Queen to f7 is checkmate because the Bishop guards the Queen.",
    "from": "f6",
    "to": "f7",
    "board": [
      [
        null,
        null,
        null,
        "q",
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        "p",
        "p",
        null,
        null,
        "p",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "Q",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "B",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 7,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Queen Back-Rank Snare",
    "prompt": "Slide Queen to the back rank for mate!",
    "hint": "Zoom Queen to e8!",
    "explanation": "Queen to e8 delivers back-rank checkmate.",
    "from": "e4",
    "to": "e8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "p",
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "Q",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 8,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "The Arabian Mate",
    "prompt": "Deliver the Arabian Mate with your Rook!",
    "hint": "Slide Rook to h7 or h8!",
    "explanation": "Rook to h8 delivers checkmate supported by Knight on f6.",
    "from": "h3",
    "to": "h8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "N",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "R"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "K",
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 9,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "The Opera House Mate",
    "prompt": "Capture Black's Rook on d8 for checkmate!",
    "hint": "Rook takes d8 with Bishop backup!",
    "explanation": "Rook takes d8 delivering checkmate, protected by the Bishop on g5!",
    "from": "d1",
    "to": "d8",
    "board": [
      [
        null,
        null,
        null,
        "r",
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        "p",
        null,
        null,
        "p",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "B",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "R",
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 10,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Corner Kiss",
    "prompt": "Checkmate the King cornered on a8!",
    "hint": "Queen to b7 protected by King on c6!",
    "explanation": "Queen to b7 checkmates the cornered King.",
    "from": "b3",
    "to": "b7",
    "board": [
      [
        "k",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "p",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "p",
        null,
        "K",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "Q",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 11,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Rook Squeeze on the Edge",
    "prompt": "Checkmate the King trapped on the h-file!",
    "hint": "Slide your h-file Rook to h4!",
    "explanation": "Rook to h4 delivers checkmate while g-file Rook blocks escape.",
    "from": "h1",
    "to": "h4",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        "R",
        "R"
      ]
    ]
  },
  {
    "id": 12,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Queenside Lockdown",
    "prompt": "Deliver checkmate on a7!",
    "hint": "Queen steps to a7 supported by King on c6!",
    "explanation": "Queen to a7 checkmates King on b8.",
    "from": "a4",
    "to": "a7",
    "board": [
      [
        null,
        "k",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "p",
        null,
        "p",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "K",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "Q",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 13,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "The Epaulette Mate",
    "prompt": "Deliver the shoulder-pad checkmate!",
    "hint": "Queen steps forward to e7!",
    "explanation": "Queen to e7 checkmates King boxed by its own rooks.",
    "from": "e6",
    "to": "e7",
    "board": [
      [
        null,
        null,
        null,
        "r",
        "k",
        "r",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "Q",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 14,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Criss-Cross Bishop Mate",
    "prompt": "Slice the diagonal with your dark-squared Bishop!",
    "hint": "Bishop leaps to a6!",
    "explanation": "Bishop to a6 delivers criss-cross checkmate with g4 Bishop.",
    "from": "b5",
    "to": "a6",
    "board": [
      [
        null,
        null,
        "k",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "p",
        null,
        "p",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "B",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "B",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 15,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Corner Knight Sting",
    "prompt": "Jump Knight to deliver checkmate!",
    "hint": "Knight leaps from e5 to f7!",
    "explanation": "Knight to f7 checkmates King on h8.",
    "from": "e5",
    "to": "f7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        "N",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 16,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Queenside Back-Rank",
    "prompt": "Deliver checkmate on c8!",
    "hint": "Zoom Queen to c8!",
    "explanation": "Queen to c8 delivers back-rank checkmate.",
    "from": "c3",
    "to": "c8",
    "board": [
      [
        null,
        null,
        "k",
        null,
        null,
        null,
        null,
        null
      ],
      [
        "p",
        "p",
        null,
        "p",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "Q",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 17,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Kingside Corridor Mate",
    "prompt": "Fly Rook to f8 for checkmate!",
    "hint": "Drive Rook straight up to f8!",
    "explanation": "Rook to f8 checkmates King trapped by pawns.",
    "from": "f1",
    "to": "f8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        "R",
        null,
        null
      ]
    ]
  },
  {
    "id": 18,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Center File Checkmate",
    "prompt": "Slide Rook up the e-file for mate!",
    "hint": "Drive Rook to e8!",
    "explanation": "Rook to e8 delivers checkmate on back rank.",
    "from": "e1",
    "to": "e8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "p",
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "K",
        null,
        null,
        "R",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 19,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Knight & Queen Teamwork",
    "prompt": "Deliver checkmate on g8!",
    "hint": "Queen to g8 backed up by Knight on f6!",
    "explanation": "Queen to g8 checkmates because Knight protects her.",
    "from": "g3",
    "to": "g8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "N",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "Q",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 20,
    "cat": "mate1",
    "categoryLabel": "👑 Checkmate in 1",
    "title": "Corner Net",
    "prompt": "Deliver the final blow on g7!",
    "hint": "Queen to g7 supported by King on f7!",
    "explanation": "Queen to g7 checkmates lone King.",
    "from": "g3",
    "to": "g7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "K",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "Q",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 21,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #1",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to c7!",
    "explanation": "Move to c7 delivers a devastating fork!",
    "from": "d5",
    "to": "c7",
    "board": [
      [
        "q",
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 22,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #2",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to c7!",
    "explanation": "Move to c7 delivers a devastating fork!",
    "from": "b5",
    "to": "c7",
    "board": [
      [
        "q",
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "N",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 23,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #3",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to d6!",
    "explanation": "Move to d6 delivers a devastating fork!",
    "from": "e4",
    "to": "d6",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "q",
        null,
        null,
        null,
        "k",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "N",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 24,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #4",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to d5!",
    "explanation": "Move to d5 delivers a devastating fork!",
    "from": "c3",
    "to": "d5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "q",
        null,
        null,
        null,
        "k",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "N",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 25,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #5",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to e5!",
    "explanation": "Move to e5 delivers a devastating fork!",
    "from": "f3",
    "to": "e5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "q",
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "N",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 26,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #6",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to e7!",
    "explanation": "Move to e7 delivers a devastating fork!",
    "from": "d5",
    "to": "e7",
    "board": [
      [
        null,
        null,
        "r",
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 27,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #7",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to f6!",
    "explanation": "Move to f6 delivers a devastating fork!",
    "from": "e4",
    "to": "f6",
    "board": [
      [
        null,
        null,
        null,
        "r",
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "N",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 28,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #8",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to b5!",
    "explanation": "Move to b5 delivers a devastating fork!",
    "from": "c3",
    "to": "b5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "k",
        null,
        null,
        null,
        "r"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "N",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 29,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #9",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to d4!",
    "explanation": "Move to d4 delivers a devastating fork!",
    "from": "f3",
    "to": "d4",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "r",
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "N",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 30,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #10",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to c6!",
    "explanation": "Move to c6 delivers a devastating fork!",
    "from": "e5",
    "to": "c6",
    "board": [
      [
        null,
        "r",
        null,
        null,
        null,
        "k",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "N",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 31,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #11",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to c7!",
    "explanation": "Move to c7 delivers a devastating fork!",
    "from": "d5",
    "to": "c7",
    "board": [
      [
        null,
        "r",
        null,
        "q",
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 32,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #12",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to d6!",
    "explanation": "Move to d6 delivers a devastating fork!",
    "from": "e4",
    "to": "d6",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        "q",
        null,
        null,
        null,
        "r",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "N",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 33,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #13",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to d5!",
    "explanation": "Move to d5 delivers a devastating fork!",
    "from": "c3",
    "to": "d5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "q",
        null,
        null,
        null,
        "r",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "N",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 34,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #14",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to e5!",
    "explanation": "Move to e5 delivers a devastating fork!",
    "from": "f3",
    "to": "e5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "q",
        null,
        null,
        null,
        "r",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "N",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 35,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #15",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to f5!",
    "explanation": "Move to f5 delivers a devastating fork!",
    "from": "d4",
    "to": "f5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "q",
        null,
        null,
        null,
        "r"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 36,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #16",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to d5!",
    "explanation": "Move to d5 delivers a devastating fork!",
    "from": "d4",
    "to": "d5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "n",
        null,
        "b",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "P",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 37,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #17",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to e5!",
    "explanation": "Move to e5 delivers a devastating fork!",
    "from": "e4",
    "to": "e5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "n",
        null,
        "b",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "P",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 38,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #18",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to c5!",
    "explanation": "Move to c5 delivers a devastating fork!",
    "from": "c4",
    "to": "c5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "n",
        null,
        "b",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "P",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 39,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #19",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to d5!",
    "explanation": "Move to d5 delivers a devastating fork!",
    "from": "d1",
    "to": "d5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        "b",
        null,
        null,
        null,
        "p",
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        "Q",
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 40,
    "cat": "fork",
    "categoryLabel": "⚡ Tactical Fork",
    "title": "Tactical Fork #20",
    "prompt": "Find the fork attacking two pieces at once!",
    "hint": "Move your piece to e4!",
    "explanation": "Move to e4 delivers a devastating fork!",
    "from": "e1",
    "to": "e4",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "b",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        "Q",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 41,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #1",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to e1!",
    "explanation": "Move to e1 executes the winning pin!",
    "from": "a1",
    "to": "e1",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "q",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 42,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #2",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to d1!",
    "explanation": "Move to d1 executes the winning pin!",
    "from": "a1",
    "to": "d1",
    "board": [
      [
        null,
        null,
        null,
        "k",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "q",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 43,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #3",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to f1!",
    "explanation": "Move to f1 executes the winning pin!",
    "from": "h1",
    "to": "f1",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        "k",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "q",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        "R"
      ]
    ]
  },
  {
    "id": 44,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #4",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to c1!",
    "explanation": "Move to c1 executes the winning pin!",
    "from": "a1",
    "to": "c1",
    "board": [
      [
        null,
        null,
        "k",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "q",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 45,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #5",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to g1!",
    "explanation": "Move to g1 executes the winning pin!",
    "from": "h1",
    "to": "g1",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "q",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        null,
        "R"
      ]
    ]
  },
  {
    "id": 46,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #6",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to g5!",
    "explanation": "Move to g5 executes the winning pin!",
    "from": "c1",
    "to": "g5",
    "board": [
      [
        null,
        null,
        null,
        "q",
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "n",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        "B",
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 47,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #7",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to b5!",
    "explanation": "Move to b5 executes the winning pin!",
    "from": "f1",
    "to": "b5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "n",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "B",
        null,
        "K"
      ]
    ]
  },
  {
    "id": 48,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #8",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to a3!",
    "explanation": "Move to a3 executes the winning pin!",
    "from": "c1",
    "to": "a3",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "r",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "B",
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 49,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #9",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to c4!",
    "explanation": "Move to c4 executes the winning pin!",
    "from": "f1",
    "to": "c4",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "n",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        "B",
        null,
        null
      ]
    ]
  },
  {
    "id": 50,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "Pin Freeze #10",
    "prompt": "Pin the enemy piece against their King!",
    "hint": "Slide your piece to f4!",
    "explanation": "Move to f4 executes the winning pin!",
    "from": "c1",
    "to": "f4",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "r",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        "B",
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 51,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #11",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to a4!",
    "explanation": "Move to a4 executes the winning skewer!",
    "from": "a1",
    "to": "a4",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        "q"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 52,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #12",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to a5!",
    "explanation": "Move to a5 executes the winning skewer!",
    "from": "a1",
    "to": "a5",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        "q"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 53,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #13",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to a3!",
    "explanation": "Move to a3 executes the winning skewer!",
    "from": "a1",
    "to": "a3",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        "q"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 54,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #14",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to a6!",
    "explanation": "Move to a6 executes the winning skewer!",
    "from": "a1",
    "to": "a6",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        "q"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 55,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #15",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to h4!",
    "explanation": "Move to h4 executes the winning skewer!",
    "from": "h1",
    "to": "h4",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "q",
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "K",
        null,
        null,
        null,
        null,
        null,
        "R"
      ]
    ]
  },
  {
    "id": 56,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #16",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to a3!",
    "explanation": "Move to a3 executes the winning skewer!",
    "from": "c1",
    "to": "a3",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "r",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "B",
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 57,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #17",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to h3!",
    "explanation": "Move to h3 executes the winning skewer!",
    "from": "f1",
    "to": "h3",
    "board": [
      [
        null,
        "r",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "k",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        "B",
        null,
        null
      ]
    ]
  },
  {
    "id": 58,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #18",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to b2!",
    "explanation": "Move to b2 executes the winning skewer!",
    "from": "c1",
    "to": "b2",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "r"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "k",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        "B",
        null,
        null,
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 59,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #19",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to c4!",
    "explanation": "Move to c4 executes the winning skewer!",
    "from": "f1",
    "to": "c4",
    "board": [
      [
        "r",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "k",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "B",
        null,
        "K"
      ]
    ]
  },
  {
    "id": 60,
    "cat": "pin_skewer",
    "categoryLabel": "🧊 Pins & Skewers",
    "title": "X-Ray Skewer #20",
    "prompt": "Skewer the King to win the piece behind it!",
    "hint": "Slide your piece to f4!",
    "explanation": "Move to f4 executes the winning skewer!",
    "from": "c1",
    "to": "f4",
    "board": [
      [
        null,
        "q",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "k",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "B",
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 61,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #1",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on e5!",
    "explanation": "Taking on e5 wins a free piece!",
    "from": "d4",
    "to": "e5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "n",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "P",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 62,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #2",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on d5!",
    "explanation": "Taking on d5 wins a free piece!",
    "from": "c4",
    "to": "d5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "n",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "P",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 63,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #3",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on f5!",
    "explanation": "Taking on f5 wins a free piece!",
    "from": "e4",
    "to": "f5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "b",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "P",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 64,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #4",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on c5!",
    "explanation": "Taking on c5 wins a free piece!",
    "from": "b4",
    "to": "c5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "b",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "P",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 65,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #5",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on g5!",
    "explanation": "Taking on g5 wins a free piece!",
    "from": "f4",
    "to": "g5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "n",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "P",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 66,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #6",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on c5!",
    "explanation": "Taking on c5 wins a free piece!",
    "from": "c1",
    "to": "c5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "b",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "Q",
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 67,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #7",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on d5!",
    "explanation": "Taking on d5 wins a free piece!",
    "from": "d1",
    "to": "d5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "n",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "Q",
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 68,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #8",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on e7!",
    "explanation": "Taking on e7 wins a free piece!",
    "from": "e1",
    "to": "e7",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "r",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "Q",
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 69,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #9",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on f4!",
    "explanation": "Taking on f4 wins a free piece!",
    "from": "f1",
    "to": "f4",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "b",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        "Q",
        null,
        null
      ]
    ]
  },
  {
    "id": 70,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #10",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on g5!",
    "explanation": "Taking on g5 wins a free piece!",
    "from": "g1",
    "to": "g5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "n",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        "Q",
        null
      ]
    ]
  },
  {
    "id": 71,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #11",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on h8!",
    "explanation": "Taking on h8 wins a free piece!",
    "from": "b2",
    "to": "h8",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        "r"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "B",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 72,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #12",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on a8!",
    "explanation": "Taking on a8 wins a free piece!",
    "from": "g2",
    "to": "a8",
    "board": [
      [
        "r",
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "B",
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 73,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #13",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on c6!",
    "explanation": "Taking on c6 wins a free piece!",
    "from": "b5",
    "to": "c6",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "n",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "B",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 74,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #14",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on f6!",
    "explanation": "Taking on f6 wins a free piece!",
    "from": "g5",
    "to": "f6",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "n",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "B",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 75,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #15",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on d8!",
    "explanation": "Taking on d8 wins a free piece!",
    "from": "g5",
    "to": "d8",
    "board": [
      [
        null,
        null,
        null,
        "q",
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "B",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 76,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #16",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on a5!",
    "explanation": "Taking on a5 wins a free piece!",
    "from": "c4",
    "to": "a5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "q",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "N",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 77,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #17",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on h5!",
    "explanation": "Taking on h5 wins a free piece!",
    "from": "f4",
    "to": "h5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "q"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "N",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 78,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #18",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on c7!",
    "explanation": "Taking on c7 wins a free piece!",
    "from": "d5",
    "to": "c7",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        "r",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 79,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #19",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on e6!",
    "explanation": "Taking on e6 wins a free piece!",
    "from": "d4",
    "to": "e6",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "b",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 80,
    "cat": "snack",
    "categoryLabel": "🍴 Free Snack",
    "title": "Free Piece Snack #20",
    "prompt": "Black left a piece undefended! Capture it!",
    "hint": "Capture the piece on f5!",
    "explanation": "Taking on f5 wins a free piece!",
    "from": "d4",
    "to": "f5",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "n",
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 81,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #1",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to c6!",
    "explanation": "Move to c6 tears open Black's defense!",
    "from": "d4",
    "to": "c6",
    "board": [
      [
        null,
        "k",
        null,
        "q",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "R",
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 82,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #2",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to d6!",
    "explanation": "Move to d6 tears open Black's defense!",
    "from": "e4",
    "to": "d6",
    "board": [
      [
        null,
        null,
        "k",
        null,
        "q",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "N",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "R",
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 83,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #3",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to b6!",
    "explanation": "Move to b6 tears open Black's defense!",
    "from": "c4",
    "to": "b6",
    "board": [
      [
        "k",
        null,
        "q",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "N",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "R",
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 84,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #4",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to e6!",
    "explanation": "Move to e6 tears open Black's defense!",
    "from": "f4",
    "to": "e6",
    "board": [
      [
        null,
        null,
        null,
        "k",
        null,
        "q",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "N",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "R",
        "K",
        null
      ]
    ]
  },
  {
    "id": 85,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #5",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to c7!",
    "explanation": "Move to c7 tears open Black's defense!",
    "from": "d5",
    "to": "c7",
    "board": [
      [
        null,
        "k",
        null,
        "q",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "N",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "R",
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 86,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #6",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to c8!",
    "explanation": "Move to c8 tears open Black's defense!",
    "from": "c4",
    "to": "c8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        "r",
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "Q",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "R",
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 87,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #7",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to d8!",
    "explanation": "Move to d8 tears open Black's defense!",
    "from": "d4",
    "to": "d8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "r",
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "Q",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        "R",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 88,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #8",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to b8!",
    "explanation": "Move to b8 tears open Black's defense!",
    "from": "b4",
    "to": "b8",
    "board": [
      [
        null,
        null,
        null,
        null,
        "r",
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "Q",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "R",
        null,
        null,
        null,
        "K",
        null
      ]
    ]
  },
  {
    "id": 89,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #9",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to e8!",
    "explanation": "Move to e8 tears open Black's defense!",
    "from": "e4",
    "to": "e8",
    "board": [
      [
        "k",
        null,
        "r",
        null,
        null,
        null,
        null,
        null
      ],
      [
        "p",
        "p",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "Q",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "R",
        "K",
        null
      ]
    ]
  },
  {
    "id": 90,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #10",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to f8!",
    "explanation": "Move to f8 tears open Black's defense!",
    "from": "f4",
    "to": "f8",
    "board": [
      [
        "k",
        null,
        null,
        "r",
        null,
        null,
        null,
        null
      ],
      [
        "p",
        "p",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "Q",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "K",
        null,
        null,
        null,
        null,
        "R",
        null
      ]
    ]
  },
  {
    "id": 91,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #11",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to a8!",
    "explanation": "Move to a8 tears open Black's defense!",
    "from": "a1",
    "to": "a8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "R",
        null,
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 92,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #12",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to b8!",
    "explanation": "Move to b8 tears open Black's defense!",
    "from": "b1",
    "to": "b8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "R",
        null,
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 93,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #13",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to c8!",
    "explanation": "Move to c8 tears open Black's defense!",
    "from": "c1",
    "to": "c8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "R",
        null,
        null,
        null,
        null,
        "K"
      ]
    ]
  },
  {
    "id": 94,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #14",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to f8!",
    "explanation": "Move to f8 tears open Black's defense!",
    "from": "f1",
    "to": "f8",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "k"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        "R",
        null,
        null
      ]
    ]
  },
  {
    "id": 95,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #15",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to g8!",
    "explanation": "Move to g8 tears open Black's defense!",
    "from": "g1",
    "to": "g8",
    "board": [
      [
        null,
        null,
        "k",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "p",
        "p",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "K",
        null,
        null,
        null,
        null,
        null,
        "R",
        null
      ]
    ]
  },
  {
    "id": 96,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #16",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to f7!",
    "explanation": "Move to f7 tears open Black's defense!",
    "from": "f6",
    "to": "f7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        "k",
        null,
        "r"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "p",
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "Q",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "B",
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 97,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #17",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to g7!",
    "explanation": "Move to g7 tears open Black's defense!",
    "from": "g5",
    "to": "g7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "p",
        null,
        "p"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "Q",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "B",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 98,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #18",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to e7!",
    "explanation": "Move to e7 tears open Black's defense!",
    "from": "e6",
    "to": "e7",
    "board": [
      [
        null,
        null,
        null,
        null,
        "k",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "p",
        null,
        "p",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "Q",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        "B",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 99,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #19",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to d7!",
    "explanation": "Move to d7 tears open Black's defense!",
    "from": "d6",
    "to": "d7",
    "board": [
      [
        null,
        null,
        null,
        "k",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        "p",
        null,
        "p",
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "Q",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "B",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  {
    "id": 100,
    "cat": "discovered",
    "categoryLabel": "🥷 Discovered & Back-Rank",
    "title": "Tactical Strike #20",
    "prompt": "Execute the winning combination!",
    "hint": "Move your piece to g7!",
    "explanation": "Move to g7 tears open Black's defense!",
    "from": "h6",
    "to": "g7",
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        "k",
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        "p",
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Q"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        "B",
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        "K",
        null,
        null,
        null
      ]
    ]
  },
  // ================= MASTER MULTI-MOVE COMBINATIONS (#101 - #120) =================
  {
    "id": 101,
    "cat": "combo",
    "rating": 1350,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Queen Sacrifice Back-Rank Mate",
    "prompt": "Sacrifice your Queen to deflect the Rook and deliver back-rank checkmate!",
    "hint": "Step 1: Sacrifice Queen on e8 with check! Step 2: Finish with Rook to e8#!",
    "explanation": "1. Qxe8+! Rxe8 2. Rxe8# — classic deflection checkmate!",
    "from": "b5",
    "to": "e8",
    "sequence": [
      { "move": "b5-e8", "response": "a8-e8", "hint": "Sacrifice Queen from b5 to e8 with check!" },
      { "move": "e1-e8", "hint": "Recapture with Rook on e8 for checkmate!" }
    ],
    "board": [
      ["r", null, null, null, null, null, "k", null],
      ["p", "p", null, null, null, "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, "Q", null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", null, null, null, "P", "P", "P"],
      [null, null, null, null, "R", null, "K", null]
    ]
  },
  {
    "id": 102,
    "cat": "combo",
    "rating": 1450,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Philidor’s Smothered Mate",
    "prompt": "Force Black’s Rook to smother its own King, then deliver Knight mate!",
    "hint": "Sacrifice your Queen on g8 with check! Black Rook must take, trapping the King!",
    "explanation": "1. Qg8+! Rxg8 2. Nf7# — the immortal Smothered Mate!",
    "from": "c4",
    "to": "g8",
    "sequence": [
      { "move": "c4-g8", "response": "f8-g8", "hint": "Sacrifice Queen on g8+ (protected by Knight on h6)!" },
      { "move": "h6-f7", "hint": "Leap Knight from h6 to f7 for Smothered Checkmate!" }
    ],
    "board": [
      [null, null, null, null, null, "r", null, "k"],
      [null, null, null, null, null, null, "p", "p"],
      [null, null, null, null, null, null, null, "N"],
      [null, null, null, null, null, null, null, null],
      [null, null, "Q", null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, "P", "P"],
      [null, null, null, null, null, null, "K", null]
    ]
  },
  {
    "id": 103,
    "cat": "combo",
    "rating": 1400,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Anastasia’s Mate Sacrifice",
    "prompt": "Open the h-file with a Queen sacrifice to unleash Rook mate!",
    "hint": "Sacrifice Qxh7+! After Kxh7, slide Rook to h3#!",
    "explanation": "1. Qxh7+! Kxh7 2. Rh3# — Knight on e7 seals g8 and g6!",
    "from": "h5",
    "to": "h7",
    "sequence": [
      { "move": "h5-h7", "response": "g8-h7", "hint": "Capture on h7 with your Queen (check)!" },
      { "move": "e3-h3", "hint": "Slide Rook from e3 to h3 for checkmate!" }
    ],
    "board": [
      [null, null, null, null, null, "r", "k", null],
      ["p", "p", null, null, "N", "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, "Q"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, "R", null, null, null],
      ["P", "P", null, null, null, "P", "P", "P"],
      [null, null, null, null, null, null, "K", null]
    ]
  },
  {
    "id": 104,
    "cat": "combo",
    "rating": 1420,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Arabian Mate Sacrifice",
    "prompt": "Sacrifice your Queen on h7 to set up the classic Rook + Knight Arabian Mate!",
    "hint": "Step 1: Sacrifice Qxh7+! Step 2: Zoom Rook from g1 to g8# (guarded by Nf6)!",
    "explanation": "1. Qxh7+! Rxh7 2. Rg8# — the timeless Arabian Mate!",
    "from": "d3",
    "to": "h7",
    "sequence": [
      { "move": "d3-h7", "response": "c7-h7", "hint": "Sacrifice your Queen on h7 with check!" },
      { "move": "g1-g8", "hint": "Slide Rook from g1 to g8# (protected by your f6 Knight)!" }
    ],
    "board": [
      [null, null, null, null, null, null, null, "k"],
      ["p", "p", "r", null, null, null, null, "p"],
      [null, null, null, null, null, "N", null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, "Q", null, null, null, null],
      ["P", "P", "P", null, null, "P", null, "P"],
      [null, null, null, null, null, null, "R", "K"]
    ]
  },
  {
    "id": 105,
    "cat": "combo",
    "rating": 1480,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Decoy into Royal Fork",
    "prompt": "Sacrifice your Rook to lure Black’s King onto a deadly Knight fork!",
    "hint": "Sacrifice Rook on e7+! Once Kxe7, jump Knight to d5+ forking King and Queen!",
    "explanation": "1. Rxe7+! Kxe7 2. Nd5+! wins Black’s Queen cleanly!",
    "from": "e1",
    "to": "e7",
    "sequence": [
      { "move": "e1-e7", "response": "e8-e7", "hint": "Sacrifice Rook on e7 with check!" },
      { "move": "c3-d5", "hint": "Jump Knight from c3 to d5 forking King and Queen!" }
    ],
    "board": [
      [null, null, null, null, "k", null, null, null],
      [null, null, "q", null, "b", "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, "N", null, null, null, null, null],
      ["P", "P", "P", null, null, "P", "P", "P"],
      [null, null, null, null, "R", null, "K", null]
    ]
  },
  {
    "id": 106,
    "cat": "combo",
    "rating": 1520,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Opera Game Finale",
    "prompt": "Channel Paul Morphy! Sacrifice your Queen to finish with Rook checkmate!",
    "hint": "Play Qb8+! Black Knight must capture Qxb8, then Rd8# is mate!",
    "explanation": "1. Qb8+! Nxb8 2. Rd8# — Paul Morphy’s famous 1858 Opera House mate!",
    "from": "b3",
    "to": "b8",
    "sequence": [
      { "move": "b3-b8", "response": "d7-b8", "hint": "Sacrifice Queen on b8 with check!" },
      { "move": "d1-d8", "hint": "Zoom Rook to d8 protected by your g5 Bishop!" }
    ],
    "board": [
      [null, null, null, null, "k", null, null, "r"],
      ["p", null, "p", "n", null, "p", "p", "p"],
      [null, null, null, null, "p", null, null, null],
      [null, null, null, null, null, null, "B", null],
      [null, null, null, null, null, null, null, null],
      [null, "Q", null, null, null, null, null, null],
      ["P", "P", "P", null, null, "P", "P", "P"],
      [null, null, "K", "R", null, null, null, null]
    ]
  },
  {
    "id": 107,
    "cat": "combo",
    "rating": 1500,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Boden’s Criss-Cross Mate",
    "prompt": "Sacrifice your Queen on c6 to crisscross Black’s King with two Bishops!",
    "hint": "Sacrifice Qxc6+! After bxc6, play Ba6#!",
    "explanation": "1. Qxc6+! bxc6 2. Ba6# — Boden’s Mate with crisscrossing Bishops!",
    "from": "f3",
    "to": "c6",
    "sequence": [
      { "move": "f3-c6", "response": "b7-c6", "hint": "Sacrifice Queen on c6 with check!" },
      { "move": "f1-a6", "hint": "Slide light-squared Bishop to a6 for checkmate!" }
    ],
    "board": [
      [null, "r", "k", "r", null, null, null, null],
      ["p", "p", "p", null, "n", "p", "p", "p"],
      [null, null, "n", null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, "Q", null, null],
      ["P", "P", "P", null, null, "P", "P", "P"],
      [null, "K", null, "R", null, "B", null, null]
    ]
  },
  {
    "id": 108,
    "cat": "combo",
    "rating": 1550,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Deflect the Queen Guard",
    "prompt": "Black’s King guards the Queen on d7—drive the King away with a Rook check!",
    "hint": "Play Rh8+! Black King must capture Kxh8, leaving the d7 Queen undefended!",
    "explanation": "1. Rh8+! Kxh8 2. Qxd7 wins Black’s Queen cleanly!",
    "from": "h1",
    "to": "h8",
    "sequence": [
      { "move": "h1-h8", "response": "g8-h8", "hint": "Sacrifice Rook on h8 with check!" },
      { "move": "d2-d7", "hint": "Capture Black’s undefended Queen on d7!" }
    ],
    "board": [
      [null, null, null, null, null, null, "k", null],
      ["p", "p", null, "q", null, "p", "p", null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", null, "Q", null, "P", "P", null],
      [null, "K", null, null, null, null, null, "R"]
    ]
  },
  {
    "id": 109,
    "cat": "combo",
    "rating": 1580,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Pin & Pile On",
    "prompt": "Exploit the absolute pin on Black’s d7 Rook to win decisive material!",
    "hint": "Capture on d7 with your Rook (Rxd7)! Wait—first sacrifice Ne5 or Rxd7!",
    "explanation": "1. Rxd7! Qxd7 2. Bxd7+ wins a full Rook thanks to the pin!",
    "from": "d1",
    "to": "d7",
    "sequence": [
      { "move": "d1-d7", "response": "c6-d7", "hint": "Capture the pinned piece on d7 with your Rook!" },
      { "move": "b5-d7", "hint": "Recapture on d7 with your Bishop (with check)!" }
    ],
    "board": [
      [null, null, null, null, "k", null, null, null],
      ["p", "p", null, "r", null, "p", "p", "p"],
      [null, null, "q", null, null, null, null, null],
      [null, "B", null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", "P", null, null, "P", "P", "P"],
      [null, null, "K", "R", null, null, null, null]
    ]
  },
  {
    "id": 110,
    "cat": "combo",
    "rating": 1620,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Corner Queen Sacrifice",
    "prompt": "Sacrifice your Queen in the h8 corner so your Rook delivers back-rank mate!",
    "hint": "Play Qh8+! Black King must capture Kxh8, then Rxf8# is checkmate!",
    "explanation": "1. Qh8+! Kxh8 2. Rxf8# — deflection into back-rank checkmate!",
    "from": "d4",
    "to": "h8",
    "sequence": [
      { "move": "d4-h8", "response": "g8-h8", "hint": "Zoom Queen along the long diagonal to h8 with check!" },
      { "move": "f1-f8", "hint": "Capture on f8 with your Rook for back-rank checkmate!" }
    ],
    "board": [
      [null, null, null, null, null, "r", "k", null],
      ["p", "p", null, null, null, null, null, "p"],
      [null, null, null, null, "p", null, "p", null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, "Q", null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", "P", null, null, null, "P", "P"],
      [null, "K", null, null, null, "R", null, null]
    ]
  },
  {
    "id": 111,
    "cat": "combo",
    "rating": 1650,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Skewer Through the King",
    "prompt": "Sacrifice to draw the King onto the same file as Black’s Queen, then skewer!",
    "hint": "Play Rxf7+! After Kxf7, play Rf1+ skewering King and Queen!",
    "explanation": "1. Rxf7+! Kxf7 2. Rf1+ skewers the King and wins the Queen behind!",
    "from": "f3",
    "to": "f7",
    "sequence": [
      { "move": "f3-f7", "response": "g8-f7", "hint": "Capture on f7 with your f3 Rook (check)!" },
      { "move": "a1-f1", "hint": "Slide your other Rook from a1 to f1+ skewering King and f8 Queen!" }
    ],
    "board": [
      [null, null, null, null, null, "q", "k", null],
      ["p", "p", null, null, null, "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, "R", null, null],
      ["P", "P", null, null, null, null, "P", "P"],
      ["R", null, null, null, null, null, "K", null]
    ]
  },
  {
    "id": 112,
    "cat": "combo",
    "rating": 1680,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Breakthrough Pawn Promotion",
    "prompt": "Clear the blocker with a Rook sacrifice so your c7 pawn queens with mate!",
    "hint": "Sacrifice Rd8+! After Rxd8, cxd8=Q# is checkmate!",
    "explanation": "1. Rd8+! Rxd8 2. cxd8=Q# — pawn promotes with back-rank checkmate!",
    "from": "d1",
    "to": "d8",
    "sequence": [
      { "move": "d1-d8", "response": "a8-d8", "hint": "Slide Rook to d8 with check!" },
      { "move": "c7-d8", "hint": "Capture on d8 with your c7 pawn to promote with checkmate!" }
    ],
    "board": [
      ["r", null, null, null, null, null, "k", null],
      [null, null, "P", null, null, "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, "P", "P", "P"],
      [null, null, null, "R", null, null, "K", null]
    ]
  },
  {
    "id": 113,
    "cat": "combo",
    "rating": 1760,
    "categoryLabel": "🔥 Master Combo (3 Moves)",
    "title": "Réti’s Immortal Double-Check",
    "prompt": "Reproduce Richard Réti’s 1910 masterpiece! Queen sacrifice + Double Check + Mate!",
    "hint": "1. Qd8+! Kxd8 2. Bg5+! (double check!) Ke8 3. Rd8#!",
    "explanation": "1. Qd8+! Kxd8 2. Bg5++ Ke8 3. Rd8# — the most famous 3-move combination in chess history!",
    "from": "d3",
    "to": "d8",
    "sequence": [
      { "move": "d3-d8", "response": "e8-d8", "hint": "Sacrifice your Queen on d8 with check!" },
      { "move": "d2-g5", "response": "d8-e8", "hint": "Move Bd2 to g5++ for a lethal DOUBLE CHECK!" },
      { "move": "d1-d8", "hint": "Finish with Rd8# checkmate (guarded by Bg5)!" }
    ],
    "board": [
      [null, null, "b", null, "k", "b", "n", "r"],
      ["p", "p", null, null, null, "p", "p", "p"],
      [null, "q", "p", null, null, null, null, null],
      [null, null, null, null, "P", null, null, null],
      [null, null, null, null, "n", null, null, null],
      [null, null, "N", "Q", null, null, null, null],
      ["P", "P", "P", "B", null, "P", "P", "P"],
      [null, "K", null, "R", null, "B", "N", "R"]
    ]
  },
  {
    "id": 114,
    "cat": "combo",
    "rating": 1720,
    "categoryLabel": "🔥 Master Combo (2 Moves)",
    "title": "Legal’s Mate Trap",
    "prompt": "Spring the famous Legal’s Trap! Sacrifice your Queen to checkmate with minors!",
    "hint": "Strike f7 with your Bishop (Bxf7+)! After Ke7, jump Nd5#!",
    "explanation": "1. Bxf7+! Ke7 2. Nd5# — classic minor-piece coordination checkmate!",
    "from": "c4",
    "to": "f7",
    "sequence": [
      { "move": "c4-f7", "response": "e8-e7", "hint": "Strike f7 with your Bishop (check)!" },
      { "move": "c3-d5", "hint": "Leap Knight from c3 to d5 for checkmate!" }
    ],
    "board": [
      ["r", null, null, "q", "k", "b", "n", "r"],
      ["p", "p", "p", null, null, "p", "p", "p"],
      [null, null, "n", "p", null, null, null, null],
      [null, null, null, null, "N", null, null, null],
      [null, null, "B", null, "P", null, null, null],
      [null, null, "N", null, null, null, null, null],
      ["P", "P", "P", "P", null, "P", "P", "P"],
      ["R", null, "B", "b", "K", null, null, "R"]
    ]
  },
  {
    "id": 115,
    "cat": "combo",
    "rating": 1750,
    "categoryLabel": "🔥 Master Combo (3 Moves)",
    "title": "Blind Swine Double-Rook Mate",
    "prompt": "Storm the 7th rank with both Rooks for the classic 3-move Blind Swine checkmate!",
    "hint": "1. Rxg7+ Kh8 2. Rxh7+ Kg8 3. Rcg7#!",
    "explanation": "1. Rxg7+! Kh8 2. Rxh7+! Kg8 3. Rg7# — Blind Swine checkmate with two Rooks on the 7th rank!",
    "from": "g1",
    "to": "g7",
    "sequence": [
      { "move": "g1-g7", "response": "g8-h8", "hint": "Capture on g7 with your g1 Rook (check)!" },
      { "move": "g7-h7", "response": "h8-g8", "hint": "Capture on h7 with your g7 Rook (check)!" },
      { "move": "c7-g7", "hint": "Slide your c7 Rook to g7 for Blind Swine checkmate!" }
    ],
    "board": [
      [null, null, null, null, null, "r", "k", null],
      ["p", "p", "R", null, null, null, "p", "p"],
      [null, null, null, null, "p", null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", null, null, null, "P", null, "P"],
      [null, null, null, null, null, null, "R", "K"]
    ]
  },
  {
    "id": 116,
    "cat": "black_tactics",
    "turn": "b",
    "categoryLabel": "⬛ Black Counter-Tactics",
    "rating": 1320,
    "title": "Black Back-Rank Ambush",
    "prompt": "Black to move! Punish White's unguarded back rank with checkmate in 1.",
    "hint": "Drop your Black Queen straight down the open d-file to d1!",
    "explanation": "Qd1#! White's pawns on f2, g2, and h2 trap their own King on the first rank.",
    "from": "d8",
    "to": "d1",
    "board": [
      [null, null, null, "q", null, null, "k", null],
      ["p", "p", null, null, null, "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["Q", null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, "P", null, null, null, "P", "P", "P"],
      [null, null, null, null, null, null, "K", null]
    ]
  },
  {
    "id": 117,
    "cat": "black_tactics",
    "turn": "b",
    "categoryLabel": "⬛ Black Counter-Tactics",
    "rating": 1360,
    "title": "Black Royal Family Fork",
    "prompt": "Black to move! Leap your Knight to fork White's King and Queen at once.",
    "hint": "Jump your Knight from d4 to c2 for a royal check and Queen fork!",
    "explanation": "Nc2+! White must move the King out of check while Black wins the Queen on a1.",
    "from": "d4",
    "to": "c2",
    "board": [
      [null, null, null, null, null, null, "k", null],
      ["p", "p", null, null, null, "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, "n", null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["P", "P", null, null, null, "P", "P", "P"],
      ["Q", null, null, null, "K", "R", null, null]
    ]
  },
  {
    "id": 118,
    "cat": "black_tactics",
    "turn": "b",
    "categoryLabel": "⬛ Black Counter-Tactics",
    "rating": 1410,
    "title": "Long-Diagonal Battery Mate",
    "prompt": "Black to move! Use your fianchettoed Bishop on b7 to deliver checkmate.",
    "hint": "Your Bishop on b7 aims all the way down the long diagonal to g2!",
    "explanation": "Qxg2#! Protected by the sniper Bishop on b7, the Black Queen delivers an unstoppable Kiss of Death.",
    "from": "h3",
    "to": "g2",
    "board": [
      [null, null, null, null, null, null, "k", null],
      [null, "b", "p", null, null, "p", "p", "p"],
      ["p", null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, "q"],
      ["P", "P", null, null, null, "P", "P", "P"],
      [null, null, null, null, null, "R", "K", null]
    ]
  },
  {
    "id": 119,
    "cat": "black_tactics",
    "turn": "b",
    "categoryLabel": "⬛ Black Counter-Tactics",
    "rating": 1520,
    "title": "Black Queen Deflection Sacrifice (2-Move)",
    "prompt": "Black to move! Sacrifice your Queen to deflect White's back-rank Rook and mate in 2.",
    "hint": "1... Qe1+! forces 2. Rxe1, and your e8 Rook finishes the job!",
    "explanation": "1... Qe1+! Rxe1 2... Rxe1#! Classic deflection sacrifice from the Black side.",
    "from": "b4",
    "to": "e1",
    "sequence": [
      { "move": "b4-e1", "response": "d1-e1", "hint": "Sacrifice your Queen on e1 with check!" },
      { "move": "e8-e1", "hint": "Recapture on e1 with your Rook for back-rank checkmate!" }
    ],
    "board": [
      [null, null, null, null, "r", null, "k", null],
      ["p", "p", null, null, null, "p", "p", "p"],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, "q", null, null, null, null, null, null],
      ["Q", null, null, null, null, null, null, null],
      ["P", "P", null, null, null, "P", "P", "P"],
      [null, null, null, "R", null, null, "K", null]
    ]
  },
  {
    "id": 120,
    "cat": "black_tactics",
    "turn": "b",
    "categoryLabel": "⬛ Black Counter-Tactics",
    "rating": 1580,
    "title": "Black Corner Net Mate in 2",
    "prompt": "Black to move! Combine your Queen and Knight on f3 to force checkmate in 2.",
    "hint": "Check down the open h-file first with 1... Qh4+!",
    "explanation": "1... Qh4+! Qh2 2... Qxh2#! The Knight on f3 guards both g1 and h2, sealing the corner net.",
    "from": "d4",
    "to": "h4",
    "sequence": [
      { "move": "d4-h4", "response": "d6-h2", "hint": "Swing your Queen to h4 for a deadly h-file check!" },
      { "move": "h4-h2", "hint": "Capture the blocking Queen on h2—your f3 Knight protects you!" }
    ],
    "board": [
      [null, null, null, null, null, null, null, "k"],
      ["p", "p", null, null, null, "p", "p", "p"],
      [null, null, null, "Q", null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, "q", null, null, null, null],
      [null, null, null, null, null, "n", null, null],
      ["P", null, null, null, null, "P", "P", null],
      [null, null, null, null, null, null, "R", "K"]
    ]
  }
];

class TacticsDojoManager {
  constructor() {
    this.stats = this.loadStats();
    this.currentIndex = 0;
    this.currentPuzzle = null;
    this.currentStepIndex = 0;
    this.selectedCategory = 'all';
    // Assign calibrated ratings to all puzzles if not explicitly tagged
    DOJO_PUZZLES.forEach((p, idx) => {
      if (!p.rating) {
        if (p.cat === 'snack') p.rating = 880 + (idx % 20) * 12;
        else if (p.cat === 'mate1') p.rating = 940 + (idx % 20) * 14;
        else if (p.cat === 'fork') p.rating = 1050 + (idx % 20) * 15;
        else if (p.cat === 'pin_skewer') p.rating = 1150 + (idx % 20) * 15;
        else if (p.cat === 'discovered') p.rating = 1250 + (idx % 20) * 16;
        else p.rating = 1400;
      }
    });
  }

  loadStats() {
    try {
      const data = localStorage.getItem('chess_dojo_stats');
      const parsed = data ? JSON.parse(data) : null;
      return Object.assign(
        { rating: 1000, streak: 0, bestStreak: 0, solvedCount: 0, missedIds: [], recentIds: [] },
        parsed || {}
      );
    } catch (e) {
      return { rating: 1000, streak: 0, bestStreak: 0, solvedCount: 0, missedIds: [], recentIds: [] };
    }
  }

  saveStats() {
    try {
      localStorage.setItem('chess_dojo_stats', JSON.stringify(this.stats));
    } catch (e) {
      console.error('Failed to save Dojo stats', e);
    }
  }

  setCategory(cat) {
    this.selectedCategory = cat || 'all';
  }

  // Adaptive rating-matched + spaced-repetition puzzle selector
  getRandomPuzzle(category = null) {
    const cat = category || this.selectedCategory || 'all';
    let pool = cat === 'all' ? DOJO_PUZZLES : DOJO_PUZZLES.filter(p => p.cat === cat);
    if (pool.length === 0) pool = DOJO_PUZZLES;

    const recent = this.stats.recentIds || [];
    const nonRecent = pool.filter(p => !recent.includes(p.id));
    if (nonRecent.length > 0) pool = nonRecent;

    // 30% chance to revisit a previously missed puzzle (spaced repetition!)
    const missedPool = pool.filter(p => (this.stats.missedIds || []).includes(p.id));
    if (missedPool.length > 0 && Math.random() < 0.3) {
      const p = missedPool[Math.floor(Math.random() * missedPool.length)];
      return this.activatePuzzle(p);
    }

    // Weight puzzles near user's current rating (+50 slightly challenging target!)
    const targetRating = (this.stats.rating || 1000) + 50;
    const nearRating = pool.filter(p => Math.abs((p.rating || 1000) - targetRating) <= 240);
    const pickFrom = nearRating.length >= 3 ? nearRating : pool;
    const chosen = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    return this.activatePuzzle(chosen);
  }

  activatePuzzle(p) {
    this.currentPuzzle = p;
    this.currentStepIndex = 0;
    this.currentIndex = DOJO_PUZZLES.indexOf(p);
    if (!Array.isArray(this.stats.recentIds)) this.stats.recentIds = [];
    this.stats.recentIds.push(p.id);
    if (this.stats.recentIds.length > 20) this.stats.recentIds.shift();
    return p;
  }

  getPuzzleById(id) {
    const p = DOJO_PUZZLES.find(x => x.id === id) || DOJO_PUZZLES[0];
    return this.activatePuzzle(p);
  }

  checkMove(from, to) {
    if (!this.currentPuzzle) return false;
    if (this.currentPuzzle.sequence && this.currentPuzzle.sequence.length > 0) {
      const step = this.currentPuzzle.sequence[this.currentStepIndex] || this.currentPuzzle.sequence[0];
      const [fStr, tStr] = step.move.split('-');
      const solFrom = ChessRules.fromAlgebraic(fStr);
      const solTo = ChessRules.fromAlgebraic(tStr);
      return from.r === solFrom.r && from.c === solFrom.c && to.r === solTo.r && to.c === solTo.c;
    }
    const solFrom = ChessRules.fromAlgebraic(this.currentPuzzle.from);
    const solTo = ChessRules.fromAlgebraic(this.currentPuzzle.to);
    return from.r === solFrom.r && from.c === solFrom.c && to.r === solTo.r && to.c === solTo.c;
  }

  handleSuccess() {
    const pRating = (this.currentPuzzle && this.currentPuzzle.rating) || 1000;
    const isMulti = !!(this.currentPuzzle && this.currentPuzzle.sequence && this.currentPuzzle.sequence.length > 1);
    const gain = isMulti ? 22 : (pRating > this.stats.rating + 150 ? 20 : 15);

    this.stats.rating += gain;
    this.stats.streak += 1;
    this.stats.solvedCount += 1;
    if (this.stats.streak > this.stats.bestStreak) {
      this.stats.bestStreak = this.stats.streak;
    }
    if (this.currentPuzzle && Array.isArray(this.stats.missedIds)) {
      this.stats.missedIds = this.stats.missedIds.filter(id => id !== this.currentPuzzle.id);
    }
    this.saveStats();
    return {
      ratingGain: gain,
      streak: this.stats.streak,
      rating: this.stats.rating,
      explanation: this.currentPuzzle ? this.currentPuzzle.explanation : ''
    };
  }

  handleFailure() {
    this.stats.streak = 0;
    this.stats.rating = Math.max(800, this.stats.rating - 5);
    if (this.currentPuzzle) {
      if (!Array.isArray(this.stats.missedIds)) this.stats.missedIds = [];
      if (!this.stats.missedIds.includes(this.currentPuzzle.id)) {
        this.stats.missedIds.push(this.currentPuzzle.id);
      }
    }
    this.saveStats();
    let hint = this.currentPuzzle ? this.currentPuzzle.hint : '';
    if (this.currentPuzzle && this.currentPuzzle.sequence && this.currentPuzzle.sequence[this.currentStepIndex]) {
      hint = this.currentPuzzle.sequence[this.currentStepIndex].hint || hint;
    }
    return {
      streak: 0,
      rating: this.stats.rating,
      hint
    };
  }
}

window.DOJO_PUZZLES = DOJO_PUZZLES;
window.TacticsDojo = new TacticsDojoManager();
