/** Corner radii. `soft` (16) is the default card corner. */
export const radius = { sharp: 4, soft: 16, round: 26, pill: 100, input: 10 } as const;

/** 4 / 8 spacing scale (index === step). */
export const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 80] as const;

export const motion = {
  durFast: '150ms',
  dur: '220ms',
  durSlow: '320ms',
  easeOut: 'cubic-bezier(.2,.7,.2,1)',
  easeIn: 'cubic-bezier(.5,0,.75,.3)',
} as const;

/** Accessibility baseline constants (approved 2026-07-15). */
export const a11y = {
  focusRing: '2px solid #17D4D4',
  focusOffset: '2px',
  /** Minimum interactive hit target, px. */
  minTarget: 44,
  /** Minimum opacity for muted TEXT on dark (below this = decorative only). */
  textOpacityFloor: 0.55,
} as const;

export const elevation = {
  card: '0 8px 30px rgba(0,0,0,.35)',
  page: '0 30px 80px rgba(0,0,0,.5)',
} as const;

/** A4 landscape page, in mm and px @96dpi. */
export const page = { widthMm: 297, heightMm: 210, widthPx: 1123, heightPx: 794 } as const;
