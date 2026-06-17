import './HeroTwo.css';

export const HeroTwo = () => {
  return (
    <header className="page-hero">
      <div className="container">
        <div className="eyebrow vis" data-a="up">
          Get in Touch
        </div>
        <h1 data-a="up" data-d="1" className="vis">
          Contact <span className="text-gold">Rhine Media</span>
        </h1>
        <p data-a="up" data-d="2" className="vis">
          Ready to start? Have a question? Our team responds within 24 hours.
        </p>
      </div>
    </header>
  );
};
