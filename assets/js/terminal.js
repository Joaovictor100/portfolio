const terminalText = document.querySelector('#terminal-text');

const frases = [
    'Bem vindo ao meu portifólio',
    'Sou um apaixonado por tecnologia',
    'Aqui você encontra meus projetos e habilidades',
    'Encontre as aplicações dos meus projetos em meu GitHub'
];

frases.forEach((frase, index) => {
    const p = document.createElement('p');
    p.classList.add('terminal');
    terminalText.appendChild(p);

    let i = 0;
    function adicionarCaracter() {
        if (i < frase.length) {
            p.innerHTML += frase[i];
            console.log(frase[i]);
            i++;
            setTimeout(adicionarCaracter, 40);
        }
    }

    setTimeout(adicionarCaracter, 3000 * index); // Atraso linearmente escalonado
});
