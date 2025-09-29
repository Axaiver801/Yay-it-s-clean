document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = 'en';

  function setLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute(lang === 'en' ? 'data-en' : 'data-es');
    });
    document.querySelectorAll('option[data-en]').forEach(opt => {
      opt.textContent = opt.getAttribute(lang === 'en' ? 'data-en' : 'data-es');
    });
    langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
    currentLang = lang;
  }

  langToggle.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'es' : 'en');
  });

  setLang('en');
});
