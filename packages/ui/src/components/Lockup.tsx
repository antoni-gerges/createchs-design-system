import type { CSSProperties } from 'react';
import { Mark } from './Mark';

export interface LockupProps {
  orientation?: 'horizontal' | 'stacked';
  /** Mark size in px. */
  markSize?: number;
  /** Wordmark font size in px. */
  wordSize?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

/** The mark + CREATECHS wordmark. */
export function Lockup({
  orientation = 'horizontal',
  markSize = 28,
  wordSize = 20,
  color,
  className,
  style,
}: LockupProps) {
  return (
    <span
      className={['cx-lockup', orientation === 'stacked' && 'cx-lockup--stacked', className]
        .filter(Boolean)
        .join(' ')}
      style={{ color, ...style }}
    >
      <Mark size={markSize} title="CreateCHS" />
      <span className="cx-lockup__word" style={{ fontSize: wordSize }}>
        CREATECHS
      </span>
    </span>
  );
}
