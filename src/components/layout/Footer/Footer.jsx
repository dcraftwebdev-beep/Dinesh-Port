import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container/Container.jsx';
import Avatar from '@/components/ui/Avatar/Avatar.jsx';
import Icon from '@/components/ui/Icon/Icon.jsx';
import { site, footerLinks, socialLinks } from '@/config/site.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.divider} />
        <div className={styles.grid}>
          <div className={styles.about}>
            <Link to="/" className={styles.brand}>
              <Avatar src={site.avatar} name={site.name} initials={site.initials} size="sm" />
              <span className={styles.name}>{site.name}</span>
            </Link>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.copyright}>
              {site.copyright}
              <Icon name="external" size={15} />
            </p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.heading}>Links</h2>
            <ul className={styles.links}>
              {footerLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className={styles.link}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.heading}>Contact</h2>
            <ul className={styles.links}>
              <li>
                <a href={`mailto:${site.email}`} className={styles.link}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.scheduleUrl} target="_blank" rel="noreferrer" className={styles.link}>
                  Schedule a call
                </a>
              </li>
            </ul>
            <ul className={styles.socials}>
              {socialLinks.map(({ label, icon, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={styles.social}>
                    <Icon name={icon} size={27} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
