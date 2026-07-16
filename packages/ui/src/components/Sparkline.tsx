export interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  /** Fill the area under the line with a faint wash. */
  area?: boolean;
  className?: string;
}

/** Minimal trend sparkline with an emphasized endpoint. */
export function Sparkline({
  data,
  width = 200,
  height = 44,
  color = 'var(--cx-primary)',
  area = true,
  className,
}: SparklineProps) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = 3;
  const stepX = (width - pad * 2) / (data.length - 1);
  const pts = data.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (height - pad * 2) * (1 - (v - min) / span);
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const [ex, ey] = pts[pts.length - 1];
  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      role="img"
      aria-label="trend"
    >
      {area ? (
        <polygon
          points={`${pad},${height - pad} ${line} ${width - pad},${height - pad}`}
          fill={color}
          opacity="0.12"
        />
      ) : null}
      <polyline points={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={ex} cy={ey} r="3" fill={color} />
    </svg>
  );
}
