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

  // Animated stat counters — count up when section scrolls into view
  var statCounters = document.querySelectorAll('.stat-counter');
  if (statCounters.length > 0 && 'IntersectionObserver' in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var counters = entry.target.querySelectorAll('.stat-counter');
        counters.forEach(function (el) {
          var target = parseInt(el.getAttribute('data-count-to'), 10);
          var suffix = el.getAttribute('data-suffix') || '';
          var useCommas = el.getAttribute('data-use-commas') === 'true';
          var duration = 2000;
          var startTime = null;

          function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
          }

          function formatNumber(n) {
            if (useCommas) return n.toLocaleString('en-US');
            return n.toString();
          }

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var elapsed = timestamp - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var easedProgress = easeOutCubic(progress);
            var current = Math.round(easedProgress * target);

            if (progress < 1) {
              el.textContent = formatNumber(current);
              requestAnimationFrame(step);
            } else {
              el.textContent = formatNumber(target) + suffix;
            }
          }

          requestAnimationFrame(step);
        });
        statsObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    // Observe the parent grid so all counters animate together
    var statsGrid = statCounters[0].closest('.grid');
    if (statsGrid) {
      statsObserver.observe(statsGrid);
    }
  } else {
    // Fallback: show final values immediately
    statCounters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count-to'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var useCommas = el.getAttribute('data-use-commas') === 'true';
      el.textContent = (useCommas ? target.toLocaleString('en-US') : target) + suffix;
    });
  }

  // Google Reviews Carousel
  (function () {
    var track = document.getElementById('carousel-track');
    var prevBtn = document.getElementById('carousel-prev');
    var nextBtn = document.getElementById('carousel-next');
    var dotsContainer = document.getElementById('carousel-dots');
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    var slides = track.querySelectorAll('.carousel-slide');
    var total = slides.length;
    var current = 0;
    var autoInterval = null;
    var carousel = document.getElementById('reviews-carousel');

    // Build dots
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', function () {
        goTo(parseInt(this.getAttribute('data-index'), 10));
      });
      dotsContainer.appendChild(dot);
    }

    // Set viewport height to tallest slide so content isn't clipped
    var viewport = track.parentElement;
    function setViewportHeight() {
      var maxHeight = 0;
      slides.forEach(function (slide) {
        slide.style.position = 'relative';
        slide.style.visibility = 'visible';
        var h = slide.scrollHeight;
        if (h > maxHeight) maxHeight = h;
      });
      if (maxHeight > 0) viewport.style.height = maxHeight + 'px';
    }
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    function goTo(index) {
      current = ((index % total) + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      var dots = dotsContainer.querySelectorAll('.carousel-dot');
      for (var j = 0; j < dots.length; j++) {
        dots[j].classList.toggle('active', j === current);
      }
    }

    prevBtn.addEventListener('click', function () { goTo(current - 1); resetAuto(); });
    nextBtn.addEventListener('click', function () { goTo(current + 1); resetAuto(); });

    function startAuto() {
      autoInterval = setInterval(function () { goTo(current + 1); }, 6000);
    }

    function resetAuto() {
      clearInterval(autoInterval);
      startAuto();
    }

    startAuto();

    // Pause on hover
    carousel.addEventListener('mouseenter', function () { clearInterval(autoInterval); });
    carousel.addEventListener('mouseleave', function () { startAuto(); });

    // Swipe support for touch devices
    var touchStartX = 0;
    var touchEndX = 0;
    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(autoInterval);
    }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) { goTo(current + 1); } else { goTo(current - 1); }
      }
      startAuto();
    }, { passive: true });
  })();

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

  // Photo gallery lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    var galleryThumbs = document.querySelectorAll('.gallery-thumb');
    var galleryImages = [];
    var currentIdx = 0;

    galleryThumbs.forEach(function (thumb) {
      var img = thumb.querySelector('img');
      if (img) galleryImages.push({ src: img.src, alt: img.alt });

      thumb.addEventListener('click', function () {
        currentIdx = parseInt(thumb.getAttribute('data-gallery-idx')) || 0;
        showLightbox(currentIdx);
      });
    });

    function showLightbox(idx) {
      if (!galleryImages[idx]) return;
      lightboxImg.src = galleryImages[idx].src;
      lightboxImg.alt = galleryImages[idx].alt;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);

    lightbox.querySelector('.lightbox-prev').addEventListener('click', function () {
      currentIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
      showLightbox(currentIdx);
    });

    lightbox.querySelector('.lightbox-next').addEventListener('click', function () {
      currentIdx = (currentIdx + 1) % galleryImages.length;
      showLightbox(currentIdx);
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') { currentIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length; showLightbox(currentIdx); }
      if (e.key === 'ArrowRight') { currentIdx = (currentIdx + 1) % galleryImages.length; showLightbox(currentIdx); }
    });
  }
});
