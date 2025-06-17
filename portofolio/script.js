// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle burger menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  