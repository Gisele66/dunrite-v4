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
    if (document.documentElement.classList.contains('nav-open')) return;
    header.classList.toggle('is-stuck', window.scrollY > 24);
    syncHeaderHeight();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  var menuLinks = nav ? nav.querySelector('.nav__links') : null;
  var mobileNavMq = window.matchMedia('(max-width: 980px)');

  var blockBackgroundScroll = function (e) {
    if (!nav || !nav.classList.contains('is-open')) return;
    if (menuLinks && (menuLinks === e.target || menuLinks.contains(e.target))) return;
    e.preventDefault();
  };

  var setMenuOpen = function (open) {
    if (!nav || !toggle || !menuLinks) return;

    if (open) {
      syncHeaderHeight();
      nav.classList.add('is-open');
      menuLinks.classList.add('is-panel-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.documentElement.classList.add('nav-open');
      if (header) header.classList.add('is-menu-frozen');
      document.addEventListener('touchmove', blockBackgroundScroll, { passive: false });
      document.addEventListener('wheel', blockBackgroundScroll, { passive: false });
    } else {
      nav.classList.remove('is-open');
      menuLinks.classList.remove('is-panel-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.documentElement.classList.remove('nav-open');
      if (header) header.classList.remove('is-menu-frozen');
      document.removeEventListener('touchmove', blockBackgroundScroll);
      document.removeEventListener('wheel', blockBackgroundScroll);
    }
  };

  syncHeaderHeight();
  window.addEventListener('resize', syncHeaderHeight);
  window.addEventListener('load', syncHeaderHeight);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncHeaderHeight);
  }

  if (toggle && nav && menuLinks) {
    toggle.addEventListener('click', function () {
      setMenuOpen(!nav.classList.contains('is-open'));
    });

    menuLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenuOpen(false); });
    });

    mobileNavMq.addEventListener('change', function () {
      if (!mobileNavMq.matches && nav.classList.contains('is-open')) {
        setMenuOpen(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenuOpen(false);
      }
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

/* ---- Client reviews (localStorage demo; wire to API later) ---- */
(function () {
  'use strict';

  var staticReviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      context: 'Residential move',
      comment: 'Dave and Michelle moved our whole household to Haida Gwaii without a single scratch. They handle the routes nobody else will \u2014 couldn\'t recommend them more.'
    },
    {
      name: 'Robert T.',
      rating: 5,
      context: 'Commercial window washing',
      comment: 'Our storefront windows have never looked better. Reliable, on schedule every month, and always professional. A true local gem.'
    },
    {
      name: 'Jenna K.',
      rating: 5,
      context: 'IKEA pickup & delivery',
      comment: 'Picked up a big IKEA order and delivered it right to our door in Prince George. Fair price, great communication, total peace of mind.'
    }
  ];

  var reviewModal = document.getElementById('review-modal');
  var reviewForm = document.getElementById('review-form');
  var reviewThanks = document.getElementById('review-thanks');
  var reviewRating = document.getElementById('review-rating');
  var reviewName = document.getElementById('review-name');
  var reviewTitle = document.getElementById('review-title');
  var reviewComment = document.getElementById('review-comment');
  var reviewCharCount = document.getElementById('review-char-count');
  var starButtons = document.querySelectorAll('.review-star-btn');
  var reviewsAllGrid = document.getElementById('reviews-all-grid');
  var reviewStorageKey = 'dunrite-reviews';
  var reviewMaxLength = 200;
  var lastReviewTrigger = null;

  if (!reviewModal && !reviewsAllGrid) return;

  function starsText(rating) {
    var count = Math.max(1, Math.min(5, Number(rating) || 5));
    var stars = '';
    for (var i = 0; i < count; i += 1) stars += '\u2605';
    return stars;
  }

  function avatarInitial(name) {
    return (name.trim().charAt(0) || '?').toUpperCase();
  }

  function reviewContext(review) {
    if (review.context && review.context.trim()) return review.context.trim();
    if (review.title && review.title.trim()) return review.title.trim();
    return 'Client review';
  }

  function formatQuote(comment) {
    var trimmed = comment.trim();
    return '"' + trimmed + '"';
  }

  function getSubmittedReviews() {
    try {
      var saved = localStorage.getItem(reviewStorageKey);
      if (saved) return JSON.parse(saved);
    } catch (error) {
      localStorage.removeItem(reviewStorageKey);
    }
    return [];
  }

  function getAllDisplayReviews() {
    var reviews = staticReviews.slice();
    getSubmittedReviews().forEach(function (review) {
      reviews.push(review);
    });
    return reviews;
  }

  function updateReviewCharCount() {
    if (!reviewComment || !reviewCharCount) return;
    var length = reviewComment.value.length;
    reviewCharCount.textContent = length + ' / ' + reviewMaxLength;
    reviewCharCount.classList.toggle('is-limit', length >= reviewMaxLength);
  }

  function createReviewCard(review) {
    var card = document.createElement('div');
    card.className = 'review';

    var stars = document.createElement('div');
    stars.className = 'stars';
    stars.textContent = starsText(review.rating);
    stars.setAttribute('aria-label', review.rating + ' out of 5 stars');

    var body = document.createElement('p');
    body.textContent = formatQuote(review.comment);

    var who = document.createElement('div');
    who.className = 'who';

    var avatar = document.createElement('span');
    avatar.className = 'avatar';
    avatar.textContent = avatarInitial(review.name);

    var meta = document.createElement('div');
    var nameEl = document.createElement('b');
    nameEl.textContent = review.name;
    var contextEl = document.createElement('span');
    contextEl.textContent = reviewContext(review);
    meta.appendChild(nameEl);
    meta.appendChild(contextEl);

    who.appendChild(avatar);
    who.appendChild(meta);
    card.appendChild(stars);
    card.appendChild(body);
    card.appendChild(who);
    return card;
  }

  function createReviewCtaCard() {
    var card = document.createElement('div');
    card.className = 'review review--cta';

    var title = document.createElement('p');
    title.className = 'review-cta__title';
    title.textContent = 'Share Your Experience';

    var body = document.createElement('p');
    body.textContent = 'Had a great experience with Dunrite? We would love to hear from you.';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn-review-open';
    button.textContent = 'Leave a Review';

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(button);
    return card;
  }

  function renderAllReviewsGrid() {
    if (!reviewsAllGrid) return;
    reviewsAllGrid.innerHTML = '';
    getAllDisplayReviews().forEach(function (review) {
      reviewsAllGrid.appendChild(createReviewCard(review));
    });
    reviewsAllGrid.appendChild(createReviewCtaCard());
  }

  function saveSubmittedReview(review) {
    var reviews = getSubmittedReviews();
    reviews.push(review);
    localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
    renderAllReviewsGrid();
  }

  function setReviewStars(rating) {
    if (!reviewRating) return;
    reviewRating.value = rating ? String(rating) : '';
    starButtons.forEach(function (btn) {
      var star = Number(btn.getAttribute('data-star'));
      btn.classList.toggle('is-active', star <= rating);
      btn.setAttribute('aria-pressed', star <= rating ? 'true' : 'false');
    });
  }

  function openReviewModal(trigger) {
    if (!reviewModal) return;
    lastReviewTrigger = trigger || null;
    reviewModal.hidden = false;
    document.body.style.overflow = 'hidden';
    var firstFocus = reviewModal.querySelector('#review-name');
    if (firstFocus) firstFocus.focus();
  }

  function closeReviewModal() {
    if (!reviewModal) return;
    reviewModal.hidden = true;
    document.body.style.overflow = '';
    if (reviewForm) reviewForm.hidden = false;
    if (reviewThanks) reviewThanks.hidden = true;
    if (reviewForm) reviewForm.reset();
    setReviewStars(0);
    updateReviewCharCount();
    if (lastReviewTrigger) lastReviewTrigger.focus();
  }

  document.addEventListener('click', function (event) {
    var openBtn = event.target.closest('.btn-review-open');
    if (openBtn) {
      event.preventDefault();
      openReviewModal(openBtn);
    }
  });

  if (reviewModal) {
    reviewModal.querySelectorAll('[data-review-close]').forEach(function (el) {
      el.addEventListener('click', closeReviewModal);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !reviewModal.hidden) {
        closeReviewModal();
      }
    });
  }

  starButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setReviewStars(Number(btn.getAttribute('data-star')));
    });
  });

  if (reviewComment) {
    reviewComment.addEventListener('input', updateReviewCharCount);
    updateReviewCharCount();
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!reviewRating || !reviewRating.value) {
        var firstStar = reviewModal && reviewModal.querySelector('.review-star-btn');
        if (firstStar) firstStar.focus();
        return;
      }
      var review = {
        name: reviewName ? reviewName.value.trim() : '',
        title: reviewTitle ? reviewTitle.value.trim() : '',
        rating: Number(reviewRating.value),
        comment: reviewComment ? reviewComment.value.trim() : ''
      };
      saveSubmittedReview(review);
      if (reviewForm) reviewForm.hidden = true;
      if (reviewThanks) reviewThanks.hidden = false;
    });
  }

  renderAllReviewsGrid();
})();
