import { CardSettingsContent } from '../CardSettings/CardSettings.jsx';
import { AnalyticsContent } from '../AnalyticsOverview/AnalyticsOverview.jsx';
import styles from './CardShowcase.module.css';

/** Case study cover: a tall app screen that slowly scrolls inside the window. */
export default function CardShowcase() {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.viewport}>
        <div className={styles.track}>
          <CardSettingsContent />
          <AnalyticsContent />
        </div>
      </div>
    </div>
  );
}
