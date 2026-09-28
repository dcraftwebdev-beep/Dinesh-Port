import { useEffect, useRef, useState } from 'react';
import styles from './TextScramble.module.css';

const GLYPHS = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const WORDS = ['Frontend', 'Motion', 'Details', 'Craft'];

/** Letters shuffle through random glyphs, then decode left to right into the next word. */
export default function TextScramble() {
  const [text, setText] = useState(WORDS[0]);
  const index = useRef(0);
  const frame = useRef(0);

  const scrambleTo = (target) => {
    clearInterval(frame.current);
    const start = Date.now();
    const perLetter = 55; // ms before each letter settles
    frame.current = setInterval(() => {
      const settled = Math.floor((Date.now() - start) / perLetter);
      let out = '';
      for (let i = 0; i < target.length; i++) {
        out += i < settled ? target[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setText(out);
      if (settled >= target.length) clearInterval(frame.current);
    }, 30);
  };

  const next = () => {
    index.current = (index.current + 1) % WORDS.length;
    scrambleTo(WORDS[index.current]);
  };

  useEffect(() => () => clearInterval(frame.current), []);

  return (
    <button type="button" className={styles.word} onPointerEnter={next} onClick={next} aria-label={WORDS[index.current]}>
      {text}
    </button>
  );
}
