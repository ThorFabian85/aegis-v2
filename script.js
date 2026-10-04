/* Aegis V2. Reading navigation, with no animation or external dependencies. */
(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('a[href="#top"]').forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    document.querySelector('#top').focus({preventScroll: true});
    window.scrollTo({top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth'});
  }));
  const links = [...document.querySelectorAll('.contents nav a')];
  const sections = [...document.querySelectorAll('.text-section')];
  let pending = false;
  function markSection() {
    pending = false;
    const threshold = Math.max(150, window.innerHeight * .27);
    let active = sections[0];
    sections.forEach(section => { if (section.getBoundingClientRect().top <= threshold) active = section; });
    links.forEach(link => {
      const selected = link.hash === '#' + active.id;
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(markSection); } }, {passive: true});
  window.addEventListener('resize', markSection);
  markSection();
})();
