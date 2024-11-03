class HeaderComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="surface-container-lowest" >
      <nav id="navbar" class="fixed surface-container-lowest top">
          <button data-ui="#dialog-navigation" class="circle transparent">
            <i>menu</i>
          </button>
      
       <h5 class="small max ">
    <a href="/" > <button class="circle transparent"> <img class="responsive surface-bright" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKYrnrh3gKnagG-HCAb44qxmdDUO6sKVM2ntkNf5JM4gVtvwpPQ1TmJQ2UBpBuk2eOVbjQqhCMarOUq0guy76z-6-tlSuI0JFflGImsdKZFFoej9a5NzIVrDRYGf2jbyV1tpaVsjJcRs8J646OQHiJo72dsoV78RuOXNa5EfDXG5hDJjghhBtspWh-lHw/s1600/logo-1-150x150.png" />    </button> </a>  
      </h5>
       
       <button class="circle transparent">
            <i>more_vert</i>
      
       <menu class="no-wrap">
        <a href="/" >Inicio</a>
              <a href="/p/servicios_17.html" >Servicios</a>
                     <a href="/p/precios.html" > Precios</a>
                <a href="/p/sobre-nosotros.html" > Nosotros</a>
      <a href="/p/mis-trabajos.html" > Trabajos</a>
            </menu>
          </button>
      
      
       <a class="circle transparent" href="/blog" >   <i  class="pink-text">rss_feed</i>
      
       </a>
      
      <button class="small-round extra primary " data-ui="#dialog-modal">Contactar <i>mail</i></button>
        </nav>
      
      </header>
      <dialog id="dialog-navigation" class="left">
          <header>
    <label class="switch icon small">
      <input type="checkbox" onclick="mode()"/>
      <span>
        <i>dark_mode</i>
      </span>
    </label>
    
            <nav>
              <button data-ui="#dialog-navigation" class="transparent circle large">
                <i>close</i>
              </button>
              <h5 class="max">Menú</h5>
            </nav>
          </header>
          <a class="row round" href="/search">
            <i>inbox</i>
            <span>Blog</span>
            <div class="max"></div>
          </a>
          <a class="row round" href="https://articulos.webgae.com/p/mensaje-con-editor.html" >
            <i>send</i>
            <span>Escribir</span>
            <div class="max"></div>
        
          </a>
          <a class="row round" href="/p/mis-trabajos.html">
            <i>terminal</i>
            <span>Trabajos</span>
          </a>
          <a class="row round" href="https://chat.webgae.com/" target="_blank">
            <i>add_to_drive</i>
            <span>Soporte Chat</span>
          </a>
          <div class="small-divider"></div>
          <div class="row">Otros</div>
          <a class="row round" href="https://www.expertowordpress.org/" target="_blank">
            <i>build_circle</i>
            <span>Experto Wordpress</span>
          </a>
          <a class="row round" href="/p/precios.html">
            <i>euro_symbol</i>
            <span>Precios</span>
          </a>
          <a class="row round" href="/p/servicios_17.html">
            <i>design_services</i>
            <span>Servicios</span>
          </a>
       <a class="circle transparent" href="https://www.artepintu.com/" target="_blank">   <i>palette</i> </a>
    
            <a class="circle transparent" href="https://imagen.webgae.com/p/inicio.html" target="_blank">   <i>image</i> </a>
    
            <a class="circle transparent" href="https://wponepage.web.app/" target="_blank">   <i>folder_open</i> </a>
    
            <a class="circle transparent" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0mMDVGiqZjdegdKGg3zO_V_ITMN6jK7wlCVCiiVt--7FGBT43MwEsBvgxemwGcWPWvjMCvYmLC?gv=true" target="_blank">   <i>calendar_month</i> </a>
    
            <a class="circle transparent" href="https://www.webgae.com/p/recursos-web-full-stack.html" target="_blank">   <i>settings_applications</i> </a>
        </dialog>
      `;
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  
  