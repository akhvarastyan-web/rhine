import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="orb orb-a" style={{ transform: 'translateY(0px)' }}></div>
      <div className="orb orb-b" style={{ transform: 'translateY(0px)' }}></div>
      <div className="orb orb-c"></div>

      <div className="hero-deco" aria-hidden="true">
        <svg
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="400"
            cy="400"
            r="320"
            stroke="rgba(201,151,59,0.6)"
            strokeWidth="1"
          ></circle>
          <circle
            cx="400"
            cy="400"
            r="220"
            stroke="rgba(62,114,236,0.5)"
            strokeWidth="0.8"
          ></circle>
          <circle
            cx="400"
            cy="400"
            r="120"
            stroke="rgba(201,151,59,0.4)"
            strokeWidth="0.6"
          ></circle>
          <line
            x1="80"
            y1="400"
            x2="720"
            y2="400"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
          ></line>
          <line
            x1="400"
            y1="80"
            x2="400"
            y2="720"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
          ></line>
          <circle cx="400" cy="80" r="5" fill="rgba(201,151,59,0.8)"></circle>
          <circle cx="720" cy="400" r="5" fill="rgba(62,114,236,0.8)"></circle>
          <circle cx="400" cy="720" r="5" fill="rgba(201,151,59,0.8)"></circle>
          <circle cx="80" cy="400" r="5" fill="rgba(62,114,236,0.8)"></circle>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '780px' }}>
          <div className="hero-badge vis" data-a="up">
            <span className="badge-pulse"></span>
            Performance Media Buying Team
          </div>

          <h1 className="hero-h1 vis" data-a="up" data-d="1">
            <span style={{ display: 'block' }}>Performance Media</span>
            <span style={{ display: 'block' }}>
              Buying Team&nbsp;|&nbsp;<span className="hl">Rhine Media</span>
            </span>
          </h1>

          <p className="hero-sub vis" data-a="up" data-d="2">
            We buy traffic for{' '}
            <strong>Dating, Nutra, Gambling, Sweepstakes, iGaming</strong> and
            more — across all major channels, in every major GEO, at premium
            scale.
          </p>

          <div className="hero-actions vis" data-a="up" data-d="3">
            <Link to="/extra" className="btn btn-primary">
              Start Cooperation
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 6.5h11M6.5 1.5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
            <Link to="/extra" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>

          <div className="hero-kpis vis" data-a="up" data-d="4">
            <div className="kpi">
              <span className="kpi-v">$12M+</span>
              <span className="kpi-l">Monthly Ad Spend</span>
            </div>
            <div className="kpi">
              <span className="kpi-v">340%</span>
              <span className="kpi-l">Average Campaign ROI</span>
            </div>
            <div className="kpi">
              <span className="kpi-v">8+</span>
              <span className="kpi-l">Traffic Channels</span>
            </div>
            <div className="kpi">
              <span className="kpi-v">60+</span>
              <span className="kpi-l">GEOs Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
