import type { CDef } from './fourCs';

/** Tiny line icons for each C, drawn in a ~18-unit box centred on (cx, cy). */
export function PodIcon({ icon, cx, cy, color, size = 9 }: { icon: CDef['icon']; cx: number; cy: number; color: string; size?: number }) {
  const s = size / 9; // paths authored in a -9..9 box
  const common = { fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  let body: JSX.Element;
  switch (icon) {
    case 'compass':
      body = (
        <>
          <circle cx={0} cy={0} r={8} {...common} />
          <path d="M3.5,-3.5 L-1,1 L-3.5,3.5 L1,-1 Z" fill={color} stroke="none" />
        </>
      );
      break;
    case 'share':
      body = (
        <>
          <line x1={-5} y1={5} x2={5} y2={-4} {...common} />
          <line x1={-5} y1={5} x2={5} y2={4} {...common} />
          <circle cx={-5} cy={5} r={2.4} fill={color} stroke="none" />
          <circle cx={5} cy={-4} r={2.4} fill={color} stroke="none" />
          <circle cx={5} cy={4} r={2.4} fill={color} stroke="none" />
        </>
      );
      break;
    case 'code':
      body = (
        <>
          <path d="M-3,-5 L-8,0 L-3,5" {...common} />
          <path d="M3,-5 L8,0 L3,5" {...common} />
        </>
      );
      break;
    case 'person':
    default:
      body = (
        <>
          <circle cx={0} cy={-3.5} r={3.2} {...common} />
          <path d="M-6,7 C-6,1.5 6,1.5 6,7" {...common} />
        </>
      );
      break;
  }
  return <g transform={`translate(${cx},${cy}) scale(${s})`}>{body}</g>;
}
