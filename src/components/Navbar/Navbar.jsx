import { useState, useEffect } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import navItems from '../../data/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollTo(id);
    setIsMobileOpen(false);
  };

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.brand} onClick={handleBrandClick}>
          <span className={styles.brandIcon}>🧠</span>
          <span className={styles.brandText}>AI 指南</span>
        </button>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${styles.link} ${activeId === item.id ? styles.active : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="菜单"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${styles.mobileLink} ${activeId === item.id ? styles.active : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
