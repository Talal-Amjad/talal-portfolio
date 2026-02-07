/* ============================================
   MUHAMMAD TALAL AMJAD - PORTFOLIO SCRIPTS
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================

// Initialize EmailJS
(function() {
    emailjs.init("R9LKzAvu6mKnTUUjx"); // Your Public Key
})();

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Vanilla Tilt for Project Cards
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// ============================================
// MOBILE MENU
// ============================================

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Open mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Close mobile menu
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu when clicking on a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================

document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ACTIVE NAVIGATION ON SCROLL
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-400');
        }
    });
});

// ============================================
// EMAILJS FORM SUBMISSION
// ============================================

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoading = document.getElementById('btn-loading');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading state
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');
    submitBtn.disabled = true;
    formMessage.classList.add('hidden');

    // Send email using EmailJS
    emailjs.sendForm(
        'service_j2qfmpk',      // Your Service ID (updated)
        'template_b6paqkj',     // Your Template ID
        this
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        
        // Show success message
        formMessage.innerHTML = `
            <div class="alert alert-success">
                <i class="fas fa-check-circle mr-2"></i>
                Thank you! Your message has been sent successfully. I'll get back to you soon!
            </div>
        `;
        formMessage.classList.remove('hidden');

        // Reset form
        contactForm.reset();

        // Reset button state
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);

    }, function(error) {
        console.log('FAILED...', error);
        
        // Show error message
        formMessage.innerHTML = `
            <div class="alert alert-error">
                <i class="fas fa-exclamation-circle mr-2"></i>
                Oops! Something went wrong. Please try again or email me directly.
            </div>
        `;
        formMessage.classList.remove('hidden');

        // Reset button state
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        submitBtn.disabled = false;

        // Hide error message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
});

// ============================================
// PARALLAX EFFECT FOR BLOBS
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    
    if (blob1) blob1.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.05}px)`;
    if (blob2) blob2.style.transform = `translate(${scrolled * -0.1}px, ${scrolled * -0.05}px)`;
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Welcome to Muhammad Talal Amjad\'s Portfolio!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #8b5cf6; font-size: 14px;');