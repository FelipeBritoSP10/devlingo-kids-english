
import { STAGES } from '../data/stages.js';

const STORAGE_KEY = 'devlingo-progress';

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saved && Array.isArray(saved.unlockedWorlds)) {
      return saved;
    }
  } catch {
    // Inicia com o progresso padrão se os dados forem inválidos.
  }

  return {
    unlockedWorlds: [STAGES[0]?.world].filter(Boolean)
  };
}

const progress = loadProgress();

export const AppState = {
  currentIndex: 0,
  score: 0,
  isSpeaking: false,

  get currentStage() {
    return STAGES[this.currentIndex];
  },

  get worlds() {
    return [...new Set(STAGES.map(stage => stage.world))];
  },

  get unlockedWorlds() {
    return progress.unlockedWorlds;
  },

  isWorldUnlocked(world) {
    return this.unlockedWorlds.includes(world);
  },

  saveProgress() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        unlockedWorlds: this.unlockedWorlds
      })
    );
  },

  selectWorld(world) {
    if (!this.isWorldUnlocked(world)) {
      return false;
    }

    const firstStageIndex = STAGES.findIndex(
      stage => stage.world === world
    );

    if (firstStageIndex === -1) {
      return false;
    }

    this.currentIndex = firstStageIndex;
    return true;
  },

  addScore(points) {
    this.score += points;
  },

  nextStage() {
    const currentWorld = this.currentStage.world;

    const nextIndex = this.currentIndex + 1;
    const nextStage = STAGES[nextIndex];

    // Continua dentro do mundo atual.
    if (nextStage && nextStage.world === currentWorld) {
      this.currentIndex = nextIndex;
      return 'next-stage';
    }

    // Concluiu o mundo atual: desbloqueia o próximo.
    const currentWorldIndex = this.worlds.indexOf(currentWorld);
    const nextWorld = this.worlds[currentWorldIndex + 1];

    if (nextWorld) {
      if (!this.isWorldUnlocked(nextWorld)) {
        progress.unlockedWorlds.push(nextWorld);
        this.saveProgress();
      }

      return 'world-complete';
    }

    return 'campaign-complete';
  },

  setSpeakingState(speaking) {
    this.isSpeaking = speaking;

    const mainCard = document.querySelector('main');

    if (mainCard) {
      mainCard.classList.toggle(
        'interaction-disabled',
        speaking
      );
    }
  }
};
