import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import styles from './SkillList.module.css';

function Chips({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((skill) => (
        <li key={skill} className={styles.skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

/** Skill chips — pass plain strings, or groups of { label, items } for labelled rows. */
export default function SkillList({ items }) {
  const grouped = typeof items[0] === 'object';

  if (!grouped) {
    return (
      <Reveal>
        <Chips items={items} />
      </Reveal>
    );
  }

  return (
    <div className={styles.groups}>
      {items.map((group, i) => (
        <Reveal key={group.label} delay={i * 50} className={styles.group}>
          <h3 className={styles.label}>{group.label}</h3>
          <Chips items={group.items} />
        </Reveal>
      ))}
    </div>
  );
}
