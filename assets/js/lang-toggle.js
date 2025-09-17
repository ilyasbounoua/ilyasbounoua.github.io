/* assets/js/lang-toggle.js
   Lightweight client-side language toggle.
   - Adds data-lang on <html> (mirrors your theme toggle approach).
   - Persists selection in localStorage.
   - Replaces nodes with data-i18n="KEY".
   - Use data-i18n-attr="title|alt|placeholder" for attributes.
*/

(function () {
  const STORAGE_KEY = 'site-lang';
  const defaultLang = (navigator.language && navigator.language.startsWith('en')) ? 'en' : 'fr';

  // Seed dictionary — extend with the keys you use
  const i18n = {
    fr: {
      langLabel: 'FR',
      title: "Carnet d’un ingénieur en devenir – Étudiant Centrale Nantes",
      subtitle: "Étudiant ingénieur à Centrale Nantes, passionné par l’info et la data.",
      search_placeholder: "Rechercher…",
      footer: "© 2025 Bounoua, Powered by Jekyll & AcademicPages."
    },
    en: {
      langLabel: 'EN',
      title: "Notebook of an engineer in training – Centrale Nantes Student",
      subtitle: "Engineering student at Centrale Nantes, passionate about computing and data.",
      search_placeholder: "Search…",
      footer: "© 2025 Bounoua, Powered by Jekyll & AcademicPages."
    }
  };

  function applyLang(lang) {
    const translations = i18n[lang] || i18n.fr;

    // mirror the theme toggle: set dataset on <html>
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = (lang === 'en') ? 'en' : 'fr';

    // translate elements tagged with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const text = translations[key];
      if (text === undefined) return;

      const attrHint = el.getAttribute('data-i18n-attr');
      if (attrHint) { // explicit attribute translation (title, alt, placeholder...)
        el.setAttribute(attrHint, text);
        return;
      }

      const tag = el.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    });

    // update the UI label + aria
    const label = document.getElementById('lang-label');
    if (label) label.textContent = translations.langLabel || lang.toUpperCase();

    const btn = document.getElementById('lang-toggle-button');
    if (btn) {
      btn.setAttribute('aria-pressed', (lang === 'en').toString());
      btn.title = (lang === 'en') ? 'EN / FR' : 'FR / EN';
    }
  }

  function toggleLang() {
    const cur = localStorage.getItem(STORAGE_KEY) || defaultLang;
    const next = (cur === 'fr') ? 'en' : 'fr';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  }

  // init once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(STORAGE_KEY) || defaultLang;
    applyLang(saved);

    const btn = document.getElementById('lang-toggle-button');
    if (btn) {
      btn.addEventListener('click', toggleLang);
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleLang(); }
      });
    }
  });
})();
