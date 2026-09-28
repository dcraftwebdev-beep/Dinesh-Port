import { AdPeekLogo } from '../AdPeekPanel/AdPeekPanel.jsx';
import { weeks, offers, hooks, winners, pages } from './data.js';
import styles from './AdPeekInsights.module.css';

const TOTAL_WEEKS = 13;

/** Competitor insights: offer timeline, hooks, longest running ads and landing pages. */
export default function AdPeekInsights() {
  const maxHook = Math.max(...hooks.map((h) => h.count));
  const maxDays = Math.max(...winners.map((w) => w.days));

  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.head}>
        <AdPeekLogo />
        <div>
          <p className={styles.title}>What Brewly is testing</p>
          <p className={styles.sub}>brewly.in · last 90 days · 24 live ads</p>
        </div>
        <span className={styles.pill}>Meta + Google</span>
      </div>

      <div className={`${styles.card} ${styles.timeline}`}>
        <p className={styles.label}>Offer timeline</p>
        <div className={styles.weeks}>
          {weeks.map((w) => <span key={w}>{w}</span>)}
        </div>
        {offers.map((o) => (
          <div key={o.label} className={styles.track}>
            <span
              className={`${styles.bar} ${styles[o.tone]}`}
              style={{ left: `${(o.start / TOTAL_WEEKS) * 100}%`, width: `${(o.length / TOTAL_WEEKS) * 100}%` }}
            >
              {o.label}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.row}>
        <div className={styles.card}>
          <p className={styles.label}>Top hooks</p>
          {hooks.map((h) => (
            <div key={h.label} className={styles.hook}>
              <span>{h.label}</span>
              <i><b style={{ width: `${(h.count / maxHook) * 100}%` }} /></i>
              <em>{h.count}</em>
            </div>
          ))}
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Longest running <small>likely winners</small></p>
          {winners.map((w, i) => (
            <div key={w.hook} className={styles.winner}>
              <span className={styles.rank}>{i + 1}</span>
              <div>
                <p>{w.hook}</p>
                <i><b style={{ width: `${(w.days / maxDays) * 100}%` }} /></i>
              </div>
              <em>{w.days}d</em>
            </div>
          ))}
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Landing pages</p>
          {pages.map((p) => (
            <div key={p.path} className={styles.page}>
              <span className={styles.thumb} />
              <p>{p.path}</p>
              <em>{p.ads} ads</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
