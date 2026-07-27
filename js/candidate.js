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

    if (!hiringCTA || !candidateCTA) return;

    if (visitor === "candidate") {
        hiringCTA.style.display = "none";
        candidateCTA.style.display = "block";
    } else {
        hiringCTA.style.display = "block";
        candidateCTA.style.display = "none";
    }

});