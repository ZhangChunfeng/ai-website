import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import SideToc from './components/SideToc/SideToc';
import SectionWrapper from './components/SectionWrapper/SectionWrapper';
import AIHistory from './components/AIHistory/AIHistory';
import AIModels from './components/AIModels/AIModels';
import AIApplications from './components/AIApplications/AIApplications';
import AICompanies from './components/AICompanies/AICompanies';
import AIEthics from './components/AIEthics/AIEthics';
import AITutorials from './components/AITutorials/AITutorials';
import PromptEngineering from './components/PromptEngineering/PromptEngineering';
import Glossary from './components/Glossary/Glossary';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import styles from './App.module.css';

// Scroll progress bar
function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!bar) { ticking = false; return; }
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
        bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        ticking = false;
      });
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
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  // Keyboard shortcut: Ctrl+K to open search
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <SideToc />
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
        <SectionWrapper id="ethics">
          <AIEthics />
        </SectionWrapper>
        <SectionWrapper id="tutorials" alt>
          <AITutorials />
        </SectionWrapper>
        <SectionWrapper id="prompts">
          <PromptEngineering />
        </SectionWrapper>
        <SectionWrapper id="glossary" alt>
          <Glossary />
        </SectionWrapper>
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
