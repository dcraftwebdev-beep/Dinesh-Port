import { usage, cardStatus, actions, controls } from './data.js';
import styles from './CardSettings.module.css';

/** Card overview, status and security controls — reused inside CardShowcase. */
export function CardSettingsContent() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.card}>
          <div className={styles.cardRow}>
            <span className={styles.brand}>
              <i />
              Polaris
            </span>
            <span className={styles.network}>
              <i />
              <i />
            </span>
          </div>
          <span className={styles.chip} />
          <p className={styles.number}>•••• &nbsp;•••• &nbsp;•••• &nbsp;4821</p>
          <div className={styles.cardRow}>
            <div>
              <p className={styles.cardLabel}>Card holder</p>
              <p className={styles.cardValue}>Alex Kim</p>
            </div>
            <div>
              <p className={styles.cardLabel}>Expires</p>
              <p className={styles.cardValue}>08/28</p>
            </div>
            <span className={styles.visa}>VISA</span>
          </div>
        </div>

        <div className={styles.side}>
          <div className={styles.panel}>
            <p className={styles.label}>Card usage</p>
            <div className={styles.row}>
              <span className={styles.muted}>Spent this month</span>
              <span className={styles.value}>{usage.spent}</span>
            </div>
            <div className={styles.track}>
              <span style={{ width: `${usage.pct}%` }} />
            </div>
            <div className={styles.row}>
              <span className={styles.faint}>{usage.limitText}</span>
              <span className={styles.green}>{usage.left}</span>
            </div>
          </div>

          <div className={styles.panel}>
            <p className={styles.label}>Card status</p>
            {cardStatus.map((d) => (
              <div key={d.label} className={styles.statusRow}>
                <span className={styles.muted}>{d.label}</span>
                <span className={`${styles.value} ${d.tone ? styles.green : ''}`}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        {actions.map((a) => (
          <span key={a.label} className={`${styles.action} ${a.active ? styles.actionActive : ''}`}>
            <i />
            {a.label}
          </span>
        ))}
      </div>

      <div className={styles.panel}>
        <p className={styles.label}>Security controls</p>
        {controls.map((c) => (
          <div key={c.title} className={styles.control}>
            <div>
              <p className={styles.controlTitle}>{c.title}</p>
              <p className={styles.controlText}>{c.text}</p>
            </div>
            <span className={`${styles.toggle} ${c.on ? styles.on : ''}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CardSettings() {
  return (
    <div className={styles.window} aria-hidden="true">
      <CardSettingsContent />
    </div>
  );
}
