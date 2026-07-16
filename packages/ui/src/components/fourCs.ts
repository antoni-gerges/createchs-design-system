/** Shared data + polar geometry for the 4Cs diagram and machine. */

export interface CDef {
  key: 'creative' | 'connect' | 'code' | 'crm';
  label: string;
  tagline: string;
  deliverable: string;
  color: string;
  /** Position around the ring, degrees clockwise from top. */
  angle: number;
  icon: 'compass' | 'share' | 'code' | 'person';
}

export const FOUR_CS: CDef[] = [
  { key: 'creative', label: 'Creative', tagline: 'IDEA · DESIGN · EXPERIENCE', deliverable: 'Brand, design and content that capture attention across every touchpoint.', color: '#17D4D4', angle: 0, icon: 'compass' },
  { key: 'connect',  label: 'Connect',  tagline: 'REACH · ENGAGE · GROW',      deliverable: 'Social, messaging and campaigns that connect brands with their audiences.', color: '#FF6B2C', angle: 90, icon: 'share' },
  { key: 'code',     label: 'Code',     tagline: 'BUILD · AUTOMATE · SCALE',    deliverable: 'Websites, apps, dashboards and the custom technology a business runs on.', color: '#BEE83A', angle: 180, icon: 'code' },
  { key: 'crm',      label: 'CRM',      tagline: 'MANAGE · NURTURE · CONVERT',  deliverable: 'Smart systems that capture leads, automate follow-up and convert customers.', color: '#FF2D8E', angle: 270, icon: 'person' },
];

/** 0° points up, angle increases clockwise. */
export function polar(cx: number, cy: number, r: number, angDeg: number) {
  const a = ((angDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

export function arcPath(cx: number, cy: number, r: number, a0: number, a1: number) {
  const s = polar(cx, cy, r, a0);
  const e = polar(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M${s.x.toFixed(2)},${s.y.toFixed(2)} A${r},${r} 0 ${large} 1 ${e.x.toFixed(2)},${e.y.toFixed(2)}`;
}

/** Wrap a delta angle into [-180, 180]. */
export function norm(d: number) {
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return d;
}
