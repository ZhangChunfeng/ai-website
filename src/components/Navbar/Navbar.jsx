import { useState, useEffect } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import navItems from '../../data/navigation';
import styles from './Navbar.module.css';

export default function Navbar({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close mobile menu when scrolling
      if (isMobileOpen) setIsMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileOpen]);

  // Close mobile menu on resize (back to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileOpen]);

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

        {/* Theme toggle + hamburger */}
        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={onToggleTheme}
            aria-label="切换主题"
            title={theme === 'dark' ? '切换亮色模式' : '切换暗色模式'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

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
      </div>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileOpen(false)} />
      )}

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
