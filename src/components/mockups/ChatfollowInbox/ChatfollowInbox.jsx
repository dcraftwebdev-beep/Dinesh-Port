import { chats, messages, stages, fields } from './data.js';
import styles from './ChatfollowInbox.module.css';

const stageClass = { New: 'blue', Quoted: 'purple', Won: 'green', 'Follow up': 'orange', Lost: 'grey' };

export function ChatfollowLogo({ className = '' }) {
  return (
    <span className={`${styles.logo} ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.1-3.6A8 8 0 0 1 4 12Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </span>
  );
}

export function StageTag({ stage }) {
  return <span className={`${styles.tag} ${styles[stageClass[stage]]}`}>{stage}</span>;
}

/** WhatsApp Web style inbox with lead stages and the Chatfollow sidebar. */
export default function ChatfollowInbox() {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.list}>
        <p className={styles.listTitle}>Chats</p>
        <div className={styles.filters}>
          <span>All</span>
          <span>Leads</span>
          <span className={styles.filterActive}>Follow up · 4</span>
        </div>
        {chats.map((c) => (
          <div key={c.name} className={`${styles.chat} ${c.active ? styles.chatActive : ''}`}>
            <span className={styles.avatar}>{c.name[0]}</span>
            <div className={styles.chatText}>
              <p><b>{c.name}</b><em>{c.time}</em></p>
              <span>{c.text}</span>
              <StageTag stage={c.stage} />
            </div>
            {c.unread && <i className={styles.unread}>{c.unread}</i>}
          </div>
        ))}
      </div>

      <div className={styles.thread}>
        <div className={styles.threadHead}>
          <span className={styles.avatar}>P</span>
          <b>Priya S.</b>
        </div>
        <div className={styles.messages}>
          {messages.map((m, i) => (
            <p key={i} className={m.from === 'me' ? styles.me : styles.them}>
              {m.file ? <span className={styles.file}>📄 {m.file}</span> : m.text}
            </p>
          ))}
        </div>
        <div className={styles.compose}>Type a message</div>
      </div>

      <div className={styles.side}>
        <div className={styles.sideHead}>
          <ChatfollowLogo />
          <b>Chatfollow</b>
        </div>
        <p className={styles.label}>Stage</p>
        <div className={styles.stages}>
          {stages.map((s) => (
            <span key={s} className={s === 'Quoted' ? styles.stageActive : undefined}>{s}</span>
          ))}
        </div>
        {fields.map((f) => (
          <div key={f.label} className={styles.field}>
            <span>{f.label}</span>
            <b className={f.warn ? styles.warn : undefined}>{f.value}</b>
          </div>
        ))}
        <div className={styles.reminder}>
          <p>Follow up</p>
          <b>Tomorrow, 11:00 AM</b>
          <span>“Ask if partner approved the estimate”</span>
        </div>
        <span className={styles.button}>Save lead</span>
      </div>
    </div>
  );
}
