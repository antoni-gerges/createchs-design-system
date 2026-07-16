/** Core neutral grounds & surfaces. */
export const colors = {
  ink: '#0A0B0D',
  offblack: '#08090B',
  paper: '#F3F1EA', // brand "paper white" — warm off-white, not pure white
  paperCard: '#FBFAF5',
  white: '#F4F5F7',
  panel: '#141519',
  panel2: '#17191E',
  inputBg: '#0C0D10',
} as const;

export interface Accent {
  /** Display name shown in the palette. */
  name: string;
  /** Where the accent sits in the system. */
  role: string;
  /** The main hue. */
  base: string;
  /** 4-step ramp, dark -> light. */
  tints: readonly [string, string, string, string];
  /** Bright "core" stroke used in energy lines (cyan/orange/pink only). */
  core?: string;
  /** a11y: the ramp step safe for TEXT on the cream Paper ground. */
  onPaper?: string;
  /** Hover fill. */
  hover?: string;
  /** a11y: text/icon color to place ON a fill of this accent — always Ink. */
  onColor: string;
}

/** The four C's. Each C is one accent. */
export const accents: Record<'cyan' | 'orange' | 'lime' | 'pink', Accent> = {
  cyan:   { name: 'Cyan / Tiffany', role: 'Primary · Creative', base: '#17D4D4', tints: ['#0A5C5C','#0E9E9E','#17D4D4','#8CEDED'], core: '#6BEAEA', onPaper: '#0A5C5C', hover: '#58EDEA', onColor: '#0A0B0D' },
  orange: { name: 'Orange',         role: 'Secondary · Connect', base: '#FF6B2C', tints: ['#B3410F','#E2560F','#FF6B2C','#FFB088'], core: '#FFB06A', onPaper: '#B3410F', hover: '#FF8A4C', onColor: '#0A0B0D' },
  lime:   { name: 'Lime',           role: 'Code · 4Cs',         base: '#BEE83A', tints: ['#6E8C00','#98BE1F','#BEE83A','#DBF48C'], onColor: '#0A0B0D' },
  pink:   { name: 'Pink',           role: 'CRM · 4Cs',          base: '#FF2D8E', tints: ['#A81159','#D61B75','#FF2D8E','#FF8FC1'], core: '#FF6FB0', onColor: '#0A0B0D' },
} as const;

/** Semantic aliases — components reference these, not hue names. */
export const semantic = {
  primary: '#17D4D4',
  accent: '#FF6B2C',
  onAccent: '#0A0B0D',   // a11y: accent fills take ink text, never white
  positive: '#BEE83A',
  notice: '#FF2D8E',
  danger: '#FF5A6E',
  bg: '#0A0B0D',
  surface: '#141519',
  onBg: '#F4F5F7',
  border: 'rgba(255,255,255,.12)',
  textMuted: 'rgba(255,255,255,.70)',
  textSubtle: 'rgba(255,255,255,.55)', // a11y: text floor
  textDecor: 'rgba(255,255,255,.40)',  // decorative only
} as const;
