import { useEffect, useState } from 'react';
import { MARK_PATHS } from './Mark';

/** Reveal order: Creative(top,0°) → Connect(right,90°) → CRM(bottom,180°) → Code(left,270°). */
const STEPS = [
  { quarter: 'top' as const, c: 'Creative', deg: '0°' },
  { quarter: 'right' as const, c: 'Connect', deg: '90°' },
  { quarter: 'bottom' as const, c: 'CRM', deg: '180°' },
  { quarter: 'left' as const, c: 'Code', deg: '270°' },
];

export interface MarkFormationProps {
  size?: number;
  /** Auto-play the reveal loop (respects prefers-reduced-motion). Default true. */
  animated?: boolean;
  className?: string;
}

/**
 * The mark's formation — one C struck and rotated four times, revealed in
 * order and settling to the unified quatrefoil. Monochrome (inherits
 * currentColor). Loops when animated; shows the complete mark under
 * reduced-motion.
 */
export function MarkFormation({ size = 200, animated = true, className }: MarkFormationProps) {
  const [step, setStep] = useState(animated ? 0 : 3);

  useEffect(() => {
    if (!animated) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setStep(3);
      return;
    }
    let s = 0;
    const id = setInterval(() => {
      s = s >= 5 ? 0 : s + 1; // hold on 3 for two ticks, then restart
      setStep(Math.min(s, 3));
    }, 560);
    return () => clearInterval(id);
  }, [animated]);

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      <svg viewBox="0 0 133.89 133.89" width={size} height={size} role="img" aria-label="CreateCHS mark forming from one C rotated four times">
        {STEPS.map((st, i) => (
          <path
            key={st.quarter}
            d={MARK_PATHS[st.quarter]}
            fill="currentColor"
            style={{ opacity: i <= step ? 1 : 0.13, transition: 'opacity .3s var(--cx-ease-out)' }}
          />
        ))}
      </svg>
      <div style={{ display: 'flex', gap: 14 }}>
        {STEPS.map((st, i) => (
          <div key={st.c} style={{ textAlign: 'center', opacity: i <= step ? 1 : 0.4, transition: 'opacity .3s' }}>
            <div style={{ fontFamily: "'Fahkwang', serif", fontSize: 13, lineHeight: 1 }}>{st.c}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 8.5, letterSpacing: 1.5, marginTop: 3, opacity: 0.6, fontVariantNumeric: 'tabular-nums' }}>{st.deg}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
