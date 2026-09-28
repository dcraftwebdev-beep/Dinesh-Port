import { AdPeekLogo } from '../AdPeekPanel/AdPeekPanel.jsx';
import { collections, saves } from './data.js';
import styles from './AdPeekSwipe.module.css';

/** Swipe file: every saved ad in one board, grouped into collections. */
export default function AdPeekSwipe() {
  return (
    <div className={styles.window} aria-hidden="true">
      <aside className={styles.side}>
        <div className={styles.brand}>
          <AdPeekLogo />
          <b>AdPeek</b>
        </div>
        <p className={styles.caption}>Swipe file</p>
        {collections.map((c) => (
          <span key={c.label} className={`${styles.collection} ${c.active ? styles.active : ''}`}>
            {c.label}
            <em>{c.count}</em>
          </span>
        ))}
        <span className={styles.share}>Share with team</span>
      </aside>

      <div className={styles.main}>
        <div className={styles.top}>
          <p className={styles.title}>All saves</p>
          <span className={styles.search}>Search hooks, brands, offers</span>
        </div>

        <div className={styles.grid}>
          {saves.map((s) => (
            <div key={s.text} className={styles.tile}>
              <div className={`${styles.creative} ${styles[s.tone]}`}>
                <p>{s.text}</p>
              </div>
              <div className={styles.info}>
                <b>{s.brand}</b>
                <span>{s.days}d</span>
              </div>
              <span className={styles.tag}>{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
