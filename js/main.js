/**
 * Toka Yasser — Junior UI/UX Designer Portfolio
 * Core JavaScript Logic: Theme Switching, Navigation, Modal Case Studies, Clipboard, and Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCaseStudyModal();
  initCopyEmail();
  initContactForm();
  initBackToTop();
  handleUrlHash();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('ty_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default dark
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('ty_theme', newTheme);
    });
  }
}

function setTheme(theme) {
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
      themeToggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  } else {
    root.removeAttribute('data-theme');
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
      themeToggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    }
  }
}

/* ==========================================================================
   2. NAVIGATION & SCROLL SPY
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on click of any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active Link Intersection Observer
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(section => observer.observe(section));
  }
}

/* ==========================================================================
   3. CASE STUDY MODAL CONTROLLER
   ========================================================================== */
let currentProjectId = null;
const projectOrder = ['foodora', 'careo', 'quiet_palette'];

function initCaseStudyModal() {
  const modalOverlay = document.getElementById('case-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Open modal buttons
  document.querySelectorAll('[data-case-target]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = button.getAttribute('data-case-target');
      openCaseStudy(caseId);
    });
  });

  // Close handlers
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeCaseStudy);
    
    // Close on overlay click outside container
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeCaseStudy();
      }
    });

    // Close on ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeCaseStudy();
      }
    });
  }
}

function openCaseStudy(caseId) {
  const data = caseStudiesData[caseId];
  if (!data) return;

  currentProjectId = caseId;
  const modalOverlay = document.getElementById('case-modal-overlay');
  const modalContainer = document.getElementById('case-modal-content');
  if (!modalOverlay || !modalContainer) return;

  // Build metadata tools chips
  const toolsChipsHtml = data.metadata.tools.map(tool => `<span class="tool-chip">${tool}</span>`).join('');

  // Build sections HTML
  const sectionsHtml = data.sections.map(sec => `
    <article class="case-section" id="case-${sec.id}">
      <h3 class="case-section-title">${sec.title}</h3>
      ${sec.summary ? `<p class="case-section-summary">${sec.summary}</p>` : ''}
      <div class="case-section-content">
        ${sec.content}
      </div>
    </article>
  `).join('');

  // Calculate Next & Previous Project
  const currentIndex = projectOrder.indexOf(caseId);
  const prevIndex = (currentIndex - 1 + projectOrder.length) % projectOrder.length;
  const nextIndex = (currentIndex + 1) % projectOrder.length;
  const prevProject = caseStudiesData[projectOrder[prevIndex]];
  const nextProject = caseStudiesData[projectOrder[nextIndex]];

  // Inject content into modal
  modalContainer.innerHTML = `
    <header class="modal-header">
      <span class="modal-badge">${data.badge}</span>
      <h2 class="modal-title">${data.title}</h2>
      <p class="modal-subtitle">${data.subtitle}</p>
      
      <div class="modal-meta-grid">
        <div class="meta-block">
          <span class="meta-label">My Role</span>
          <span class="meta-value">${data.metadata.role}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Project Scope</span>
          <span class="meta-value">${data.metadata.scope}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Year</span>
          <span class="meta-value">${data.metadata.year}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Design Tools</span>
          <div class="meta-tools-chips">${toolsChipsHtml}</div>
        </div>
        <div class="meta-block">
          <span class="meta-label">Behance Showcase</span>
          <a href="https://www.behance.net/tokayasser2003" target="_blank" rel="noopener noreferrer" style="color:var(--accent-primary); font-weight:700; font-size:0.875rem; text-decoration:underline;">
            @tokayasser2003 ↗
          </a>
        </div>
      </div>
    </header>

    <div class="modal-body">
      ${sectionsHtml}
    </div>

    <footer class="modal-footer">
      <div class="modal-footer-nav">
        <button class="btn btn-secondary btn-sm" id="prev-case-btn" data-target="${projectOrder[prevIndex]}">
          ← Previous: ${prevProject.title.split('—')[0].trim()}
        </button>
        <button class="btn btn-primary btn-sm" id="next-case-btn" data-target="${projectOrder[nextIndex]}">
          Next: ${nextProject.title.split('—')[0].trim()} →
        </button>
      </div>
      <a href="https://www.behance.net/tokayasser2003" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View on Behance">
        View Project on Behance ↗
      </a>
    </footer>
  `;

  // Attach Next/Previous navigation inside modal
  document.getElementById('prev-case-btn').addEventListener('click', (e) => {
    const target = e.currentTarget.getAttribute('data-target');
    openCaseStudy(target);
    modalOverlay.scrollTop = 0;
  });

  document.getElementById('next-case-btn').addEventListener('click', (e) => {
    const target = e.currentTarget.getAttribute('data-target');
    openCaseStudy(target);
    modalOverlay.scrollTop = 0;
  });

  // Display modal
  modalOverlay.classList.add('active');
  modalOverlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Update URL hash without jumping
  history.replaceState(null, null, `#project-${caseId}`);
}

function closeCaseStudy() {
  const modalOverlay = document.getElementById('case-modal-overlay');
  if (!modalOverlay) return;

  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  currentProjectId = null;

  // Clear hash
  if (window.location.hash.startsWith('#project-')) {
    history.replaceState(null, null, ' ');
  }
}

function handleUrlHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const projectId = hash.replace('#project-', '');
    if (caseStudiesData[projectId]) {
      setTimeout(() => openCaseStudy(projectId), 250);
    }
  }
}

/* ==========================================================================
   4. COPY EMAIL TO CLIPBOARD WITH TOAST
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'toka.yasser20155@gmail.com';
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(() => onCopySuccess(copyBtn))
        .catch(() => fallbackCopyText(email, copyBtn));
    } else {
      fallbackCopyText(email, copyBtn);
    }
  });
}

function fallbackCopyText(text, btn) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    onCopySuccess(btn);
  } catch (err) {
    showToast('Could not copy automatically. Email: ' + text);
  }
  document.body.removeChild(textArea);
}

function onCopySuccess(btn) {
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Copied!
  `;
  showToast('Email address copied to clipboard!');
  
  setTimeout(() => {
    btn.innerHTML = originalHtml;
  }, 2200);
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   5. CONTACT MESSAGE FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim() || 'UI/UX Opportunity / Inquiry';
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    // Compose direct mailto link
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:toka.yasser20155@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
    
    // Trigger user mail client
    window.location.href = mailtoLink;
    showToast('Opening your email client to send message...');
    contactForm.reset();
  });
}

/* ==========================================================================
   6. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
