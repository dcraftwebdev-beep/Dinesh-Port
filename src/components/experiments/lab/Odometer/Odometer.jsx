import { useState } from 'react';
import styles from './Odometer.module.css';

const DIGITS = 6;
const pad = (n) => String(n).padStart(DIGITS, '0');

/** Each digit is a vertical strip of 0 to 9 that rolls to its new value. */
export default function Odometer() {
  const [value, setValue] = useState(24580);

  const shuffle = () => setValue(Math.floor(Math.random() * 999999));

  return (
    <div className={styles.wrap}>
      <div className={styles.meter} aria-live="polite" aria-label={`${value}`}>
        {pad(value)
          .split('')
          .map((d, i) => (
            <span key={i} className={styles.digit}>
              <span className={styles.strip} style={{ transform: `translateY(-${Number(d) * 10}%)`, transitionDelay: `${i * 60}ms` }}>
                {Array.from({ length: 10 }, (_, n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </span>
          ))}
      </div>
      <button type="button" className={styles.button} onClick={shuffle}>
        Roll the numbers
      </button>
    </div>
  );
}
