import './Vertical.css';

export const Vertical = () => {
  return (
    <section className="section verticals" id="verticals">
      <div className="container">
        <div className="sec-center vis" data-a="up">
          <div className="eyebrow">Our Verticals</div>
          <h2 className="sec-title">
            Niches We <span className="text-gold">Dominate</span>
          </h2>
          <p className="sec-sub">
            Deep expertise across the highest-performing verticals in
            performance marketing.
          </p>
        </div>

        <div className="v-grid">
          <div className="v-card vis" data-a="up" data-d="1">
            <span className="v-emoji">💘</span>
            <h3 className="v-name">Dating</h3>
            <p className="v-desc">
              Mainstream &amp; adult dating campaigns. SOI, DOI and trial offers
              across tier-1 GEOs with proven funnels.
            </p>
            <span className="v-pill">High Volume</span>
          </div>

          <div className="v-card vis" data-a="up" data-d="2">
            <span className="v-emoji">💊</span>
            <h3 className="v-name">Nutra</h3>
            <p className="v-desc">
              Weight loss, supplements, skincare. Native &amp; push traffic
              specialization with compliant creatives.
            </p>
            <span className="v-pill">Premium GEOs</span>
          </div>

          <div className="v-card vis" data-a="up" data-d="3">
            <span className="v-emoji">🎰</span>
            <h3 className="v-name">Gambling</h3>
            <p className="v-desc">
              Online casino, sports betting, poker. FTD-focused funnels with
              high player LTV and retention.
            </p>
            <span className="v-pill">Top ROI</span>
          </div>

          <div className="v-card vis" data-a="up" data-d="4">
            <span className="v-emoji">🔞</span>
            <h3 className="v-name">Adult</h3>
            <p className="v-desc">
              Adult content &amp; services. Compliant campaigns via premium
              adult traffic networks at scale.
            </p>
            <span className="v-pill">Specialized</span>
          </div>

          <div className="v-card vis" data-a="up" data-d="1">
            <span className="v-emoji">🎁</span>
            <h3 className="v-name">Sweepstakes</h3>
            <p className="v-desc">
              CC-submit &amp; SOI sweeps. Push, pop and display traffic with
              high conversion rates globally.
            </p>
            <span className="v-pill">Mass Scale</span>
          </div>

          <div className="v-card vis" data-a="up" data-d="2">
            <span className="v-emoji">₿</span>
            <h3 className="v-name">Crypto Offers</h3>
            <p className="v-desc">
              Crypto trading platforms, wallets and exchange offers. FTD &amp;
              CPA models in regulated GEOs.
            </p>
            <span className="v-pill">Emerging</span>
          </div>

          <div className="v-card vis" data-a="up" data-d="3">
            <span className="v-emoji">📱</span>
            <h3 className="v-name">Mainstream</h3>
            <p className="v-desc">
              App installs, e-commerce, utilities. Google, Meta and TikTok
              performance campaigns at scale.
            </p>
            <span className="v-pill">Versatile</span>
          </div>

          <div className="v-card vis" data-a="up" data-d="4">
            <span className="v-emoji">🎮</span>
            <h3 className="v-name">iGaming</h3>
            <p className="v-desc">
              Fantasy sports, esports betting and skill-based gaming platforms.
              Fast-growing vertical expertise.
            </p>
            <span className="v-pill">Fast Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};
