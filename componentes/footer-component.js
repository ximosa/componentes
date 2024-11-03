class FooterComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="surface-container-lowest padding">
          <div class="content-center">
            <p>&copy; ${new Date().getFullYear()} Webgae. Todos los derechos reservados.</p>
            <nav>
              <a href="/about" class="no-decoration">Sobre nosotros</a> |
              <a href="/contacto" class="no-decoration">Contacto</a> |
              <a href="/privacy-policy" class="no-decoration">Política de Privacidad</a>
            </nav>
          </div>
        </footer>
      `;
    }
  }
  
  // Define el custom element sin Shadow DOM
  customElements.define('footer-component', FooterComponent);
  