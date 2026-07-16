import { typeScale, fonts, type TypeStep } from '@createchs/tokens';

export interface TypeSpecimenProps {
  /** Defaults to the canonical token type scale. */
  steps?: TypeStep[];
}

/** Renders the type scale as spec rows (label · spec · live sample). */
export function TypeSpecimen({ steps = typeScale }: TypeSpecimenProps) {
  return (
    <div>
      {steps.map((t) => {
        const spec = `${t.size} / ${t.weight}${t.italic ? ' it' : ''}`;
        return (
          <div className="cx-typerow" key={t.label}>
            <span className="cx-typerow__label">{t.label}</span>
            <span className="cx-typerow__spec">{spec}</span>
            <span
              className="cx-typerow__sample"
              style={{
                fontFamily: t.family === 'display' ? fonts.display : fonts.sans,
                fontWeight: t.weight,
                fontStyle: t.italic ? 'italic' : 'normal',
                fontSize: Math.min(t.size, 40),
                letterSpacing: t.tracking,
              }}
            >
              {t.sample}
            </span>
          </div>
        );
      })}
    </div>
  );
}
