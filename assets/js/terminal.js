const terminalText = document.querySelector('#terminal-text');

const frases = [
    'Sou Desenvolvedor de Sistemas',
    'Aprendizado constante',
    'Foco em linguagens de baixo nível'
];

frases.forEach((frase, index) => {
    const p = document.createElement('p');
    p.classList.add('terminal');
    terminalText.appendChild(p);

    let i = 0;
    function adicionarCaracter() {
        if (i < frase.length) {
            p.innerHTML += frase[i];
            i++;
            setTimeout(adicionarCaracter, 40);
        }
    }

    setTimeout(adicionarCaracter, 3000 * index);
});
