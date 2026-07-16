import { MARK_PATHS } from './Mark';

const RING_CENTERS: [number, number][] = [
  [100, 65],  // top
  [135, 100], // right
  [100, 135], // bottom
  [65, 100],  // left
];

export interface MarkConstructionProps {
  size?: number;
  className?: string;
}

/**
 * Fig. 1 — the mark's construction geometry: one Fahkwang "C" struck as four
 * generating rings on a module grid, rotated 0/90/180/270 around a shared
 * centre. Monochrome; inherits `currentColor` (white on dark, ink on light).
 */
export function MarkConstruction({ size = 320, className }: MarkConstructionProps) {
  const line = { stroke: 'currentColor', fill: 'none' as const };
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="Mark construction — one C rotated at 0, 90, 180 and 270 degrees around a shared centre"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <defs>
        <marker id="cx-mc-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
      {/* diagonals */}
      <line x1="25" y1="25" x2="175" y2="175" strokeWidth="0.35" opacity="0.24" {...line} />
      <line x1="175" y1="25" x2="25" y2="175" strokeWidth="0.35" opacity="0.24" {...line} />
      {/* axes */}
      <line x1="100" y1="12" x2="100" y2="188" strokeWidth="0.5" opacity="0.45" {...line} />
      <line x1="12" y1="100" x2="188" y2="100" strokeWidth="0.5" opacity="0.45" {...line} />
      {/* bounding circle */}
      <circle cx="100" cy="100" r="75" strokeWidth="0.55" strokeDasharray="2 3" opacity="0.45" {...line} />
      {/* four generating rings + inner dashed + centre dots */}
      {RING_CENTERS.map(([x, y], i) => (
        <circle key={`r${i}`} cx={x} cy={y} r="40" strokeWidth="0.65" opacity="0.4" {...line} />
      ))}
      {RING_CENTERS.map(([x, y], i) => (
        <circle key={`d${i}`} cx={x} cy={y} r="29" strokeWidth="0.5" strokeDasharray="1.5 2" opacity="0.34" {...line} />
      ))}
      {RING_CENTERS.map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r="0.9" fill="currentColor" opacity="0.5" />
      ))}
      {/* module square + corner ticks */}
      <rect x="25" y="25" width="150" height="150" strokeWidth="0.9" {...line} />
      <path d="M25,33 L25,25 L33,25 M167,25 L175,25 L175,33 M175,167 L175,175 L167,175 M33,175 L25,175 L25,167" strokeWidth="1.1" {...line} />
      {/* the resolved mark */}
      <svg x="25" y="25" width="150" height="150" viewBox="0 0 133.89 133.89">
        {Object.values(MARK_PATHS).map((d, i) => (
          <path key={i} d={d} fill="currentColor" />
        ))}
      </svg>
      {/* radius marker */}
      <line x1="100" y1="65" x2="100" y2="25" strokeWidth="0.5" markerEnd="url(#cx-mc-arrow)" opacity="0.55" {...line} />
      <text x="103" y="46" fontFamily="'Space Grotesk', sans-serif" fontSize="6.5" fill="currentColor">R</text>
      {/* centre pivot */}
      <circle cx="100" cy="100" r="1.8" fill="currentColor" />
      <circle cx="100" cy="100" r="4.5" strokeWidth="0.5" {...line} />
      {/* rotation labels */}
      <text x="100" y="21" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight={600} fontSize="7" fill="currentColor">0°</text>
      <text x="191" y="102" textAnchor="end" fontFamily="'Space Grotesk', sans-serif" fontWeight={600} fontSize="7" fill="currentColor">90°</text>
      <text x="100" y="195" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight={600} fontSize="7" fill="currentColor">180°</text>
      <text x="9" y="102" fontFamily="'Space Grotesk', sans-serif" fontWeight={600} fontSize="7" fill="currentColor">270°</text>
    </svg>
  );
}
