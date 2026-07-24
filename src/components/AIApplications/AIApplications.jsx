import { applications } from '../../data/aiApplications';
import styles from './AIApplications.module.css';

const fieldColors = [
  'var(--color-primary)',
  'var(--color-secondary)',
  'var(--color-accent)',
  '#55EFC4',
  '#FDCB6E',
  '#74B9FF',
  '#FF6B6B',
  '#FDA7DF',
];

export default function AIApplications() {
  return (
    <>
      <h2 className="section-title">AI 应用场景</h2>
      <p className="section-subtitle">AI 正在改变各行各业——从编程到医疗，从创作到金融</p>

      <div className={styles.grid}>
        {applications.map((app, i) => (
          <div key={app.field} className={`${styles.card} stagger-card`}>
            <div className={styles.cardTop}>
              <span
                className={styles.icon}
                style={{ background: `${fieldColors[i]}15` }}
              >
                {app.icon}
              </span>
              <h3 className={styles.field}>{app.field}</h3>
            </div>

            <p className={styles.desc}>{app.description}</p>

            <div className={styles.highlights}>
              {app.highlights.map((h, idx) => (
                <div key={idx} className={styles.highlightItem}>
                  <span className={styles.checkmark} style={{ color: fieldColors[i] }}>✦</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className={styles.tools}>
              <span className={styles.toolsLabel}>常用工具：</span>
              <span className={styles.toolsList}>{app.tools.join('、')}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
