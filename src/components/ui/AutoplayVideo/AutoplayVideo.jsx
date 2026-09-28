import { useEffect, useRef } from 'react';
import styles from './AutoplayVideo.module.css';

/**
 * Muted, looping screen recording that only plays while visible
 * (saves battery/CPU when several videos are on one page).
 */
export default function AutoplayVideo({ src, poster, label, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`${styles.video} ${className}`}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
