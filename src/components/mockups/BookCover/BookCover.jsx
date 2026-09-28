import styles from './BookCover.module.css';

/** Illustrated book cover. variant: 'grid' | 'geometric' | 'learn' | 'popart' | 'graphic' */
export default function BookCover({ variant }) {
  const cls = `${styles.book} ${styles[variant]}`;

  switch (variant) {
    case 'grid':
      return (
        <div className={cls}>
          <span className={styles.gridTitle}>Grid systems</span>
          <span className={styles.gridSub}>Raster systeme</span>
        </div>
      );
    case 'geometric':
      return (
        <div className={cls}>
          <span className={styles.geoLabel}>GEOMETRIC</span>
        </div>
      );
    case 'learn':
      return (
        <div className={cls}>
          <span className={styles.learnTitle}>DESIGN</span>
          <span className={styles.learnSub}>FOR HOW PEOPLE</span>
          <span className={styles.learnTitle}>LEARN</span>
          <span className={styles.head}>
            <span className={styles.brain} />
          </span>
        </div>
      );
    case 'popart':
      return (
        <div className={cls}>
          <span className={styles.popTitle}>POP ART</span>
          <span className={styles.lips} />
        </div>
      );
    case 'graphic':
      return (
        <div className={cls}>
          <span className={styles.graphicTitle}>
            GRAPHIC
            <br />
            DESIGN
          </span>
        </div>
      );
    default:
      return <div className={cls} />;
  }
}
