import './StatsBand.css';

export const StatsBand = () => {
  return (
    <div className="stats-band">
      <div className="container">
        <div className="stats-row">
          <div className="stat-cell vis" data-a="up">
            <div className="stat-num">4.2B+</div>
            <div className="stat-lbl">Ad Impressions / Month</div>
            <div className="stat-sub">Across all traffic sources</div>
          </div>

          <div className="stat-cell vis" data-a="up" data-d="2">
            <div className="stat-num">340%</div>
            <div className="stat-lbl">Average ROI</div>
            <div className="stat-sub">Verified by partners</div>
          </div>

          <div className="stat-cell vis" data-a="up" data-d="3">
            <div className="stat-num">7</div>
            <div className="stat-lbl">Verticals Mastered</div>
            <div className="stat-sub">Dating, Nutra, Gambling &amp; more</div>
          </div>

          <div className="stat-cell vis" data-a="up" data-d="4">
            <div className="stat-num">60+</div>
            <div className="stat-lbl">Global GEOs</div>
            <div className="stat-sub">Tier-1 &amp; emerging markets</div>
          </div>
        </div>
      </div>
    </div>
  );
};
