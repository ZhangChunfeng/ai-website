import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SectionWrapper from './components/SectionWrapper/SectionWrapper';
import AIHistory from './components/AIHistory/AIHistory';
import AIModels from './components/AIModels/AIModels';
import AIApplications from './components/AIApplications/AIApplications';
import AICompanies from './components/AICompanies/AICompanies';
import AITutorials from './components/AITutorials/AITutorials';
import PromptEngineering from './components/PromptEngineering/PromptEngineering';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import styles from './App.module.css';

// Scroll progress bar
function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const handleScroll = () => {
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div id="scroll-progress" className="scroll-progress" style={{ width: '0%' }} />;
}

// Theme toggle
const THEME_KEY = 'ai-website-theme';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className={styles.main}>
        <Hero />
        <SectionWrapper id="history">
          <AIHistory />
        </SectionWrapper>
        <SectionWrapper id="models" alt>
          <AIModels />
        </SectionWrapper>
        <SectionWrapper id="applications">
          <AIApplications />
        </SectionWrapper>
        <SectionWrapper id="companies" alt>
          <AICompanies />
        </SectionWrapper>
        <SectionWrapper id="tutorials">
          <AITutorials />
        </SectionWrapper>
        <SectionWrapper id="prompts" alt>
          <PromptEngineering />
        </SectionWrapper>
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
