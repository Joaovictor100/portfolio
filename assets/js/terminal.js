const terminalText = document.querySelector('#terminal-text');

const frases = [
    'Esse é o meu portifólio, onde você vera minhas habilidades, projetos e experiencias que tenho vivido ao longo da minha carreira profissional'
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

