import { categories, total, trend, budgets } from './data.js';
import styles from './AnalyticsOverview.module.css';

function Donut() {
  const r = 34;
  const half = Math.PI * r;
  let offset = 0;
  // Half donut (gauge) — each category takes its share of the arc
  return (
    <svg viewBox="0 0 100 60" className={styles.donut}>
      {categories.map((cat) => {
        const len = (cat.share / 100) * half;
        const seg = (
          <circle
            key={cat.label}
            cx="50"
            cy="52"
            r={r}
            fill="none"
            stroke={cat.color}
            strokeWidth="9"
            strokeDasharray={`${len - 1.2} ${2 * Math.PI * r}`}
            strokeDashoffset={-offset}
            transform="rotate(180 50 52)"
          />
        );
        offset += len;
        return seg;
      })}
      <text x="50" y="47" textAnchor="middle" className={styles.donutValue}>
        {total}
      </text>
      <text x="50" y="55" textAnchor="middle" className={styles.donutLabel}>
        this month
      </text>
    </svg>
  );
}

function AreaChart() {
  const w = 280;
  const h = 96;
  const left = 22;
  const plotW = w - left;
  const step = plotW / (trend.length - 1);
  const points = trend.map((v, i) => [left + i * step, h - (v / 100) * h]);
  const line = points
    .map(([x, y], i) => {
      if (i === 0) return `M${x},${y}`;
      const [px, py] = points[i - 1];
      const cx = (px + x) / 2;
      return `C${cx},${py} ${cx},${y} ${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h + 14}`} className={styles.area}>
      <defs>
        <linearGradient id="analytics-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3f7ef0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#3f7ef0" stopOpacity="0" />
        </linearGradient>
      </defs>
      {['$2k', '$1k', '$0k'].map((label, i) => {
        const y = 18 + i * 39;
        return (
          <g key={label}>
            <line x1={left} x2={w} y1={y} y2={y} stroke="#eef0f3" strokeWidth="0.6" />
            <text x="0" y={y + 2} className={styles.axis}>
              {label}
            </text>
          </g>
        );
      })}
      <path d={`${line} L${w},${h} L${left},${h} Z`} fill="url(#analytics-fill)" />
      <path d={line} fill="none" stroke="#3f7ef0" strokeWidth="1.4" />
      {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((m, i) => (
        <text key={m} x={left + (i * plotW) / 4} y={h + 12} className={styles.axis} textAnchor={i === 0 ? 'start' : i === 4 ? 'end' : 'middle'}>
          {m}
        </text>
      ))}
    </svg>
  );
}

/** Category donut, monthly trend and budget tracker — reused inside CardShowcase. */
export function AnalyticsContent() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.panel}>
          <p className={styles.label}>By category</p>
          <Donut />
          <ul className={styles.legend}>
            {categories.map((c) => (
              <li key={c.label}>
                <span>
                  <i style={{ background: c.color }} />
                  {c.label}
                </span>
                <b>{c.value}</b>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.panel}>
          <div className={styles.row}>
            <p className={styles.label}>Monthly spending</p>
            <p className={styles.hint}>Last 5 months</p>
          </div>
          <p className={styles.total}>
            $2,140 <span className={styles.badge}>↗ +8.2%</span>
          </p>
          <AreaChart />
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.row}>
          <p className={styles.label}>Budget tracker</p>
          <p className={styles.hint}>Edit budgets →</p>
        </div>
        <div className={styles.budgets}>
          {budgets.map((b) => (
            <div key={b.label}>
              <div className={styles.row}>
                <span className={styles.budgetName}>
                  <i>{b.icon}</i>
                  {b.label}
                </span>
                <span className={styles.budgetValue}>
                  {b.spent} <em>/ {b.limit}</em>
                </span>
              </div>
              <div className={styles.track}>
                <span style={{ width: `${b.pct}%` }} />
              </div>
              <p className={styles.hint}>{b.pct}% used</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsOverview() {
  return (
    <div className={styles.window} aria-hidden="true">
      <AnalyticsContent />
    </div>
  );
}
