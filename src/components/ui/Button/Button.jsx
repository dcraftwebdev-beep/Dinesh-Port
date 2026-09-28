import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Button.module.css';

/**
 * variant: 'primary' | 'secondary'
 * icon: optional Icon name revealed on the right on hover.
 * size: 'md' (default) | 'sm'
 * Pass `to` for internal routes, `href` for external/anchor links.
 */
export default function Button({ variant = 'primary', size = 'md', icon, to, href, className = '', children, ...rest }) {
  const classes = `${styles.button} ${styles[variant]} ${size === 'sm' ? styles.sm : ''} ${className}`;

  const content = (
    <>
      <span className={styles.sheen} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          <Icon name={icon} size={variant === 'secondary' ? 13 : 15} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
