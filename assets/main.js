(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (el.closest('.hero') ? i * 90 : 0) + 'ms';
    io.observe(el);
  });
  const nav = document.querySelector('.nav');
  const tl = document.querySelector('.timeline');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      tl.style.setProperty('--p', p.toFixed(3));
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
