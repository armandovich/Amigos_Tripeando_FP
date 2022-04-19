var isMenuOpen = false;
var nav = document.querySelector('nav');

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);
document.querySelector('.close-icon').addEventListener('click', toggleMenu);

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    nav.className = isMenuOpen ? "active" : "";
}

const storageLoged = localStorage.getItem('isUserLoged');
const isUserLoged = storageLoged !== null && storageLoged;
const userData =  JSON.parse(localStorage.getItem("user"));

document.querySelector("body").className = isUserLoged ? "login-view" : "unloged-view";