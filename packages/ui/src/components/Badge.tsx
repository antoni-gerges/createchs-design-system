import type { ReactNode } from 'react';

export interface BadgeProps {
  tone?: 'primary' | 'accent' | 'positive' | 'notice' | 'neutral';
  /** Show a leading status dot (adds a non-colour cue alongside the label). */
  dot?: boolean;
  children: ReactNode;
  className?: string;
}

/** Tinted status badge. Always carries a text label, never colour alone. */
export function Badge({ tone = 'neutral', dot = false, children, className = '' }: BadgeProps) {
  return (
    <span className={['cx-badge', `cx-badge--${tone}`, className].filter(Boolean).join(' ')}>
      {dot ? <span className="cx-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
