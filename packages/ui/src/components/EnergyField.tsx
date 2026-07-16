import type { CSSProperties } from 'react';

export interface EnergyFieldProps {
  /** Overall opacity of the ambient field. */
  opacity?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Ambient energy field — long bloom-and-core currents for atmospheric
 * backgrounds (hero surfaces, the digital card). Absolutely fills its
 * positioned parent; decorative only.
 */
export function EnergyField({ opacity = 1, className, style }: EnergyFieldProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity, ...style }}
    >
      {/* cyan lead current */}
      <path d="M-20,70 C120,20 250,120 440,50" fill="none" stroke="var(--cx-cyan)" strokeWidth="8" opacity="0.10" strokeLinecap="round" />
      <path d="M-20,70 C120,20 250,120 440,50" fill="none" stroke="var(--cx-cyan-core)" strokeWidth="1.6" opacity="0.55" strokeLinecap="round" />
      {/* orange support */}
      <path d="M-20,120 C140,170 260,60 440,120" fill="none" stroke="var(--cx-orange)" strokeWidth="6" opacity="0.10" strokeLinecap="round" />
      <path d="M-20,120 C140,170 260,60 440,120" fill="none" stroke="var(--cx-orange-core)" strokeWidth="1.3" opacity="0.4" strokeLinecap="round" />
      {/* cyan secondary */}
      <path d="M-20,40 C160,70 240,10 440,80" fill="none" stroke="var(--cx-cyan-core)" strokeWidth="1.1" opacity="0.3" strokeLinecap="round" />
      {/* pink accent, sparing */}
      <path d="M-20,150 C150,110 300,180 440,140" fill="none" stroke="var(--cx-pink)" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      <circle cx="440" cy="50" r="2.6" fill="var(--cx-cyan-core)" />
      <circle cx="440" cy="120" r="2" fill="var(--cx-orange-core)" />
    </svg>
  );
}
