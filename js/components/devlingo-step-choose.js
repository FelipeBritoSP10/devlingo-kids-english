export class DevLingoStepChoose extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  setStage(stage) {
    const titleEl = this.querySelector('#choose-title');
    const gridEl = this.querySelector('#options-grid');

    if (titleEl) {
      titleEl.innerHTML = `Qual dessas imagens é o <strong style="color: var(--accent-blue);">${stage.wordPt}</strong>?`;
    }

    if (gridEl) {
      gridEl.innerHTML = stage.options.map(opt => `
        <div class="col-4">
          <devlingo-option-card 
            emoji="${opt.emoji}" 
            label="${opt.labelEn}" 
            correct="${opt.correct}">
          </devlingo-option-card>
        </div>
      `).join('');
    }
  }

  render() {
    this.innerHTML = `
      <section aria-labelledby="choose-title">
        <h2 id="choose-title" class="fw-bold mb-4 text-dark">Qual dessas imagens é ...?</h2>
        <div id="options-grid" class="row g-3"></div>
        <div class="mt-4 text-end">
          <button class="btn btn-hint rounded-pill px-4 fw-bold" data-bs-toggle="modal" data-bs-target="#hintModal">
            💡 Como Jogar
          </button>
        </div>
      </section>
    `;
  }
}
customElements.define('devlingo-step-choose', DevLingoStepChoose);