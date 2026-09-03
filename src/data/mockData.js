const MOVIES = [
  { id: 1, title: "O Poderoso Chefão", year: 1972, genre: "Drama", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", rating: 9.2, description: "A história da família Corleone, uma das mais poderosas do submundo americano, sob o patriarca Vito Corleone.", duration: "2h 55min" },
  { id: 2, title: "A Lista de Schindler", year: 1993, genre: "Drama", gradient: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)", rating: 9.0, description: "A história real de Oskar Schindler, que salvou mais de mil judeus durante o Holocausto.", duration: "3h 15min" },
  { id: 3, title: "O Cavaleiro das Trevas", year: 2008, genre: "Ação", gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)", rating: 9.0, description: "Batman enfrenta o Coringa em uma batalha que vai definir o destino de Gotham City.", duration: "2h 32min" },
  { id: 4, title: "Pulp Fiction", year: 1994, genre: "Crime", gradient: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)", rating: 8.9, description: "Histórias interligadas de submundo, humor negro e diálogos icônicos de Quentin Tarantino.", duration: "2h 34min" },
  { id: 5, title: "Matrix", year: 1999, genre: "Ficção", gradient: "linear-gradient(135deg, #0f9b0f 0%, #0a5c0a 100%)", rating: 8.7, description: "Um hacker descobre que a realidade como a conhecemos é uma simulação criada por máquinas.", duration: "2h 16min" },
  { id: 6, title: " interestelar", year: 2014, genre: "Ficção", gradient: "linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #2d1b4e 100%)", rating: 8.7, description: "Astronautas viajam por um buraco de minhoca em busca de um novo lar para a humanidade.", duration: "2h 49min" },
  { id: 7, title: "Clube Luta", year: 1999, genre: "Drama", gradient: "linear-gradient(135deg, #8B0000 0%, #2c0000 100%)", rating: 8.8, description: "Um homem insone e um vendedor de sabão criam um clube de luta clandestino.", duration: "1h 59min" },
  { id: 8, title: "O Senhor dos Anéis: O Retorno do Rei", year: 2003, genre: "Fantasia", gradient: "linear-gradient(135deg, #1a0f00 0%, #3d2b0a 50%, #1a0f00 100%)", rating: 9.0, description: "A batalha final por Middle-earth. Frodo enfrenta seu destino no Monte da Perdição.", duration: "3h 21min" },
  { id: 9, title: "Parasita", year: 2019, genre: "Thriller", gradient: "linear-gradient(135deg, #264653 0%, #2a9d8f 100%)", rating: 8.5, description: "Uma família pobre se infiltra na vida de uma família rica, com consequências inesperadas.", duration: "2h 12min" },
  { id: 10, title: "Cidadão Kane", year: 1941, genre: "Drama", gradient: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)", rating: 8.3, description: "A ascensão e queda de um magnata dos jornais americanos. Obra-prima do cinema.", duration: "1h 59min" },
];

const SERIES = [
  { id: 101, title: "Breaking Bad", year: "2008-2013", genre: "Drama", gradient: "linear-gradient(135deg, #2d5016 0%, #1a3a0a 100%)", rating: 9.5, description: "Um professor de química se transforma em fabricante de metanfetamina após um diagnóstico de câncer.", seasons: "5 temporadas" },
  { id: 102, title: "Stranger Things", year: "2016-", genre: "Ficção", gradient: "linear-gradient(135deg, #8B0000 0%, #1a0000 100%)", rating: 8.7, description: "Crianças enfrentam criaturas sobrenaturais em uma pequena cidade dos anos 80.", seasons: "4 temporadas" },
  { id: 103, title: "Game of Thrones", year: "2011-2019", genre: "Fantasia", gradient: "linear-gradient(135deg, #1a1a2e 0%, #3d3d5e 100%)", rating: 9.2, description: "Nobres famílias lutam pelo Trono de Ferro em um mundo de dragões e magia.", seasons: "8 temporadas" },
  { id: 104, title: "The Witcher", year: "2019-", genre: "Fantasia", gradient: "linear-gradient(135deg, #2d1b4e 0%, #1a0f2e 100%)", rating: 8.2, description: "Um caçador de monstros errante luta para encontrar seu lugar num mundo turbulento.", seasons: "4 temporadas" },
  { id: 105, title: "Dark", year: "2017-2020", genre: "Ficção", gradient: "linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 100%)", rating: 8.8, description: "Desaparecimentos de crianças revelam segredos de quatro famílias conectados através do tempo.", seasons: "3 temporadas" },
  { id: 106, title: "The Crown", year: "2016-2023", genre: "Drama", gradient: "linear-gradient(135deg, #1a3a5c 0%, #0a1a2e 100%)", rating: 8.6, description: "A história do reinado da Rainha Isabel II, com dramas pessoais e políticos.", seasons: "6 temporadas" },
  { id: 107, title: "Money Heist", year: "2017-2021", genre: "Crime", gradient: "linear-gradient(135deg, #E50914 0%, #8B0000 100%)", rating: 8.3, description: "Um grupo de ladrões faz reféns e fica cercado na Casa da Moeda da Espanha.", seasons: "5 temporadas" },
  { id: 108, title: "The Mandalorian", year: "2019-", genre: "Ficção", gradient: "linear-gradient(135deg, #1a1a2e 0%, #0a0a1e 50%, #2d2d5e 100%)", rating: 8.7, description: "Um caçador de recompensas solitário protege um ser misterioso no universo Star Wars.", seasons: "3 temporadas" },
  { id: 109, title: "Squid Game", year: "2021-", genre: "Thriller", gradient: "linear-gradient(135deg, #E50914 0%, #ff6b6b 100%)", rating: 8.0, description: "Centenas de jogadores falidos aceitam um convite estranho para competir em jogos de criança.", seasons: "2 temporadas" },
  { id: 110, title: "Wednesday", year: "2022-", genre: "Comédia", gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)", rating: 8.1, description: "Wednesday Addams investiga uma série de assassinatos enquanto estuda em Nevermore Academy.", seasons: "2 temporadas" },
];

const DOCUMENTARIES = [
  { id: 201, title: "Nossa Planete", year: 2023, genre: "Natureza", gradient: "linear-gradient(135deg, #0a4a0a 0%, #1a6a1a 100%)", rating: 9.4, description: "Uma jornada visual deslumbrante pelos ecossistemas mais impressionantes do planeta.", duration: "10 episódios" },
  { id: 202, title: "The Social Dilemma", year: 2020, genre: "Tecnologia", gradient: "linear-gradient(135deg, #1a1a2e 0%, #3d3d5e 100%)", rating: 7.6, description: "Ex-funcionários de big tech alertam sobre os perigos das redes sociais.", duration: "1h 34min" },
  { id: 203, title: "Tiger King", year: 2020, genre: "Crime", gradient: "linear-gradient(135deg, #8B4513 0%, #2c1800 100%)", rating: 7.5, description: "A estranha e fascinante história dos criadores de tigres americanos.", duration: "10 episódios" },
  { id: 204, title: "Chefs de Prisão", year: 2019, genre: "Reality", gradient: "linear-gradient(135deg, #1a1a2e 0%, #3d3d5e 100%)", rating: 8.2, description: "Presas de penitenciárias competem para se tornar a melhor chef do país.", duration: "9 temporadas" },
  { id: 205, title: "O Contra Assassinato", year: 2018, genre: "Crime", gradient: "linear-gradient(135deg, #0a0a1a 0%, #2d2d4e 100%)", rating: 8.5, description: "Detetives investigam casos de homicídio onde o suspeito alegou legítima defesa.", duration: "8 episódios" },
  { id: 206, title: "Abstract: A Arte do Design", year: 2017, genre: "Design", gradient: "linear-gradient(135deg, #E50914 0%, #ff6b6b 100%)", rating: 8.4, description: "Explora o trabalho de oito designers que estão a reformular o mundo.", duration: "8 episódios" },
];

const ACTION_MOVIES = [
  { id: 301, title: "Mad Max: Estrada da Fúria", year: 2015, genre: "Ação", gradient: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)", rating: 8.1, description: "Em um deserto pós-apocalíptico, Max se une a Furiosa para escapar de um tirano.", duration: "1h 59min" },
  { id: 302, title: "Duna", year: 2021, genre: "Ficção", gradient: "linear-gradient(135deg, #8B4513 0%, #DAA520 100%)", rating: 8.0, description: "Paul Atreides deve viajar ao planeta mais perigoso do universo para garantir o futuro.", duration: "2h 35min" },
  { id: 303, title: "John Wick 4", year: 2023, genre: "Ação", gradient: "linear-gradient(135deg, #0c0c1d 0%, #2d2d5e 100%)", rating: 7.7, description: "John Wick descobre um caminho para derrotar a Alta Mesa, mas precisa enfrentar um novo inimigo.", duration: "2h 49min" },
  { id: 304, title: "Top Gun: Maverick", year: 2022, genre: "Ação", gradient: "linear-gradient(135deg, #1a3a5c 0%, #0a2a4c 100%)", rating: 8.3, description: "Maverick enfrenta seus demônios do passado enquanto treina uma nova geração de pilotos.", duration: "2h 10min" },
  { id: 305, title: "Gladiador", year: 2000, genre: "Ação", gradient: "linear-gradient(135deg, #8B4513 0%, #2c1800 100%)", rating: 8.5, description: "Um general romano traído busca vingança contra o corrupto imperador que matou sua família.", duration: "2h 35min" },
  { id: 306, title: "Gladiador II", year: 2024, genre: "Ação", gradient: "linear-gradient(135deg, #8B0000 0%, #2c0000 100%)", rating: 7.8, description: "Lucius, filho de Lucilla, é forçado a lutar como gladiador e busca libertar Roma.", duration: "2h 28min" },
];

const COMEDY_MOVIES = [
  { id: 401, title: "Superbad", year: 2007, genre: "Comédia", gradient: "linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%)", rating: 7.6, description: "Dois amigos inseparáveis tentam viver as melhores noites de suas vidas antes da faculdade.", duration: "1h 53min" },
  { id: 402, title: "Anchorman", year: 2004, genre: "Comédia", gradient: "linear-gradient(135deg, #E50914 0%, #8B0000 100%)", rating: 7.3, description: "Nos anos 70, um apresentador de notícias egocêntrico enfrenta a concorrência de uma nova âncora.", duration: "1h 34min" },
  { id: 403, title: "The Hangover", year: 2009, genre: "Comédia", gradient: "linear-gradient(135deg, #2d5016 0%, #1a3a0a 100%)", rating: 7.7, description: "Três amigos acordam após um bachelor party em Las Vegas sem lembranças do que aconteceu.", duration: "1h 40min" },
  { id: 404, title: "Bridesmaids", year: 2011, genre: "Comédia", gradient: "linear-gradient(135deg, #E50914 0%, #ff6b6b 100%)", rating: 6.8, description: "A melhor amiga da noiva compete com a rival mais rica pelo papel de dama de honra.", duration: "2h 05min" },
  { id: 405, title: "Mean Girls", year: 2004, genre: "Comédia", gradient: "linear-gradient(135deg, #8B0000 0%, #1a0000 100%)", rating: 7.0, description: "Uma adolescente homeschooled tenta se infiltrar no grupo das Plastics no ensino médio.", duration: "1h 33min" },
  { id: 406, title: "Dumb and Dumber", year: 1994, genre: "Comédia", gradient: "linear-gradient(135deg, #f7b733 0%, #8B4513 100%)", rating: 7.3, description: "Dois amigos extremamente idiotas viajam de coast-to-coast para devolver a maleta de uma mulher.", duration: "1h 34min" },
];

const MOVIES_BY_GENRE = {
  "Em Alta": [...MOVIES.slice(0, 6), ...SERIES.slice(0, 4)],
  "Séries Populares": SERIES,
  "Originais Netflix": [...SERIES.slice(0, 5), ...DOCUMENTARIES.slice(0, 3)],
  "Ação e Aventura": ACTION_MOVIES,
  "Comédia": COMEDY_MOVIES,
  "Documentários": DOCUMENTARIES,
};

export { MOVIES_BY_GENRE, MOVIES, SERIES, DOCUMENTARIES, ACTION_MOVIES, COMEDY_MOVIES };
