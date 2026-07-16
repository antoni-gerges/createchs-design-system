import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: ReactNode;
}

/**
 * Button — pill, min 44px target, visible focus ring, loading & disabled states.
 * Accent/primary fills use ink text (never white) per the accessibility baseline.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const cls = ['cx-btn', `cx-btn--${variant}`, `cx-btn--${size}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {loading ? <span className="cx-btn__spin" aria-hidden="true" /> : null}
      <span className="cx-btn__label">{children}</span>
    </button>
  );
}
