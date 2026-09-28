import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container/Container.jsx';
import Avatar from '@/components/ui/Avatar/Avatar.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { site } from '@/config/site.js';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label={`${site.name}, home`}>
          <Avatar src={site.avatar} name={site.name} initials={site.initials} size="lg" />
        </Link>
        <Navbar />
      </Container>
    </header>
  );
}
