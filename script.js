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

        const duration = 1500; // 1.5 seconds
        const startTime = performance.now();

        function update(currentTime) {

            const progress = Math.min((currentTime - startTime) / duration, 1);

            const value = Math.floor(progress * target);

            counter.innerText = value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.innerText = target.toLocaleString() + "+";
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

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbarElement.classList.add("scrolled");
    } else {
        navbarElement.classList.remove("scrolled");
    }

});


// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ===============================
// Scroll Progress Bar
// ===============================

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    scrollProgress.style.width = progress + "%";

});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("hidden");

});

/* ==========================
   Dynamic CTA
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const visitor = params.get("visitor");

    const resumeDownload = document.getElementById("resume-download");

if (visitor === "candidate" && resumeDownload) {
    resumeDownload.style.display = "none";
}

    const hiringCTA = document.getElementById("hiring-contact");
    const candidateCTA = document.getElementById("candidate-contact");

    // Safety check
    if (!hiringCTA || !candidateCTA) return;

    if (visitor === "candidate") {
        hiringCTA.style.display = "none";
        candidateCTA.style.display = "block";
    } else {
        // Default = Hiring Manager
        hiringCTA.style.display = "block";
        candidateCTA.style.display = "none";
    }

});
