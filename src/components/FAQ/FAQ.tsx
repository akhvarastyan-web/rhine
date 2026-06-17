import './FAQ.css';
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="sec-center vis" data-a="up">
          <div className="eyebrow">FAQ</div>
          <h2 className="sec-title">
            Common <span className="text-gold">Questions</span>
          </h2>
          <p className="sec-sub">
            Everything you need to know before starting a cooperation with Rhine
            Media.
          </p>
        </div>

        <div className="faq-list">
          {/* Створюємо масив питань для зручного рендерингу */}
          {[
            {
              q: 'What verticals does Rhine Media specialise in?',
              a: 'We specialise in Dating, Nutra, Gambling, iGaming, Sweepstakes, Adult, Crypto Offers and Mainstream verticals.',
            },
            {
              q: 'What is the minimum monthly budget to work with you?',
              a: 'We typically work with partners investing a minimum of $5,000/month in media spend.',
            },
            {
              q: 'How quickly can you launch a campaign?',
              a: 'Once we have all required materials, we can typically launch campaigns within 24–48 hours.',
            },
            {
              q: 'Do you work on a CPA, CPL or revenue share basis?',
              a: 'We work across multiple pricing models including managed spend, CPA, CPL, RevShare and hybrid structures.',
            },
            {
              q: 'Which GEOs do you cover?',
              a: 'We have active campaigns running in 60+ GEOs worldwide, including all Tier-1 markets.',
            },
            {
              q: 'What reporting and tracking do you provide?',
              a: 'All clients receive access to real-time performance dashboards with full transparency.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`faq-item vis ${openIndex === index ? 'open' : ''}`}
              data-a="up"
            >
              <button
                className="faq-q"
                aria-expanded={openIndex === index}
                onClick={() => toggleItem(index)}
              >
                {item.q}
                <span className="faq-arrow">▾</span>
              </button>
              <div
                className="faq-a"
                style={{ display: openIndex === index ? 'block' : 'none' }}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
