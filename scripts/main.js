// All the JavaScript for my website -- Mason

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Inject header
    fetch("header.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
            highlightActiveLink();
        });

    // Randomize h1 and h2
    const name = "Mason Jennings";
    const catchphrases = [
        "Creating stunning, yet simple solutions",
        "Engineering elegant code",
        "Designing with intention",
        "Building the web with purpose",
        "Clean code. Clear results.",
    ];

    const randomIndex = Math.floor(Math.random() * catchphrases.length);
    const titleContainer = document.createElement("div");

    titleContainer.innerHTML = `
        <h1><a href="index.html">${name}</a></h1>
        <h2>${catchphrases[randomIndex]}</h2>
    `;

    document.body.insertBefore(titleContainer, document.body.firstChild);

    // Handle contact form submission
    const form = document.getElementById("contact-form");
    const responseMsg = document.getElementById("form-response");

    if (form && responseMsg) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Disable all form fields
            Array.from(form.elements).forEach((el) => {
                el.disabled = true;
            });

            // Show thank you message
            responseMsg.style.display = "block";
            responseMsg.textContent = "Thank you, the message has been sent.";
        });
    }
});

function highlightActiveLink() {
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll(".navbar a").forEach((link) => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });
}
