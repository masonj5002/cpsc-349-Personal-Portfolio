// Welcome to JavaScript -- Mason

// Header
window.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
});

const myHeading = document.querySelector("h1");
myHeading.textContent = "Mason Jennings";
