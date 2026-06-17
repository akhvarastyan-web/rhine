import './App.scss';
import { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './HomePage';
import { ExtraPage } from './ExtraPage';
import { Terms } from './components/Terms/Terms';
import { Privacy } from './components/Privacy/Privacy';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
  const elements = document.querySelectorAll('[data-a]');

  // Спочатку прибираємо vis з усіх
  elements.forEach(el => el.classList.remove('vis'));

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

  const timer = setTimeout(() => {
    elements.forEach(el => observer.observe(el));
  }, 50);

  return () => {
    clearTimeout(timer);
    observer.disconnect();
  };
}, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};
