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
});

// Optional: highlight the active nav link
function highlightActiveLink() {
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll(".navbar a").forEach((link) => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });
}
