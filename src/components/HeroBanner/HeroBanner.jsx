import { useState, useEffect } from 'react';
import './HeroBanner.css';

function HeroBanner({ movies, onSelectMovie }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const featured = movies.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % featured.length);
        setShowContent(true);
      }, 500);
    }, 8000);
    return () => clearInterval(timer);
  }, [featured.length]);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  const movie = featured[currentIndex];

  return (
    <div className="hero-banner" style={{ backgroundImage: movie?.gradient }}>
      <div className="hero-gradient" />
      <div className={`hero-content ${showContent ? 'fade-in' : ''}`}>
        <h1 className="hero-title">{movie?.title}</h1>
        <p className="hero-description">{movie?.description}</p>
        <div className="hero-buttons">
          <button className="btn btn-play" onClick={() => onSelectMovie(movie)}>
            ▶ Assistir
          </button>
          <button className="btn btn-info" onClick={() => onSelectMovie(movie)}>
            ℹ Mais Informações
          </button>
        </div>
        <div className="hero-tags">
          <span>{movie?.genre}</span>
          <span>{movie?.year}</span>
          <span>⭐ {movie?.rating}</span>
        </div>
      </div>
      <div className="hero-indicator">
        {featured.map((_, i) => (
          <div
            key={i}
            className={`indicator-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setShowContent(false);
              setTimeout(() => {
                setCurrentIndex(i);
                setShowContent(true);
              }, 300);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;
