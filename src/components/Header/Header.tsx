import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.hash || '/');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');

      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 55);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <nav className="navbar scrolled" id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="/hero" className="logo">
              <div className="logo-mark">RM</div>
              <div className="logo-name">
                Rhine <span>Media</span>
              </div>
            </a>

            <ul className="nav-links">
      {[
        { path: '/#verticals', label: 'Verticals' },
        { path: '/#traffic', label: 'Traffic Sources' },
        { path: '/#partners', label: 'Partners' },
        { path: '/#why-us', label: 'Why Us' },
      ].map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={activePath === item.path ? 'active-white' : ''}
            onClick={() => setActivePath(item.path)}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          to="/extra"
          className={activePath === '/extra' ? 'active-gold' : ''}
          onClick={() => setActivePath('/extra')}
        >
          Contact
        </Link>
      </li>
    </ul>

            <div className="nav-right">
              {location.pathname === '/extra' ? (
    <Link to="/" className="btn btn-ghost">
      Back to Home
    </Link>
  ) : (
    <Link to="/extra" className="btn btn-ghost">
      Get in Touch
    </Link>
  )}
              <Link to="/extra" className="btn btn-primary">
                Start Cooperation
              </Link>
              <button
                className="ham"
                id="ham"
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mob-menu ${isMenuOpen ? 'active' : ''}`} id="mobMenu">
        <span
          className="mob-close"
          id="mobClose"
          onClick={() => setIsMenuOpen(false)}
        ></span>
        <Link
          smooth
          to="/#verticals"
          className="mob-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Verticals
        </Link>
        <Link
          smooth
          to="/#traffic"
          className="mob-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Traffic Sources
        </Link>
        <Link
          smooth
          to="/#partners"
          className="mob-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Partners
        </Link>
        <Link
          smooth
          to="/#why-us"
          className="mob-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Why Us
        </Link>
        <Link
          to="/contact"
          className="mob-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>

        <Link
          to="/contact"
          className="btn btn-primary"
          style={{ marginTop: '14px' }}
        >
          Start Cooperation
        </Link>
      </div>
    </>
  );
};
