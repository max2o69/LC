# 🏰 Kingdom Chess: Self-Teaching Chess Academy

An interactive, zero-dependency browser chess trainer designed to take learners from **first move to strong club tactics**, featuring **52 story lessons**, **120 rated Tactics Dojo puzzles (including multi-move Master Combos & Black Counter-Tactics)**, an **Alpha-Beta + Quiescence + Transposition Table AI engine** with 4 difficulty tiers, and a **live personal Coach** whether you play **White or Black**.

[![Play Online](https://img.shields.io/badge/Play_Online-Live_on_GitHub_Pages-10b981?style=for-the-badge&logo=github)](https://max2o69.github.io/LC/)

---

## 🚀 Quick Start

```bash
npm start
# or: python server.py
# or: open index.html directly in any browser!
```

Run the full automated verification suite ( curriculum, Dojo, bot engine, and live Coach ):
```bash
npm test
```

---

## 🌟 Curriculum & Training Modes

### 1. 🗺️ 52 Interactive Lessons (10 Chapters)
- **Chapters 1–4 (Foundations & FIDE Rules)**: Piece geometry, myth-busting, piece values & trades, **C.P.R.** check defense, checkmate vs. stalemate, castling, promotion, and en passant.
- **Chapters 5–8 (Tactics & Combinations)**: Forks, pins, skewers, discovered & double checks, back-rank & smothered mates, deflection, overworked pieces, and the Greek Gift sacrifice.
- **Chapters 9–10 (Openings & Endgames)**: Italian Game, Fried Liver, Queen’s Gambit, Open Sicilian, London System, Box Method (`K+R`), Opposition, Square of the Pawn, Kiss of Death, and Anastasia’s Mate.

### 2. 🥋 Tactics Dojo (120 Rated Puzzles, Master Combos & Black Counter-Tactics)
- **8 Filter Modes**: Adaptive mix, **2–3 Move Master Combos** (Morphy’s Opera Mate, Philidor’s Smothered Mate, Boden’s Mate, Réti’s Immortal, Arabian Mate, Blind Swine), **⬛ Black Counter-Tactics** (auto-flipped board), Mate in 1, Forks, Pins/Skewers, Discovered Attacks, and Free Snacks.
- **Adaptive Rating & Spaced Repetition**: Matches puzzle difficulty to your live rating and automatically brings back missed puzzles until mastered.

### 3. 🎮 Guided Full Game (Play White or Black + Personal Coach)
- **4 Engine Strengths**: `🐣 Gentle (~650)`, `🦊 Club (~1050)`, `⚔️ Challenger (~1400)`, and `👑 Master (~1750)` powered by Alpha-Beta search, Transposition Table caching, Quiescence capture resolution, Piece-Square Tables, Endgame Mop-Up, and an Opening Book.
- **Play White or Black + Board Flip**: Practice openings, defenses, and board vision from either side.
- **Engine-Backed Personal Coach**:
  - **Accurate Move Grading & Post-Game Accuracy Summary**: Compares centipawn loss and Static Exchange Evaluation—catching hanging pieces, bad defended trades (e.g., Queen attacked by Pawn), missed mates, and inaccuracies while tallying your overall game accuracy (`%`).
  - **Opponent Move Decoder**: Explains in plain English what your opponent just played in SAN and what it threatens.
  - **Progressive Hints & Top 3 Candidates**: Use `💡 Piece Hint` to think for yourself first, or `👁️ Show Move` to inspect the top 3 engine candidate moves with evaluations.
  - **Live Eval Bar, SAN Notation Log, 1-Click `📋 PGN` Export, Underpromotion Chooser (`Q/N/R/B`), Takebacks & Full FIDE Draws** (stalemate, insufficient material, threefold repetition, and 50-move rule).
