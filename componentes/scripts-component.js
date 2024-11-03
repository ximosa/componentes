// Función para obtener el modo actual del localStorage
const getStoredMode = () => {
  return localStorage.getItem('mode') || 'light';
};

// Función para aplicar el modo
const applyMode = (mode) => {
  ui('mode', mode);
  localStorage.setItem('mode', mode);
  
  // Actualizar el estado del checkbox
  const checkbox = document.querySelector('.switch input[type="checkbox"]');
  if (checkbox) {
    checkbox.checked = mode === 'dark';
  }
};

// Función que se llama al hacer click en el checkbox
const mode = () => {
  const newMode = getStoredMode() === 'dark' ? 'light' : 'dark';
  applyMode(newMode);
};

// Función para inicializar el modo al cargar la página
const initializeMode = () => {
  const storedMode = getStoredMode();
  applyMode(storedMode);
};

// Inicializar el modo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeMode);
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}
