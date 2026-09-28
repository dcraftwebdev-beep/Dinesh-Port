import { NavLink } from 'react-router-dom';
import { navLinks } from '@/config/site.js';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.list}>
        {navLinks.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
