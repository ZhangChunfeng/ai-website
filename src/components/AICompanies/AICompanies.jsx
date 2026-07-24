import { globalCompanies, chineseCompanies } from '../../data/aiCompanies';
import styles from './AICompanies.module.css';

function CompanyCard({ company, type }) {
  return (
    <div className={`${styles.card} ${type === 'china' ? styles.chinaCard : ''} stagger-card`}>
      <div className={styles.cardHeader}>
        <span className={styles.logo}>{company.logo}</span>
        <div>
          <h3 className={styles.name}>{company.name}</h3>
          <span className={styles.meta}>
            {company.country || company.city} · {company.founded}
          </span>
        </div>
        {company.valuation && (
          <span className={styles.valuation}>{company.valuation}</span>
        )}
      </div>

      <p className={styles.desc}>{company.description}</p>

      <div className={styles.products}>
        <span className={styles.label}>核心产品：</span>
        {company.keyProducts.map((p) => (
          <span key={p} className={styles.tag}>{p}</span>
        ))}
      </div>

      <div className={styles.footer}>
        {company.impact && (
          <div className={styles.impact}>
            <span className={styles.impactIcon}>⚡</span>
            {company.impact}
          </div>
        )}
        {company.advantage && (
          <div className={styles.advantage}>
            <span className={styles.impactIcon}>🏆</span>
            {company.advantage}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AICompanies() {
  return (
    <>
      <h2 className="section-title">顶尖 AI 公司</h2>
      <p className="section-subtitle">驱动全球 AI 浪潮的引领者——从硅谷到北京</p>

      {/* Global */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🌍</span>
          全球顶尖 AI 公司
        </h3>
        <div className={styles.grid}>
          {globalCompanies.map((c) => (
            <CompanyCard key={c.name} company={c} type="global" />
          ))}
        </div>
      </div>

      {/* China */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🇨🇳</span>
          中国顶尖 AI 公司
        </h3>
        <div className={styles.grid}>
          {chineseCompanies.map((c) => (
            <CompanyCard key={c.name} company={c} type="china" />
          ))}
        </div>
      </div>
    </>
  );
}
