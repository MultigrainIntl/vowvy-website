/* ============================================
   VOWVY — main.js
   ============================================ */

// ---- NAV: add scrolled class ----
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


// ---- REVEAL on scroll ----
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach(el => observer.observe(el));
})();


// ---- PHONE: cycle active tag ----
(function () {
  const tags = document.querySelectorAll('#phoneTags .tag');
  if (!tags.length) return;
  let current = 0;

  setInterval(() => {
    tags[current].classList.remove('active');
    current = (current + 1) % tags.length;
    tags[current].classList.add('active');
  }, 1500);
})();



// ---- SMOOTH scroll for anchor links ----
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
