import styles from './LegacyDashboard.module.css';

const items = [
  { name: 'Starbucks', meta: 'Food & Drink', amount: '−$12.40', tone: 'orange' },
  { name: 'Apple.com', meta: 'Subscriptions', amount: '−$14.99', tone: 'blue' },
  { name: 'Uber', meta: 'Transport', amount: '−$24.50', tone: 'grey' },
  { name: 'Whole Foods', meta: 'Groceries', amount: '−$84.20', tone: 'green' },
  { name: 'Netflix', meta: 'Entertainment', amount: '−$15.99', tone: 'red' },
];

/** The original, flatter dashboard used as the "before" state. */
export default function LegacyDashboard() {
  return (
    <div className={styles.window} aria-hidden="true">
      <p className={styles.greeting}>Good morning, Alex</p>
      <p className={styles.sub}>Here&rsquo;s what&rsquo;s happening with your account today.</p>

      <div className={styles.balance}>
        <p className={styles.label}>Total balance</p>
        <p className={styles.amount}>
          $1,560.5 <span>USD</span>
        </p>
        <div className={styles.track}>
          <span />
        </div>
        <div className={styles.grid}>
          <div>
            <p className={styles.label}>Limit</p>
            <p className={styles.value}>$5,000</p>
          </div>
          <div>
            <p className={styles.label}>Due</p>
            <p className={styles.value}>May 14</p>
          </div>
        </div>
      </div>

      <p className={styles.section}>Recent activity</p>
      <ul>
        {items.map((i) => (
          <li key={i.name} className={styles.item}>
            <span className={`${styles.icon} ${styles[i.tone]}`} />
            <div>
              <p className={styles.name}>{i.name}</p>
              <p className={styles.meta}>{i.meta}</p>
            </div>
            <span className={styles.itemAmount}>{i.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
