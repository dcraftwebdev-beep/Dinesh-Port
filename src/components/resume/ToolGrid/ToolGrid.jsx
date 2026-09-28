import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal/Reveal.jsx';
import LogoTile from '@/components/ui/LogoTile/LogoTile.jsx';
import styles from './ToolGrid.module.css';

/** Tool cards — each links out, with an arrow revealed on hover. */
export default function ToolGrid({ items }) {
  return (
    <ul className={styles.grid}>
      {items.map((tool, i) => (
        <Reveal as="li" key={tool.name} delay={(i % 3) * 60}>
          <a href={tool.href} target="_blank" rel="noreferrer" className={styles.card}>
            <LogoTile logo={tool.logo} />
            <span className={styles.text}>
              <span className={styles.name}>{tool.name}</span>
              <span className={styles.use}>{tool.use}</span>
            </span>
            <ArrowUpRight className={styles.arrow} size={18} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </Reveal>
      ))}
    </ul>
  );
}
