import BookCover from '../BookCover/BookCover.jsx';
import { values, books } from './data.js';
import styles from './ValuesBoard.module.css';

export default function ValuesBoard() {
  return (
    <div className={styles.panel} aria-hidden="true">
      <h4 className={styles.heading}>The values</h4>
      <p className={styles.subheading}>behind my work</p>

      <div className={styles.values}>
        {values.map((v) => (
          <div key={v.title} className={styles.value}>
            <p className={styles.valueTitle}>{v.title}</p>
            <p className={styles.valueText}>{v.text}</p>
          </div>
        ))}
      </div>

      <h4 className={`${styles.heading} ${styles.booksHeading}`}>Books</h4>
      <p className={styles.subheading}>I keep coming back to</p>
      <div className={styles.books}>
        {books.map((b) => (
          <BookCover key={b} variant={b} />
        ))}
      </div>
    </div>
  );
}
