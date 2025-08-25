// Reveal on scroll
  const revealElements = document.querySelectorAll(
    ".hero-title, .hero-description, .hero-button, .feature-item, .process-step, .car-card, .stat-item, .newsletter-container, .footer-content"
  );

  const revealOnScroll = () => {
    let windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      let elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        el.classList.add("show");
      }
    });
  };

  // Initialize classes
  revealElements.forEach(el => {
    if (el.classList.contains("car-card") || el.classList.contains("stat-item")) {
      el.classList.add("fade-up");
    } else if (el.classList.contains("feature-item")) {
      el.classList.add("fade-left");
    } else if (el.classList.contains("process-step")) {
      el.classList.add("fade-right");
    } else {
      el.classList.add("fade-up");
    }
  });

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
