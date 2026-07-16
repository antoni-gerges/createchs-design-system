export const fonts = {
  /** Display / headings — the source of the mark's "C". */
  display: "'Fahkwang', Georgia, serif",
  /** Body & UI. */
  sans: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
} as const;

export const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export interface TypeStep {
  label: string;
  family: 'display' | 'sans';
  /** px */
  size: number;
  weight: number;
  lineHeight: number;
  italic?: boolean;
  tracking?: string;
  sample: string;
}

/** The canonical 6-step scale shown on the Typography page. */
export const typeScale: TypeStep[] = [
  { label: 'Display', family: 'display', size: 96, weight: 600, lineHeight: 0.9,  sample: 'One connected system' },
  { label: 'Heading', family: 'display', size: 44, weight: 500, lineHeight: 1.05, sample: 'Creative & Technology' },
  { label: 'Subhead', family: 'display', size: 28, weight: 500, lineHeight: 1.1,  sample: 'The 4Cs Framework' },
  { label: 'Lead',    family: 'display', size: 20, weight: 300, lineHeight: 1.4,  italic: true, sample: 'Bold ideas, connected.' },
  { label: 'Body',    family: 'sans',    size: 16, weight: 400, lineHeight: 1.6,  sample: 'Clean, modern interface and body copy.' },
  { label: 'Label',   family: 'sans',    size: 11, weight: 600, lineHeight: 1,    tracking: '3px', sample: 'UPPERCASE · LETTERSPACED' },
];
