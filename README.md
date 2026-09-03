# Netflix UI Clone

Clone da interface da Netflix construído com **React + Vite**. Interface pixel-close ao design original, com dados mockados e zero dependências externas de imagens.

## Modelo

Este projeto foi gerado pelo modelo **Qwen3.6-35B-A3B** (A5000).

## Tecnologias

| Camada | Stack |
|---|---|
| Framework | React 19 + Vite 8 |
| Estilização | CSS Modules (sem lib externa) |
| Fontes | Bebas Neue (logo/títulos), Montserrat (corpo) |
| Deploy | Vite static build |

## Funcionalidades

| Recurso | Descrição |
|---|---|
| Navbar | Logo Netflix, links de navegação, busca, perfil — fica preta ao scrollar |
| Hero Banner | Imagem fullscreen com gradiente, título, descrição, botões Assistir/Mais Info — rotação automática a cada 8s |
| Rows de Conteúdo | 6 categorias com scroll horizontal e setas de navegação |
| Cards | 60+ itens com hover zoom (108%) + overlay de informações |
| Modal | Clique no card → banner expandido, informações detalhadas, toggle "Minha Lista" |
| Filtros | Barra de filtro por categoria acima das rows |
| Footer | Links estilizados estilo Netflix |

## Categorias

- **Em Alta** — filmes e séries em tendência
- **Séries Populares** — as séries mais assistidas
- **Originais Netflix** — produções exclusivas
- **Ação e Aventura** — filmes de ação e aventura
- **Comédia** — filmes e séries de comédia
- **Documentários** — documentários variados

## Como Rodar

```bash
cd netflix-clone
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Como Testar

1. **Hero Banner**: passe o mouse nas setas inferiores para trocar o destaque manualmente
2. **Rows**: passe o mouse em uma row — as setas ◀ ▶ aparecem. Clique para navegar
3. **Cards**: passe o mouse em um card — faz zoom e mostra informações
4. **Modal**: clique em qualquer card para abrir o modal com detalhes
5. **Filtros**: clique nas categorias para filtrar as rows
6. **Navbar**: scroll a página — o fundo fica preto automaticamente
7. **Busca**: clique no ícone 🔍 na navbar

## Estrutura

```
src/
├── components/
│   ├── Navbar/         # Barra de navegação fixa
│   ├── HeroBanner/     # Banner de destaque fullscreen
│   ├── Row/            # Linha com scroll horizontal
│   ├── Card/           # Card de conteúdo com hover
│   ├── Modal/          # Modal de detalhes
│   └── Footer/         # Rodapé com links
├── data/
│   └── mockData.js     # 60+ itens mockados
├── App.jsx
├── index.css
└── main.jsx
```

## Design Decisions

- **Gradientes CSS em vez de imagens** — projeto autocontido, sem dependências externas de assets
- **Sem ícones SVG** — emojis como ícones para zero dependência
- **CSS vanilla** — sem Tailwind, sem MUI, sem lib de UI — cada pixel é controlado manualmente
- **Fontes do Google** — Bebas Neue e Montserrat para tipografia similar à Netflix real
- **Gradiente no Hero** — `linear-gradient` que simula a iluminação do banner real

## License

MIT
