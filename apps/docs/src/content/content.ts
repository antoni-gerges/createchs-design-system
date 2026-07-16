/** Brand content lifted from the source Design System document. */

export const brand = {
  name: 'CreateCHS',
  tagline: 'Creative & Technology, connected.',
  edition: 'Edition 01 · 2026',
  location: 'Tampa, FL',
  web: 'createchs.us',
  email: 'marketing@createchs.us',
  phone: '(813) 723-3747',
  address: 'Tampa, FL, USA',
};

export const idea = {
  statement:
    'Createchs replaces fragmented tools, agencies, and manual work with one connected system — powered by creativity, technology, and AI.',
  pillars: [
    { label: 'Mission', color: 'var(--cx-orange)', body: 'To eliminate complexity by replacing fragmented tools, agencies, and manual processes with one connected platform powered by creativity, technology, and AI.' },
    { label: 'Vision', color: 'var(--cx-cyan)', body: 'To redefine the future of business by delivering an intelligent operating system that unifies creativity, technology, AI, and customer relationships into one connected ecosystem.' },
    { label: 'Belief', color: 'var(--cx-lime)', body: 'Creativity is the catalyst; technology is the multiplier; people are always at the center.' },
  ],
};

export const chapters = [
  { n: '01', t: 'The Idea', d: 'Positioning, mission & vision' },
  { n: '02', t: 'The Mark', d: 'Logo, construction & formation' },
  { n: '03', t: 'Color', d: 'Palette, tints & roles' },
  { n: '04', t: 'Typography', d: 'Fahkwang & Space Grotesk' },
  { n: '05', t: 'Motif', d: 'The C-drawing pattern' },
  { n: '06', t: 'Energy', d: 'The neon-line system' },
  { n: '07', t: 'The 4Cs', d: 'The connected framework' },
  { n: '08', t: 'In Practice', d: 'Connector & product dashboard' },
  { n: '09', t: 'Components', d: 'The interface kit' },
  { n: '10', t: 'Applications', d: 'Stationery & campaigns' },
];

/** Nine motifs in the energy-line library. */
export const energyMotifs = [
  'Flow', 'Radial burst', 'Orbit', 'Pulse node', 'Data field', 'Corner frame', 'Signal', 'Data stream', 'Mesh',
];

export const applications = {
  stationery: [
    { name: 'Letterhead', note: 'Black on white — mark + address block.' },
    { name: 'Story Ad · 9:16', note: '"AI that answers every call. 24/7." · Book a demo →' },
    { name: 'Social · 1:1', note: '"One system. Every channel."' },
    { name: 'Business Card', note: 'White on black — name, role, contact.' },
  ],
  digital: [
    { name: 'Envelope', note: 'Mark + return address.' },
    { name: 'Email Signature', note: 'Jane Doe · Creative Director · marketing@createchs.us' },
    { name: 'Web Banner · 3:1', note: '"Creative & Technology, connected." · Start now →' },
  ],
};

/** The 7 approved accessibility fixes (baked into tokens/components). */
export const a11yFixes = [
  { n: 1, title: 'Accent button uses Ink text', before: '2.6:1', after: '6.9:1' },
  { n: 2, title: 'Pink fills use Ink text, never white', before: '3.2:1', after: '5.6:1' },
  { n: 3, title: 'Darker teal / orange for text on Paper', before: '3.5:1', after: '5.0–6.9:1' },
  { n: 4, title: 'Muted-text floor raised 40% → 55%', before: '3.8:1', after: '6.3:1' },
  { n: 5, title: 'Visible :focus-visible ring on all controls', before: 'none', after: '≥3:1' },
  { n: 6, title: 'Minimum 44px hit target', before: '~26px', after: '44px' },
  { n: 7, title: 'Inputs get labels + helper + error state', before: 'placeholder-only', after: 'labelled + aria' },
];

/** Measured contrast on the shipped token pairs. */
export const contrastPairs = [
  { pair: 'Off-white #F4F5F7 on Ink', ratio: '18.0:1', pass: true },
  { pair: 'Ink on Paper #F3F1EA', ratio: '17.4:1', pass: true },
  { pair: 'Ink on Cyan #17D4D4 (primary btn)', ratio: '10.7:1', pass: true },
  { pair: 'Ink on Orange #FF6B2C (accent btn)', ratio: '6.9:1', pass: true },
  { pair: 'Ink on Pink #FF2D8E', ratio: '5.6:1', pass: true },
  { pair: 'Teal #0A5C5C on Paper (text)', ratio: '6.9:1', pass: true },
  { pair: 'Muted text 55% on Ink', ratio: '6.3:1', pass: true },
];
