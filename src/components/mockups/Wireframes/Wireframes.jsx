import styles from './Wireframes.module.css';

const Line = ({ w = 60, h = 4, dark }) => (
  <span className={`${styles.line} ${dark ? styles.dark : ''}`} style={{ width: `${w}%`, height: h }} />
);

const Bars = ({ values }) => (
  <div className={styles.bars}>
    {values.map((v, i) => (
      <span key={i} style={{ height: `${v}%` }} />
    ))}
  </div>
);

const ListRows = ({ count = 5 }) => (
  <div className={styles.rows}>
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className={styles.listRow}>
        <i />
        <Line w={40} />
        <Line w={18} />
      </div>
    ))}
  </div>
);

/** Three low-fidelity layout directions, numbered 1–3 (3 = chosen). */
export default function Wireframes() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.frame}>
        <span className={styles.badge}>1</span>
        <div className={styles.box}>
          <Line w={30} />
          <Line w={70} h={7} dark />
          <Line w={90} h={3} />
        </div>
        <div className={styles.split}>
          <div className={styles.box}>
            <Line w={50} />
            <Bars values={[40, 70, 55, 85, 60, 75]} />
          </div>
          <div className={styles.box}>
            <ListRows count={5} />
          </div>
        </div>
      </div>

      <div className={styles.frame}>
        <span className={styles.badge}>2</span>
        <div className={styles.split3}>
          {[0, 1, 2].map((i) => (
            <div key={i} className={styles.box}>
              <Line w={50} />
              <Line w={80} h={6} dark />
            </div>
          ))}
        </div>
        <div className={styles.split}>
          <div className={styles.box}>
            <Line w={40} />
            <Bars values={[50, 65, 45, 80, 70, 90, 60]} />
          </div>
          <div className={styles.box}>
            <ListRows count={4} />
          </div>
        </div>
        <div className={styles.split}>
          <div className={styles.box}>
            <ListRows count={2} />
          </div>
          <div className={styles.box}>
            <ListRows count={2} />
          </div>
        </div>
      </div>

      <div className={`${styles.frame} ${styles.chosen}`}>
        <span className={`${styles.badge} ${styles.badgeDark}`}>3</span>
        <div className={styles.box}>
          <div className={styles.profile}>
            <i />
            <Line w={40} />
            <span className={styles.pill} />
          </div>
        </div>
        <div className={styles.split}>
          <div className={styles.box}>
            <Line w={60} />
            <Line w={80} h={6} dark />
          </div>
          <div className={styles.box}>
            <Bars values={[30, 60, 45, 75, 55, 80, 65]} />
          </div>
        </div>
        <div className={styles.box}>
          <ListRows count={4} />
        </div>
        <div className={styles.box}>
          <div className={styles.profile}>
            <i />
            <Line w={40} />
            <span className={styles.pill} />
          </div>
        </div>
      </div>
    </div>
  );
}
