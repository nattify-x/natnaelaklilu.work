/* ============================================================
   SITE BEHAVIOR
   Reads from SITE_DATA (content.js) and renders + wires up the
   page. You shouldn't need to edit this file to update content —
   see content.js and INSTRUCTIONS.md instead.
   ============================================================ */

function svgIcon(name, extraClass) {
  return '<svg class="icon' + (extraClass ? ' ' + extraClass : '') + '"><use href="#icon-' + name + '"></use></svg>';
}

function renderNav() {
  document.getElementById('nav-logo-name').textContent = SITE_DATA.nav.name;
  document.getElementById('nav-logo-handle').textContent = SITE_DATA.nav.handle;

  const links = document.getElementById('nav-links');
  const mobile = document.getElementById('nav-mobile-menu');
  links.innerHTML = '';
  mobile.innerHTML = '';
  SITE_DATA.nav.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href; a.textContent = link.label; a.className = 'nav-link';
    links.appendChild(a);

    const m = document.createElement('a');
    m.href = link.href; m.textContent = link.label; m.className = 'nav-mobile-link';
    mobile.appendChild(m);
  });
}

function renderHero() {
  const h = SITE_DATA.hero;
  document.getElementById('hero-status-text').textContent = h.status;
  document.getElementById('hero-eyebrow').textContent = h.eyebrow;
  document.getElementById('hero-heading').textContent = h.heading;

  const portrait = document.getElementById('hero-portrait');
  portrait.alt = h.portraitAlt || '';
  portrait.addEventListener('error', function onErr() {
    portrait.removeEventListener('error', onErr);
    portrait.src = h.portraitFallback;
  });
  portrait.src = h.portrait;

  const actions = document.getElementById('hero-actions');
  actions.innerHTML = '';
  if (h.primaryCta) {
    const a = document.createElement('a');
    a.href = h.primaryCta.href; a.textContent = h.primaryCta.label; a.className = 'btn btn-primary';
    actions.appendChild(a);
  }
  if (h.secondaryCta) {
    const a = document.createElement('a');
    a.href = h.secondaryCta.href; a.className = 'btn btn-secondary';
    a.innerHTML = h.secondaryCta.label + ' ' + svgIcon('arrow-right');
    actions.appendChild(a);
  }
}

function renderAbout() {
  const a = SITE_DATA.about;
  document.getElementById('about-kicker').textContent = a.kicker;
  document.getElementById('about-heading').textContent = a.heading;

  const bio = document.getElementById('about-bio');
  bio.innerHTML = a.paragraphs.map(p => '<p>' + p + '</p>').join('') +
    (a.quote ? '<p class="about-quote">"' + a.quote + '"</p>' : '');

  const values = document.getElementById('about-values');
  values.innerHTML = a.values.map(v =>
    '<div class="value-card">' +
      svgIcon(v.icon, 'value-icon') +
      '<div class="value-title">' + v.title + '</div>' +
      '<div class="value-sub">' + v.sub + '</div>' +
    '</div>'
  ).join('');
}

function renderSkills() {
  const s = SITE_DATA.skills;
  document.getElementById('skills-kicker').textContent = s.kicker;
  document.getElementById('skills-heading').textContent = s.heading;

  const grid = document.getElementById('skills-grid');
  grid.innerHTML = s.categories.map(cat =>
    '<div class="skill-card">' +
      '<div class="skill-card-header">' + svgIcon(cat.icon) + '<span class="skill-card-title">' + cat.name + '</span></div>' +
      '<div class="skill-tags">' + cat.items.map(item => '<span class="skill-tag">' + item + '</span>').join('') + '</div>' +
    '</div>'
  ).join('');
}

function renderProjects() {
  const p = SITE_DATA.projects;
  document.getElementById('projects-kicker').textContent = p.kicker;
  document.getElementById('projects-heading').textContent = p.heading;
  document.getElementById('projects-sub').textContent = p.subheading;

  const filters = document.getElementById('project-filters');
  filters.innerHTML = p.filters.map((f, i) =>
    '<button class="filter-btn' + (i === 0 ? ' is-active' : '') + '" data-filter="' + f + '">' + f + '</button>'
  ).join('');

  const grid = document.getElementById('projects-grid');
  grid.innerHTML = p.items.map(item =>
    '<div class="project-card" data-category="' + item.category + '">' +
      '<div class="project-icon">' + svgIcon(item.icon) + '</div>' +
      '<h3 class="project-title">' + item.title + '</h3>' +
      '<p class="project-desc">' + item.description + '</p>' +
      '<div class="project-tags">' + item.tags.map(t => '<span class="project-tag">' + t + '</span>').join('') + '</div>' +
      (item.link
        ? '<a href="' + item.link + '" class="project-link" target="_blank" rel="noreferrer">' + svgIcon('github') + ' View Source Code</a>'
        : '<span class="project-link project-link--muted">Write-up coming soon</span>') +
    '</div>'
  ).join('');
}

function initProjectFilters() {
  const filters = document.getElementById('project-filters');
  if (!filters) return;
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const category = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('is-hidden', category !== 'ALL' && card.dataset.category !== category);
    });
  });
}

function renderBlog() {
  const posts = SITE_DATA.blogPosts;
  const section = document.getElementById('blog');
  if (!posts || !posts.length) { section.hidden = true; return; }
  section.hidden = false;
  document.getElementById('blog-grid').innerHTML = posts.map(post =>
    '<a class="blog-card" href="' + (post.link || '#') + '"' + (post.link ? ' target="_blank" rel="noreferrer"' : '') + '>' +
      '<div class="blog-date">' + post.date + '</div>' +
      '<h3 class="blog-title">' + post.title + '</h3>' +
      '<p class="blog-excerpt">' + post.excerpt + '</p>' +
    '</a>'
  ).join('');
}

function renderCommunity() {
  const c = SITE_DATA.community;
  document.getElementById('community-heading').textContent = c.heading;
  document.getElementById('community-text').textContent = c.text;
  const cta = document.getElementById('community-cta');
  cta.textContent = c.ctaLabel;
  cta.href = c.ctaHref;
  cta.target = '_blank'; cta.rel = 'noreferrer';
}

function renderFaith() {
  const f = SITE_DATA.faith;
  document.getElementById('faith-kicker').textContent = f.kicker;
  document.getElementById('faith-verse').textContent = '"' + f.verse + '"';
  document.getElementById('faith-reference').textContent = '— ' + f.reference;
  document.getElementById('faith-statement').textContent = f.statement;
}

function renderContact() {
  const c = SITE_DATA.contact;
  document.getElementById('contact-heading').textContent = c.heading;
  document.getElementById('contact-text').textContent = c.text;
  document.getElementById('contact-email-text').textContent = c.email;

  const links = document.getElementById('contact-links');
  links.innerHTML =
    '<a class="contact-icon-link" href="mailto:' + c.email + '" aria-label="Email me">' + svgIcon('mail') + '</a>' +
    '<a class="contact-icon-link" href="' + c.telegram + '" target="_blank" rel="noreferrer" aria-label="Telegram">' + svgIcon('send') + '</a>' +
    '<a class="contact-icon-link" href="' + c.github + '" target="_blank" rel="noreferrer" aria-label="GitHub">' + svgIcon('github') + '</a>';
}

function initCopyEmail() {
  const btn = document.getElementById('copy-email-btn');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(SITE_DATA.contact.email);
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = btn.dataset.label; }, 1500);
    } catch (err) { /* clipboard unavailable — the mailto link above still works */ }
  });
}

function renderFooter() {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = SITE_DATA.footer.name;
}

function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });
}

function initMobileMenu() {
  const toggle = document.getElementById('nav-mobile-toggle');
  const menu = document.getElementById('nav-mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.innerHTML = svgIcon(isOpen ? 'close' : 'menu');
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = svgIcon('menu');
    }
  });
}

function initTypewriter() {
  const el = document.getElementById('hero-phrase');
  const phrases = SITE_DATA.hero.phrases;
  if (!el || !phrases || !phrases.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) { deleting = true; setTimeout(tick, 1800); return; }
      setTimeout(tick, 32);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 16);
    }
  }
  tick();
}

function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => observer.observe(t));
}

function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const data = SITE_DATA.terminal;
  if (!input || !output || !data) return;

  document.getElementById('terminal-label').textContent = data.label + ' — terminal';
  document.getElementById('terminal-prompt').textContent = data.label + ':~$';

  function printLine(text, isCommand) {
    const line = document.createElement('div');
    line.className = 'terminal-line' + (isCommand ? ' terminal-line--command' : '');
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  printLine(data.welcome);

  const history = [];
  let historyIndex = -1;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = input.value.trim();
      if (!raw) return;
      printLine(data.label + ':~$ ' + raw, true);
      history.push(raw);
      historyIndex = history.length;
      const cmd = raw.toLowerCase();
      if (cmd === 'clear') { output.innerHTML = ''; }
      else if (data.commands[cmd]) { printLine(data.commands[cmd]); }
      else { printLine("command not found: " + raw + " — type 'help' to see what's available"); }
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) { historyIndex--; input.value = history[historyIndex]; }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) { historyIndex++; input.value = history[historyIndex]; }
      else { historyIndex = history.length; input.value = ''; }
      e.preventDefault();
    }
  });
}

function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width, height, particles = [];
  const count = 42, connectDist = 140;

  function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }

  class Particle {
    constructor() {
      this.x = Math.random() * width; this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.22; this.vy = (Math.random() - 0.5) * 0.22;
      this.size = Math.random() * 1.4 + 0.5;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0) this.x = width; if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height; if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.fillStyle = 'rgba(237,162,70,0.45)';
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
  }

  function init() { resize(); particles = Array.from({ length: count }, () => new Particle()); }

  function animate() {
    requestAnimationFrame(animate);
    if (document.hidden) return;
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    ctx.strokeStyle = 'rgba(237,162,70,0.07)'; ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectDist) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
        }
      }
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  init(); animate();
}

document.addEventListener('DOMContentLoaded', () => {
  const tasks = [
    renderNav, renderHero, renderAbout, renderSkills, renderProjects, renderBlog,
    renderCommunity, renderFaith, renderContact, renderFooter,
    initNavScroll, initMobileMenu, initTypewriter, initProjectFilters,
    initScrollReveal, initTerminal, initBackgroundCanvas, initCopyEmail,
  ];
  tasks.forEach(fn => {
    try { fn(); } catch (err) { console.error(fn.name + ' failed:', err); }
  });
});
