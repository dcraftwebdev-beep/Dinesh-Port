import { siReact, siNextdotjs, siGsap, siTailwindcss, siJavascript, siNodedotjs, siFigma, siFramer, siWebflow, siSupabase, siThreedotjs, siVite } from 'simple-icons';
import styles from './SkillsMarquee.module.css';

const ROW_A = [siReact, siNextdotjs, siGsap, siTailwindcss, siJavascript, siNodedotjs];
const ROW_B = [siFigma, siFramer, siWebflow, siSupabase, siThreedotjs, siVite];

function Row({ icons, reverse }) {
  // Rendered twice so the loop is seamless
  const items = [...icons, ...icons];
  return (
    <div className={`${styles.row} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.track}>
        {items.map((icon, i) => (
          <span key={`${icon.slug}-${i}`} className={styles.chip}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d={icon.path} fill={`#${icon.hex === '000000' ? '04111f' : icon.hex}`} />
            </svg>
            {icon.title}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two endless rows of tools moving in opposite directions; hovering pauses them. */
export default function SkillsMarquee() {
  return (
    <div className={styles.marquee}>
      <Row icons={ROW_A} />
      <Row icons={ROW_B} reverse />
    </div>
  );
}
