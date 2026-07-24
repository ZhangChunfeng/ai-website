import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './SectionWrapper.module.css';

export default function SectionWrapper({ id, children, alt = false }) {
  const ref = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} reveal ${alt ? 'section-alt' : ''}`}
    >
      <div className={styles.inner}>
        {children}
      </div>
    </section>
  );
}
