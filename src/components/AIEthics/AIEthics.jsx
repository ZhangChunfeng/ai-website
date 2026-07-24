import { topics, principles } from '../../data/aiEthics';
import styles from './AIEthics.module.css';

const severityMap = {
  critical: { label: '极高关注', cls: styles.severityCritical },
  high: { label: '高度关注', cls: styles.severityHigh },
};

export default function AIEthics() {
  return (
    <>
      <h2 className="section-title">AI 伦理与安全</h2>
      <p className="section-subtitle">技术越强大，责任越重大——AI 发展必须回答的伦理命题</p>

      {/* Principles */}
      <div className={styles.principlesGrid}>
        {principles.map((p) => (
          <div key={p.title} className={styles.principleCard}>
            <span className={styles.principleIcon}>{p.icon}</span>
            <strong className={styles.principleTitle}>{p.title}</strong>
            <p className={styles.principleDesc}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Topics */}
      <div className={styles.topicsGrid}>
        {topics.map((t) => (
          <div key={t.title} className={styles.topicCard}>
            <div className={styles.topicHeader}>
              <span className={styles.topicIcon}>{t.icon}</span>
              <h3 className={styles.topicTitle}>{t.title}</h3>
              {severityMap[t.severity] && (
                <span className={`${styles.topicSeverity} ${severityMap[t.severity].cls}`}>
                  {severityMap[t.severity].label}
                </span>
              )}
            </div>
            <p className={styles.topicDesc}>{t.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
