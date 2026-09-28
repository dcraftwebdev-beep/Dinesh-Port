import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import ScaledCanvas from '@/components/ui/ScaledCanvas/ScaledCanvas.jsx';
import BookCover from '@/components/mockups/BookCover/BookCover.jsx';
import styles from './BookShelf.module.css';

/**
 * Row of book covers — illustrated by default, or a photo via `src`.
 * `bg`: for covers that aren't book-shaped — show the whole cover on this colour instead of cropping.
 */
export default function BookShelf({ books }) {
  return (
    <ul className={styles.shelf}>
      {books.map((b, i) => (
        <Reveal as="li" key={b.title} delay={i * 70} className={styles.book} title={`${b.title} by ${b.author}`}>
          {b.src ? (
            <img
              src={b.src}
              alt={`${b.title} by ${b.author}`}
              className={`${styles.image} ${b.bg ? styles.contain : ''}`}
              style={b.bg ? { backgroundColor: b.bg } : undefined}
              loading="lazy"
            />
          ) : (
            <ScaledCanvas width={107} height={146}>
              <BookCover variant={b.cover} />
            </ScaledCanvas>
          )}
        </Reveal>
      ))}
    </ul>
  );
}
