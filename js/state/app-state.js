import { STAGES } from '../data/stages.js';

export const AppState = {
  currentIndex: 0,
  score: 0,
  isSpeaking: false,

  get currentStage() {
    return STAGES[this.currentIndex];
  },

  addScore(points) {
    this.score += points;
  },

  nextStage() {
    if (this.currentIndex < STAGES.length - 1) {
      this.currentIndex++;
      return true;
    }
    return false;
  },

  setSpeakingState(speaking) {
    this.isSpeaking = speaking;
    const mainCard = document.querySelector('main');
    if (mainCard) {
      if (speaking) {
        mainCard.classList.add('interaction-disabled');
      } else {
        mainCard.classList.remove('interaction-disabled');
      }
    }
  }
};