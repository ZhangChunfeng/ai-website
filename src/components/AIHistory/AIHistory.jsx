import { definitions, timeline } from '../../data/aiHistory';
import styles from './AIHistory.module.css';

export default function AIHistory() {
  return (
    <>
      <h2 className="section-title">AI 基础与发展史</h2>
      <p className="section-subtitle">从图灵测试到大语言模型，回顾人工智能七十余年的发展历程</p>

      {/* Definitions grid */}
      <div className={styles.defGrid}>
        {definitions.map((def) => (
          <div key={def.term} className={`${styles.defCard} stagger-card`}>
            <span className={styles.defIcon}>{def.icon}</span>
            <h3 className={styles.defTerm}>{def.term}</h3>
            <p className={styles.defDesc}>{def.description}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className={styles.timelineSection}>
        <h3 className={styles.timelineTitle}>📅 发展时间线</h3>
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {timeline.map((event, i) => (
            <div
              key={event.year}
              className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <span className={styles.timelineYear}>{event.year}</span>
                <h4 className={styles.timelineEventTitle}>{event.title}</h4>
                <p className={styles.timelineDesc}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
