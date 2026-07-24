import useSmoothScroll from '../../hooks/useSmoothScroll';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = useSmoothScroll();

  // Split title into characters for staggered animation
  const title = '探索人工智能的世界';
  const subtitle = '从基础概念到前沿应用，一站式了解 AI 的核心知识与实践指南';

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative background elements */}
      <div className={styles.bgDecor}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          人工智能知识指南
        </div>

        <h1 className={styles.title}>
          {title.split('').map((char, i) => (
            <span
              key={i}
              className={styles.char}
              style={{ animationDelay: `${i * 0.06 + 0.3}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className={styles.subtitle}>{subtitle}</p>

        <button className={styles.cta} onClick={() => scrollTo('history')}>
          <span>开始探索</span>
          <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span className={styles.scrollText}>向下滚动</span>
      </div>
    </section>
  );
}
