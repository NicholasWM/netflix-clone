import './RowCard.css';

function RowCard({ movie, onSelect }) {
  return (
    <div className="row-card" onClick={() => onSelect(movie)}>
      <div className="card-gradient" style={{ background: movie.gradient }} />
      <div className="card-info">
        <h3 className="card-title">{movie.title}</h3>
        <div className="card-meta">
          <span className="card-rating">⭐ {movie.rating}</span>
          <span className="card-year">{movie.year}</span>
          <span className="card-genre">{movie.genre}</span>
        </div>
        <p className="card-desc">{movie.description?.slice(0, 80)}...</p>
      </div>
    </div>
  );
}

export default RowCard;
