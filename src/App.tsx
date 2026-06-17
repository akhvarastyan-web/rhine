import './App.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './HomePage';
import { ExtraPage } from './ExtraPage';

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-a]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra" element={<ExtraPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};
