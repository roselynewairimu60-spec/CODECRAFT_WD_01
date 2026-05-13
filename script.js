
  // Navigation Menu Interactivity
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  // SCROLL EVENT - changes menu color/style when scrolled
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.classList.remove('active');
      
      // Smooth scroll to section
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // HOVER effect is handled by CSS - the task requires hover color/style change
  // which is already implemented in CSS (.nav-link:hover)
  console.log('Navigation Menu Ready - Scroll to see color change, Hover for style change!');