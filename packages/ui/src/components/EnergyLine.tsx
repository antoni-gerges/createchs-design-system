import type { CSSProperties } from 'react';

export interface EnergyLineProps {
  /** Motif: a flowing divider, a multi-line stream, or a pulse-node line. */
  variant?: 'flow' | 'stream' | 'pulse';
  /** Bloom colour (wide, low-opacity). */
  bloom?: string;
  /** Bright core colour (thin, bright) over the bloom. */
  core?: string;
  /** Secondary supporting line colour. */
  support?: string;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * The signature "energy line" — a wide low-opacity bloom under a thin bright
 * core, never a single flat stroke. Cyan leads by default.
 */
export function EnergyLine({
  variant = 'flow',
  bloom = 'var(--cx-cyan)',
  core = 'var(--cx-cyan-core)',
  support = 'var(--cx-orange)',
  height = 30,
  className,
  style,
}: EnergyLineProps) {
  const common = { className, width: '100%', height, preserveAspectRatio: 'none' as const, 'aria-hidden': true as const, style };

  if (variant === 'stream') {
    return (
      <svg viewBox="0 0 500 60" {...common}>
        <path d="M0,20 C120,6 260,30 500,14" fill="none" stroke={bloom} strokeWidth="6" opacity="0.12" strokeLinecap="round" />
        <path d="M0,20 C120,6 260,30 500,14" fill="none" stroke={core} strokeWidth="1.6" opacity="0.85" strokeLinecap="round" />
        <path d="M0,33 C150,44 300,20 500,30" fill="none" stroke={core} strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
        <path d="M0,44 C140,54 320,34 500,46" fill="none" stroke={support} strokeWidth="5" opacity="0.12" strokeLinecap="round" />
        <path d="M0,44 C140,54 320,34 500,46" fill="none" stroke="var(--cx-orange-core)" strokeWidth="1.3" opacity="0.6" strokeLinecap="round" />
        <path d="M0,52 C160,44 340,58 500,50" fill="none" stroke="var(--cx-pink)" strokeWidth="1" opacity="0.35" strokeLinecap="round" />
        <circle cx="500" cy="14" r="2.4" fill={core} />
        <circle cx="500" cy="46" r="2" fill="var(--cx-orange-core)" />
      </svg>
    );
  }

  if (variant === 'pulse') {
    const d = 'M0,18 L206,18 C226,18 228,7 248,7 C268,7 270,18 292,18 L500,18';
    return (
      <svg viewBox="0 0 500 30" {...common}>
        <path d={d} fill="none" stroke={bloom} strokeWidth="5" opacity="0.12" strokeLinecap="round" />
        <path d={d} fill="none" stroke={core} strokeWidth="1.5" opacity="0.85" strokeLinecap="round" />
        <circle cx="248" cy="7" r="3.4" fill="none" stroke={core} strokeWidth="1.2" opacity="0.6" />
        <circle cx="248" cy="7" r="1.8" fill={core} />
        <circle cx="500" cy="18" r="2.2" fill={core} />
      </svg>
    );
  }

  // flow (default)
  return (
    <svg viewBox="0 0 500 30" {...common}>
      <path d="M0,15 C140,3 280,25 500,10" fill="none" stroke={bloom} strokeWidth="4.5" opacity="0.12" strokeLinecap="round" />
      <path d="M0,15 C140,3 280,25 500,10" fill="none" stroke={core} strokeWidth="1.4" opacity="0.75" strokeLinecap="round" />
      <path d="M0,20 C160,30 300,7 500,20" fill="none" stroke={support} strokeWidth="3.5" opacity="0.13" strokeLinecap="round" />
      <path d="M0,20 C160,30 300,7 500,20" fill="none" stroke="var(--cx-orange-core)" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" />
      <circle cx="500" cy="10" r="2.2" fill={core} />
    </svg>
  );
}
