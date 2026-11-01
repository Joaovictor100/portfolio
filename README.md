# Portfólio · João Victor (JVSTS)

Site pessoal feito com HTML, CSS e JavaScript puros, sem frameworks.

## Seções

- Início (texto digitado estilo terminal)
- Sobre mim
- Habilidades (barras de nível e áreas de estudo)
- Projetos
- Trajetória (linha do tempo com formação)
- Contato

## Estrutura

```
index.html
assets/
├── css/
│   ├── main.css       variáveis, reset, botões e início
│   ├── menu.css       cabeçalho e menu (desktop e celular)
│   ├── sections.css   sobre, habilidades, projetos e contato
│   └── timeline.css   linha do tempo
├── js/
│   ├── menu.js        abre/fecha o menu no celular
│   ├── scroll.js      animações de entrada e destaque do menu
│   └── terminal.js    efeito de digitação
└── img/
```

## Como editar

- **Cores:** variáveis no topo de `assets/css/main.css`.
- **Nível de uma habilidade:** valor de `--level` no `style` do item em `index.html`.
- **Novo projeto:** copie um bloco `<article class="project reveal">`.
- **Novo marco na linha do tempo:** copie um `<li class="tl-item">`.

## Como ver

Abra o `index.html` no navegador.
