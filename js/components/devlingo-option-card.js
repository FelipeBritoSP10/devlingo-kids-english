import { AppState } from '../state/app-state.js';

export class DevLingoOptionCard extends HTMLElement {
  connectedCallback() {
    const emoji = this.getAttribute('emoji') || '❓';
    const label = this.getAttribute('label') || '';

    this.innerHTML = `
      <div class="card h-100 border-2 rounded-4 text-center p-3 option-btn bg-light shadow-sm" 
           style="cursor: pointer; border-color: var(--accent-blue-border) !important;"
           role="button" tabindex="0">
        <div class="emoji-display mb-2">${emoji}</div>
        <h3 class="h5 fw-bold m-0 text-dark">${label}</h3>
      </div>
    `;

    const cardElement = this.querySelector('.card');

    const triggerSelect = () => {
      if (AppState.isSpeaking) return;

      const isCorrect = this.getAttribute('correct') === 'true';
      this.dispatchEvent(new CustomEvent('option-selected', {
        bubbles: true,
        detail: { isCorrect, emoji, labelEn: label, element: cardElement }
      }));
    };

    this.addEventListener('click', triggerSelect);
    this.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerSelect();
      }
    });
  }
}
customElements.define('devlingo-option-card', DevLingoOptionCard);