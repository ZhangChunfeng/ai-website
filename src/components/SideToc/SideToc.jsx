import { useState, useEffect } from 'react';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import styles from './SideToc.module.css';

const tocSections = [
  { id: 'history', label: 'AI 基础与发展史', icon: '📖' },
  { id: 'models', label: '主流模型与工具', icon: '🛠️' },
  { id: 'applications', label: 'AI 应用场景', icon: '💡' },
  { id: 'companies', label: '顶尖 AI 公司', icon: '🏢' },
  { id: 'ethics', label: 'AI 伦理与安全', icon: '⚖️' },
  { id: 'tutorials', label: 'AI 开发教程', icon: '📚' },
  { id: 'prompts', label: '提示词工程', icon: '✨' },
  { id: 'glossary', label: '术语速查表', icon: '📋' },
];

export default function SideToc() {
  const [activeId, setActiveId] = useState('');
  const [visible, setVisible] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const ids = tocSections.map((s) => s.id);
    const handleScroll = () => {
      // Show after hero
      setVisible(window.scrollY > window.innerHeight * 0.6);

      const scrollY = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside className={styles.toc}>
      <div className={styles.title}>目录</div>
      <nav className={styles.nav}>
        {tocSections.map((s) => (
          <button
            key={s.id}
            className={`${styles.link} ${activeId === s.id ? styles.active : ''}`}
            onClick={() => scrollTo(s.id)}
            title={s.label}
          >
            <span className={styles.dot} />
            <span className={styles.label}>{s.icon} {s.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
