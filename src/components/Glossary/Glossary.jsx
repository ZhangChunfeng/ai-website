import { useState, useMemo } from 'react';
import { glossary } from '../../data/glossary';
import styles from './Glossary.module.css';

// Group by first letter (computed once at module level)
const groups = (() => {
  const map = {};
  glossary.forEach((g) => {
    const key = /[A-Za-z]/.test(g.term[0]) ? g.term[0].toUpperCase() : '#';
    if (!map[key]) map[key] = [];
    map[key].push(g);
  });
  return map;
})();

const sortedKeys = Object.keys(groups).sort((a, b) => {
  if (a === '#') return 1;
  if (b === '#') return -1;
  return a.localeCompare(b);
});

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeKey, setActiveKey] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return glossary.filter(
      (g) => g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <>
      <h2 className="section-title">AI 术语速查表</h2>
      <p className="section-subtitle">35 个核心 AI 术语，快速查阅</p>

      {/* Search */}
      <div className={styles.searchWrap}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="🔍 搜索术语（如 embedding、rag、幻觉...）"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Search results */}
      {filtered && (
        <div className={styles.results}>
          {filtered.length === 0 ? (
            <p className={styles.noResult}>未找到匹配的术语</p>
          ) : (
            <dl className={styles.termsList}>
              {filtered.map((g) => (
                <div key={g.term} className={styles.termItem}>
                  <dt className={styles.termName}>{g.term}</dt>
                  <dd className={styles.termDef}>{g.def}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}

      {/* Alphabet nav */}
      {!search.trim() && (
        <>
          <div className={styles.alphaNav}>
            {sortedKeys.map((k) => (
              <button
                key={k}
                className={`${styles.alphaBtn} ${activeKey === k ? styles.alphaBtnActive : ''}`}
                onClick={() => setActiveKey(k === activeKey ? '' : k)}
              >
                {k}
              </button>
            ))}
          </div>

          {/* Terms by letter */}
          <div className={styles.termsByLetter}>
            {(activeKey ? [activeKey] : sortedKeys).map((key) => (
              <div key={key} className={styles.letterGroup}>
                <h3 className={styles.letterHeading}>{key === '#' ? '中文 / 数字' : key}</h3>
                <dl className={styles.termsList}>
                  {groups[key].map((g) => (
                    <div key={g.term} className={styles.termItem}>
                      <dt className={styles.termName}>{g.term}</dt>
                      <dd className={styles.termDef}>{g.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
