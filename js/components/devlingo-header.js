export class DevLingoHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  update(currentStage, totalStages, score) {
    const percent = Math.round((currentStage / totalStages) * 100);
    const progressText = this.querySelector('#progress-text');
    const progressBar = this.querySelector('#progress-bar');
    const scoreBadge = this.querySelector('#score-badge');

    if (progressText) progressText.textContent = `Fase ${currentStage} de ${totalStages}`;
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
      progressBar.setAttribute('aria-valuenow', percent);
    }
    if (scoreBadge) {
      scoreBadge.textContent = `⭐ ${score} pts`;
    }
  }

  render() {
    this.innerHTML = `
      <header class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span id="progress-text" class="fw-bold text-secondary">Fase 1 de 3</span>
          <div id="score-badge" class="badge bg-warning text-dark fs-6 px-3 py-2 rounded-pill shadow-sm" role="status">
            ⭐ 0 pts
          </div>
        </div>
        <div class="progress rounded-pill shadow-sm" style="height: 16px; background-color: var(--accent-blue-light);">
          <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 33%; background-color: var(--accent-blue);"></div>
        </div>
      </header>
    `;
  }
}
customElements.define('devlingo-header', DevLingoHeader);