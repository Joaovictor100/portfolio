// menu.js — abre e fecha o menu lateral no celular

const toggle = document.querySelector('.hamburguer');
const menu = document.querySelector('#menu');
const backdrop = document.querySelector('.menu-backdrop');

function setMenu(open) {
    menu.classList.toggle('active', open);
    toggle.classList.toggle('active', open);
    backdrop.classList.toggle('active', open);
    document.body.classList.toggle('no-scroll', open);

    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

// botão hambúrguer
toggle.addEventListener('click', () => {
    setMenu(!menu.classList.contains('active'));
});

// clicar fora do menu (no fundo escuro) fecha
backdrop.addEventListener('click', () => setMenu(false));

// clicar em um link do menu fecha
menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

// tecla Esc fecha
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
});

// se a tela aumentar (virar desktop), garante o menu fechado
window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
});
