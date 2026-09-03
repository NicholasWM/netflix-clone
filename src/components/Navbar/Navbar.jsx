import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Início');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Início', 'Séries', 'Filmes', 'Tendências', 'Minha Lista'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <a href="#" className="logo">NETFLIX</a>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <a
                href="#"
                className={activeLink === link ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <div className={`search-box ${searchOpen ? 'active' : ''}`}>
          <input
            type="text"
            placeholder="Títulos, pessoas, gêneros"
            value=""
            onChange={() => {}}
          />
          <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
            🔍
          </button>
        </div>
        <button className="nav-icon">🔔</button>
        <div className="profile-avatar">N</div>
      </div>
    </nav>
  );
}

export default Navbar;
