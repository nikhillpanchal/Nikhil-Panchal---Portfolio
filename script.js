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

// ===============================
// Google Sheets Integration
// ===============================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbythGuVYvBWeeUr351jVymCSy-gIDUAtXlo4P0G2ontQsNmo3RmYKFDm4tyJTWiuycKjw/exec";

// -------------------------
// Hiring Manager Form
// -------------------------

const hiringForm = document.getElementById("hiringForm");

if (hiringForm) {

    hiringForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formData = new FormData(hiringForm);

        const data = {
            type: "hiring",
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            message: formData.get("message")
        };

        try {

            const params = new URLSearchParams();

Object.keys(data).forEach(key => {
    params.append(key, data[key]);
});

await fetch(SCRIPT_URL, {
    method: "POST",
    body: params
});

            alert("Thank you! Your message has been sent.");

            hiringForm.reset();

        } catch (error) {

            alert("Something went wrong. Please try again.");

        }

    });

}

// -------------------------
// Candidate Form
// -------------------------

const candidateForm = document.getElementById("candidateForm");

if (candidateForm) {

    candidateForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formData = new FormData(candidateForm);

        const data = {

            type: "candidate",

            full_name: formData.get("full_name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            current_role: formData.get("current_role"),
            experience: formData.get("experience"),
            notice_period: formData.get("notice_period"),
            current_location: formData.get("current_location"),
            preferred_location: formData.get("preferred_location"),
            linkedin: formData.get("linkedin"),
            resume_link: formData.get("resume_link")

        };

        try {

            const params = new URLSearchParams();

Object.keys(data).forEach(key => {
    params.append(key, data[key]);
});

await fetch(SCRIPT_URL, {
    method: "POST",
    body: params
});

            window.location.href = "thankyou.html";

        } catch (error) {

            alert("Something went wrong. Please try again.");

        }

    });

}
