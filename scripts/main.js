// Welcome to JavaScript -- Mason

// Header
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;

            // Highlight current page in nav
            const currentPage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll(".navbar a");

            navLinks.forEach((link) => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        });
});

const myHeading = document.querySelector("h1");
myHeading.innerHTML = '<a href="index.html">Mason Jennings</a>';
