// terminal.js — efeito de digitação no banner

const terminalText = document.querySelector('#terminal-text');

const frase = 'Possuo formação técnica em Desenvolvimento de Sistemas e tenho buscado constantemente aprimorar minhas habilidades. Aqui, você pode conferir meus projetos, competências e os objetivos que guiam minha carreira.';

const velocidade = 35;   // milissegundos por letra
const atraso = 600;      // espera antes de começar

// Leitores de tela leem o texto completo desde o início
terminalText.setAttribute('aria-label', frase);

const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduzirMovimento) {
    // sem animação: mostra o texto inteiro direto
    terminalText.textContent = frase;
    terminalText.classList.add('done');
} else {
    // Reserva a altura final da caixa para a página não "pular" enquanto digita
    terminalText.textContent = frase;
    terminalText.style.minHeight = terminalText.offsetHeight + 'px';
    terminalText.textContent = '';

    let i = 0;

    function digitar() {
        if (i < frase.length) {
            terminalText.textContent += frase[i];
            i++;
            setTimeout(digitar, velocidade);
        } else {
            terminalText.classList.add('done'); // some com o cursor "_"
        }
    }

    setTimeout(digitar, atraso);
}
