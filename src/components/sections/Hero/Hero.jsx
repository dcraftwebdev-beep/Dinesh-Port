import Container from '@/components/ui/Container/Container.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import styles from './Hero.module.css';

/**
 * Page intro — title, lead copy and optional actions.
 * actions: [{ label, to?, href?, variant }]
 */
export default function Hero({ title, description, actions = [] }) {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map(({ label, ...props }) => (
              <Button key={label} {...props}>
                {label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
