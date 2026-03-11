/* ===========================
   SUSHANT NARVEKAR — PORTFOLIO
   script.js
   =========================== */

// ---- TABS ----
function openTab(e, id) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  e.target.classList.add('active');
}

// ---- SCROLL REVEAL ----
// Safety fallback: if page is already scrolled or observer fails, show all
function showAll() {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// Trigger reveal on load for elements already in view
window.addEventListener('load', function () {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Fallback: show everything after 1 second no matter what
    setTimeout(showAll, 1000);
  } else {
    // Browser doesn't support IntersectionObserver — show everything
    showAll();
  }
});

// ---- ACTIVE NAV LINK ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
