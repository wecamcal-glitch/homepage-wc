/* =====================
   NAVBAR SCROLL
   ===================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* =====================
   MOBILE NAV TOGGLE
   ===================== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* =====================
   SERVICE TABS
   ===================== */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById('tab-' + tab);
    if (target) target.classList.add('active');
  });
});

/* =====================
   PARTNER TABS
   ===================== */
document.querySelectorAll('.ptab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const ptab = btn.dataset.ptab;

    document.querySelectorAll('.ptab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.ptab-content').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById('ptab-' + ptab);
    if (target) target.classList.add('active');
  });
});

/* =====================
   SCROLL FADE-IN
   ===================== */
const fadeEls = document.querySelectorAll(
  '.direction-card, .timeline-item, .member-card, .dept-card, .service-card, .partner-logo-item, .contact-item'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (i % 6) * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

/* =====================
   ACTIVE NAV HIGHLIGHT
   ===================== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--accent)';
    }
  });
});
