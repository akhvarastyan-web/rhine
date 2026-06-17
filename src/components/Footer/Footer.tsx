import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <Link to="/" className="logo">
              <div className="logo-mark">RM</div>
              <div className="logo-name">
                Rhine <span>Media</span>
              </div>
            </Link>
            <p className="fb-desc">
  {isHome
    ? "Premium performance media buying for the world's most ambitious advertisers and affiliate partners. Built for scale. Optimised for ROI."
    : "Premium performance media buying agency. Built for scale. Optimised for ROI."}
</p>
            <div className="footer-social">
              <a href="#" className="soc-btn" aria-label="Telegram">✈</a>
              <a href="#" className="soc-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="soc-btn" aria-label="Twitter / X">𝕏</a>
              <a href="#" className="soc-btn" aria-label="Skype">☁</a>
            </div>
          </div>

          {isHome ? (
            <>
              <div>
                <h4 className="fc-head">Verticals</h4>
                <ul className="fc-links">
                  <li><HashLink to="/#verticals">Dating Traffic</HashLink></li>
                  <li><HashLink to="/#verticals">Nutra Campaigns</HashLink></li>
                  <li><HashLink to="/#verticals">Gambling / iGaming</HashLink></li>
                  <li><HashLink to="/#verticals">Sweepstakes</HashLink></li>
                  <li><HashLink to="/#verticals">Crypto Offers</HashLink></li>
                  <li><HashLink to="/#verticals">Adult</HashLink></li>
                </ul>
              </div>

              <div>
                <h4 className="fc-head">Traffic Sources</h4>
                <ul className="fc-links">
                  <li><HashLink to="/#traffic">Google Ads</HashLink></li>
                  <li><HashLink to="/#traffic">Meta Ads</HashLink></li>
                  <li><HashLink to="/#traffic">TikTok Ads</HashLink></li>
                  <li><HashLink to="/#traffic">PropellerAds</HashLink></li>
                  <li><HashLink to="/#traffic">Native Ads</HashLink></li>
                  <li><HashLink to="/#traffic">Push &amp; Pop</HashLink></li>
                </ul>
              </div>

              <div>
                <h4 className="fc-head">Company</h4>
                <ul className="fc-links">
                  <li><HashLink to="/#why-us">About Rhine Media</HashLink></li>
                  <li><Link to="/extra">Contact Us</Link></li>
                  <li><HashLink to="/#partners">Partners</HashLink></li>
                  <li><Link to="/terms">Terms of Service</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="fc-head">Services</h4>
                <ul className="fc-links">
                  <li><HashLink to="/#verticals">Verticals</HashLink></li>
                  <li><HashLink to="/#traffic">Traffic Sources</HashLink></li>
                  <li><HashLink to="/#partners">Partners</HashLink></li>
                </ul>
              </div>
              <div>
                <h4 className="fc-head">Company</h4>
                <ul className="fc-links">
                  <li><HashLink to="/#why-us">About</HashLink></li>
                  <li><Link to="/extra">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="fc-head">Legal</h4>
                <ul className="fc-links">
                  <li><Link to="/terms">Terms of Service</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="footer-bottom">
          <p className="copy">
            © 2026 Rhine Media. All rights reserved.{' '}
            <span style={{ color: 'var(--t3)' }}>rhine-media.com</span>
          </p>
          <nav className="f-legal" aria-label="Legal">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/extra">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
