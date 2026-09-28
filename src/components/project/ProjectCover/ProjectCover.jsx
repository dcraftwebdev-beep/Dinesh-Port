import ScaledCanvas from '@/components/ui/ScaledCanvas/ScaledCanvas.jsx';
import BrowserFrame from '@/components/ui/BrowserFrame/BrowserFrame.jsx';
import { mockups } from '@/components/mockups/index.js';
import styles from './ProjectCover.module.css';

/**
 * Gradient backdrop holding either:
 * - `media` — a real website screenshot / screen recording in a browser frame, or
 * - `mockup` — a coded UI mockup (concept projects).
 * Props override the project's own values (used on case study pages).
 * wide: panoramic ratio for full-width featured cards.
 */
export default function ProjectCover({ project, mockup, media, theme, wide = false, className = '' }) {
  const coverMedia = media ?? (mockup ? null : project.media);
  const Mockup = mockups[mockup ?? project.mockup];
  const themeClass = styles[theme ?? project.theme] ?? '';

  return (
    <div className={`${styles.cover} ${themeClass} ${wide ? styles.wide : ''} ${className}`}>
      {coverMedia ? (
        <div className={styles.stage}>
          <BrowserFrame media={{ alt: project.title, ...coverMedia }} className={styles.frame} />
        </div>
      ) : (
        <div className={styles.mockupStage}>
          <ScaledCanvas>{Mockup && <Mockup />}</ScaledCanvas>
        </div>
      )}
    </div>
  );
}
