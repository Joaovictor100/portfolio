// scroll.js — efeitos ligados à rolagem da página

// 1) Linha embaixo do cabeçalho quando a página já rolou
const header = document.querySelector('.site-header');

function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 10);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// 2) Animação de entrada: mostra cada bloco quando ele aparece na tela
const revealItems = document.querySelectorAll('.reveal, .tl-item');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    // navegadores muito antigos: mostra tudo de uma vez
    revealItems.forEach((item) => item.classList.add('visible'));
}

// 3) Destaca no menu a seção que está na tela
const menuLinks = document.querySelectorAll('.main-menu ul a[href^="#"]');
const watched = [document.querySelector('#inicio')];

menuLinks.forEach((link) => {
    watched.push(document.querySelector(link.getAttribute('href')));
});

if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            menuLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    watched.filter(Boolean).forEach((section) => spy.observe(section));
}

// 4) Ano atual no rodapé
document.querySelector('#ano').textContent = new Date().getFullYear();
