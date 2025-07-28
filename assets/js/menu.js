// JavaScript

const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.main-menu');

var openMenu = false;

hamburguer.addEventListener("click", () => {
    if (!openMenu) {
        menu.classList.add('active');
        hamburguer.classList.add('active');
        openMenu = true;
    }else {
        menu.classList.remove('active');
        hamburguer.classList.remove('active');
        openMenu = false;
    }
})