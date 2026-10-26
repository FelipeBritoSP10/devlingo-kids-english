import { STAGES } from './data/stages.js';
import { WORLDS_DATA } from './data/worldsData.js';
import { AppState } from './state/app-state.js';
import {
    speak,
    announceToSR,
    triggerConfetti
} from './utils/audio.js';

import './components/devlingo-start-screen.js';
import './components/devlingo-worlds-screen.js';
import './components/devlingo-header.js';
import './components/devlingo-option-card.js';
import './components/devlingo-step-choose.js';
import './components/devlingo-step-speak.js';
import './components/devlingo-hint-modal.js';

const WORLD_INFO = {
    Animals: { emoji: '🐶', pt: 'Animais' },
    Colors: { emoji: '🎨', pt: 'Cores' },
    Numbers: { emoji: '🔢', pt: 'Números' },
    Food: { emoji: '🍎', pt: 'Alimentos' },
    Objects: { emoji: '🧸', pt: 'Objetos' },
    Clothes: { emoji: '👕', pt: 'Roupas' },
    Family: { emoji: '👨‍👩‍👧', pt: 'Família' },
    House: { emoji: '🏠', pt: 'Casa' },
    Weather: { emoji: '🌦️', pt: 'Clima' },
    Transportation: { emoji: '🚗', pt: 'Transportes' }
};

let currentWorld = null;

function getWorldStages(world) {
    return STAGES.filter(stage => stage.world === world);
}

function showWorldSelection() {
    document.querySelector('#game-screen').classList.add('d-none');
    document.querySelector('#worlds-screen').classList.remove('d-none');

    renderWorldCards();
    AppState.setSpeakingState(false);

    announceToSR('Escolha um mundo para começar a jogar.');
}

function renderWorldCards() {
    const grid = document.querySelector('#worlds-grid');
    if (!grid) return;

    grid.innerHTML = WORLDS_DATA.map(world => {
        const unlocked = AppState.isWorldUnlocked(world.id);
        const statusText = unlocked ? '🔓 Desbloqueado' : '🔒 Bloqueado';
        const ariaLabel = `${world.translation}: ${unlocked ? 'desbloqueado' : 'bloqueado'}`;

        return `
            <button class="world-card" 
                type="button" 
                data-world="${world.id}" 
                ${!unlocked ? 'disabled' : ''} 
                aria-label="${ariaLabel}">
                <span class="world-emoji" aria-hidden="true">${world.emoji}</span>
                <span class="world-name">${world.name}</span>
                <span class="world-translation">${world.translation}</span>
                <span class="world-status">${statusText}</span>
            </button>
        `;
    }).join('');

    const unlockedCount = AppState.worlds.filter(
        world => AppState.isWorldUnlocked(world)
    ).length;

    const label = document.querySelector('#progress-label');
    const bar = document.querySelector('#progress-bar');
    const progress = document.querySelector('#campaign-progress');

    if (label) label.textContent = `${unlockedCount} de ${AppState.worlds.length} mundos`;

    const percentage = (unlockedCount / AppState.worlds.length) * 100;

    if (bar) bar.style.width = `${percentage}%`;
    if (progress) progress.setAttribute('aria-valuenow', unlockedCount);
}

function renderAppStage() {
    const stage = AppState.currentStage;

    if (!stage) {
        showWorldSelection();
        return;
    }

    document.querySelector('#worlds-screen').classList.add('d-none');
    document.querySelector('#game-screen').classList.remove('d-none');

    const header = document.querySelector('#app-header');
    const stepChoose = document.querySelector('#step-choose');
    const stepSpeak = document.querySelector('#step-speak');

    const worldStages = getWorldStages(currentWorld);
    const position = worldStages.findIndex(
        item => item === stage
    ) + 1;

    header.update(position, worldStages.length, AppState.score);

    stepChoose.setStage(stage);
    stepChoose.classList.remove('d-none');
    stepSpeak.classList.add('d-none');

    AppState.setSpeakingState(false);
}

function startSelectedWorld(world) {
    if (!AppState.selectWorld(world)) {
        speak('Esse mundo ainda está bloqueado. Complete o mundo anterior primeiro!', 'pt-BR');
        return;
    }

    currentWorld = world;

    renderAppStage();

    const info = WORLD_INFO[world];
    const message = `Vamos brincar no mundo ${info?.pt ?? world}! Primeira fase: qual dessas imagens é ${AppState.currentStage.wordPt}?`;

    announceToSR(message);
    speak(message, 'pt-BR');
}

document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.querySelector('#btn-start-game');
    const startOverlay = document.querySelector('#start-overlay');
    const mascot = document.querySelector('#mascot');
    const btnHome = document.querySelector('#btn-home');

    document.querySelector('#game-screen').classList.add('d-none');
    document.querySelector('#worlds-screen').classList.add('d-none');

    if (mascot) {
        mascot.addEventListener('click', () => {
            const emojis = ['🐶', '🐱', '🐰', '🚗', '⭐', '🎉'];
            mascot.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            speak('DevLingo!', 'pt-BR', 1.1);
        });

        mascot.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                mascot.click();
            }
        });
    }

    if (btnStart) {
        btnStart.addEventListener('click', () => {
            if (startOverlay) {
                startOverlay.style.opacity = '0';
                setTimeout(() => {
                    startOverlay.style.visibility = 'hidden';
                    showWorldSelection();
                }, 400);
            } else {
                showWorldSelection();
            }

            speak(
                'Olá! Bem-vindo ao DevLingo Kids! Escolha um mundo para começar sua aventura e aprender inglês brincando!',
                'pt-BR'
            );
        });
    }

    if (btnHome) {
        btnHome.addEventListener('click', () => {
            currentWorld = null;
            showWorldSelection();
        });
    }

    document.addEventListener('click', event => {
        const card = event.target.closest('.world-card');
        if (!card || card.disabled) return;
        startSelectedWorld(card.dataset.world);
    });

    document.addEventListener('option-selected', event => {
        if (AppState.isSpeaking) return;

        const { isCorrect, emoji, labelEn, element } = event.detail;

        if (isCorrect) {
            element.classList.remove('bg-light', 'bg-danger');
            element.classList.add('bg-success', 'text-white');

            triggerConfetti();
            AppState.addScore(10);

            document.querySelector('#app-header').update(
                getWorldStages(currentWorld).findIndex(
                    stage => stage === AppState.currentStage
                ) + 1,
                getWorldStages(currentWorld).length,
                AppState.score
            );

            const successText = `Muito bem! Você acertou ${AppState.currentStage.wordPt}! Agora vamos falar em inglês!`;

            announceToSR(successText);

            speak(successText, 'pt-BR', 1.0, () => {
                document.querySelector('#step-choose').classList.add('d-none');

                const stepSpeak = document.querySelector('#step-speak');
                stepSpeak.setSpeechData(emoji, labelEn);
                stepSpeak.classList.remove('d-none');

                const instruction = `Clique no microfone e diga em inglês: ${labelEn}`;
                announceToSR(instruction);
                speak(instruction, 'pt-BR');
            });

            return;
        }

        element.classList.remove('bg-light');
        element.classList.add('bg-danger', 'text-white');

        const errorMessage = 'Ops! Tente novamente!';

        announceToSR(errorMessage);

        speak(errorMessage, 'pt-BR', 1.0, () => {
            element.classList.remove('bg-danger', 'text-white');
            element.classList.add('bg-light');
        });
    });

    document.addEventListener('speech-success', () => {
        if (!currentWorld) return;

        triggerConfetti();
        AppState.addScore(15);

        const result = AppState.nextStage();

        setTimeout(() => {
            if (result === 'next-stage') {
                renderAppStage();

                const message = `Excelente! Qual dessas imagens é ${AppState.currentStage.wordPt}?`;
                announceToSR(message);
                speak(message, 'pt-BR');
                return;
            }

            const completedWorld = currentWorld;
            const completedInfo = WORLD_INFO[completedWorld];

            if (result === 'world-complete') {
                const nextWorld = AppState.worlds[
                    AppState.worlds.indexOf(completedWorld) + 1
                ];

                const nextInfo = WORLD_INFO[nextWorld];

                currentWorld = null;
                showWorldSelection();

                const message = `Parabéns! Você concluiu ${completedInfo?.pt ?? completedWorld}! O mundo ${nextInfo?.pt ?? nextWorld} foi desbloqueado!`;

                announceToSR(message);
                speak(message, 'pt-BR');
                return;
            }

            if (result === 'campaign-complete') {
                currentWorld = null;
                showWorldSelection();

                const message = `Parabéns! Você concluiu toda a campanha com ${AppState.score} pontos!`;

                announceToSR(message);
                speak(message, 'pt-BR');
            }
        }, 1000);
    });

    renderWorldCards();
    AppState.setSpeakingState(false);
});