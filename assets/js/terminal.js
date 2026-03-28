const terminalText = document.querySelector('#terminal-text');

const frases = [
    'Possuo formação técnica em Desenvolvimento de Sistemas e tenho buscado constantemente aprimorar minhas habilidades. Aqui, você pode conferir meus projetos, competências e os objetivos que guiam minha carreira.'
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

