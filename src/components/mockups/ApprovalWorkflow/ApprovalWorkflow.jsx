import { tabs, activeTab, summary, requests } from './data.js';
import styles from './ApprovalWorkflow.module.css';

export default function ApprovalWorkflow() {
  return (
    <div className={styles.window} aria-hidden="true">
      <nav className={styles.tabs}>
        {tabs.map((t) => (
          <span key={t} className={`${styles.tab} ${t === activeTab ? styles.tabActive : ''}`}>
            <i className={styles.tabIcon} />
            {t}
          </span>
        ))}
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <span className={styles.heroIcon}>✓</span>
          Approval Workflows
        </div>
        <p className={styles.heroText}>
          Manage requests, reimbursements, vendor payments, and budget approvals
          <br />
          across your organization.
        </p>
        <div className={styles.summary}>
          {summary.map((s) => (
            <div key={s.label}>
              <p className={`${styles.summaryValue} ${styles[s.tone]}`}>{s.value}</p>
              <p className={styles.summaryLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.list}>
        <p className={styles.listTitle}>Pending requests</p>
        <ul>
          {requests.map((r) => (
            <li key={r.initials} className={styles.request}>
              <span className={styles.initials}>{r.initials}</span>
              <div className={styles.requestBody}>
                <p className={styles.requestTitle}>{r.title}</p>
                <p className={styles.requestMeta}>{r.meta}</p>
              </div>
              <span className={styles.amount}>{r.amount}</span>
              {r.tag && <span className={`${styles.tag} ${styles[r.tag]}`}>{r.tag === 'urgent' ? '• Urgent' : '✓'}</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
