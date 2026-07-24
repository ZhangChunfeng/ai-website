import { tips, examples } from '../../data/promptEngineering';
import styles from './PromptEngineering.module.css';

export default function PromptEngineering() {
  return (
    <>
      <h2 className="section-title">提示词工程</h2>
      <p className="section-subtitle">掌握与 AI 高效沟通的艺术——好的 Prompt 是获得好结果的关键</p>

      {/* Tips grid */}
      <div className={styles.tipsGrid}>
        {tips.map((tip) => (
          <div key={tip.title} className={`${styles.tipCard} stagger-card`}>
            <span className={styles.tipIcon}>{tip.icon}</span>
            <h3 className={styles.tipTitle}>{tip.title}</h3>
            <p className={styles.tipDesc}>{tip.description}</p>
          </div>
        ))}
      </div>

      {/* Good vs Bad examples — paired by topic */}
      <div className={styles.examplesSection}>
        <h3 className={styles.examplesTitle}>📊 对比示例：好的 Prompt vs 差的 Prompt</h3>
        <div className={styles.examplesList}>
          {Array.from({ length: Math.ceil(examples.length / 2) }, (_, i) => {
            const bad = examples[i * 2];
            const good = examples[i * 2 + 1];
            return (
              <div key={i} className={styles.examplePair}>
                {bad && (
                  <div className={`${styles.exampleCard} ${styles.bad}`}>
                    <div className={styles.exampleHeader}>
                      <span className={styles.exampleLabel}>{bad.label}</span>
                    </div>
                    <div className={styles.examplePrompt}>
                      <code>{bad.prompt}</code>
                    </div>
                    {bad.problem && (
                      <div className={styles.exampleNote}>
                        <p><strong>问题：</strong>{bad.problem}</p>
                      </div>
                    )}
                  </div>
                )}
                {good && (
                  <div className={`${styles.exampleCard} ${styles.good}`}>
                    <div className={styles.exampleHeader}>
                      <span className={styles.exampleLabel}>{good.label}</span>
                    </div>
                    <div className={styles.examplePrompt}>
                      <code>{good.prompt}</code>
                    </div>
                    {good.reason && (
                      <div className={styles.exampleNote}>
                        <p><strong>原因：</strong>{good.reason}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Best practices summary */}
      <div className={styles.summary}>
        <h3 className={styles.summaryTitle}>💡 黄金法则</h3>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <strong>具体＞模糊</strong>
            <p>越具体、越详细的指令，AI 的输出越符合预期</p>
          </div>
          <div className={styles.summaryItem}>
            <strong>迭代＞完美</strong>
            <p>不要期望一次完美，好的 Prompt 是反复优化出来的</p>
          </div>
          <div className={styles.summaryItem}>
            <strong>示例＞描述</strong>
            <p>给出例子比描述要求更高效——AI 是模仿大师</p>
          </div>
          <div className={styles.summaryItem}>
            <strong>分步＞一次</strong>
            <p>复杂任务拆成多步，每一步的准确率远高于一步到位</p>
          </div>
        </div>
      </div>
    </>
  );
}
