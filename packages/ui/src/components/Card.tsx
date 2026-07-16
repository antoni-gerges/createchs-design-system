import type { CSSProperties, ReactNode } from 'react';

export interface CardProps {
  variant?: 'dark' | 'raised' | 'paper';
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Surface container on the soft (16px) corner. */
export function Card({ variant = 'dark', children, className, style }: CardProps) {
  const v = variant === 'raised' ? 'cx-card--raised' : variant === 'paper' ? 'cx-card--paper' : '';
  return (
    <div className={['cx-card', v, className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  );
}
