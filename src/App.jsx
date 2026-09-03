import { useState, useMemo } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Row from './components/Row/Row';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import { MOVIES_BY_GENRE } from './data/mockData';
import './App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Todos') {
      return null;
    }
    return { [activeFilter]: MOVIES_BY_GENRE[activeFilter] };
  }, [activeFilter]);

  const allItems = useMemo(() => {
    if (activeFilter === 'Todos') return MOVIES_BY_GENRE;
    return filteredItems;
  }, [activeFilter, filteredItems]);

  return (
    <div className="app">
      <Navbar />
      <HeroBanner
        movies={Object.values(MOVIES_BY_GENRE).flat().slice(0, 10)}
        onSelectMovie={setSelectedMovie}
      />
      <main className="main-content">
        <div className="filter-bar">
          {['Todos', 'Em Alta', 'Séries Populares', 'Originais Netflix', 'Ação e Aventura', 'Comédia', 'Documentários'].map(genre => (
            <button
              key={genre}
              className={`filter-btn ${activeFilter === genre ? 'active' : ''}`}
              onClick={() => setActiveFilter(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        {Object.entries(allItems).map(([title, items]) => (
          <Row
            key={title}
            title={title}
            items={items}
            onSelectMovie={setSelectedMovie}
          />
        ))}
      </main>
      <Footer />
      {selectedMovie && (
        <Modal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
