import { AppState } from '../state/app-state.js';

export function announceToSR(message) {
  const announcer = document.getElementById('sr-announcer');
  if (announcer) {
    announcer.textContent = '';
    setTimeout(() => { announcer.textContent = message; }, 50);
  }
}

export function speak(text, lang = 'pt-BR', rate = 1.0, callback = null) {
  if (!('speechSynthesis' in window)) {
    if (callback) callback();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;

  AppState.setSpeakingState(true);

  utterance.onend = () => {
    AppState.setSpeakingState(false);
    if (callback) callback();
  };

  utterance.onerror = () => {
    AppState.setSpeakingState(false);
    if (callback) callback();
  };

  window.speechSynthesis.speak(utterance);
}

export function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  }
}