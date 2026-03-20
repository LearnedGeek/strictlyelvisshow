// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Obfuscate email links to prevent scraping
  document.querySelectorAll('.email-link').forEach(function(el) {
    var user = el.getAttribute('data-user');
    var domain = el.getAttribute('data-domain');
    var email = user + '@' + domain;
    el.href = 'mailto:' + email;
    el.textContent = email;
  });

  // Scroll reveal — cards rise into view as you scroll
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything if IntersectionObserver not supported
    revealElements.forEach(function (el) { el.classList.add('revealed'); });
  }

  // Click-to-play video cards
  document.querySelectorAll('.video-card').forEach(function (card) {
    var placeholder = card.querySelector('.video-placeholder');
    if (!placeholder) return;

    placeholder.addEventListener('click', function () {
      var videoId = card.getAttribute('data-video-id');
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
      iframe.setAttribute('class', 'w-full aspect-video rounded-2xl');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      placeholder.replaceWith(iframe);
    });
  });
});
