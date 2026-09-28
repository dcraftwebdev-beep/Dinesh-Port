import { balance, weeklySpending, activity } from './data.js';
import styles from './FinanceDashboard.module.css';

export default function FinanceDashboard() {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.balanceCard}>
        <div className={styles.row}>
          <div>
            <p className={styles.eyebrow}>Current balance</p>
            <p className={styles.amount}>
              {balance.amount}
              <span className={styles.of}>of {balance.limit}</span>
            </p>
          </div>
          <span className={styles.cardIcon}>
            <span />
          </span>
        </div>

        <div className={`${styles.row} ${styles.creditRow}`}>
          <span>Credit used</span>
          <span className={styles.strong}>{balance.used}%</span>
        </div>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${balance.used}%` }} />
        </div>

        <div className={`${styles.row} ${styles.noteRow}`}>
          <span>You&rsquo;ve used 25% of your limit. Looking healthy.</span>
          <span className={styles.payButton}>Pay balance →</span>
        </div>

        <div className={styles.stats}>
          {balance.stats.map((s) => (
            <div key={s.label}>
              <p className={styles.statLabel}>{s.label}</p>
              <p className={styles.statValue}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.panel}>
          <div className={styles.row}>
            <p className={styles.panelTitle}>Weekly spending</p>
            <p className={styles.hint}>Hover bars</p>
          </div>
          <p className={styles.spend}>
            $482 <span className={styles.badge}>↗ +18% vs last week</span>
          </p>
          <div className={styles.chart}>
            <span className={styles.avgLine} />
            {weeklySpending.map((d) => (
              <div key={d.day} className={styles.barCol}>
                <span
                  className={`${styles.bar} ${d.above ? styles.barDark : ''}`}
                  style={{ height: `${d.value}px` }}
                />
                <span className={styles.barLabel}>{d.day}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.row} ${styles.legend}`}>
            <span>
              <i className={styles.dotDark} /> Above avg <i className={styles.dotLight} /> Below avg
            </span>
            <span>avg $69/day</span>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.row}>
            <p className={styles.panelTitle}>Recent activity</p>
            <p className={styles.hint}>View all →</p>
          </div>
          <ul className={styles.activity}>
            {activity.map((a) => (
              <li key={a.name} className={styles.activityItem}>
                <span className={`${styles.merchantIcon} ${styles[a.tone]}`} />
                <div className={styles.merchant}>
                  <p className={styles.merchantName}>{a.name}</p>
                  <p className={styles.merchantMeta}>{a.category}</p>
                </div>
                <div className={styles.txn}>
                  <p className={styles.merchantName}>{a.amount}</p>
                  <p className={styles.merchantMeta}>{a.date}</p>
                </div>
                <span className={styles.chevron}>⌄</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
