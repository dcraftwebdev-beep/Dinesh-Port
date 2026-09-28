import { stats, tabs, ads } from './data.js';
import styles from './AdPeekPanel.module.css';

export function AdPeekLogo({ className = '' }) {
  return (
    <span className={`${styles.logo} ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.8" />
      </svg>
    </span>
  );
}

/** Browser with a competitor's site on the left and the AdPeek side panel on the right. */
export default function AdPeekPanel() {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.bar}>
        <span className={styles.dots}><i /><i /><i /></span>
        <span className={styles.url}>brewly.in</span>
        <AdPeekLogo className={styles.barIcon} />
      </div>

      <div className={styles.body}>
        {/* Competitor site */}
        <div className={styles.site}>
          <div className={styles.siteNav}>
            <b>brewly</b>
            <span><i /><i /><i /></span>
          </div>
          <p className={styles.siteTag}>New · Hazelnut cold brew</p>
          <p className={styles.siteTitle}>Cold brew that actually wakes you up</p>
          <span className={styles.siteCta}>Shop now</span>
          <div className={styles.bottles}>
            <span /><span /><span />
          </div>
        </div>

        {/* AdPeek panel */}
        <div className={styles.panel}>
          <div className={styles.head}>
            <AdPeekLogo />
            <div>
              <p className={styles.name}>AdPeek</p>
              <p className={styles.domain}>brewly.in</p>
            </div>
            <span className={styles.live}>Live</span>
          </div>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.tabs}>
            {tabs.map((t, i) => (
              <span key={t} className={i === 0 ? styles.tabActive : undefined}>{t}</span>
            ))}
          </div>

          <div className={styles.list}>
            {ads.map((a) => (
              <div key={a.hook} className={styles.ad}>
                <span className={`${styles.thumb} ${styles[a.tone]}`} />
                <div className={styles.adText}>
                  <p>{a.hook}</p>
                  <span>
                    <em className={a.platform === 'Google' ? styles.google : styles.meta}>{a.platform}</em>
                    Running {a.days} days
                  </span>
                </div>
                <span className={`${styles.save} ${a.saved ? styles.saved : ''}`}>
                  <svg viewBox="0 0 24 24" fill={a.saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
                    <path d="M6 3h12v18l-6-4-6 4Z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>

          <span className={styles.button}>Open swipe file</span>
        </div>
      </div>
    </div>
  );
}
