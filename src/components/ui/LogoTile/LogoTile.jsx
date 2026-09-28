import { useId } from 'react';
import { brandMarks } from './brandMarks.jsx';
import styles from './LogoTile.module.css';

/**
 * Square brand tile. `logo` accepts one of:
 * - { icon, bg, fg }        — a simple-icons object (official brand path), drawn in `fg` on `bg`
 * - { icon, bg, gradient }  — same, filled with a gradient: ['#from', '#via', '#to']
 * - { mark, bg }            — a multicolour mark from brandMarks (e.g. 'figma')
 * - { src }                 — an image filling the tile
 * - { src, bg }             — an image at icon size on `bg`
 * - { text, bg, fg }        — a lettermark
 * size: 'sm' | 'md'
 */
export default function LogoTile({ logo = {}, size = 'md' }) {
  const { src, icon, mark, text, bg, fg, gradient } = logo;
  const gradientId = useId();

  let content = text;
  // An image fills the tile, or — when a `bg` is given — sits inside it at icon size
  if (src) content = <img src={src} alt="" className={bg ? styles.glyph : styles.image} />;
  else if (mark) content = <span className={styles.glyph}>{brandMarks[mark]}</span>;
  else if (icon)
    content = (
      <svg viewBox="0 0 24 24" className={styles.glyph} aria-hidden="true">
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              {gradient.map((color, i) => (
                <stop key={color} offset={i / (gradient.length - 1)} stopColor={color} />
              ))}
            </linearGradient>
          </defs>
        )}
        <path d={icon.path} fill={gradient ? `url(#${gradientId})` : 'currentColor'} />
      </svg>
    );

  return (
    <span
      className={`${styles.tile} ${styles[size]}`}
      style={src && !bg ? undefined : { background: bg, color: fg ?? (icon ? `#${icon.hex}` : undefined) }}
      aria-hidden="true"
    >
      {content}
    </span>
  );
}
