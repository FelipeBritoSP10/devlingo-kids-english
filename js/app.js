import { STAGES } from './data/stages.js';
import { AppState } from './state/app-state.js';
import { speak, announceToSR, triggerConfetti } from './utils/audio.js';

import './components/devlingo-header.js';
import './components/devlingo-option-card.js';
import './components/devlingo-step-choose.js';
import './components/devlingo-step-speak.js';
import './components/devlingo-hint-modal.js';

function renderAppStage() {
  const stage = AppState.currentStage;
  const header = document.querySelector('#app-header');
  const stepChoose = document.querySelector('#step-choose');
  const stepSpeak = document.querySelector('#step-speak');

  header.update(AppState.currentIndex + 1, STAGES.length, AppState.score);
  stepChoose.setStage(stage);

  stepChoose.classList.remove('d-none');
  stepSpeak.classList.add('d-none');
}

document.addEventListener('DOMContentLoaded', () => {
  renderAppStage();
  AppState.setSpeakingState(true);

  const btnStart = document.getElementById('btn-start-game');
  const startOverlay = document.getElementById('start-overlay');
  const mascot = document.getElementById('mascot');

  mascot.addEventListener('click', () => {
    const emojis = ["🐶", "🐱", "🐰", "🚗", "⭐", "🎉"];
    mascot.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    speak("DevLingo!", 'pt-BR', 1.1);
  });

  btnStart.addEventListener('click', () => {
    startOverlay.style.opacity = '0';
    setTimeout(() => { startOverlay.style.visibility = 'hidden'; }, 400);

    const introAudio = "Olá! Bem-vindo ao DevLingo Kids! É muito simples jogar: primeiro você escolhe a imagem do animal. Depois de acertar, você vai clicar no microfone e falar o nome dele em inglês! Vamos começar?";
    
    speak(introAudio, 'pt-BR', 1.0, () => {
      speak(`Fase 1. Qual dessas imagens é o ${AppState.currentStage.wordPt}?`, 'pt-BR');
    });
  });

  document.addEventListener('option-selected', (e) => {
    if (AppState.isSpeaking) return;

    const { isCorrect, emoji, labelEn, element } = e.detail;

    if (isCorrect) {
      element.classList.remove('bg-light');
      element.classList.add('bg-success', 'text-white');
      
      triggerConfetti();
      AppState.addScore(10);
      document.querySelector('#app-header').update(AppState.currentIndex + 1, STAGES.length, AppState.score);

      const successText = `Muito bem! Você acertou o ${AppState.currentStage.wordPt}! Agora vamos para o próximo passo!`;
      announceToSR(successText);

      speak(successText, 'pt-BR', 1.0, () => {
        document.querySelector('#step-choose').classList.add('d-none');
        const stepSpeak = document.querySelector('#step-speak');
        stepSpeak.setSpeechData(emoji, labelEn);
        stepSpeak.classList.remove('d-none');
        
        const speakInstruction = `Clique no microfone e diga em inglês: ${labelEn}`;
        announceToSR(speakInstruction);
        speak(speakInstruction, 'pt-BR');
      });
    } else {
      element.classList.remove('bg-light');
      element.classList.add('bg-danger', 'text-white');
      
      const errorMsg = "Ops! Tente novamente!";
      announceToSR(errorMsg);
      speak(errorMsg, 'pt-BR', 1.0, () => {
        element.classList.remove('bg-danger', 'text-white');
        element.classList.add('bg-light');
      });
    }
  });

  document.addEventListener('speech-success', () => {
    triggerConfetti();
    AppState.addScore(15);

    setTimeout(() => {
      if (AppState.nextStage()) {
        renderAppStage();
        const nextStageMsg = `Excelente! Indo para a Fase ${AppState.currentIndex + 1}. Qual dessas imagens é o ${AppState.currentStage.wordPt}?`;
        announceToSR(nextStageMsg);
        speak(nextStageMsg, 'pt-BR');
      } else {
        const finalMsg = `Parabéns! Você concluiu todas as fases! Pontuação total: ${AppState.score} pontos.`;
        announceToSR(finalMsg);
        speak("Parabéns! Você concluiu todas as fases!", 'pt-BR', 1.0, () => {
          alert(`🏆 Jogo Finalizado! Pontuação Total: ${AppState.score} pontos.`);
        });
      }
    }, 1000);
  });
});