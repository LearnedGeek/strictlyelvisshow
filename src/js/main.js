// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Contact form handler (Netlify Forms or Formspree integration)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: Connect to Netlify Forms or Formspree
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
