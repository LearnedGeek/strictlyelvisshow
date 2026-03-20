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
