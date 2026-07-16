export interface ColorSwatchProps {
  name: string;
  hex: string;
  role?: string;
  /** Optional tint ramp shown as a strip. */
  tints?: readonly string[];
  /** Colour of the big "C" / text sitting on the chip. Defaults to ink. */
  onColor?: string;
}

/** Palette swatch used across the docs Color page. */
export function ColorSwatch({ name, hex, role, tints, onColor = '#0A0B0D' }: ColorSwatchProps) {
  return (
    <div className="cx-swatch">
      <div className="cx-swatch__chip" style={{ background: hex }}>
        <span className="cx-swatch__c" style={{ color: onColor }}>
          C
        </span>
      </div>
      {tints && tints.length ? (
        <div className="cx-swatch__tints" aria-hidden="true">
          {tints.map((t) => (
            <span key={t} style={{ background: t }} />
          ))}
        </div>
      ) : null}
      <div className="cx-swatch__meta">
        <div className="cx-swatch__name">
          <span>{name}</span>
          <span className="cx-swatch__hex">{hex}</span>
        </div>
        {role ? <span className="cx-swatch__role">{role}</span> : null}
      </div>
    </div>
  );
}
