import useSmoothScroll from '../../hooks/useSmoothScroll';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollTo = useSmoothScroll();

  const links = [
    { id: 'history', label: 'AI 基础与发展史' },
    { id: 'models', label: '主流模型与工具' },
    { id: 'applications', label: '应用场景' },
    { id: 'companies', label: '顶尖AI公司' },
    { id: 'prompts', label: '提示词工程' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>🧠</span>
            <span className={styles.name}>AI 知识指南</span>
          </div>

          <nav className={styles.nav}>
            {links.map((link) => (
              <button
                key={link.id}
                className={styles.link}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.disclaimer}>
            本网站内容由 AI 辅助生成，仅供学习参考。AI 技术发展日新月异，具体信息请以各产品官方公告为准。
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} AI 知识指南 — 让每个人都能了解人工智能
          </p>
        </div>
      </div>
    </footer>
  );
}
