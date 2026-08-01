// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});



// ===============================
// Animated Counters
// ===============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);
        const suffix = counter.dataset.suffix !== undefined ? counter.dataset.suffix : "+";

        const duration = 1500; // 1.5 seconds
        const startTime = performance.now();

        function update(currentTime) {

            const progress = Math.min((currentTime - startTime) / duration, 1);

            const value = Math.floor(progress * target);

            counter.innerText = value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.innerText = target.toLocaleString() + suffix;
            }
        }

        requestAnimationFrame(update);

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.4
});

counters.forEach(counter => counterObserver.observe(counter));


// ================= ACTIVE NAVIGATION =================

const pageSections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    pageSections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/// ===============================
// Back To Top Button
// ===============================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===============================
// Navbar Scroll Effect
// ===============================

const navbarElement = document.querySelector(".navbar");

if (navbarElement) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbarElement.classList.add("scrolled");
        } else {
            navbarElement.classList.remove("scrolled");
        }
    });
}


// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// ===============================
// Scroll Progress Bar
// ===============================

const scrollProgress = document.getElementById("scrollProgress");

if (scrollProgress) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        scrollProgress.style.width = progress + "%";

    });

}

// ===============================
// Page Loader
// ===============================

const loader = document.getElementById("loader");

if (loader) {
    window.addEventListener("load", () => {
        loader.style.display = "none";
    });
}

// ===============================
// Tools & Technologies Filter
// ===============================

const filterButtons = document.querySelectorAll(".tool-filter-btn");
const toolItems = document.querySelectorAll("#toolTagsContainer .tool-pill");

if (filterButtons.length && toolItems.length) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            toolItems.forEach(item => {

                const matches = filter === "all" || item.dataset.category === filter;

                item.classList.toggle("hidden", !matches);

            });

        });

    });

}

// ===============================
// Custom Contact Form -> Google Forms
// ===============================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const hiddenIframe = document.getElementById("hidden_iframe");

if (contactForm && hiddenIframe) {

    let submitting = false;

    contactForm.addEventListener("submit", () => {

        submitting = true;

        formStatus.textContent = "Sending...";
        formStatus.className = "form-status sending";

    });

    hiddenIframe.addEventListener("load", () => {

        if (!submitting) return;

        submitting = false;

        window.location.href = "thankyou.html";

    });

}

// ===============================
// Hero Typing Animation
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const roles = [
        "Technical Recruiter",
        "Talent Acquisition Specialist",
        "Enterprise Technology Hiring",
        "Cloud • AI • Cybersecurity Hiring"
    ];

    const typingText = document.getElementById("typing-text");
    typingText.textContent = roles[0];

    if (!typingText) return;

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingText.textContent = currentRole.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 2200);

                return;
            }

        } else {

            typingText.textContent = currentRole.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 60);

    }

    setTimeout(() => {

    deleting = true;
    charIndex = roles[0].length;

    typeEffect();

}, 1800);

});
