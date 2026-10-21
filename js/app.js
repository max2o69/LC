// Main Chess Teaching Game Controller
// Manages levels, progress, audio, free play, and victory celebrations

class ChessGameApp {
  constructor() {
    this.currentLevelIndex = 0;
    this.moveCount = 0;
    this.gameMode = 'lesson'; // 'lesson' | 'freeplay'
    this.progress = this.loadProgress();

    this.boardUI = null;
    this.initElements();
    this.initEvents();
    this.startLevel(this.getInitialLevelIndex());
  }

  loadProgress() {
    try {
      const data = localStorage.getItem('chess_kid_progress');
      return data ? JSON.parse(data) : { completed: {}, lastLevel: 0 };
    } catch (e) {
      return { completed: {}, lastLevel: 0 };
    }
  }

  saveProgress() {
    try {
      localStorage.setItem('chess_kid_progress', JSON.stringify(this.progress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }

  getInitialLevelIndex() {
    return Math.min(this.progress.lastLevel || 0, LEVELS.length - 1);
  }

  initElements() {
    this.boardContainer = document.getElementById('board-container');
    this.levelTitleEl = document.getElementById('level-title');
    this.levelBadgeEl = document.getElementById('level-badge');
    this.levelStoryEl = document.getElementById('level-story');
    this.levelGoalEl = document.getElementById('level-goal');
    this.moveCountEl = document.getElementById('move-count');
    this.totalStarsEl = document.getElementById('total-stars');

    // Modals
    this.victoryModal = document.getElementById('victory-modal');
    this.levelDrawer = document.getElementById('level-drawer');
    this.pieceGuideModal = document.getElementById('piece-guide-modal');
    this.hintBox = document.getElementById('hint-box');
    this.hintText = document.getElementById('hint-text');

    this.boardUI = new ChessBoardUI(this.boardContainer);
    this.boardUI.onMoveCallback = (from, to, moveData) => this.handlePlayerMove(from, to, moveData);

    this.updateStarCountUI();
  }

  initEvents() {
    // Sound toggle
    const soundBtn = document.getElementById('btn-sound');
    soundBtn.addEventListener('click', () => {
      const isMuted = sounds.toggleMute();
      soundBtn.innerHTML = isMuted ? '🔇' : '🔊';
      soundBtn.title = isMuted ? 'Unmute Sound' : 'Mute Sound';
    });
    if (sounds.isMuted()) {
      soundBtn.innerHTML = '🔇';
    }

    // Reset current level
    document.getElementById('btn-restart').addEventListener('click', () => {
      this.startLevel(this.currentLevelIndex);
    });

    // Hint button
    document.getElementById('btn-hint').addEventListener('click', () => {
      this.showHint();
    });

    // Level select drawer toggle
    document.getElementById('btn-levels').addEventListener('click', () => {
      this.openLevelDrawer();
    });
    document.getElementById('btn-close-drawer').addEventListener('click', () => {
      this.closeLevelDrawer();
    });

    // Piece Guide toggle
    document.getElementById('btn-guide').addEventListener('click', () => {
      this.openPieceGuide();
    });
    document.getElementById('btn-close-guide').addEventListener('click', () => {
      this.closePieceGuide();
    });

    // Free Play mode toggle
    document.getElementById('btn-freeplay').addEventListener('click', () => {
      this.startFreePlay();
    });

    // Victory modal buttons
    document.getElementById('btn-next-level').addEventListener('click', () => {
      this.victoryModal.classList.add('hidden');
      if (this.currentLevelIndex < LEVELS.length - 1) {
        this.startLevel(this.currentLevelIndex + 1);
      } else {
        alert("🎉 Congratulations! You have completed all beginner chess levels! You are ready for Free Play!");
        this.startFreePlay();
      }
    });

    document.getElementById('btn-replay-level').addEventListener('click', () => {
      this.victoryModal.classList.add('hidden');
      this.startLevel(this.currentLevelIndex);
    });
  }

  updateStarCountUI() {
    let total = 0;
    Object.values(this.progress.completed).forEach(stars => total += stars);
    this.totalStarsEl.textContent = `⭐ ${total}`;
  }

  startLevel(index) {
    this.gameMode = 'lesson';
    this.currentLevelIndex = index;
    this.moveCount = 0;
    this.moveCountEl.textContent = this.moveCount;
    this.hintBox.classList.add('hidden');
    this.boardUI.interactive = true;
    document.getElementById('turn-indicator').textContent = '🌟 Your Turn!';

    const level = LEVELS[index];
    this.levelTitleEl.textContent = `Level ${level.id}: ${level.title}`;
    this.levelBadgeEl.textContent = level.badge;
    this.levelStoryEl.innerHTML = level.story;
    this.levelGoalEl.innerHTML = `🎯 <b>Goal:</b> ${level.goal}`;

    // Highlight current level in nav
    this.progress.lastLevel = index;
    this.saveProgress();

    // Render board
    this.boardUI.setBoard(level.board, level.options || {});
  }

  handlePlayerMove(from, to, moveData) {
    this.moveCount++;
    this.moveCountEl.textContent = this.moveCount;

    if (this.gameMode === 'freeplay') {
      this.handleFreePlayTurn();
      return;
    }

    const level = LEVELS[this.currentLevelIndex];

    // Check Victory Conditions
    let won = false;

    // Check Mini-Game end condition
    if (level.isMiniGame && level.validateGameEnd) {
      const outcome = level.validateGameEnd(this.boardUI.boardState);
      if (outcome === 'win') {
        this.handleVictory();
        return;
      } else if (outcome === 'loss') {
        sounds.playError();
        this.showHint("The black pawn promoted first! Tap 🔄 Restart to try again!");
        this.boardUI.interactive = false;
        return;
      } else {
        // Let bot respond in mini-game
        this.triggerBotTurn();
        return;
      }
    }

    // Check custom validate function
    if (level.validateMove) {
      won = level.validateMove(from, to, this.boardUI.boardState, moveData);
    } else if (level.targetPiece) {
      // Check if target piece was captured
      const enemyStillOnBoard = this.boardUI.boardState.some(row => row.includes(level.targetPiece));
      won = !enemyStillOnBoard;
    } else {
      // Default: check if all stars are collected
      const remainingStars = this.boardUI.boardState.some(row => row.includes('*'));
      won = !remainingStars;
    }

    if (won) {
      this.handleVictory();
    }
  }

  triggerBotTurn() {
    this.boardUI.interactive = false;
    document.getElementById('turn-indicator').textContent = '🐾 Bot thinking...';

    setTimeout(() => {
      try {
        const level = LEVELS[this.currentLevelIndex];
        const botMove = CoachBot.chooseMove(this.boardUI.boardState, (level && level.options) || {});
        if (botMove) {
          this.boardUI.executeMove(botMove.from, botMove.to, botMove, true);
        }

        // Check if bot win triggered
        if (level && level.isMiniGame && level.validateGameEnd) {
          const outcome = level.validateGameEnd(this.boardUI.boardState);
          if (outcome === 'loss') {
            sounds.playError();
            this.showHint("The black pawn promoted first! Tap 🔄 Restart to try again!");
            this.boardUI.interactive = false;
            return;
          }
        }
      } catch (err) {
        console.error('Error during bot turn:', err);
      } finally {
        this.boardUI.interactive = true;
        document.getElementById('turn-indicator').textContent = '🌟 Your Turn!';
      }
    }, 450);
  }

  handleVictory() {
    sounds.playWin();
    this.triggerConfetti();

    const level = LEVELS[this.currentLevelIndex];
    let starsEarned = 3;
    if (this.moveCount > level.parMoves + 2) starsEarned = 1;
    else if (this.moveCount > level.parMoves) starsEarned = 2;

    // Update stored record
    const prevStars = this.progress.completed[level.id] || 0;
    if (starsEarned > prevStars) {
      this.progress.completed[level.id] = starsEarned;
      this.saveProgress();
      this.updateStarCountUI();
    }

    // Show modal
    const starString = '⭐'.repeat(starsEarned) + '☆'.repeat(3 - starsEarned);
    document.getElementById('victory-stars').textContent = starString;
    document.getElementById('victory-title').textContent = starsEarned === 3 ? 'Outstanding! 🌟' : 'Level Complete! 🎉';
    document.getElementById('victory-msg').innerHTML = `You solved <b>${level.title}</b> in <b>${this.moveCount}</b> move${this.moveCount === 1 ? '' : 's'}!`;

    setTimeout(() => {
      this.victoryModal.classList.remove('hidden');
    }, 400);
  }

  showHint() {
    const level = LEVELS[this.currentLevelIndex];
    if (this.gameMode === 'freeplay') {
      const hint = CoachBot.getHint(this.boardUI.boardState);
      this.hintText.innerHTML = hint;
    } else {
      this.hintText.innerHTML = `💡 <b>Tip:</b> ${level.hint}`;
    }
    this.hintBox.classList.remove('hidden');
  }

  // Free Play / Full Game Setup
  startFreePlay() {
    this.gameMode = 'freeplay';
    this.moveCount = 0;
    this.moveCountEl.textContent = this.moveCount;
    this.levelTitleEl.textContent = 'Free Play vs Coach Pawny';
    this.levelBadgeEl.textContent = '🎮 Free Match';
    this.levelStoryEl.innerHTML = 'Play a friendly training match! Take your time, make smart moves, and ask for hints anytime!';
    this.levelGoalEl.innerHTML = '🎯 <b>Goal:</b> Control the center, protect Grandpa King, and deliver checkmate!';
    this.hintBox.classList.add('hidden');
    this.closeLevelDrawer();

    const standardBoard = [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];

    this.boardUI.setBoard(standardBoard, {
      castling: { K: true, Q: true, k: true, q: true }
    });
  }

  handleFreePlayTurn() {
    // Check if player delivered checkmate
    const blackLegalMoves = CoachBot.getAllLegalMoves(this.boardUI.boardState, 'b');
    if (blackLegalMoves.length === 0) {
      if (ChessRules.isCheck(this.boardUI.boardState, 'b')) {
        sounds.playWin();
        this.triggerConfetti();
        alert("👑 CHECKMATE! You won the game! Amazing playing!");
      } else {
        alert("🤝 Stalemate! It's a draw!");
      }
      return;
    }

    // Bot turn
    this.boardUI.interactive = false;
    document.getElementById('turn-indicator').textContent = '🐾 Coach Pawny is thinking...';

    setTimeout(() => {
      try {
        const move = CoachBot.chooseMove(this.boardUI.boardState);
        if (move) {
          this.boardUI.executeMove(move.from, move.to, move, true);
        }

        // Check if bot checkmated white
        const whiteLegalMoves = CoachBot.getAllLegalMoves(this.boardUI.boardState, 'w');
        if (whiteLegalMoves.length === 0) {
          if (ChessRules.isCheck(this.boardUI.boardState, 'w')) {
            sounds.playError();
            alert("Checkmate! Coach Pawny won this time. Tap restart to play again!");
          } else {
            alert("🤝 Stalemate! It's a draw!");
          }
        }
      } catch (err) {
        console.error('Error during freeplay bot turn:', err);
      } finally {
        this.boardUI.interactive = true;
        document.getElementById('turn-indicator').textContent = '🌟 Your Turn!';
      }
    }, 500);
  }

  // Level Drawer
  openLevelDrawer() {
    const listEl = document.getElementById('drawer-level-list');
    listEl.innerHTML = '';

    CHAPTERS.forEach(chapter => {
      const chapterHeader = document.createElement('div');
      chapterHeader.className = 'chapter-header';
      chapterHeader.innerHTML = `<span>${chapter.icon}</span> <span>${chapter.title}</span>`;
      listEl.appendChild(chapterHeader);

      const chapterLevels = LEVELS.filter(l => l.chapterId === chapter.id);
      const grid = document.createElement('div');
      grid.className = 'drawer-level-grid';

      chapterLevels.forEach(lvl => {
        const item = document.createElement('button');
        const stars = this.progress.completed[lvl.id] || 0;
        const isCurrent = this.currentLevelIndex === (lvl.id - 1);

        item.className = `drawer-level-card ${isCurrent ? 'active' : ''}`;
        item.innerHTML = `
          <div class="level-num">#${lvl.id}</div>
          <div class="level-card-title">${lvl.title}</div>
          <div class="level-card-stars">${stars > 0 ? '⭐'.repeat(stars) : '☆☆☆'}</div>
        `;
        item.addEventListener('click', () => {
          this.closeLevelDrawer();
          this.startLevel(lvl.id - 1);
        });
        grid.appendChild(item);
      });

      listEl.appendChild(grid);
    });

    this.levelDrawer.classList.remove('hidden');
  }

  closeLevelDrawer() {
    this.levelDrawer.classList.add('hidden');
  }

  // Piece Encyclopedia
  openPieceGuide() {
    const guideContent = document.getElementById('guide-cards-container');
    guideContent.innerHTML = '';

    Object.keys(PIECE_INFO).forEach(key => {
      const info = PIECE_INFO[key];
      const card = document.createElement('div');
      card.className = 'guide-card';
      card.innerHTML = `
        <div class="guide-piece-icon">${PIECE_SVGS[key]}</div>
        <div class="guide-piece-details">
          <div class="guide-piece-header">
            <h3>${info.name} <span class="guide-nickname">"${info.nickname}"</span></h3>
            <span class="guide-points">${info.points === 1000 ? 'Priceless' : info.points + ' Point' + (info.points > 1 ? 's' : '')}</span>
          </div>
          <div class="guide-rule-row"><b>🚶 How it Moves:</b> ${info.howItMoves}</div>
          <div class="guide-rule-row"><b>⚔️ How it Attacks:</b> ${info.howItCaptures}</div>
          <div class="guide-rule-row"><b>🔄 Can go backwards?</b> ${info.canGoBackwards}</div>
          <div class="guide-rule-row"><b>🦘 Can it jump?</b> ${info.canJump}</div>
          <div class="guide-myth-box">${info.mythBuster}</div>
        </div>
      `;
      guideContent.appendChild(card);
    });

    this.pieceGuideModal.classList.remove('hidden');
  }

  closePieceGuide() {
    this.pieceGuideModal.classList.add('hidden');
  }

  // Lightweight Canvas Confetti
  triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() * 200 - 100),
        y: canvas.height / 2 + (Math.random() * 100 - 50),
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 14 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45; // gravity
        p.rotation += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 90) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    animate();
  }
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ChessGameApp();
});
