import type { CSSProperties, ReactNode } from 'react';

export interface KickerProps {
  children: ReactNode;
  color?: string;
  as?: 'span' | 'div' | 'p';
  className?: string;
  style?: CSSProperties;
}

/** Eyebrow / kicker label — Space Grotesk 600, 3px tracking, uppercase. */
export function Kicker({ children, color, as: Tag = 'span', className, style }: KickerProps) {
  return (
    <Tag className={['cx-kicker', className].filter(Boolean).join(' ')} style={{ color, ...style }}>
      {children}
    </Tag>
  );
}
