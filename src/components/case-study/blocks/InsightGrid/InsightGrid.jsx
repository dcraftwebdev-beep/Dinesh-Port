import styles from './InsightGrid.module.css';

const icons = {
  eye: <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z M12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z" />,
  layers: <path d="M12 3.5l9 4.75-9 4.75-9-4.75zM3 12.5l9 4.75 9-4.75M3 16.5l9 4.75 9-4.75" />,
  search: <path d="M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM15.5 15.5 20 20" />,
  sliders: <path d="M4 7h10M18 7h2M4 17h4M12 17h8M14 4.5v5M8 14.5v5" />,
};

/** 2-column grid of insight/outcome cards; items may carry an `icon`. */
export default function InsightGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.title ?? item.text} className={styles.card}>
          {item.icon && (
            <span className={styles.icon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {icons[item.icon]}
              </svg>
            </span>
          )}
          <div>
            {item.title && <p className={styles.title}>{item.title}</p>}
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
