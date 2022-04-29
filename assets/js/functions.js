//Matrix fuctionality
const canvas = document.getElementById('canvas');
let matrixCanvas = matrix(canvas, {
  chars: ['0', '1'],
  color: '#22b455',
  background: 'rgba(255,255,255,0.05)',
  font_size: 20
});

//Internationalization fuctionality
const languageConfig = {
  title: {
    en: 'Gabriel Chavez Riera',
    es: 'Gabriel Chavez Riera'
  },
  subtitle: {
    en: 'Senior web developer',
    es: 'Desarrollador web senior'
  },
  aboutMe: {
    en: 'About me',
    es: 'Acerca de mí'
  },
  aboutMeInfo: {
    en: 'Creative senior web developer, trying to make my way through the Front-end world. I have worked with several partners in the development of great products in different environments. I am always eager to learn everything from everywhere and from everyone. <br><br>Currently searching for opportunities in the field of Front-End development.',
    es: 'Desarrollador web senior muy creativo, servicial y responsable. He trabajado en un sinnúmero de proyectos en diversos ambientes. Siempre estoy dispuesto a aprender de todo y de todos. <br><br>Actualmente estoy buscando oportunidades en el sector del Desarrollo Front-end.'
  },
  projects: {
    en: 'Projects',
    es: 'Proyectos'
  },
  project1: {
    en: 'Website to buy BTC for La Bitcoinera',
    es: 'Sitio web para comprar BTC para La Bitcoinera'
  },
  project2: {
    en: 'E-learning site for Ultrasónica',
    es: 'Sitio de e-learning para Ultrasónica'
  },
  project3: {
    en: 'Website for Guayaquil es mi destino',
    es: 'Sitio web para Guayaquil es mi destino'
  },
  project4: {
    en: 'Website for Bórdalo',
    es: 'Sitio web para Bórdalo'
  },
  skills: {
    en: 'Skills',
    es: 'Habilidades'
  },
  contact: {
    en: 'Contact',
    es: 'Contacto'
  },
  contactInfo: {
    en: 'Have an interesting project? I would love to hear about it!',
    es: '¿Tienes un proyecto interesante? ¡Me encantaría escucharte!'
  },
  qKey: {
    en: 'Try pressing the Q key and then scroll through the site. Did you feel the power of mastering The Matrix? (Press the R key to restart)',
    es: 'Presiona la tecla Q y luego desplázate por el sitio web. ¿Sentiste el poder de dominar La Matrix? (Presiona la tecla R para reiniciar)'
  },
  langLabel: {
    en: 'Language:',
    es: 'Idioma:'
  },
  langEn: {
    en: 'English',
    es: 'Inglés'
  },
  langEs: {
    en: 'Spanish',
    es: 'Español'
  },
  themeLabel: {
    en: 'Theme:',
    es: 'Apariencia:'
  },
  themeLight: {
    en: 'Light',
    es: 'Claro'
  },
  themeDark: {
    en: 'Dark',
    es: 'Oscuro'
  },
  madeBy: {
    en: 'Made by Gabo, May 2022',
    es: 'Hecho por Gabo, Mayo de 2022'
  }
};

const replaceText = (element, lang) => {
  const key = element.getAttribute('data-i18n');
  element.innerHTML = languageConfig[key][lang] || element.innerHTML;
};

const changeLanguage = (event) => {
  option = event.target.value;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => replaceText(el, option));
};

const languageFilter = document.getElementById("language");
languageFilter.addEventListener('change', changeLanguage);

//Theming fuctionality
let backgroundColor = 'rgba(255,255,255,0.05)';
const updateCanvas = () => {
  //Stop matrix canvas
  window.dispatchEvent(new KeyboardEvent('keydown', {
    'key': 'q'
  }));
  //Change matrix canvas
  matrixCanvas.then(() =>{
    matrixCanvas = matrix(canvas, {
      chars: ['0', '1'],
      color: '#22b455',
      background: backgroundColor,
      font_size: 20
    });
  });
};

const changeTheme = (event) => {
  option = event.target.value;
  backgroundColor = option === 'light' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0, 0.05)';
  if (!document.body.classList.contains(option)) {
    document.body.classList = [];
    document.body.classList.add(option);
    updateCanvas();
  }
};

const themeFilter = document.getElementById("theme");
themeFilter.addEventListener('change', changeTheme);

//Menu fuctionality
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener('click', function() {
  this.classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
});

const menuLinks = document.querySelectorAll('header nav ul li a');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', function() {
    document.getElementById("menu").classList.toggle("change");
  });
});

//R key functionality to restart the canvas
window.addEventListener('keydown', function(event) {
  if (event.key.toLowerCase() === 'r') {
    updateCanvas();
  }
});
