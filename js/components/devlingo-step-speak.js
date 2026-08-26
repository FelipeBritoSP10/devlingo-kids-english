import { AppState } from '../state/app-state.js';
import { speak, announceToSR } from '../utils/audio.js';

export class DevLingoStepSpeak extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupSpeechRecognition();
  }

  setSpeechData(emoji, labelEn) {
    this.currentLabel = labelEn;
    const emojiEl = this.querySelector('#speak-emoji');
    const labelEl = this.querySelector('#speak-label');
    const statusEl = this.querySelector('#speak-status');

    if (emojiEl) emojiEl.textContent = emoji;
    if (labelEl) labelEl.textContent = labelEn;
    if (statusEl) {
      statusEl.textContent = 'Clique no microfone e fale a palavra acima em inglês!';
      statusEl.className = 'mt-3 text-secondary fw-bold';
    }
  }

  setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.hasSupport = false;
      return;
    }

    this.hasSupport = true;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;

    this.recognition.onstart = () => {
      const micBtn = this.querySelector('#mic-btn');
      const statusEl = this.querySelector('#speak-status');
      if (micBtn) micBtn.classList.add('mic-listening');
      if (statusEl) {
        statusEl.textContent = 'Ouvindo... Fale agora!';
        statusEl.className = 'mt-3 fw-bold';
        statusEl.style.color = 'var(--accent-blue)';
      }
      announceToSR('Microfone ativado. Pode falar agora!');
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toUpperCase().trim();
      this.handleSpeechResult(transcript);
    };

    this.recognition.onerror = () => this.resetMicState();
    this.recognition.onend = () => this.resetMicState();
  }

  resetMicState() {
    const micBtn = this.querySelector('#mic-btn');
    if (micBtn) micBtn.classList.remove('mic-listening');
  }

  handleSpeechResult(transcript) {
    const statusEl = this.querySelector('#speak-status');
    const target = this.currentLabel ? this.currentLabel.toUpperCase() : '';

    if (transcript.includes(target)) {
      const msg = `Perfeito! Você disse: "${transcript}" 🎉`;
      if (statusEl) {
        statusEl.textContent = msg;
        statusEl.className = 'mt-3 text-success fw-bold fs-5';
      }
      announceToSR(msg);
      this.dispatchEvent(new CustomEvent('speech-success', { bubbles: true }));
    } else {
      const msg = `Você disse "${transcript}". Tente novamente!`;
      if (statusEl) {
        statusEl.textContent = msg;
        statusEl.className = 'mt-3 text-danger fw-bold';
      }
      announceToSR(msg);
    }
  }

  startListening() {
    if (AppState.isSpeaking) return;

    if (!this.hasSupport) {
      alert('Navegador sem suporte a voz.');
      return;
    }
    this.recognition.start();
  }

  render() {
    this.innerHTML = `
      <section id="speak-container">
        <div id="speak-emoji" class="emoji-display mb-2">🐶</div>
        <h2 id="speak-label" class="display-4 fw-black mb-4" style="color: var(--accent-blue);">DOG</h2>

        <div class="d-flex justify-content-center gap-3 mb-2">
          <button id="listen-btn" class="btn btn-outline-primary btn-lg rounded-circle p-3 shadow-sm" style="border-color: var(--accent-blue); color: var(--accent-blue);">
            🔊
          </button>
          <button id="mic-btn" class="btn btn-danger btn-lg rounded-circle p-3 shadow-sm">
            🎙️
          </button>
        </div>

        <p id="speak-status" class="mt-3 text-secondary fw-bold">
          Clique no microfone e fale a palavra em inglês!
        </p>
      </section>
    `;

    this.querySelector('#mic-btn').addEventListener('click', () => this.startListening());
    this.querySelector('#listen-btn').addEventListener('click', () => {
      if (this.currentLabel && !AppState.isSpeaking) {
        speak(this.currentLabel, 'en-US', 0.8);
      }
    });
  }
}
customElements.define('devlingo-step-speak', DevLingoStepSpeak);