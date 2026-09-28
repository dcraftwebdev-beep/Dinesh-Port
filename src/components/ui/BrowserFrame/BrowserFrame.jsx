import AutoplayVideo from '../AutoplayVideo/AutoplayVideo.jsx';
import styles from './BrowserFrame.module.css';

/**
 * Minimal browser window around a website screenshot or screen recording.
 * media: { type: 'image' | 'video', src, poster?, alt?, url?, ratio? }  — ratio = width / height of the media
 */
export default function BrowserFrame({ media, className = '' }) {
  const { type = 'image', src, poster, alt = '', url, ratio = 1920 / 947 } = media;

  return (
    <div className={`${styles.window} ${className}`}>
      <div className={styles.toolbar} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        {url && <span className={styles.url}>{url}</span>}
      </div>
      <div className={styles.screen} style={{ aspectRatio: ratio }}>
        {type === 'video' ? (
          <AutoplayVideo src={src} poster={poster} label={alt} />
        ) : (
          <img src={src} alt={alt} loading="lazy" className={styles.image} />
        )}
      </div>
    </div>
  );
}
