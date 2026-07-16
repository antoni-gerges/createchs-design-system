import type { ReactNode } from 'react';
import { Mark } from './Mark';
import { Kicker } from './Kicker';

export interface PageHeaderProps {
  /** Right-side label, e.g. "Brand Guidelines". */
  label?: ReactNode;
  /** Ink colour for light grounds, white for dark. Defaults to currentColor. */
  color?: string;
}

/** The repeating page header: mark + CREATECHS wordmark + right-hand kicker. */
export function PageHeader({ label = 'Brand Guidelines', color }: PageHeaderProps) {
  return (
    <div className="cx-pagehead" style={{ color }}>
      <div className="cx-pagehead__brand">
        <Mark size={18} title="CreateCHS" />
        <span className="cx-pagehead__word">CREATECHS</span>
      </div>
      {label ? <Kicker style={{ opacity: 0.6 }}>{label}</Kicker> : null}
    </div>
  );
}

export interface PageFooterProps {
  edition?: ReactNode;
  page?: ReactNode;
  color?: string;
}

/** The repeating page footer: edition line + page number. */
export function PageFooter({ edition = 'Createchs Brand Book · Edition 01', page, color }: PageFooterProps) {
  return (
    <div className="cx-pagefoot" style={{ color }}>
      <Kicker style={{ fontSize: 9, opacity: 0.55 }}>{edition}</Kicker>
      {page ? (
        <span style={{ fontSize: 10, letterSpacing: 1, opacity: 0.55, fontVariantNumeric: 'tabular-nums' }}>{page}</span>
      ) : null}
    </div>
  );
}
