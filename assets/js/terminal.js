const terminalText = document.querySelector('#terminal-text');

const frases = [
    'Possuo formação técnica em Desenvolvimento de Sistemas e, durante minha trajetória, tenho aprimorado habilidades e acumulado experiência no campo. Neste espaço, você poderá acessar meus projetos, habilidades, um resumo da minha trajetória e os objetivos que orientam minha carreira profissional'
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
        }else {
            p.classList.add('remove-underline');
        }
    }
    setTimeout(adicionarCaracter, 3000 * index);
});

