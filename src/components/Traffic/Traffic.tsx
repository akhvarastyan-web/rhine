import './Traffic.css';

export const Traffic = () => {
  return (
    <section className="section traffic" id="traffic">
      <div className="container">
        <div className="sec-center vis" data-a="up">
          <div className="eyebrow">Traffic Sources We Master</div>
          <h2 className="sec-title">
            Every Major <span className="text-blue">Channel</span>
          </h2>
          <p className="sec-sub">
            Full-stack traffic expertise across paid, native, push and
            programmatic channels worldwide.
          </p>
        </div>

        <div className="src-grid">
          <div className="src-card vis" data-a="scale" data-d="1">
            <div className="src-ico">🚀</div>
            <div className="src-name">PropellerAds</div>
            <div className="src-sub">Push / Pop / OnClick</div>
          </div>

          <div className="src-card vis" data-a="scale" data-d="2">
            <div className="src-ico">🔍</div>
            <div className="src-name">Google Ads</div>
            <div className="src-sub">Search / Display / YouTube</div>
          </div>

          <div className="src-card vis" data-a="scale" data-d="3">
            <div className="src-ico">🍎</div>
            <div className="src-name">Apple Search Ads</div>
            <div className="src-sub">iOS App Install</div>
          </div>

          <div className="src-card vis" data-a="scale" data-d="4">
            <div className="src-ico">📘</div>
            <div className="src-name">Meta Ads</div>
            <div className="src-sub">Facebook / Instagram</div>
          </div>

          <div className="src-card vis" data-a="scale" data-d="1">
            <div className="src-ico">🎵</div>
            <div className="src-name">TikTok Ads</div>
            <div className="src-sub">In-Feed / TopView / Spark</div>
          </div>

          <div className="src-card vis" data-a="scale" data-d="2">
            <div className="src-ico">📰</div>
            <div className="src-name">Native Ads</div>
            <div className="src-sub">Taboola / Outbrain</div>
          </div>

          <div className="src-card vis" data-a="scale" data-d="3">
            <div className="src-ico">🔔</div>
            <div className="src-name">Push Notifications</div>
            <div className="src-sub">Web &amp; In-App Push</div>
          </div>

          <div className="src-card vis" data-a="scale" data-d="4">
            <div className="src-ico">💥</div>
            <div className="src-name">Pop Traffic</div>
            <div className="src-sub">Popunder / Interstitial</div>
          </div>
        </div>
      </div>
    </section>
  );
};
