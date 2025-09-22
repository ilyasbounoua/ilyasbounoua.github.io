/* assets/js/lang-toggle.js
   Lightweight client-side language toggle.
   - Adds data-lang on <html>.
   - Persists selection in localStorage.
   - Replaces nodes with data-i18n="KEY".
   - Use data-i18n-attr="title|alt|placeholder" for attributes.
*/

(function () {
  const STORAGE_KEY = 'site-lang';
  const defaultLang = (navigator.language && navigator.language.startsWith('en')) ? 'en' : 'fr';

  // Seed dictionary
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

  function getLangFromPath() {
    try {
      const p = window.location.pathname || '/';
      return p.startsWith('/en/') || p === '/en' ? 'en' : null;
    } catch (e) {
      return null;
    }
  }

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
    const path = window.location.pathname || '/';
    const isEn = path.startsWith('/en/') || path === '/en';
    let target;
    let nextLang;

    if (isEn) {
      // if on /en/... -> strip only the first leading /en
      target = path.replace(/^\/en(?=\/|$)/, '') || '/';
      nextLang = 'fr';
    } else {
      // on non-en path -> prefix with /en (avoid double //)
      if (path === '/' || path === '') {
        target = '/en/';
      } else {
        target = '/en' + path;
      }
      nextLang = 'en';
    }

    // persist preference before navigating
    try { localStorage.setItem(STORAGE_KEY, nextLang); } catch (e) { /* ignore */ }

    // navigate (preserve query + hash if present)
    const q = window.location.search || '';
    const h = window.location.hash || '';
    window.location.href = target + q + h;
  }

  // init once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    // determine language preference: URL > localStorage > browser
    const pathLang = getLangFromPath();
    const saved = (function() {
      try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    })();
    const lang = pathLang || saved || defaultLang;

    // if path says en but saved differs, sync saved
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    applyLang(lang);

    const btn = document.getElementById('lang-toggle-button');
    if (btn) {
      btn.addEventListener('click', function (e) { e.preventDefault(); toggleLang(); });
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleLang(); }
      });
    }
  });
})();
