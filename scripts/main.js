var isMenuOpen = false;
var nav = document.querySelector('nav');

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    nav.className = isMenuOpen ? "active" : "";
}