import useReveal from '@/hooks/useReveal.js';
import styles from './Reveal.module.css';

/** Fades + lifts children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
