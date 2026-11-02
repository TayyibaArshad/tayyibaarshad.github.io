(() => {
  const els = document.querySelectorAll('.reveal');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); }
  else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    els.forEach(e => io.observe(e));
  }
  const h = document.querySelector('.header');
  const on = () => h.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', on, { passive: true }); on();
})();
