//Matrix fuctionality
const canvas = document.getElementById('canvas');
let matrixCanvas = matrix(canvas, {
  chars: ['0', '1'],
  color: '#22b455',
  background: 'rgba(255,255,255,0.05)',
  font_size: 20
});

//Internationalization fuctionality
let languageConfig;
//Load language json data
fetch("./assets/langs/lang.json").then(response => {
   return response.json();
}).then(jsondata => {
  languageConfig = jsondata;
});

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
