import { Link } from 'react-router-dom';
import useScrollSpy from '@/hooks/useScrollSpy.js';
import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './CaseNav.module.css';

/** Sticky pill nav: back link (Projects, or Experiments for concepts and ideas) + in-page section anchors with scroll-spy. */
export default function CaseNav({ sections, back = { to: '/', label: 'Projects' } }) {
  const ids = sections.map((s) => s.id);
  const activeId = useScrollSpy(ids);

  const scrollTo = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className={styles.wrap}>
      <nav className={styles.nav} aria-label="Case study sections">
        <Link to={back.to} className={styles.back}>
          <Icon name="arrowLeft" size={14} />
          {back.label}
        </Link>
        <span className={styles.divider} aria-hidden="true" />
        <ul className={styles.list}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollTo(e, id)}
                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
