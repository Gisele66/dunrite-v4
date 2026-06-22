/* Dunrite — site interactions */
(function () {
  'use strict';

  /* ---- Sticky header ---- */
  var header = document.querySelector('.site-header');
  var syncHeaderHeight = function () {
    if (!header) return;
    document.documentElement.style.setProperty('--site-header-height', header.offsetHeight + 'px');
  };
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 24);
    syncHeaderHeight();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  var scrollLockY = 0;

  var lockScroll = function () {
    scrollLockY = window.scrollY;
    document.body.classList.add('nav-open');
    document.body.style.top = '-' + scrollLockY + 'px';
  };

  var unlockScroll = function () {
    document.body.classList.remove('nav-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollLockY);
  };

  syncHeaderHeight();
  window.addEventListener('resize', syncHeaderHeight);
  window.addEventListener('load', syncHeaderHeight);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncHeaderHeight);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      syncHeaderHeight();
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        lockScroll();
      } else {
        unlockScroll();
      }
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        unlockScroll();
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Smart photo fallback ----
     Any <img data-fallback> that fails to load is swapped for a branded
     placeholder, so the site never shows a broken image while photos
     are still being gathered. */
  var placeholderSVG =
    '<div class="ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="3"/>' +
    '<circle cx="8.5" cy="8.5" r="1.8"/><path d="M21 15l-5-5L5 21"/></svg></div>';

  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    img.addEventListener('error', function () {
      var box = document.createElement('div');
      box.innerHTML = placeholderSVG;
      box.style.cssText = 'width:100%;height:100%';
      if (img.parentNode) img.parentNode.replaceChild(box.firstChild, img);
    });
  });

  /* ---- Hero image height matches copy column (badge → stats) ---- */
  var heroCopy = document.querySelector('.hero__copy');
  var heroFrame = document.querySelector('.hero__art .frame');
  var syncHeroFrame = function () {
    if (!heroCopy || !heroFrame) return;
    if (window.matchMedia('(max-width: 980px)').matches) {
      heroFrame.style.height = '';
      document.documentElement.style.removeProperty('--hero-copy-height');
      return;
    }
    var h = heroCopy.offsetHeight;
    document.documentElement.style.setProperty('--hero-copy-height', h + 'px');
    heroFrame.style.height = h + 'px';
  };
  var syncLayoutHeights = function () {
    syncHeroFrame();

    /* Service area image: top at eyebrow, bottom at North Central BC row */
    var areaStart = document.querySelector('#service-area .eyebrow');
    var areaEnd = document.querySelector('#service-area [data-area-height-end]');
    var areaMedia = document.querySelector('#service-area .split__media');
    if (areaStart && areaEnd && areaMedia) {
      if (window.matchMedia('(max-width: 720px)').matches) {
        areaMedia.style.height = '';
        document.documentElement.style.removeProperty('--service-area-media-height');
      } else {
        var h = areaEnd.offsetTop + areaEnd.offsetHeight - areaStart.offsetTop;
        document.documentElement.style.setProperty('--service-area-media-height', h + 'px');
        areaMedia.style.height = h + 'px';
      }
    }

    /* Our story image: top at eyebrow, bottom at last paragraph */
    var storyStart = document.querySelector('#our-story .eyebrow');
    var storyEnd = document.querySelector('#our-story [data-story-height-end]');
    var storyMedia = document.querySelector('#our-story .split__media');
    if (storyStart && storyEnd && storyMedia) {
      if (window.matchMedia('(max-width: 720px)').matches) {
        storyMedia.style.height = '';
        document.documentElement.style.removeProperty('--our-story-media-height');
      } else {
        var storyRect = storyStart.getBoundingClientRect();
        var endRect = storyEnd.getBoundingClientRect();
        var storyH = endRect.bottom - storyRect.top;
        document.documentElement.style.setProperty('--our-story-media-height', storyH + 'px');
        storyMedia.style.height = storyH + 'px';
      }
    }
  };
  syncLayoutHeights();
  window.addEventListener('resize', syncLayoutHeights);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncLayoutHeights);
  }

  /* ---- Contact page — match form card height to info cards ---- */
  var contactPair = document.querySelector('.contact-split__pair');
  var syncContactFormHeight = function () {
    if (!contactPair) return;
    var cards = contactPair.querySelector('.contact-cards');
    var form = contactPair.querySelector('.contact-split__form');
    if (!cards || !form) return;
    if (window.matchMedia('(max-width: 720px)').matches) {
      form.style.height = '';
      return;
    }
    form.style.height = cards.offsetHeight + 'px';
  };
  syncContactFormHeight();
  window.addEventListener('resize', syncContactFormHeight);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncContactFormHeight);
  }

  /* ---- Footer bottom alignment ---- */
  var alignFooterBottom = function () {
    var ref = document.querySelector('.footer__service-area-line');
    var anchor = document.querySelector('.footer__social-anchor');
    if (!anchor) return;
    if (!ref || window.matchMedia('(max-width: 720px)').matches) {
      anchor.style.width = '';
      return;
    }
    anchor.style.width = ref.offsetWidth + 'px';
  };
  alignFooterBottom();
  window.addEventListener('resize', alignFooterBottom);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(alignFooterBottom);
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Forms (front-end UX only; wire action to API later) ---- */
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('[data-form-note]');
      if (note) {
        note.hidden = false;
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });
})();
