import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SectionWrapper from './components/SectionWrapper/SectionWrapper';
import AIHistory from './components/AIHistory/AIHistory';
import AIModels from './components/AIModels/AIModels';
import AIApplications from './components/AIApplications/AIApplications';
import AICompanies from './components/AICompanies/AICompanies';
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

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
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
        <SectionWrapper id="companies">
          <AICompanies />
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
