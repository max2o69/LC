// Main Chess Teaching Game Controller
// Manages 52 story levels, 115+ Dojo puzzles (including multi-move combos),
// and Guided Full Game (White or Black, 4 AI difficulties, live Coach, SAN log, FIDE draws & underpromotion)

class ChessGameApp {
  constructor() {
    this.currentLevelIndex = 0;
    this.currentStepIndex = 0;
    this.moveCount = 0;
    this.gameMode = 'lesson'; // 'lesson' | 'dojo' | 'freeplay'
    this.guidedPlayerColor = 'w';
    this.progress = this.loadProgress();

    this.boardUI = null;
    this.freePlayTimer = null;
    this.initElements();
    this.initEvents();
    this.startLevel(this.getInitialLevelIndex());
  }

  loadProgress() {
    try {
      const data = localStorage.getItem('chess_kid_progress');
      return data ? JSON.parse(data) : { completed: {}, lastLevel: 0, difficulty: 'challenger' };
    } catch (e) {
      return { completed: {}, lastLevel: 0, difficulty: 'challenger' };
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
    this.dojoFilterBar = document.getElementById('dojo-filter-bar');

    // Modals
    this.victoryModal = document.getElementById('victory-modal');
    this.levelDrawer = document.getElementById('level-drawer');
    this.pieceGuideModal = document.getElementById('piece-guide-modal');
    this.promotionModal = document.getElementById('promotion-modal');
    this.hintBox = document.getElementById('hint-box');
    this.hintText = document.getElementById('hint-text');

    this.boardUI = new ChessBoardUI(this.boardContainer);
    this.boardUI.onMoveCallback = (from, to, moveData, boardBefore, optionsBefore) =>
      this.handlePlayerMove(from, to, moveData, boardBefore, optionsBefore);
    this.boardUI.onPromotionChoice = (color, callback) => this.openPromotionPicker(color, callback);

    // Coach Guide Elements (Guided Full Game Mode)
    this.lessonCard = document.getElementById('lesson-card') || (document.querySelector ? document.querySelector('.lesson-card') : null);
    this.coachGuideCard = document.getElementById('coach-guide-card');
    this.btnPlayWhite = document.getElementById('btn-play-white');
    this.btnPlayBlack = document.getElementById('btn-play-black');
    this.difficultySelect = document.getElementById('coach-difficulty-select');
    this.btnFlipBoard = document.getElementById('btn-flip-board');
    this.coachPhaseBadge = document.getElementById('coach-phase-badge');
    this.coachTurnIndicator = document.getElementById('coach-turn-indicator');
    this.coachEvalBarFill = document.getElementById('coach-eval-bar-fill');
    this.coachEvalScore = document.getElementById('coach-eval-score');
    this.coachEvalBanner = document.getElementById('coach-eval-banner');
    this.coachEvalIcon = document.getElementById('coach-eval-icon');
    this.coachEvalText = document.getElementById('coach-eval-text');
    this.coachOppMoveBox = document.getElementById('coach-opp-move-box');
    this.coachOppMoveText = document.getElementById('coach-opp-move-text');
    this.coachCapturedBlack = document.getElementById('coach-captured-black');
    this.coachCapturedWhite = document.getElementById('coach-captured-white');
    this.coachMaterialDiff = document.getElementById('coach-material-diff');
    this.coachOpeningBox = document.getElementById('coach-opening-box');
    this.coachOpeningName = document.getElementById('coach-opening-name');
    this.coachOpeningDesc = document.getElementById('coach-opening-desc');
    this.coachChecklistGrid = document.getElementById('coach-checklist-grid');
    this.chipCenter = document.getElementById('chip-center');
    this.chipKnights = document.getElementById('chip-knights');
    this.chipBishops = document.getElementById('chip-bishops');
    this.chipCastled = document.getElementById('chip-castled');
    this.coachThreatBox = document.getElementById('coach-threat-box');
    this.coachThreatTitle = document.getElementById('coach-threat-title');
    this.coachThreatText = document.getElementById('coach-threat-text');
    this.coachRecBadge = document.getElementById('coach-rec-badge');
    this.coachSpeechBody = document.getElementById('coach-speech-body');
    this.coachCandidatesEl = document.getElementById('coach-candidates');
    this.btnCoachHintPiece = document.getElementById('btn-coach-hint-piece');
    this.btnCoachToggleHighlight = document.getElementById('btn-coach-toggle-highlight');
    this.btnCoachPlayRec = document.getElementById('btn-coach-play-rec');
    this.coachMoveLog = document.getElementById('coach-move-log');
    this.coachPlyCount = document.getElementById('coach-ply-count');
    this.btnCopyPgn = document.getElementById('btn-copy-pgn');
    this.btnCoachUndo = document.getElementById('btn-coach-undo');
    this.btnCoachRestart = document.getElementById('btn-coach-restart');

    this.freePlayHistory = [];
    this.freePlayMoveList = [];
    this.guidedMoveStats = { brilliant: 0, great: 0, good: 0, inaccuracy: 0, blunder: 0 };
    this.positionCounts = {};
    this.halfMoveClock = 0;
    this.lastOpponentExplanation = null;
    this.currentRecommendation = null;
    this.isShowingCoachHighlight = false;

    const bot = window.CoachBot || (typeof CoachBot !== 'undefined' ? CoachBot : null);
    if (bot && this.progress.difficulty) {
      bot.setDifficulty(this.progress.difficulty);
      if (this.difficultySelect) this.difficultySelect.value = bot.difficulty;
    }

    this.updateStarCountUI();
  }

  initEvents() {
    const soundBtn = document.getElementById('btn-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isMuted = sounds.toggleMute();
        soundBtn.innerHTML = isMuted ? '🔇' : '🔊';
        soundBtn.title = isMuted ? 'Unmute Sound' : 'Mute Sound';
      });
      if (sounds.isMuted()) soundBtn.innerHTML = '🔇';
    }

    document.getElementById('btn-restart').addEventListener('click', () => {
      if (this.gameMode === 'dojo') {
        const p = window.TacticsDojo && window.TacticsDojo.currentPuzzle;
        if (p) {
          const pColor = p.turn || 'w';
          window.TacticsDojo.currentStepIndex = 0;
          this.dojoStepBoard = p.board.map(r => [...r]);
          this.boardUI.playerColor = pColor;
          this.boardUI.setFlipped(pColor === 'b');
          this.boardUI.setBoard(p.board);
          this.boardUI.interactive = true;
          document.getElementById('turn-indicator').textContent = pColor === 'b' ? '🌟 Black to Move!' : '🌟 White to Move!';
          this.hintBox.classList.add('hidden');
        }
      } else if (this.gameMode === 'freeplay') {
        this.startFreePlay(this.guidedPlayerColor);
      } else {
        this.startLevel(this.currentLevelIndex);
      }
    });

    document.getElementById('btn-hint').addEventListener('click', () => this.showHint());

    const dojoBtn = document.getElementById('btn-dojo');
    if (dojoBtn) dojoBtn.addEventListener('click', () => this.startDojo());

    const nextPuzzleBtn = document.getElementById('btn-next-puzzle');
    if (nextPuzzleBtn) nextPuzzleBtn.addEventListener('click', () => this.startDojo());

    // Dojo category filter buttons
    if (this.dojoFilterBar && this.dojoFilterBar.querySelectorAll) {
      const chips = this.dojoFilterBar.querySelectorAll('.dojo-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          if (window.TacticsDojo) {
            window.TacticsDojo.setCategory(chip.dataset.cat || 'all');
            this.startDojo();
          }
        });
      });
    }

    document.getElementById('btn-levels').addEventListener('click', () => this.openLevelDrawer());
    document.getElementById('btn-close-drawer').addEventListener('click', () => this.closeLevelDrawer());

    document.getElementById('btn-guide').addEventListener('click', () => this.openPieceGuide());
    document.getElementById('btn-close-guide').addEventListener('click', () => this.closePieceGuide());

    document.getElementById('btn-freeplay').addEventListener('click', () => this.startFreePlay(this.guidedPlayerColor));

    // Guided Game Controls: Side, Difficulty, Flip, Hints, Undo, New Game
    if (this.btnPlayWhite) {
      this.btnPlayWhite.addEventListener('click', () => {
        if (this.guidedPlayerColor !== 'w' || this.gameMode !== 'freeplay') {
          this.startFreePlay('w');
        }
      });
    }
    if (this.btnPlayBlack) {
      this.btnPlayBlack.addEventListener('click', () => {
        if (this.guidedPlayerColor !== 'b' || this.gameMode !== 'freeplay') {
          this.startFreePlay('b');
        }
      });
    }
    if (this.difficultySelect) {
      this.difficultySelect.addEventListener('change', (e) => {
        const val = e.target.value;
        const bot = window.CoachBot || CoachBot;
        if (bot) bot.setDifficulty(val);
        this.progress.difficulty = val;
        this.saveProgress();
      });
    }
    if (this.btnFlipBoard) {
      this.btnFlipBoard.addEventListener('click', () => this.boardUI.flip());
    }
    if (this.btnCoachUndo) {
      this.btnCoachUndo.addEventListener('click', () => this.undoCoachMove());
    }
    if (this.btnCoachRestart) {
      this.btnCoachRestart.addEventListener('click', () => this.startFreePlay(this.guidedPlayerColor));
    }
    if (this.btnCoachHintPiece) {
      this.btnCoachHintPiece.addEventListener('click', () => this.showCoachPieceHint());
    }
    if (this.btnCoachToggleHighlight) {
      this.btnCoachToggleHighlight.addEventListener('click', () => this.toggleCoachHighlight());
    }
    if (this.btnCoachPlayRec) {
      this.btnCoachPlayRec.addEventListener('click', () => this.playCoachRecommendation());
    }
    if (this.btnCopyPgn) {
      this.btnCopyPgn.addEventListener('click', () => this.copyPgnToClipboard());
    }

    // Promotion choice buttons
    if (this.promotionModal && this.promotionModal.querySelectorAll) {
      const promoBtns = this.promotionModal.querySelectorAll('.promo-choice-btn');
      promoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const chosen = btn.dataset.promo || 'Q';
          this.promotionModal.classList.add('hidden');
          if (this._pendingPromoCallback) {
            const cb = this._pendingPromoCallback;
            this._pendingPromoCallback = null;
            cb(chosen);
          }
        });
      });
    }

    document.getElementById('btn-next-level').addEventListener('click', () => {
      this.victoryModal.classList.add('hidden');
      if (this.currentLevelIndex < LEVELS.length - 1) {
        this.startLevel(this.currentLevelIndex + 1);
      } else {
        this.startFreePlay('w');
      }
    });

    document.getElementById('btn-replay-level').addEventListener('click', () => {
      this.victoryModal.classList.add('hidden');
      this.startLevel(this.currentLevelIndex);
    });
  }

  openPromotionPicker(color, callback) {
    if (!this.promotionModal || !this.promotionModal.querySelectorAll) {
      callback(color === 'w' ? 'Q' : 'q');
      return;
    }
    this._pendingPromoCallback = (choice) => {
      callback(color === 'w' ? choice.toUpperCase() : choice.toLowerCase());
    };
    this.promotionModal.classList.remove('hidden');
  }

  clearPendingBotTimer() {
    if (this.freePlayTimer) {
      clearTimeout(this.freePlayTimer);
      this.freePlayTimer = null;
    }
  }

  updateStarCountUI() {
    let total = 0;
    Object.values(this.progress.completed).forEach(stars => { total += stars; });
    this.totalStarsEl.textContent = `⭐ ${total}`;
  }

  startLevel(index) {
    this.clearPendingBotTimer();
    this.gameMode = 'lesson';
    this.currentLevelIndex = index;
    this.currentStepIndex = 0;
    this.moveCount = 0;
    this.moveCountEl.textContent = this.moveCount;
    this.hintBox.classList.add('hidden');
    if (this.dojoFilterBar) this.dojoFilterBar.classList.add('hidden');
    if (this.coachGuideCard) this.coachGuideCard.classList.add('hidden');
    if (this.lessonCard) this.lessonCard.classList.remove('hidden');
    this.boardUI.playerColor = 'w';
    this.boardUI.allowPromotionChoice = false;
    this.boardUI.setFlipped(false);
    this.boardUI.clearCoachHighlights();
    this.boardUI.interactive = true;
    document.getElementById('turn-indicator').textContent = '🌟 Your Turn!';
    const nextBtn = document.getElementById('btn-next-puzzle');
    if (nextBtn) nextBtn.classList.add('hidden');

    this.updateDojoStatsUI();

    const level = LEVELS[index];
    this.currentStepBoardState = level.board.map(r => [...r]);

    if (level.sequence && level.sequence.length > 0) {
      level.parMoves = level.sequence.length;
      const firstStep = level.sequence[0];
      this.levelGoalEl.innerHTML = `🎯 <b>Step 1/${level.sequence.length}:</b> ${firstStep.goal || level.goal}`;
      document.getElementById('turn-indicator').textContent = `🌟 Step 1 of ${level.sequence.length}: Your Turn!`;
      if (firstStep.hint) {
        this.hintText.innerHTML = `💡 <b>Tip:</b> ${firstStep.hint}`;
      }
    } else {
      this.levelGoalEl.innerHTML = `🎯 <b>Goal:</b> ${level.goal}`;
    }

    this.levelTitleEl.textContent = `Level ${level.id}: ${level.title}`;
    this.levelBadgeEl.textContent = level.badge;
    this.levelStoryEl.innerHTML = level.story;

    this.progress.lastLevel = index;
    this.saveProgress();

    this.boardUI.setBoard(level.board, level.options || {});
  }

  handlePlayerMove(from, to, moveData, boardBefore, optionsBefore) {
    this.moveCount++;
    this.moveCountEl.textContent = this.moveCount;

    if (this.gameMode === 'dojo') {
      this.handleDojoMove(from, to, moveData);
      return;
    }

    if (this.gameMode === 'freeplay') {
      this.handleGuidedPlayerMove(from, to, moveData, boardBefore, optionsBefore);
      return;
    }

    const level = LEVELS[this.currentLevelIndex];

    if (level.sequence && level.sequence.length > 0) {
      const step = level.sequence[this.currentStepIndex];
      const playerMoveStr = `${ChessRules.toAlgebraic(from.r, from.c)}-${ChessRules.toAlgebraic(to.r, to.c)}`;

      let isCorrect = false;
      if (typeof step.move === 'string') {
        isCorrect = step.move === playerMoveStr;
      } else if (Array.isArray(step.move)) {
        isCorrect = step.move.includes(playerMoveStr);
      } else if (typeof step.move === 'function') {
        isCorrect = step.move(from, to, this.boardUI.boardState, moveData);
      }

      if (!isCorrect) {
        try { sounds.playError(); } catch (e) {}
        this.boardUI.interactive = false;
        document.getElementById('turn-indicator').textContent = '🤔 Not quite! Try again.';
        const hintMsg = step.failHint || step.hint || level.hint || 'Think about the lesson goal and try again!';
        this.hintText.innerHTML = `🤔 <b>Coach Pawny:</b> ${hintMsg}`;
        this.hintBox.classList.remove('hidden');

        setTimeout(() => {
          this.boardUI.setBoard(this.currentStepBoardState, level.options || {});
          this.boardUI.interactive = true;
          document.getElementById('turn-indicator').textContent = `🌟 Step ${this.currentStepIndex + 1} of ${level.sequence.length}: Your Turn!`;
        }, 850);
        return;
      }

      if (step.explanation) {
        document.getElementById('turn-indicator').textContent = `✨ ${step.explanation}`;
        this.hintText.innerHTML = `💡 <b>Coach:</b> ${step.explanation}`;
        this.hintBox.classList.remove('hidden');
      }

      if (step.response) {
        this.boardUI.interactive = false;
        this.currentStepIndex++;
        document.getElementById('turn-indicator').textContent = '🐾 Bot thinking...';

        setTimeout(() => {
          const [bFromStr, bToStr] = step.response.split('-');
          const bFrom = ChessRules.fromAlgebraic(bFromStr);
          const bTo = ChessRules.fromAlgebraic(bToStr);
          const bTarget = this.boardUI.boardState[bTo.r][bTo.c];
          const bMoveData = {
            capture: !!bTarget,
            castling: step.responseCastling || null,
            enPassant: step.responseEnPassant || false
          };

          this.boardUI.executeMove(bFrom, bTo, bMoveData, true);
          this.currentStepBoardState = this.boardUI.boardState.map(r => [...r]);

          const nextStep = level.sequence[this.currentStepIndex];
          if (nextStep) {
            this.levelGoalEl.innerHTML = `🎯 <b>Step ${this.currentStepIndex + 1}/${level.sequence.length}:</b> ${nextStep.goal || level.goal}`;
            if (nextStep.hint) this.hintText.innerHTML = `💡 <b>Tip:</b> ${nextStep.hint}`;
            document.getElementById('turn-indicator').textContent = `🌟 Step ${this.currentStepIndex + 1} of ${level.sequence.length}: Your Turn!`;
            this.boardUI.interactive = true;
          }
        }, 550);
        return;
      }

      this.currentStepBoardState = this.boardUI.boardState.map(r => [...r]);
      if (this.currentStepIndex >= level.sequence.length - 1) {
        this.handleVictory();
      } else {
        this.currentStepIndex++;
        const nextStep = level.sequence[this.currentStepIndex];
        if (nextStep) {
          this.levelGoalEl.innerHTML = `🎯 <b>Step ${this.currentStepIndex + 1}/${level.sequence.length}:</b> ${nextStep.goal || level.goal}`;
          if (nextStep.hint) this.hintText.innerHTML = `💡 <b>Tip:</b> ${nextStep.hint}`;
          document.getElementById('turn-indicator').textContent = `🌟 Step ${this.currentStepIndex + 1} of ${level.sequence.length}: Your Turn!`;
        }
      }
      return;
    }

    if (level.isMiniGame && level.validateGameEnd) {
      const outcome = level.validateGameEnd(this.boardUI.boardState);
      if (outcome === 'win') {
        this.handleVictory();
      } else if (outcome === 'loss') {
        try { sounds.playError(); } catch (e) {}
        this.hintText.innerHTML = '💡 <b>Tip:</b> The black pawn promoted first! Tap 🔄 Restart to try again!';
        this.hintBox.classList.remove('hidden');
        this.boardUI.interactive = false;
      } else {
        this.triggerBotTurn();
      }
      return;
    }

    let won = false;
    if (level.validateMove) {
      won = level.validateMove(from, to, this.boardUI.boardState, moveData);
    } else if (level.targetPiece) {
      won = !this.boardUI.boardState.some(row => row.includes(level.targetPiece));
    } else {
      won = !this.boardUI.boardState.some(row => row.includes('*'));
    }

    if (won) {
      this.handleVictory();
    }
  }

  triggerBotTurn() {
    this.boardUI.interactive = false;
    document.getElementById('turn-indicator').textContent = '🐾 Bot thinking...';

    setTimeout(() => {
      let isGameOver = false;
      try {
        const level = LEVELS[this.currentLevelIndex];
        const bot = window.CoachBot || CoachBot;
        const botMove = bot.chooseMove(this.boardUI.boardState, (level && level.options) || {}, 'b');
        if (botMove) {
          this.boardUI.executeMove(botMove.from, botMove.to, botMove, true);
        }

        if (level && level.isMiniGame && level.validateGameEnd) {
          const outcome = level.validateGameEnd(this.boardUI.boardState);
          if (outcome === 'loss') {
            isGameOver = true;
            try { sounds.playError(); } catch (e) {}
            this.hintText.innerHTML = '💡 <b>Tip:</b> The black pawn promoted first! Tap 🔄 Restart to try again!';
            this.hintBox.classList.remove('hidden');
            this.boardUI.interactive = false;
            document.getElementById('turn-indicator').textContent = '💔 Black crowned a Queen first!';
            return;
          }
        }
      } catch (err) {
        console.error('Error during bot turn:', err);
      } finally {
        if (!isGameOver) {
          this.boardUI.interactive = true;
          document.getElementById('turn-indicator').textContent = '🌟 Your Turn!';
        }
      }
    }, 450);
  }

  handleVictory() {
    this.boardUI.interactive = false;
    document.getElementById('turn-indicator').textContent = '🏆 VICTORY!';
    try { sounds.playWin(); } catch (e) {}
    this.triggerConfetti();

    const level = LEVELS[this.currentLevelIndex];
    let starsEarned = 3;
    if (this.moveCount > level.parMoves + 2) starsEarned = 1;
    else if (this.moveCount > level.parMoves) starsEarned = 2;

    const prevStars = this.progress.completed[level.id] || 0;
    if (starsEarned > prevStars) {
      this.progress.completed[level.id] = starsEarned;
      this.saveProgress();
      this.updateStarCountUI();
    }

    const starString = '⭐'.repeat(starsEarned) + '☆'.repeat(3 - starsEarned);
    document.getElementById('victory-stars').textContent = starString;
    document.getElementById('victory-title').textContent = starsEarned === 3 ? 'Outstanding! 🌟' : 'Level Complete! 🎉';
    document.getElementById('victory-msg').innerHTML = `You solved <b>${level.title}</b> in <b>${this.moveCount}</b> move${this.moveCount === 1 ? '' : 's'}!`;

    setTimeout(() => {
      this.victoryModal.classList.remove('hidden');
    }, 400);
  }

  // ==================== TACTICS DOJO (1-Move & Multi-Move Combos) ====================
  handleDojoMove(from, to, moveData) {
    if (!window.TacticsDojo) return;
    const dojo = window.TacticsDojo;
    const p = dojo.currentPuzzle;
    if (!p) return;

    const pColor = p.turn || 'w';
    const isCorrect = dojo.checkMove(from, to);
    if (!isCorrect) {
      const res = dojo.handleFailure();
      try { sounds.playError(); } catch (e) {}
      this.boardUI.interactive = false;
      this.updateDojoStatsUI();
      document.getElementById('turn-indicator').textContent = '❌ Not quite! Try again.';
      this.hintText.innerHTML = `🤔 <b>Hint:</b> ${res.hint}`;
      this.hintBox.classList.remove('hidden');
      setTimeout(() => {
        if (this.dojoStepBoard) {
          this.boardUI.setBoard(this.dojoStepBoard);
        } else if (p) {
          this.boardUI.setBoard(p.board);
        }
        this.boardUI.interactive = true;
        document.getElementById('turn-indicator').textContent = pColor === 'b' ? '🌟 Black to Move!' : '🌟 White to Move!';
      }, 900);
      return;
    }

    // Multi-move Master Combo step handling
    if (p.sequence && p.sequence.length > 0) {
      const step = p.sequence[dojo.currentStepIndex];
      if (step && step.response && dojo.currentStepIndex < p.sequence.length - 1) {
        this.boardUI.interactive = false;
        dojo.currentStepIndex++;
        document.getElementById('turn-indicator').textContent = '⚡ Great strike! Opponent responds...';

        setTimeout(() => {
          const [rfStr, rtStr] = step.response.split('-');
          const rf = ChessRules.fromAlgebraic(rfStr);
          const rt = ChessRules.fromAlgebraic(rtStr);
          const rTarget = this.boardUI.boardState[rt.r][rt.c];
          this.boardUI.executeMove(rf, rt, { capture: !!rTarget }, true);
          this.dojoStepBoard = this.boardUI.boardState.map(r => [...r]);
          this.boardUI.interactive = true;
          document.getElementById('turn-indicator').textContent = `🔥 Step ${dojo.currentStepIndex + 1}/${p.sequence.length}: Finish the combo!`;
        }, 480);
        return;
      }
    }

    // Puzzle Solved!
    const res = dojo.handleSuccess();
    try { sounds.playWin(); } catch (e) {}
    this.triggerConfetti();
    this.boardUI.interactive = false;
    document.getElementById('turn-indicator').textContent = `🌟 SOLVED! +${res.ratingGain} Rating`;
    this.updateDojoStatsUI();
    this.hintText.innerHTML = `🎉 <b>Brilliant!</b> ${res.explanation}`;
    this.hintBox.classList.remove('hidden');
    const nextBtn = document.getElementById('btn-next-puzzle');
    if (nextBtn) nextBtn.classList.remove('hidden');
  }

  startDojo(puzzleId = null) {
    if (!window.TacticsDojo) return;
    this.clearPendingBotTimer();
    this.gameMode = 'dojo';
    this.moveCount = 0;
    this.closeLevelDrawer();
    this.hintBox.classList.add('hidden');
    if (this.dojoFilterBar) this.dojoFilterBar.classList.remove('hidden');
    if (this.coachGuideCard) this.coachGuideCard.classList.add('hidden');
    if (this.lessonCard) this.lessonCard.classList.remove('hidden');

    const p = puzzleId !== null ? window.TacticsDojo.getPuzzleById(puzzleId) : window.TacticsDojo.getRandomPuzzle();
    const pColor = (p && p.turn) || 'w';
    this.boardUI.playerColor = pColor;
    this.boardUI.allowPromotionChoice = false;
    this.boardUI.setFlipped(pColor === 'b');
    this.boardUI.clearCoachHighlights();
    this.boardUI.interactive = true;
    this.dojoStepBoard = p.board.map(r => [...r]);

    const stepTag = p.sequence && p.sequence.length > 1 ? ` (${p.sequence.length}-Move Combo)` : '';
    const sideText = pColor === 'b' ? 'Black' : 'White';
    document.getElementById('turn-indicator').textContent = `🌟 ${sideText} to Move${stepTag}!`;

    this.levelTitleEl.textContent = `Puzzle #${p.id}: ${p.title}`;
    this.levelBadgeEl.textContent = `${p.categoryLabel} • ${p.rating || 1000}`;
    this.levelStoryEl.innerHTML = `<b>🥋 Tactics Dojo:</b> Adaptive rated puzzles & multi-move master combinations. Missed puzzles automatically return via spaced repetition!`;
    this.levelGoalEl.innerHTML = `🎯 <b>Goal:</b> ${p.prompt}`;

    const nextBtn = document.getElementById('btn-next-puzzle');
    if (nextBtn) nextBtn.classList.add('hidden');

    this.updateDojoStatsUI();
    this.boardUI.setBoard(p.board);
  }

  updateDojoStatsUI() {
    if (!window.TacticsDojo) return;
    const stats = window.TacticsDojo.stats;
    const ratingEl = document.getElementById('dojo-rating');
    const streakEl = document.getElementById('dojo-streak');
    const ratingPill = document.getElementById('dojo-rating-pill');
    const streakPill = document.getElementById('dojo-streak-pill');
    const starsPill = document.getElementById('total-stars');
    const movesPill = document.getElementById('move-count-pill');

    if (this.gameMode === 'dojo') {
      if (starsPill) starsPill.classList.add('hidden');
      if (movesPill) movesPill.classList.add('hidden');
      if (ratingPill) ratingPill.classList.remove('hidden');
      if (streakPill) streakPill.classList.remove('hidden');
      if (ratingEl) ratingEl.textContent = stats.rating;
      if (streakEl) streakEl.textContent = stats.streak;
    } else {
      if (starsPill) starsPill.classList.remove('hidden');
      if (movesPill) movesPill.classList.remove('hidden');
      if (ratingPill) ratingPill.classList.add('hidden');
      if (streakPill) streakPill.classList.add('hidden');
    }
  }

  showHint() {
    if (this.gameMode === 'dojo') {
      const dojo = window.TacticsDojo;
      const p = dojo && dojo.currentPuzzle;
      if (p) {
        let hint = p.hint;
        let moveStr = `${p.from}-${p.to}`;
        if (p.sequence && p.sequence[dojo.currentStepIndex]) {
          hint = p.sequence[dojo.currentStepIndex].hint || hint;
          moveStr = p.sequence[dojo.currentStepIndex].move;
        }
        const [fStr] = moveStr.split('-');
        this.boardUI.highlightHint(ChessRules.fromAlgebraic(fStr), null);
        this.hintText.innerHTML = `💡 <b>Coach Tip:</b> ${hint}`;
        this.hintBox.classList.remove('hidden');
      }
      return;
    }
    const level = LEVELS[this.currentLevelIndex];
    if (this.gameMode === 'freeplay') {
      const bot = window.CoachBot || CoachBot;
      const hint = bot.getHint(this.boardUI.boardState, this.boardUI.options, this.guidedPlayerColor);
      this.hintText.innerHTML = hint;
    } else {
      let hint = level.hint;
      if (level.sequence && level.sequence[this.currentStepIndex]) {
        const step = level.sequence[this.currentStepIndex];
        if (step.hint) hint = step.hint;
        if (typeof step.move === 'string' && step.move.includes('-')) {
          const [fStr, tStr] = step.move.split('-');
          this.boardUI.highlightHint(ChessRules.fromAlgebraic(fStr), ChessRules.fromAlgebraic(tStr));
        }
      }
      this.hintText.innerHTML = `💡 <b>Tip:</b> ${hint}`;
    }
    this.hintBox.classList.remove('hidden');
  }

  // ==================== GUIDED FULL GAME (WHITE OR BLACK + PERSONAL COACH) ====================
  startFreePlay(playerColor = 'w') {
    this.clearPendingBotTimer();
    this.gameMode = 'freeplay';
    this.guidedPlayerColor = playerColor === 'b' ? 'b' : 'w';
    this.moveCount = 0;
    this.moveCountEl.textContent = this.moveCount;
    this.hintBox.classList.add('hidden');
    if (this.dojoFilterBar) this.dojoFilterBar.classList.add('hidden');
    const nextBtn = document.getElementById('btn-next-puzzle');
    if (nextBtn) nextBtn.classList.add('hidden');
    this.closeLevelDrawer();
    this.updateDojoStatsUI();

    if (this.lessonCard) this.lessonCard.classList.add('hidden');
    if (this.coachGuideCard) this.coachGuideCard.classList.remove('hidden');
    if (this.coachEvalBanner) this.coachEvalBanner.classList.add('hidden');
    if (this.coachOppMoveBox) this.coachOppMoveBox.classList.add('hidden');

    if (this.btnPlayWhite) this.btnPlayWhite.classList.toggle && this.btnPlayWhite.classList.toggle('active', this.guidedPlayerColor === 'w');
    if (this.btnPlayBlack) this.btnPlayBlack.classList.toggle && this.btnPlayBlack.classList.toggle('active', this.guidedPlayerColor === 'b');
    if (this.btnPlayWhite && !this.btnPlayWhite.classList.toggle) {
      this.btnPlayWhite.className = `side-btn ${this.guidedPlayerColor === 'w' ? 'active' : ''}`;
      if (this.btnPlayBlack) this.btnPlayBlack.className = `side-btn ${this.guidedPlayerColor === 'b' ? 'active' : ''}`;
    }

    this.freePlayHistory = [];
    this.freePlayMoveList = [];
    this.guidedMoveStats = { brilliant: 0, great: 0, good: 0, inaccuracy: 0, blunder: 0 };
    this.positionCounts = {};
    this.halfMoveClock = 0;
    this.lastOpponentExplanation = null;
    this.isShowingCoachHighlight = false;
    if (this.btnCoachToggleHighlight) {
      this.btnCoachToggleHighlight.textContent = '👁️ Show Move';
    }

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

    const initialOptions = {
      castling: { K: true, Q: true, k: true, q: true },
      enPassant: null
    };

    this.boardUI.playerColor = this.guidedPlayerColor;
    this.boardUI.allowPromotionChoice = !!(this.promotionModal && this.promotionModal.querySelectorAll);
    this.boardUI.setFlipped(this.guidedPlayerColor === 'b');
    this.boardUI.setBoard(standardBoard, initialOptions);

    const initKey = ChessRules.getPositionKey(standardBoard, 'w', initialOptions);
    this.positionCounts[initKey] = 1;

    this.freePlayHistory.push({
      board: standardBoard.map(r => [...r]),
      options: JSON.parse(JSON.stringify(initialOptions)),
      turn: 'w',
      halfMoveClock: 0,
      positionCounts: { ...this.positionCounts },
      lastOpponentExplanation: null
    });

    if (this.guidedPlayerColor === 'b') {
      // Bot plays White's first move!
      this.boardUI.interactive = false;
      if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = '🐾 White (Bot) is opening...';
      this.triggerGuidedOpponentTurn('w');
    } else {
      this.boardUI.interactive = true;
      if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = '🌟 Your Turn (White)!';
      this.updateCoachGuideUI();
    }
  }

  recordGuidedMove(boardBefore, optionsBefore, from, to, moveData, moverColor) {
    const movedPiece = boardBefore[from.r][from.c];
    const san = ChessRules.toSAN(boardBefore, from, to, moveData, optionsBefore);
    const isPawnOrCap = (movedPiece && movedPiece.toUpperCase() === 'P') || !!(moveData && (moveData.captured || moveData.capture));
    this.halfMoveClock = isPawnOrCap ? 0 : (this.halfMoveClock + 1);

    const nextTurn = moverColor === 'w' ? 'b' : 'w';
    const posKey = ChessRules.getPositionKey(this.boardUI.boardState, nextTurn, this.boardUI.options);
    this.positionCounts[posKey] = (this.positionCounts[posKey] || 0) + 1;

    const entry = {
      fromStr: ChessRules.toAlgebraic(from.r, from.c),
      toStr: ChessRules.toAlgebraic(to.r, to.c),
      from,
      to,
      san,
      color: moverColor,
      captured: moveData && moveData.captured ? moveData.captured : null
    };
    this.freePlayMoveList.push(entry);
    return entry;
  }

  checkGuidedGameEnd(nextTurnColor) {
    const status = ChessRules.getGameStatus(
      this.boardUI.boardState,
      nextTurnColor,
      this.boardUI.options,
      this.positionCounts,
      this.halfMoveClock
    );
    if (!status.over) return false;

    this.boardUI.interactive = false;
    const st = this.guidedMoveStats || { brilliant: 0, great: 0, good: 0, inaccuracy: 0, blunder: 0 };
    const totalGraded = st.brilliant + st.great + st.good + st.inaccuracy + st.blunder;
    const weighted = st.brilliant * 100 + st.great * 100 + st.good * 92 + st.inaccuracy * 55 + st.blunder * 10;
    const accPct = totalGraded > 0 ? Math.round(weighted / totalGraded) : 100;
    const summaryHtml = totalGraded > 0
      ? `<div style="margin-top:8px;padding-top:6px;border-top:1px solid rgba(148,163,184,0.25);font-size:0.84rem;">📊 <b>Your Accuracy: ${accPct}%</b> — 👑 ${st.brilliant} • 🌟 ${st.great} • 👍 ${st.good} • 🤔 ${st.inaccuracy} • 🚨 ${st.blunder}</div>`
      : '';

    if (status.reason === 'checkmate') {
      const playerWon = status.winner === this.guidedPlayerColor;
      if (playerWon) {
        try { sounds.playWin(); } catch (e) {}
        this.triggerConfetti();
        if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = '👑 CHECKMATE! You Won!';
        if (this.coachSpeechBody) {
          this.coachSpeechBody.innerHTML = '🎉 <b>VICTORY!</b> Brilliant checkmate! Try bumping up the Opponent Difficulty for an even tougher challenge!' + summaryHtml;
        }
      } else {
        try { sounds.playError(); } catch (e) {}
        if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = '💔 Checkmate! Opponent Wins.';
        if (this.coachSpeechBody) {
          this.coachSpeechBody.innerHTML = 'Opponent delivered checkmate! Tap <b>↶ Takeback</b> to rewind and practice defending the critical threat!' + summaryHtml;
        }
      }
    } else {
      const drawReasons = {
        stalemate: '🤝 <b>Stalemate Draw!</b> Side to move has zero legal moves and is not in check.',
        insufficient_material: '🤝 <b>Draw by Insufficient Material!</b> Neither side has enough pieces left to force checkmate.',
        threefold_repetition: '🤝 <b>Draw by Threefold Repetition!</b> The exact same position occurred 3 times.',
        fifty_move_rule: '🤝 <b>Draw by 50-Move Rule!</b> 50 moves played with no pawn push or capture.'
      };
      if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = '🤝 Draw!';
      if (this.coachSpeechBody) {
        this.coachSpeechBody.innerHTML = (drawReasons[status.reason] || '🤝 Game drawn!') + summaryHtml;
      }
    }

    this.updateCoachMoveLogUI();
    if (this.btnCoachUndo) this.btnCoachUndo.disabled = this.freePlayHistory.length <= 1;
    return true;
  }

  handleGuidedPlayerMove(from, to, moveData, boardBefore, optionsBefore) {
    const guide = window.CoachGuide || CoachGuide;
    const myColor = this.guidedPlayerColor;
    const oppColor = myColor === 'w' ? 'b' : 'w';

    // Reset move highlight toggle on each new move so player thinks fresh next turn
    this.isShowingCoachHighlight = false;
    if (this.btnCoachToggleHighlight) this.btnCoachToggleHighlight.textContent = '👁️ Show Move';

    // 1. Evaluate player's move with Engine + Tactical Grader
    if (boardBefore && guide) {
      const evalResult = guide.evaluateMove(from, to, boardBefore, this.boardUI.boardState, optionsBefore || this.boardUI.options, myColor);
      if (this.guidedMoveStats && evalResult.rating in this.guidedMoveStats) {
        this.guidedMoveStats[evalResult.rating]++;
      }
      if (this.coachEvalBanner) {
        this.coachEvalBanner.className = `coach-eval-banner ${evalResult.rating}`;
        if (this.coachEvalIcon) {
          const icons = { brilliant: '👑', great: '🌟', good: '👍', inaccuracy: '🤔', blunder: '🚨' };
          this.coachEvalIcon.textContent = icons[evalResult.rating] || '👍';
        }
        if (this.coachEvalText) {
          this.coachEvalText.innerHTML = `<b>${evalResult.badge}:</b> ${evalResult.text}`;
        }
        this.coachEvalBanner.classList.remove('hidden');
      }
    }

    // 2. Record SAN move & snapshot
    this.recordGuidedMove(boardBefore, optionsBefore, from, to, moveData, myColor);

    this.freePlayHistory.push({
      board: this.boardUI.boardState.map(r => [...r]),
      options: JSON.parse(JSON.stringify(this.boardUI.options || {})),
      turn: oppColor,
      halfMoveClock: this.halfMoveClock,
      positionCounts: { ...this.positionCounts },
      lastOpponentExplanation: this.lastOpponentExplanation
    });

    // 3. Check if player ended the game (checkmate or draw)
    if (this.checkGuidedGameEnd(oppColor)) {
      return;
    }

    // 4. Trigger Opponent Bot turn
    this.triggerGuidedOpponentTurn(oppColor);
  }

  triggerGuidedOpponentTurn(oppColor) {
    const bot = window.CoachBot || CoachBot;
    const guide = window.CoachGuide || CoachGuide;
    this.boardUI.interactive = false;
    if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = '🐾 Opponent calculating...';

    this.clearPendingBotTimer();
    this.freePlayTimer = setTimeout(() => {
      this.freePlayTimer = null;
      let isGameOver = false;
      try {
        const boardBefore = this.boardUI.boardState.map(r => [...r]);
        const optionsBefore = JSON.parse(JSON.stringify(this.boardUI.options || {}));
        const botMove = bot.chooseMove(boardBefore, optionsBefore, oppColor, this.freePlayMoveList);

        if (botMove) {
          this.boardUI.executeMove(botMove.from, botMove.to, botMove, true);
          const recorded = this.recordGuidedMove(
            boardBefore,
            optionsBefore,
            botMove.from,
            botMove.to,
            { ...botMove, captured: this.boardUI.lastMove && this.boardUI.lastMove.captured },
            oppColor
          );

          if (guide && guide.explainOpponentMove) {
            this.lastOpponentExplanation = guide.explainOpponentMove(
              recorded,
              this.boardUI.boardState,
              this.guidedPlayerColor,
              this.boardUI.options
            );
          }

          this.freePlayHistory.push({
            board: this.boardUI.boardState.map(r => [...r]),
            options: JSON.parse(JSON.stringify(this.boardUI.options || {})),
            turn: this.guidedPlayerColor,
            halfMoveClock: this.halfMoveClock,
            positionCounts: { ...this.positionCounts },
            lastOpponentExplanation: this.lastOpponentExplanation
          });
        }

        if (this.checkGuidedGameEnd(this.guidedPlayerColor)) {
          isGameOver = true;
        }
      } catch (err) {
        console.error('Error during guided opponent turn:', err);
      } finally {
        if (!isGameOver) {
          this.boardUI.interactive = true;
          const sideLabel = this.guidedPlayerColor === 'w' ? 'White' : 'Black';
          if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = `🌟 Your Turn (${sideLabel})!`;
          this.updateCoachGuideUI();
        }
      }
    }, 380);
  }

  updateCoachMoveLogUI() {
    if (!this.coachMoveLog) return;
    if (this.freePlayMoveList.length === 0) {
      this.coachMoveLog.textContent = 'No moves played yet.';
      if (this.coachPlyCount) this.coachPlyCount.textContent = 'Move 1';
      return;
    }

    const pairs = [];
    for (let i = 0; i < this.freePlayMoveList.length; i += 2) {
      const num = Math.floor(i / 2) + 1;
      const wSan = this.freePlayMoveList[i] ? this.freePlayMoveList[i].san : '';
      const bSan = this.freePlayMoveList[i + 1] ? this.freePlayMoveList[i + 1].san : '';
      pairs.push(`${num}. ${wSan}${bSan ? ' ' + bSan : ''}`);
    }
    this.coachMoveLog.textContent = pairs.join('   ');
    this.coachMoveLog.scrollTop = this.coachMoveLog.scrollHeight;
    if (this.coachPlyCount) {
      this.coachPlyCount.textContent = `Move ${Math.floor(this.freePlayMoveList.length / 2) + 1}`;
    }
  }

  copyPgnToClipboard() {
    if (!this.freePlayMoveList || this.freePlayMoveList.length === 0) return;
    const pairs = [];
    for (let i = 0; i < this.freePlayMoveList.length; i += 2) {
      const num = Math.floor(i / 2) + 1;
      const wSan = this.freePlayMoveList[i] ? this.freePlayMoveList[i].san : '';
      const bSan = this.freePlayMoveList[i + 1] ? this.freePlayMoveList[i + 1].san : '';
      pairs.push(`${num}. ${wSan}${bSan ? ' ' + bSan : ''}`);
    }
    const whiteTag = this.guidedPlayerColor === 'w' ? 'Player' : `CoachBot (${(window.CoachBot && window.CoachBot.difficulty) || 'challenger'})`;
    const blackTag = this.guidedPlayerColor === 'b' ? 'Player' : `CoachBot (${(window.CoachBot && window.CoachBot.difficulty) || 'challenger'})`;
    const pgn = `[Event "Little Grandmaster Guided Game"]\n[White "${whiteTag}"]\n[Black "${blackTag}"]\n\n${pairs.join(' ')}`;

    const flashCopied = () => {
      if (!this.btnCopyPgn) return;
      const prev = this.btnCopyPgn.textContent;
      this.btnCopyPgn.textContent = '✅ Copied!';
      setTimeout(() => { if (this.btnCopyPgn) this.btnCopyPgn.textContent = prev; }, 1400);
    };

    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pgn).then(flashCopied).catch(() => {});
    }
  }

  updateEvalBarUI(evalWhiteCp) {
    if (!this.coachEvalBarFill || !this.coachEvalScore) return;
    const cp = typeof evalWhiteCp === 'number' ? evalWhiteCp : 0;
    // Sigmoid clamp between 5% and 95% (50% = +0.0 even)
    const clamped = Math.max(-900, Math.min(900, cp));
    const pct = Math.round(50 + (clamped / 900) * 45);
    this.coachEvalBarFill.style && (this.coachEvalBarFill.style.width = `${pct}%`);

    if (Math.abs(cp) > 15000) {
      this.coachEvalScore.textContent = cp > 0 ? 'White M' : 'Black M';
    } else {
      const pawns = (cp / 100).toFixed(1);
      this.coachEvalScore.textContent = `${cp >= 0 ? '+' : ''}${pawns}`;
    }
  }

  updateCoachGuideUI() {
    const guide = window.CoachGuide || CoachGuide;
    if (!guide) return;
    const board = this.boardUI.boardState;
    const myColor = this.guidedPlayerColor;

    // 1. Phase Tracker
    const phase = guide.getGamePhase(board, this.freePlayMoveList.length);
    if (this.coachPhaseBadge) {
      this.coachPhaseBadge.textContent = phase.badge;
      this.coachPhaseBadge.className = `coach-phase-pill ${phase.phase}`;
    }

    // 2. Opponent's Last Move Decoder
    if (this.coachOppMoveBox && this.coachOppMoveText) {
      if (this.lastOpponentExplanation) {
        this.coachOppMoveText.innerHTML = this.lastOpponentExplanation;
        this.coachOppMoveBox.classList.remove('hidden');
      } else {
        this.coachOppMoveBox.classList.add('hidden');
      }
    }

    // 3. Material Balance & Captured Pieces
    const mat = guide.getMaterial(board);
    const uni = { q: '♛', r: '♜', b: '♝', n: '♞', p: '♟', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙' };
    if (this.coachCapturedBlack) {
      this.coachCapturedBlack.textContent = mat.capturedByWhite.map(p => uni[p] || p).join(' ') || '—';
    }
    if (this.coachCapturedWhite) {
      this.coachCapturedWhite.textContent = mat.capturedByBlack.map(p => uni[p] || p).join(' ') || '—';
    }
    if (this.coachMaterialDiff) {
      this.coachMaterialDiff.textContent = mat.diffText;
      this.coachMaterialDiff.className = 'material-diff-badge ' + (mat.diff > 0 ? 'plus' : (mat.diff < 0 ? 'minus' : ''));
    }

    // 4. Opening Book & Color-Aware GM Checklist
    if (phase.phase === 'opening') {
      if (this.coachOpeningBox) this.coachOpeningBox.classList.remove('hidden');
      if (this.coachChecklistGrid) this.coachChecklistGrid.classList.remove('hidden');

      const op = guide.identifyOpening(this.freePlayMoveList);
      if (this.coachOpeningName) this.coachOpeningName.textContent = op.name;
      if (this.coachOpeningDesc) this.coachOpeningDesc.textContent = op.desc;

      const chk = guide.getOpeningChecklist(board, myColor);
      if (this.chipCenter) {
        this.chipCenter.className = 'checklist-chip ' + (chk.centerControl ? 'done' : '');
        this.chipCenter.innerHTML = (chk.centerControl ? '✅ ' : '🏔️ ') + 'Center Pawn';
      }
      if (this.chipKnights) {
        this.chipKnights.className = 'checklist-chip ' + (chk.knightsDeveloped === 2 ? 'done' : '');
        this.chipKnights.innerHTML = (chk.knightsDeveloped === 2 ? '✅ ' : '🐎 ') + `Knights (${chk.knightsDeveloped}/2)`;
      }
      if (this.chipBishops) {
        this.chipBishops.className = 'checklist-chip ' + (chk.bishopsDeveloped === 2 ? 'done' : '');
        this.chipBishops.innerHTML = (chk.bishopsDeveloped === 2 ? '✅ ' : '♗ ') + `Bishops (${chk.bishopsDeveloped}/2)`;
      }
      if (this.chipCastled) {
        this.chipCastled.className = 'checklist-chip ' + (chk.kingCastled ? 'done' : '');
        this.chipCastled.innerHTML = (chk.kingCastled ? '✅ ' : '🏰 ') + 'King Castled';
      }
    } else {
      if (this.coachOpeningBox) this.coachOpeningBox.classList.remove('hidden');
      if (this.coachChecklistGrid) this.coachChecklistGrid.classList.add('hidden');
      if (this.coachOpeningName) this.coachOpeningName.textContent = `${phase.badge} Strategy`;
      if (this.coachOpeningDesc) this.coachOpeningDesc.textContent = phase.goal;
    }

    // 5. Threats & Tactical Opportunities Radar (for Player's Side!)
    const threats = guide.scanThreats(board, myColor, this.boardUI.options);
    const opps = guide.scanOpportunities(board, this.boardUI.options, myColor);

    if (opps.length > 0 && (opps[0].type === 'mate1' || opps[0].type === 'mate2')) {
      if (this.coachThreatBox) this.coachThreatBox.className = 'coach-threat-box win';
      if (this.coachThreatTitle) this.coachThreatTitle.innerHTML = opps[0].title;
      if (this.coachThreatText) this.coachThreatText.innerHTML = opps[0].text;
      this.boardUI.setDangerSquares([opps[0].move.to]);
    } else if (threats.length > 0) {
      const topT = threats[0];
      if (this.coachThreatBox) this.coachThreatBox.className = `coach-threat-box ${topT.level}`;
      if (this.coachThreatTitle) this.coachThreatTitle.innerHTML = topT.title;
      if (this.coachThreatText) this.coachThreatText.innerHTML = topT.text;
      this.boardUI.setDangerSquares(threats.map(t => t.square).filter(Boolean));
    } else if (opps.length > 0) {
      if (this.coachThreatBox) this.coachThreatBox.className = 'coach-threat-box safe';
      if (this.coachThreatTitle) this.coachThreatTitle.innerHTML = opps[0].title;
      if (this.coachThreatText) this.coachThreatText.innerHTML = opps[0].text;
      this.boardUI.setDangerSquares([]);
    } else {
      if (this.coachThreatBox) this.coachThreatBox.className = 'coach-threat-box safe';
      if (this.coachThreatTitle) this.coachThreatTitle.innerHTML = '✅ Position Secure';
      if (this.coachThreatText) this.coachThreatText.innerHTML = 'All friendly pieces are adequately guarded! Look to improve your worst-placed piece.';
      this.boardUI.setDangerSquares([]);
    }

    // 6. Coach Recommendation + Candidate Moves + Eval Bar
    const rec = guide.getRecommendation(board, this.boardUI.options, this.freePlayMoveList, myColor);
    this.currentRecommendation = rec;

    if (rec) {
      this.updateEvalBarUI(rec.evalWhiteCp);
      if (this.coachRecBadge) this.coachRecBadge.textContent = rec.badge;
      if (this.btnCoachPlayRec) this.btnCoachPlayRec.disabled = false;

      if (this.isShowingCoachHighlight) {
        if (this.coachSpeechBody) this.coachSpeechBody.innerHTML = rec.text;
        this.renderCandidatePills(rec.candidates || []);
        if (rec.move) this.boardUI.setCoachHighlight(rec.move.from, rec.move.to);
      } else {
        if (this.coachSpeechBody) this.coachSpeechBody.innerHTML = rec.hintPrompt || rec.text;
        if (this.coachCandidatesEl) this.coachCandidatesEl.classList.add('hidden');
        this.boardUI.coachHighlight = null;
        this.boardUI.render();
      }
    } else {
      if (this.coachRecBadge) this.coachRecBadge.textContent = '🏁 Game End';
      if (this.btnCoachPlayRec) this.btnCoachPlayRec.disabled = true;
      if (this.coachCandidatesEl) this.coachCandidatesEl.classList.add('hidden');
      this.boardUI.coachHighlight = null;
      this.boardUI.render();
    }

    this.updateCoachMoveLogUI();

    const minHist = this.guidedPlayerColor === 'b' ? 2 : 1;
    if (this.btnCoachUndo) {
      this.btnCoachUndo.disabled = this.freePlayHistory.length <= minHist;
    }
  }

  renderCandidatePills(candidates) {
    if (!this.coachCandidatesEl) return;
    this.coachCandidatesEl.innerHTML = '';
    if (!candidates || candidates.length === 0) {
      this.coachCandidatesEl.classList.add('hidden');
      return;
    }
    candidates.forEach((c, idx) => {
      const pill = document.createElement('button');
      pill.className = 'candidate-pill';
      pill.textContent = `#${idx + 1} ${c.san} (${c.evalStr})`;
      pill.title = `Highlight ${c.fromSq} -> ${c.toSq}`;
      pill.addEventListener('click', () => {
        this.boardUI.setCoachHighlight(c.move.from, c.move.to);
      });
      this.coachCandidatesEl.appendChild(pill);
    });
    this.coachCandidatesEl.classList.remove('hidden');
  }

  showCoachPieceHint() {
    if (!this.currentRecommendation || !this.currentRecommendation.move) return;
    const m = this.currentRecommendation.move;
    this.boardUI.setCoachHintPiece(m.from);
    if (this.coachSpeechBody && this.currentRecommendation.hintPrompt) {
      const sq = ChessRules.toAlgebraic(m.from.r, m.from.c);
      this.coachSpeechBody.innerHTML = `💡 Focus on your piece at <b>${sq}</b>! Can you spot its strongest destination?`;
    }
  }

  undoCoachMove() {
    this.clearPendingBotTimer();
    const minHist = this.guidedPlayerColor === 'b' ? 2 : 1;
    if (this.freePlayHistory.length <= minHist) return;

    this.freePlayHistory.pop();
    if (this.freePlayMoveList.length > 0) this.freePlayMoveList.pop();

    while (this.freePlayHistory.length > minHist &&
           this.freePlayHistory[this.freePlayHistory.length - 1].turn !== this.guidedPlayerColor) {
      this.freePlayHistory.pop();
      if (this.freePlayMoveList.length > 0) this.freePlayMoveList.pop();
    }

    const prev = this.freePlayHistory[this.freePlayHistory.length - 1];
    this.halfMoveClock = prev.halfMoveClock || 0;
    this.positionCounts = { ...(prev.positionCounts || {}) };
    this.lastOpponentExplanation = prev.lastOpponentExplanation || null;

    this.boardUI.setBoard(prev.board, prev.options);
    this.boardUI.interactive = true;

    try { sounds.playMove(); } catch (e) {}

    if (this.coachEvalBanner) this.coachEvalBanner.classList.add('hidden');
    if (this.coachTurnIndicator) this.coachTurnIndicator.textContent = '🌟 Move Undone: Your Turn!';

    this.updateCoachGuideUI();
  }

  toggleCoachHighlight() {
    this.isShowingCoachHighlight = !this.isShowingCoachHighlight;
    if (this.btnCoachToggleHighlight) {
      this.btnCoachToggleHighlight.textContent = this.isShowingCoachHighlight ? '🙈 Hide Move' : '👁️ Show Move';
    }
    this.updateCoachGuideUI();
  }

  playCoachRecommendation() {
    if (!this.boardUI.interactive) return;
    if (this.currentRecommendation && this.currentRecommendation.move) {
      const m = this.currentRecommendation.move;
      this.boardUI.executeMove(m.from, m.to, m, false);
    }
  }

  // ==================== DRAWERS & CONFETTI ====================
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

  triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas || !canvas.getContext) return;
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
        p.vy += 0.45;
        p.rotation += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 90) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    animate();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new ChessGameApp();
});
