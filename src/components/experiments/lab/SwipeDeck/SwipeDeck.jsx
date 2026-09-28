import { useRef, useState } from 'react';
import styles from './SwipeDeck.module.css';

const CARDS = [
  { title: 'React', tone: '#61dafb', note: 'Components & state' },
  { title: 'GSAP', tone: '#0ae448', note: 'Scroll & motion' },
  { title: 'Next.js', tone: '#ffffff', note: 'Full-stack apps' },
  { title: 'Figma', tone: '#ff7262', note: 'Design to code' },
];
const THROW = 110; // px of drag needed to throw a card

/** Drag the top card; past the threshold it flies off and returns to the back of the stack. */
export default function SwipeDeck() {
  const [order, setOrder] = useState(CARDS.map((_, i) => i));
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false, flying: false });
  const start = useRef(null);

  const onDown = (e) => {
    if (drag.flying) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY };
    setDrag({ x: 0, y: 0, active: true, flying: false });
  };

  const onMove = (e) => {
    if (!drag.active) return;
    setDrag((d) => ({ ...d, x: e.clientX - start.current.x, y: e.clientY - start.current.y }));
  };

  const onUp = () => {
    if (!drag.active) return;
    if (Math.abs(drag.x) > THROW) {
      // fly out, then move the card to the back
      setDrag({ x: Math.sign(drag.x) * 420, y: drag.y, active: false, flying: true });
      setTimeout(() => {
        setOrder((o) => [...o.slice(1), o[0]]);
        setDrag({ x: 0, y: 0, active: false, flying: false });
      }, 320);
    } else {
      setDrag({ x: 0, y: 0, active: false, flying: false });
    }
  };

  return (
    <div className={styles.deck}>
      {order
        .map((cardIndex, depth) => ({ card: CARDS[cardIndex], depth }))
        .reverse()
        .map(({ card, depth }) => {
          const top = depth === 0;
          const style = top
            ? { transform: `translate(${drag.x}px, ${drag.y}px) rotate(${drag.x / 14}deg)`, transition: drag.active ? 'none' : undefined }
            : { transform: `translateY(${depth * 10}px) scale(${1 - depth * 0.05})` };
          return (
            <div
              key={card.title}
              className={`${styles.card} ${top ? styles.top : ''}`}
              style={{ ...style, zIndex: 10 - depth }}
              onPointerDown={top ? onDown : undefined}
              onPointerMove={top ? onMove : undefined}
              onPointerUp={top ? onUp : undefined}
              onPointerCancel={top ? onUp : undefined}
            >
              <span className={styles.dot} style={{ background: card.tone }} />
              <p className={styles.title}>{card.title}</p>
              <p className={styles.note}>{card.note}</p>
            </div>
          );
        })}
    </div>
  );
}
