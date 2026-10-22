/*
  main.js
  ───────
  Reads CONTENT from content.js and renders the page.
  Also handles: scroll-spy nav, hero animation, modal.

  You should not need to edit this file for content changes.
  Edit content.js instead.
*/

document.addEventListener('DOMContentLoaded', function () {

  /* ── Render hero ────────────────────────────────────── */
  const c = CONTENT;

  document.getElementById('hero-name').textContent = c.hero.name;
  document.getElementById('hero-identity').innerHTML =
    c.hero.identity.map((item, i) =>
      i < c.hero.identity.length - 1
        ? item + '<span class="dot">&middot;</span>'
        : item
    ).join('');

  document.getElementById('hero-line').innerHTML = c.hero.tagline;

  document.getElementById('hero-keywords').innerHTML =
    c.hero.keywords.map((kw, i) =>
      i < c.hero.keywords.length - 1
        ? kw + '<span class="sep">&middot;</span>'
        : kw
    ).join('');

  /* ── Render about ───────────────────────────────────── */
  document.getElementById('about-what').textContent    = c.about.what;
  document.getElementById('about-journey').textContent = c.about.journey;
  document.getElementById('about-offwork').textContent = c.about.offwork;

  /* ── Render case studies ────────────────────────────── */
  const caseList = document.getElementById('case-list');
  c.work.cases.forEach(function (cs) {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    // Store modal data
    card.dataset.title   = cs.title;
    card.dataset.context = cs.role;
    card.dataset.outcome = cs.outcome;
    card.dataset.details = cs.details.join('|');
    card.dataset.tags    = cs.tags.join(' · ');
    card.dataset.image   = cs.image || '';

    const imgSlot = cs.image
      ? `<div class="case-image"><img src="${cs.image}" alt="${cs.title}"></div>`
      : `<div class="case-image">image or diagram</div>`;

    const tagsHtml = cs.tags.map((t, i) =>
      i < cs.tags.length - 1
        ? t + '<span class="sep">&middot;</span>'
        : t
    ).join('');

    card.innerHTML = imgSlot + `
      <div class="case-body">
        <div class="case-title">${cs.title}</div>
        <div class="case-outcome">${cs.outcome}</div>
        <div class="case-tags">${tagsHtml}</div>
      </div>`;

    caseList.appendChild(card);
  });

  /* ── Render project ─────────────────────────────────── */
  document.getElementById('project-label').textContent = c.project.label;
  document.getElementById('project-title').textContent = c.project.title;
  document.getElementById('project-desc').textContent  = c.project.desc;

  /* ── Render footer ──────────────────────────────────── */
  document.getElementById('footer-email').href        = 'mailto:' + c.contact.email;
  document.getElementById('footer-linkedin').href     = c.contact.linkedin;
  document.getElementById('footer-note').textContent  =
    c.contact.location + ' · ' + c.contact.status;

  /* ── Scroll-spy nav ─────────────────────────────────── */
  const navLinks = Array.from(document.querySelectorAll('.side-nav a'));
  const sections = navLinks.map(function (a) {
    return document.getElementById(a.dataset.target);
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(link.dataset.target)
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  function updateActiveSection() {
    var current = sections[0];
    var scrollY = window.scrollY + 140;
    sections.forEach(function (sec) {
      if (sec && sec.offsetTop <= scrollY) current = sec;
    });
    navLinks.forEach(function (l) { l.classList.remove('current'); });
    var match = navLinks.find(function (l) { return l.dataset.target === current.id; });
    if (match) match.classList.add('current');
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  /* ── Hero dot animation ─────────────────────────────── */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var sketchPath = document.getElementById('sketch-path');
  var pathLength = 520;

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function onScroll() {
    if (prefersReduced) {
      if (sketchPath) sketchPath.style.strokeDashoffset = 0;
      return;
    }
    var scrollY = window.scrollY;
    var sketchProgress = clamp(scrollY / 220, 0, 1);
    if (sketchPath) {
      sketchPath.style.strokeDashoffset = pathLength * (1 - sketchProgress);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  window.matchMedia('(prefers-reduced-motion: reduce)')
    .addEventListener('change', function (e) {
      prefersReduced = e.matches;
      onScroll();
    });

  /* ── Modal ──────────────────────────────────────────── */
  var overlay    = document.getElementById('modal-overlay');
  var modalClose = document.getElementById('modal-close');

  function openModal(card) {
    document.getElementById('modal-title').textContent   = card.dataset.title   || '';
    // context line removed
    document.getElementById('modal-outcome').textContent = card.dataset.outcome || '';

    var list = document.getElementById('modal-details');
    list.innerHTML = '';
    (card.dataset.details || '').split('|').forEach(function (d) {
      var li = document.createElement('li');
      li.textContent = d.trim();
      list.appendChild(li);
    });

    document.getElementById('modal-tags').textContent = card.dataset.tags || '';

    // Modal image
    var modalImg = document.getElementById('modal-image');
    if (card.dataset.image) {
      modalImg.innerHTML = '<img src="' + card.dataset.image + '" alt="' + (card.dataset.title || '') + '">';
    } else {
      modalImg.textContent = 'image or diagram';
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Wire up cards — use event delegation since cards are dynamically rendered
  document.getElementById('case-list').addEventListener('click', function (e) {
    var card = e.target.closest('.case-card');
    if (card) openModal(card);
  });

  document.getElementById('case-list').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var card = e.target.closest('.case-card');
      if (card) { e.preventDefault(); openModal(card); }
    }
  });

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

});
