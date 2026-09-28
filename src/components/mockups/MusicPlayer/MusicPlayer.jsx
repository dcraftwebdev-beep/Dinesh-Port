import { lyrics, searchResults, keyboardRows } from './data.js';
import styles from './MusicPlayer.module.css';

function StatusBar() {
  return (
    <div className={styles.status}>
      <span>9:41</span>
      <span className={styles.statusIcons}>
        <i />
        <i />
        <i className={styles.battery} />
      </span>
    </div>
  );
}

function Controls() {
  return (
    <div className={styles.controls}>
      <span>⤨</span>
      <span>⏮</span>
      <span className={styles.play}>▶</span>
      <span>⏭</span>
      <span>↻</span>
    </div>
  );
}

function Progress({ value = 30, start = '0:35', end = '3:03' }) {
  return (
    <div className={styles.progress}>
      <div className={styles.progressTrack}>
        <span style={{ width: `${value}%` }} />
      </div>
      <div className={styles.progressTimes}>
        <span>{start}</span>
        <span>{end}</span>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div className={styles.tabBar}>
      {['Home', 'Explore', 'Library', 'Friends'].map((t, i) => (
        <span key={t} className={i === 1 ? styles.tabActive : ''}>
          <i />
          {t}
        </span>
      ))}
    </div>
  );
}

function NowPlaying({ art, title, artist }) {
  return (
    <div className={styles.phone}>
      <StatusBar />
      <div className={`${styles.art} ${styles[art]}`} />
      <div className={styles.trackRow}>
        <div>
          <p className={styles.trackTitle}>{title}</p>
          <p className={styles.trackArtist}>{artist}</p>
        </div>
        <span className={styles.like}>♡</span>
      </div>
      <Controls />
      <Progress />
      <TabBar />
    </div>
  );
}

export default function MusicPlayer() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.strip}>
        <NowPlaying art="dune" title="Static Bloom" artist="Eli Sora" />

        <div className={styles.phone}>
          <StatusBar />
          <div className={`${styles.art} ${styles.artShort} ${styles.ember}`}>
            <span className={styles.silhouette} />
            <span className={styles.expand}>⌄</span>
          </div>
          <p className={styles.lyricsLabel}>♫ Lyrics</p>
          <div className={styles.lyrics}>
            {lyrics.map((l) => (
              <p key={l.text} className={styles[l.state]}>
                {l.text}
              </p>
            ))}
          </div>
        </div>

        <NowPlaying art="bloom" title="Spaces" artist="Halo Kid" />

        <div className={styles.phone}>
          <div className={styles.search}>⌕ Wave</div>
          <ul className={styles.results}>
            {searchResults.map((r) => (
              <li key={r.title}>
                <span className={`${styles.thumb} ${styles[r.art]}`} />
                <div>
                  <p className={styles.resultTitle}>{r.title}</p>
                  <p className={styles.resultArtist}>{r.artist}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.keyboard}>
            {keyboardRows.map((row) => (
              <div key={row} className={styles.keyRow}>
                {row.split('').map((k) => (
                  <span key={k} className={styles.key}>
                    {k}
                  </span>
                ))}
              </div>
            ))}
            <div className={styles.keyRow}>
              <span className={`${styles.key} ${styles.keyWide}`}>123</span>
              <span className={`${styles.key} ${styles.keySpace}`} />
              <span className={`${styles.key} ${styles.keyWide}`}>⏎</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
