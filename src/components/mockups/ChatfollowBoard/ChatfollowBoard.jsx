import { ChatfollowLogo } from '../ChatfollowInbox/ChatfollowInbox.jsx';
import styles from './ChatfollowBoard.module.css';

// Fictional leads
const columns = [
  { stage: 'New', tone: 'blue', leads: [{ name: 'Arun K.', value: '₹45,000', note: 'Asked for price list' }, { name: 'Kavya P.', value: '₹1,10,000', note: 'From website form' }] },
  { stage: 'Quoted', tone: 'purple', leads: [{ name: 'Priya S.', value: '₹2,40,000', note: 'Quiet for 3 days', warn: true }, { name: 'Divya M.', value: '₹80,000', note: 'Quote sent Monday' }] },
  { stage: 'Follow up', tone: 'orange', leads: [{ name: 'Suresh V.', value: '₹1,60,000', note: 'Site visit on Saturday' }] },
  { stage: 'Won', tone: 'green', leads: [{ name: 'Meena R.', value: '₹95,000', note: 'Advance received' }, { name: 'Rahul T.', value: '₹3,20,000', note: 'Work starts 12th' }] },
];

/** Pipeline board built from WhatsApp chats, with today's follow ups on top. */
export default function ChatfollowBoard() {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.head}>
        <ChatfollowLogo />
        <div>
          <p className={styles.title}>Good morning. 4 people are waiting on you.</p>
          <p className={styles.sub}>12 open leads · ₹10,50,000 in the pipeline</p>
        </div>
        <span className={styles.pill}>This week</span>
      </div>

      <div className={styles.columns}>
        {columns.map((c) => (
          <div key={c.stage} className={styles.column}>
            <p className={styles.colHead}>
              <i className={styles[c.tone]} />
              {c.stage}
              <em>{c.leads.length}</em>
            </p>
            {c.leads.map((l) => (
              <div key={l.name} className={styles.card}>
                <p><b>{l.name}</b><span>{l.value}</span></p>
                <em className={l.warn ? styles.warn : undefined}>{l.note}</em>
                <span className={styles.open}>Open chat</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
