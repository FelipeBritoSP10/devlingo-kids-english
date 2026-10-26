class DevlingoStartScreen extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="start-overlay">
                <div class="start-card text-center">
                    <div id="mascot" class="mascot-interactive mb-2"
                        role="button"
                        tabindex="0"
                        aria-label="Mascote interativo">
                        🐶
                    </div>

                    <h1 class="fw-black text-dark mb-1 fs-2">
                        DevLingo
                        <span style="color: var(--accent-blue);">Kids</span>
                    </h1>

                    <p class="text-secondary fw-bold fs-6 mb-4">
                        Aprenda inglês no seu ritmo!
                    </p>

                    <button id="btn-start-game"
                        class="btn btn-play-interactive btn-lg rounded-pill px-5 py-3 fs-3 w-100 mb-3 shadow-sm"
                        type="button">
                        ▶️ PLAY
                    </button>

                    <div class="d-flex justify-content-center flex-wrap gap-2">
                        <span class="badge rounded-pill badge-accessibility px-3 py-2 fw-semibold">
                            🔊 Som Ativo
                        </span>

                        <span class="badge rounded-pill badge-accessibility px-3 py-2 fw-semibold">
                            🎙️ Voz Ativa
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('devlingo-start-screen', DevlingoStartScreen);