class DevlingoWorldsScreen extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="text-center my-4">
                <div class="fs-1 mb-2" aria-hidden="true">🌎 ⭐ 🐶</div>

                <h2 id="worlds-title" class="worlds-heading fw-black">
                    Escolha uma fase!
                </h2>

                <p class="worlds-subtitle fw-semibold mb-0">
                    Complete os desafios e descubra novos mundos!
                </p>
            </header>

            <section class="campaign-progress mb-4" aria-label="Progresso da campanha">
                <div class="d-flex justify-content-between align-items-center gap-2 mb-2">
                    <span class="fw-bold text-dark">
                        🏆 Sua aventura
                    </span>
                    <span id="progress-label" class="small fw-bold text-primary">
                        1 de 10 mundos
                    </span>
                </div>

                <div class="progress"
                    role="progressbar"
                    aria-label="Progresso dos mundos desbloqueados"
                    aria-valuemin="0"
                    aria-valuemax="10"
                    aria-valuenow="1"
                    id="campaign-progress">
                    <div id="progress-bar" class="progress-bar" style="width: 10%;"></div>
                </div>
            </section>

            <div id="worlds-grid" class="worlds-grid"></div>

            <footer class="text-center mt-4 mb-3">
                <p class="fw-bold text-primary">
                    ⭐ Cada fase é uma nova aventura! ⭐
                </p>
            </footer>
        `;
    }
}

customElements.define('devlingo-worlds-screen', DevlingoWorldsScreen);