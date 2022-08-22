//Typewriter
let skipped = false;

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
  const option = event.target.value || event.target.getAttribute('value');

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => replaceText(el, option));
};

const languageFilter = document.getElementById("language");
languageFilter.addEventListener('change', changeLanguage);

const selectLanguage = (event) => {
  //CHANGE LANGUAGE
  const option = event.target.value || event.target.getAttribute('value');

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => replaceText(el, option));

  document.getElementById("language").value = option;

  //HIDE OPTIONS
  document.getElementById("options").style.display = 'none';

  //START TYPEWRITING THE TEXT
  let first = tply.animate(
    document.getElementById("source"),
    document.getElementById("destination")
  );
  let second = tply.animate(
    document.getElementById("source-1"),
    document.getElementById("destination-1")
  );
  setTimeout(
    function() {
      document.querySelector('#destination .cursor').style.display='none';
    }, 17000);
  
  setTimeout(
    function() {
      if (!skipped) {
        document.querySelector('#pills').style.opacity='1';
      }
    }, 15000);

  //START SKIP FUNCTIONALITY
  const skip = () => {
    first.cancel();
    second.cancel();
    document.querySelector('#pills').style.opacity='1';
    document.querySelector('#destination').style.display='none';
    document.querySelector('#destination-1').style.display='none';
    document.querySelector('#source-show').style.display='block';
    document.querySelector('#source-show-1').style.display='block';
    document.querySelector('#skip').style.display='none';
    document.getElementById("language").removeAttribute('disabled');
  };
  document.getElementById("skip").addEventListener('click', skip);
  document.getElementById("skip").style.display = 'block';

  setTimeout(
    function() {
      document.getElementById("skip").style.display = 'none';
      document.getElementById("language").removeAttribute('disabled');
    }, 51000);
};

document.getElementById("langBtnEn").addEventListener('click', selectLanguage);
document.getElementById("langBtnEs").addEventListener('click', selectLanguage);