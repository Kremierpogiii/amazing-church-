// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});

// Funnel forms
document.querySelectorAll('.funnel-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const resource = form.dataset.resource || 'resource';
        const email = form.querySelector('input[type="email"]')?.value || '';
        const name = form.querySelector('input[placeholder="Your Name"]')?.value || 'Friend';
        alert(`Thank you ${name}! Check your email (${email}) for your ${resource}.`);
        form.reset();
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you within 24 hours.');
        contactForm.reset();
    });
}

// Modal functions
const modal = document.getElementById('registrationModal');
const eventNameSpan = document.getElementById('eventName');
const closeModalBtn = document.getElementById('closeModal');

function openRegistration(eventName) {
    if (eventNameSpan) eventNameSpan.textContent = eventName;
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
document.querySelectorAll('.register-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const eventName = btn.getAttribute('data-event');
        openRegistration(eventName);
    });
});
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Registration form
const regForm = document.getElementById('registrationForm');
if (regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for registering! We will send you a confirmation email.');
        closeModal();
        regForm.reset();
    });
}

// Scroll to top
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 500);
});
if (scrollTop) {
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Button loading simulation
document.querySelectorAll('form button[type="submit"]').forEach(btn => {
    btn.addEventListener('click', function() {
        if (!this.closest('form').checkValidity()) return;
        const original = this.textContent;
        this.textContent = 'Processing...';
        this.disabled = true;
        setTimeout(() => {
            this.textContent = original;
            this.disabled = false;
        }, 2000);
    });
});

// Log CTA clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => console.log('CTA Clicked:', btn.textContent.trim()));
});