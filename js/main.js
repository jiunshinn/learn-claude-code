// ===== SCROLL PROGRESS =====
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollProgress.style.width = (scrollTop / scrollHeight) * 100 + '%';
    });
}

// ===== NAV HIDE/SHOW =====
let lastScroll = 0;
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 300) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

// ===== ACTIVE NAV LINK =====
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPage || (currentPage === 'index.html' && href === '../index.html')) {
            link.classList.add('active');
        }
    });
}
updateActiveNav();

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
if (themeToggle) {
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
}

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
}

// ===== OS TABS =====
document.querySelectorAll('.os-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.os-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.os-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('os-' + tab.dataset.os).classList.add('active');
    });
});

// ===== COMMAND TABS =====
document.querySelectorAll('.cmd-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.cmd-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.cmd-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('panel-' + tab.dataset.panel).classList.add('active');
    });
});

// ===== FAQ ACCORDION =====
window.toggleFaq = function(btn) {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
};

// ===== COPY TO CLIPBOARD =====
window.copyCode = function(btn) {
    const block = btn.closest('.code-block, .usecase-prompt');
    let text = '';
    if (block.classList.contains('code-block')) {
        const code = block.querySelector('code');
        text = code ? code.textContent : '';
    } else {
        const clone = block.cloneNode(true);
        clone.querySelector('.usecase-prompt-label')?.remove();
        clone.querySelector('.copy-btn')?.remove();
        text = clone.textContent.trim();
    }
    navigator.clipboard.writeText(text.trim()).then(() => {
        btn.textContent = '완료!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = '복사';
            btn.classList.remove('copied');
        }, 2000);
    });
};

window.copyTemplate = function(btn) {
    const template = document.getElementById('claudemd-template');
    if (template) {
        navigator.clipboard.writeText(template.textContent).then(() => {
            btn.textContent = '완료!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = '전체 복사';
                btn.classList.remove('copied');
            }, 2000);
        });
    }
};

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
