import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
            <Link to="/" class="logo">
              <div className="logo-mark">RM</div>
              <div className="logo-name">
                Rhine <span>Media</span>
              </div>
            </Link>

            <ul className="nav-links">
              <li>
                <Link smooth to="/#verticals">
                  Verticals
                </Link>
              </li>
              <li>
                <Link smooth to="/#traffic">
                  Traffic Sources
                </Link>
              </li>
              <li>
                <Link smooth to="/#partners">
                  Partners
                </Link>
              </li>
              <li>
                <Link smooth to="/#why-us">
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="/extra"
                  style={{ color: isClicked ? 'var(--gold)' : 'inherit' }}
                  onClick={() => setIsClicked(true)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="nav-right">
              <Link to="/extra" className="btn btn-ghost">
                Get in Touch
              </Link>
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
