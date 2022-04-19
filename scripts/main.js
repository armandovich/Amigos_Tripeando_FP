var isMenuOpen = false;
var nav = document.querySelector('nav');

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);
document.querySelector('.close-icon').addEventListener('click', toggleMenu);

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    nav.className = isMenuOpen ? "active" : "";
}

const storageLoged = localStorage.getItem('isUserLoged');
const isUserLoged = storageLoged !== null && storageLoged == "true";
const userData =  JSON.parse(localStorage.getItem("user"));
const logoutD = document.getElementById("desktop-logout");
const logoutM = document.getElementById("mobile-logout");

document.querySelector("body").className = isUserLoged ? "login-view" : "unloged-view";

logoutD.addEventListener("click", logout);
logoutM.addEventListener("click", logout);

function logout() { 
    localStorage.setItem('isUserLoged', false);

    if(window.location.href.indexOf('/pages') >= 0) {
        window.open(window.location.href.slice(0,window.location.href.indexOf('/pages')) + "/index.html", "_self");
    } else {
        window.open("index.html", "_self");
    }
}