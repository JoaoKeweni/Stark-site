document.addEventListener('DOMContentLoaded', () => {
  // Inicialização do Lucide Icons (CDN)
  lucide.createIcons();

  // Set the current year in footer
  document.getElementById('year-label').textContent = `© ${new Date().getFullYear()} Stark Suite. Todos os direitos reservados.`;

  // Header Scroll Effect (Sticky Header)
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        // Para rodar apenas uma vez
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Selecionando todos os elementos com as classes bases de animação
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left');
  animatedElements.forEach(el => observer.observe(el));
});
