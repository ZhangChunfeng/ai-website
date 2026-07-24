import { models } from '../../data/aiModels';
import styles from './AIModels.module.css';

const categoryColors = {
  llm: '#6C5CE7',
  image: '#FD79A8',
  code: '#00CEC9',
  video: '#FDCB6E',
  audio: '#55EFC4',
};

const categoryLabels = {
  llm: '大语言模型',
  image: '图像生成',
  code: '代码工具',
  video: '视频生成',
  audio: '音乐生成',
};

export default function AIModels() {
  return (
    <>
      <h2 className="section-title">主流 AI 模型与工具</h2>
      <p className="section-subtitle">了解当前最具影响力的 AI 模型和工具，找到最适合你的那一款</p>

      <div className={styles.grid}>
        {models.map((model) => (
          <div
            key={model.name}
            className={`${styles.card} stagger-card`}
            style={{ borderTopColor: categoryColors[model.category] }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.modelName}>{model.name}</h3>
              <span
                className={styles.categoryBadge}
                style={{
                  background: `${categoryColors[model.category]}20`,
                  color: categoryColors[model.category],
                }}
              >
                {categoryLabels[model.category]}
              </span>
            </div>

            <div className={styles.company}>
              <span className={styles.companyLabel}>开发方</span>
              <span className={styles.companyName}>{model.company}</span>
            </div>

            {model.description && (
              <p className={styles.modelDesc}>{model.description}</p>
            )}

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>核心优势</h4>
              <ul className={styles.list}>
                {model.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>适用场景</h4>
              <div className={styles.tags}>
                {model.useCases.map((u) => (
                  <span key={u} className={styles.tag}>{u}</span>
                ))}
              </div>
            </div>

            <div className={styles.footer}>
              <span className={styles.pricing}>{model.pricing}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
