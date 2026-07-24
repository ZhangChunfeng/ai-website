import { useState } from 'react';
import { quickStarts, apiTutorials, projects, resources, faq } from '../../data/aiTutorials';
import styles from './AITutorials.module.css';

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeLang}>{language}</span>
        <button className={styles.copyBtn} onClick={handleCopy}>
          {copied ? '✅ 已复制' : '📋 复制'}
        </button>
      </div>
      <pre className={styles.codePre}><code>{code}</code></pre>
    </div>
  );
}

export default function AITutorials() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeApi, setActiveApi] = useState(0);

  return (
    <>
      <h2 className="section-title">AI 开发教程</h2>
      <p className="section-subtitle">从零基础到进阶，手把手教你构建 AI 应用</p>

      {/* Quick Start */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.blockTitle}>📋 学习路径</h3>
        <div className={styles.tabBar}>
          {quickStarts.map((qs, i) => (
            <button
              key={qs.title}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabIcon}>{qs.icon}</span>
              <span>{qs.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          <div className={styles.pathHeader}>
            <span className={styles.pathTarget}>👤 适合：{quickStarts[activeTab].target}</span>
            <span className={styles.pathTime}>⏱️ {quickStarts[activeTab].timeEstimate}</span>
          </div>
          <ol className={styles.stepList}>
            {quickStarts[activeTab].steps.map((step, i) => (
              <li key={i} className={styles.stepItem}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* API Tutorials */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.blockTitle}>🔌 API 调用教程</h3>
        <div className={styles.apiTabs}>
          {apiTutorials.map((t, i) => (
            <button
              key={t.title}
              className={`${styles.apiTab} ${activeApi === i ? styles.apiTabActive : ''}`}
              onClick={() => setActiveApi(i)}
            >
              <span>{t.icon}</span>
              <span>{t.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.apiContent}>
          <CodeBlock code={apiTutorials[activeApi].code} language={apiTutorials[activeApi].language} />
          <div className={styles.apiExplain}>
            <strong>💡 说明：</strong>{apiTutorials[activeApi].explanation}
          </div>
          {apiTutorials[activeApi].docs && (
            <a
              href={apiTutorials[activeApi].docs}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.apiDocLink}
            >
              📖 完整文档 →
            </a>
          )}
        </div>
      </div>

      {/* Projects */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.blockTitle}>🛠️ 实战项目</h3>
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <span className={styles.projectIcon}>{p.icon}</span>
                <div>
                  <h4 className={styles.projectTitle}>{p.title}</h4>
                  <span className={`${styles.projectLevel} ${p.level === '入门' ? styles.levelBeginner : p.level === '中级' ? styles.levelMid : styles.levelAdv}`}>
                    {p.level}
                  </span>
                </div>
              </div>
              <p className={styles.projectDesc}>{p.description}</p>
              <div className={styles.projectTags}>
                {p.techStack.map((t) => (
                  <span key={t} className={styles.projectTag}>{t}</span>
                ))}
              </div>
              <ul className={styles.projectFeatures}>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.blockTitle}>📚 学习资源</h3>
        <div className={styles.resourceGrid}>
          {resources.map((r) => (
            <div key={r.category} className={styles.resourceCard}>
              <h4 className={styles.resourceTitle}>
                <span>{r.icon}</span> {r.category}
              </h4>
              <ul className={styles.resourceList}>
                {r.links.map((l) => (
                  <li key={l.name}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.blockTitle}>❓ 常见问题</h3>
        <div className={styles.faqList}>
          {faq.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <p className={styles.faqA}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
