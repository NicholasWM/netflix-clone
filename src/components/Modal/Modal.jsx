import { useState } from 'react';
import './Modal.css';

function Modal({ movie, onClose }) {
  const [inMyList, setInMyList] = useState(false);

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-banner" style={{ background: movie.gradient }}>
          <div className="modal-banner-gradient" />
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="modal-banner-content">
            <h2 className="modal-title">{movie.title}</h2>
            <div className="modal-banner-buttons">
              <button className="btn btn-play">
                ▶ Assistir
              </button>
              <button
                className="btn btn-icon"
                onClick={() => setInMyList(!inMyList)}
              >
                {inMyList ? '✓ Na Minha Lista' : '+ Minha Lista'}
              </button>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-info">
            <div className="modal-main">
              <p className="modal-description">{movie.description}</p>
              <div className="modal-meta">
                <span className="match">⭐ {movie.rating}</span>
                <span>{movie.year}</span>
                <span className="rating-badge">16+</span>
                <span>{movie.duration || movie.seasons}</span>
              </div>
            </div>
            <div className="modal-details">
              <p><span className="label">Gênero:</span> {movie.genre}</p>
              <p><span className="label">Status:</span> Completo</p>
              <p><span className="label">Áudio:</span> Português, Inglês</p>
              <p><span className="label">Legendas:</span> Português</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
