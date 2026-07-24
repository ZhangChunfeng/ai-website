import { useState, useEffect, useRef, useMemo } from 'react';
import { definitions, timeline } from '../../data/aiHistory';
import { models } from '../../data/aiModels';
import { applications } from '../../data/aiApplications';
import { globalCompanies, chineseCompanies } from '../../data/aiCompanies';
import { topics as ethicsTopics } from '../../data/aiEthics';
import { tips, examples } from '../../data/promptEngineering';
import { glossary } from '../../data/glossary';
import { quickStarts, apiTutorials, projects } from '../../data/aiTutorials';
import styles from './SearchBar.module.css';

// Build search index from all content
const searchIndex = [
  ...definitions.map((d) => ({ type: 'AI基础', section: 'history', text: `${d.term} ${d.description}` })),
  ...timeline.map((t) => ({ type: 'AI历史', section: 'history', text: `${t.year} ${t.title} ${t.description}` })),
  ...models.map((m) => ({ type: 'AI模型', section: 'models', text: `${m.name} ${m.company} ${m.description} ${m.strengths.join(' ')} ${m.useCases.join(' ')}` })),
  ...applications.map((a) => ({ type: '应用场景', section: 'applications', text: `${a.field} ${a.description} ${a.highlights.join(' ')} ${a.tools.join(' ')}` })),
  ...[...globalCompanies, ...chineseCompanies].map((c) => ({ type: 'AI公司', section: 'companies', text: `${c.name} ${c.description} ${c.keyProducts.join(' ')}` })),
  ...ethicsTopics.map((t) => ({ type: 'AI伦理', section: 'ethics', text: `${t.title} ${t.description}` })),
  ...tips.map((t) => ({ type: '提示词', section: 'prompts', text: `${t.title} ${t.description}` })),
  ...examples.map((e) => ({ type: '提示词示例', section: 'prompts', text: `${e.label} ${e.prompt} ${e.problem || ''} ${e.reason || ''}` })),
  ...glossary.map((g) => ({ type: '术语', section: 'glossary', text: `${g.term} ${g.def}` })),
  ...quickStarts.map((q) => ({ type: '教程', section: 'tutorials', text: `${q.title} ${q.target} ${q.steps.join(' ')}` })),
  ...apiTutorials.map((a) => ({ type: 'API教程', section: 'tutorials', text: `${a.title} ${a.explanation}` })),
  ...projects.map((p) => ({ type: '项目', section: 'tutorials', text: `${p.title} ${p.description} ${p.techStack.join(' ')}` })),
];

export default function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter((item) => item.text.toLowerCase().includes(q))
      .slice(0, 20);
  }, [query]);

  const handleResultClick = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputRow}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="搜索 AI 知识...（Ctrl+K 打开）"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {query.trim() && (
          <div className={styles.results}>
            {results.length === 0 ? (
              <p className={styles.empty}>未找到相关内容</p>
            ) : (
              <>
                <p className={styles.count}>找到 {results.length} 条结果</p>
                <ul className={styles.list}>
                  {results.map((r, i) => (
                    <li key={i} className={styles.item}>
                      <button className={styles.itemBtn} onClick={() => handleResultClick(r.section)}>
                        <span className={styles.itemType}>{r.type}</span>
                        <span className={styles.itemText}>{r.text.slice(0, 120)}{r.text.length > 120 ? '...' : ''}</span>
                        <span className={styles.itemJump}>→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {!query.trim() && (
          <div className={styles.hint}>
            <p>输入关键词搜索全站内容</p>
            <p className={styles.hintKeys}>
              <kbd>Ctrl+K</kbd> 打开 · <kbd>Esc</kbd> 关闭 · <kbd>↑↓</kbd> 导航
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
