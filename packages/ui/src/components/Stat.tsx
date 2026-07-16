import { Sparkline } from './Sparkline';

export interface StatProps {
  label: string;
  value: string | number;
  /** e.g. "+12%". Positive/negative inferred from the leading sign. */
  delta?: string;
  data?: number[];
  color?: string;
  className?: string;
}

/** KPI tile — display-font value, tabular figures, optional delta + sparkline. */
export function Stat({ label, value, delta, data, color = 'var(--cx-primary)', className }: StatProps) {
  const dir = delta ? (delta.trim().startsWith('-') ? 'down' : 'up') : undefined;
  return (
    <div className={['cx-stat', className].filter(Boolean).join(' ')}>
      <span className="cx-stat__label">{label}</span>
      <div className="cx-stat__row">
        <span className="cx-stat__value">{value}</span>
        {delta ? <span className={`cx-stat__delta ${dir}`}>{delta}</span> : null}
      </div>
      {data ? <Sparkline data={data} color={color} /> : null}
    </div>
  );
}
