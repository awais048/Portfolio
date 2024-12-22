// Smooth Scroll with Navbar Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight; // Adjust for navbar height

        if (target) {
            const targetPosition = target.offsetTop - navbarHeight; // Account for navbar
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    });
});

// Highlight Active Section in Navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0; // Ensure navbar height is calculated
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 70; // Adjust for navbar height and buffer
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});


const texts = ["Software Engineer", "Full-Stack Developer", "React Enthusiast"];
let i = 0;

function updateText() {
    const highlight = document.getElementById("animated-highlight");
    
    // Fade out the text
    highlight.classList.add("fade-out");
    setTimeout(() => {
        // Change the text
        highlight.textContent = texts[i];
        i = (i + 1) % texts.length;

        // Fade in the text
        highlight.classList.remove("fade-out");
        highlight.classList.add("fade-in");

        // Remove the fade-in class after animation
        setTimeout(() => {
            highlight.classList.remove("fade-in");
        }, 1000);
    }, 1000); // Match fade-out duration
}

// Call the function every 3 seconds
setInterval(updateText, 3000);


// Scroll Reveal Animation for Sections
const sections = document.querySelectorAll('section');
const revealClass = 'reveal';

function revealOnScroll() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Account for navbar
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - navbarHeight; // Adjust for navbar
        const triggerPoint = window.innerHeight * 0.8; // Trigger animation before section is fully in view

        if (sectionTop < triggerPoint) {
            section.classList.add(revealClass);
        } else {
            section.classList.remove(revealClass);
        }
    });
}

// Trigger Reveal on Scroll and Page Load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Add Page Load Animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    navLinks.classList.toggle('active'); // Show/hide the menu
    hamburger.classList.toggle('active'); // Animate hamburger icon
    body.classList.toggle('no-scroll'); // Prevent background scrolling
}

// Hide menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        const body = document.body;

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
});

