import { useRef, useState } from 'react';
import RowCard from '../Card/RowCard';
import './Row.css';

function Row({ title, items, onSelectMovie }) {
  const rowRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = window.innerWidth * 0.75;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="row"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <button
          className={`arrow arrow-left ${showArrows ? 'show' : ''}`}
          onClick={() => scroll('left')}
        >
          ◀
        </button>
        <div className="row-posters" ref={rowRef}>
          {items.map(movie => (
            <RowCard
              key={movie.id}
              movie={movie}
              onSelect={onSelectMovie}
            />
          ))}
        </div>
        <button
          className={`arrow arrow-right ${showArrows ? 'show' : ''}`}
          onClick={() => scroll('right')}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Row;
