import styles from './Container.module.css';

/** size: 'wide' (default, home grid) | 'narrow' (reading width for case studies) */
export default function Container({ as: Tag = 'div', size = 'wide', className = '', children, ...rest }) {
  return (
    <Tag className={`${styles.container} ${size === 'narrow' ? styles.narrow : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
