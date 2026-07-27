
/* ==========================================
   GOOGLE FORMS - HIRING MANAGER FORM
========================================== */

const hiringForm = document.getElementById("hiringForm");

if (hiringForm) {
    hiringForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("entry.2037502407", this.elements["name"].value);
        formData.append("entry.1547085643", this.elements["email"].value);
        formData.append("entry.2126895476", this.elements["company"].value);
        formData.append("entry.204790715", this.elements["message"].value);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSfdJ0yOXhcoMcx4DisQ4fVMdryAeZGG3GEo39Q_DDhSx2tkqw/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            window.location.href = "thankyou.html";
        }).catch(() => {
            alert("Something went wrong. Please try again.");
        });
    });
}


/* ==========================================
   GOOGLE FORMS - CANDIDATE FORM
========================================== */

const candidateForm = document.getElementById("candidateForm");

if (candidateForm) {
    candidateForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("entry.660814098", this.elements["full_name"].value);
        formData.append("entry.319366953", this.elements["email"].value);
        formData.append("entry.61602569", this.elements["phone"].value);
        formData.append("entry.711142715", this.elements["current_role"].value);
        formData.append("entry.1682184485", this.elements["experience"].value);
        formData.append("entry.912276020", this.elements["notice_period"].value);
        formData.append("entry.2098756195", this.elements["current_location"].value);
        formData.append("entry.1669114259", this.elements["preferred_location"].value);
        formData.append("entry.2089466044", this.elements["linkedin"].value);
        formData.append("entry.250568676", this.elements["resume_link"].value);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLScGsPAPQxkzCfan9U4sPF6zLr6WK9V1ldbR5ndbqVbL607QSQ/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            window.location.href = "thankyou.html";
        }).catch(() => {
            alert("Something went wrong. Please try again.");
        });
    });
}