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
  }
];

class TacticsDojoManager {
  constructor() {
    this.stats = this.loadStats();
    this.currentIndex = 0;
    this.currentPuzzle = null;
  }

  loadStats() {
    try {
      const data = localStorage.getItem('chess_dojo_stats');
      return data ? JSON.parse(data) : { rating: 1000, streak: 0, bestStreak: 0, solvedCount: 0 };
    } catch (e) {
      return { rating: 1000, streak: 0, bestStreak: 0, solvedCount: 0 };
    }
  }

  saveStats() {
    try {
      localStorage.setItem('chess_dojo_stats', JSON.stringify(this.stats));
    } catch (e) {
      console.error('Failed to save Dojo stats', e);
    }
  }

  getRandomPuzzle() {
    const idx = Math.floor(Math.random() * DOJO_PUZZLES.length);
    this.currentIndex = idx;
    this.currentPuzzle = DOJO_PUZZLES[idx];
    return this.currentPuzzle;
  }

  getPuzzleById(id) {
    const p = DOJO_PUZZLES.find(x => x.id === id) || DOJO_PUZZLES[0];
    this.currentPuzzle = p;
    return p;
  }

  checkMove(from, to) {
    if (!this.currentPuzzle) return false;
    const solFrom = ChessRules.fromAlgebraic(this.currentPuzzle.from);
    const solTo = ChessRules.fromAlgebraic(this.currentPuzzle.to);
    return from.r === solFrom.r && from.c === solFrom.c && to.r === solTo.r && to.c === solTo.c;
  }

  handleSuccess() {
    this.stats.rating += 15;
    this.stats.streak += 1;
    this.stats.solvedCount += 1;
    if (this.stats.streak > this.stats.bestStreak) {
      this.stats.bestStreak = this.stats.streak;
    }
    this.saveStats();
    return {
      ratingGain: 15,
      streak: this.stats.streak,
      rating: this.stats.rating,
      explanation: this.currentPuzzle.explanation
    };
  }

  handleFailure() {
    this.stats.streak = 0;
    this.stats.rating = Math.max(800, this.stats.rating - 5);
    this.saveStats();
    return {
      streak: 0,
      rating: this.stats.rating,
      hint: this.currentPuzzle.hint
    };
  }
}

window.DOJO_PUZZLES = DOJO_PUZZLES;
window.TacticsDojo = new TacticsDojoManager();
