export class DevLingoHintModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="modal fade" id="hintModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content rounded-4 border-0 shadow">
            <div class="modal-header border-0 pb-0">
              <h2 class="modal-title fs-5 fw-bold">💡 Passo a Passo do Jogo</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-start py-4 px-4">
              <div class="d-flex align-items-center mb-3">
                <span class="fs-2 me-3">1️⃣</span>
                <div>
                  <strong class="d-block text-dark">Escolha a Imagem</strong>
                  <small class="text-secondary">Clique na figura correta de acordo com a pergunta.</small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <span class="fs-2 me-3">2️⃣</span>
                <div>
                  <strong class="d-block text-dark">Fale em Inglês</strong>
                  <small class="text-secondary">Depois de acertar, clique no microfone e fale o nome em inglês!</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('devlingo-hint-modal', DevLingoHintModal);