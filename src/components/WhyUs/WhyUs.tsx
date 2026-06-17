import './WhyUs.css';

export const WhyUs = () => {
  return (
    <section className="section features" id="why-us">
      <div className="container">
        <div className="feat-layout">
          <div className="feat-content">
            <div className="eyebrow vis" data-a="left">
              Why Choose Rhine Media
            </div>
            <h2 className="sec-title vis" data-a="left" data-d="1">
              Precision. Scale.
              <br />
              <span className="text-gold">Performance.</span>
            </h2>
            <p className="sec-sub vis" data-a="left" data-d="2">
              We're not a media network — we're your in-house buying team. Deep
              expertise, real accountability and transparent reporting on every
              dollar spent.
            </p>

            <div className="check-list" style={{ marginTop: '36px' }}>
              <div className="check-item vis" data-a="left" data-d="2">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Full Funnel Optimization</h4>
                  <p>
                    From creative A/B testing to post-click landing page
                    optimization. Every touchpoint tracked and improved
                    continuously.
                  </p>
                </div>
              </div>

              <div className="check-item vis" data-a="left" data-d="3">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Direct Publisher Relationships</h4>
                  <p>
                    We maintain direct deals with top publishers and ad networks
                    — cutting costs and boosting campaign performance.
                  </p>
                </div>
              </div>

              <div className="check-item vis" data-a="left" data-d="4">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Real-Time Reporting Dashboards</h4>
                  <p>
                    Live dashboards with full transparency on spend,
                    impressions, conversions and revenue attribution — 24/7.
                  </p>
                </div>
              </div>

              <div className="check-item vis" data-a="left" data-d="5">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Dedicated Account Manager</h4>
                  <p>
                    Every partner gets a dedicated team member. No ticket
                    queues, no delays — direct Telegram/Skype communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-cards vis" data-a="right" data-d="2">
            <div className="fc">
              <div className="fc-ico">📈</div>
              <h4 className="fc-title">Data-Driven Buying</h4>
              <p className="fc-body">
                Bidding strategies informed by real conversion data. No
                guesswork — pure performance logic at scale.
              </p>
            </div>

            <div className="fc">
              <div className="fc-ico">🛡️</div>
              <h4 className="fc-title">Brand-Safe Traffic</h4>
              <p className="fc-body">
                Custom placement lists and negative keyword exclusions to
                protect your brand at all times.
              </p>
            </div>

            <div className="fc">
              <div className="fc-ico">🌍</div>
              <h4 className="fc-title">Global GEO Coverage</h4>
              <p className="fc-body">
                Tier-1, LATAM, APAC and MENA — we have the infrastructure to
                scale to any region instantly.
              </p>
            </div>

            <div className="fc">
              <div className="fc-ico">⚡</div>
              <h4 className="fc-title">48h Campaign Launch</h4>
              <p className="fc-body">
                From brief to live in under 48 hours. Streamlined onboarding
                means you never miss a traffic window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
