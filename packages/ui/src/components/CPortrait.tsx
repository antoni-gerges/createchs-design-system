import { useMemo, type CSSProperties } from 'react';

/** 64-char luminance codec alphabet (matches cgrid-data.js). */
export const CGRID_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-';

const WP = [200, 300, 400, 500, 600, 700];

function decode(data: string, alpha = CGRID_ALPHA): number[] {
  const out = new Array(data.length);
  for (let i = 0; i < data.length; i++) out[i] = alpha.indexOf(data[i]) / 63;
  return out;
}

function down(vals: number[], sCols: number, sRows: number, tCols: number) {
  const tRows = Math.round((tCols * sRows) / sCols);
  const out = new Float32Array(tCols * tRows);
  for (let r = 0; r < tRows; r++) {
    for (let c = 0; c < tCols; c++) {
      const r0 = Math.floor((r / tRows) * sRows);
      const r1 = Math.max(r0 + 1, Math.floor(((r + 1) / tRows) * sRows));
      const c0 = Math.floor((c / tCols) * sCols);
      const c1 = Math.max(c0 + 1, Math.floor(((c + 1) / tCols) * sCols));
      let s = 0, k = 0;
      for (let y = r0; y < r1; y++) for (let x = c0; x < c1; x++) { s += vals[y * sCols + x]; k++; }
      out[r * tCols + c] = s / k;
    }
  }
  return { grid: out, tRows };
}

export type CPortraitTone = 'cream' | 'ink' | 'cyan' | 'duotone';

function toneFn(tone: CPortraitTone): (n: number) => string {
  switch (tone) {
    case 'ink':
      return (n) => `rgba(10,11,13,${(0.16 + 0.82 * n).toFixed(3)})`;
    case 'cyan':
      return (n) => `rgba(8,40,40,${(0.22 + 0.78 * n).toFixed(3)})`;
    case 'duotone':
      return (n) => {
        const l = (a: number, b: number) => Math.round(a + (b - a) * n);
        return `rgba(${l(255, 23)},${l(45, 212)},${l(142, 212)},${(0.4 + 0.6 * n).toFixed(3)})`;
      };
    case 'cream':
    default:
      return (n) => `rgba(243,241,234,${(0.22 + 0.78 * n).toFixed(3)})`;
  }
}

function hexToRgb(h: string): [number, number, number] {
  let s = h.replace('#', '');
  if (s.length === 3) s = s.split('').map((c) => c + c).join('');
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}

/** Map luminance 0..1 across N colour stops (dark → light) with an alpha ramp. Powers solid/duotone/tritone/N-tone. */
export function stopsColorFn(stops: string[]): (n: number) => string {
  const rgb = stops.map(hexToRgb);
  return (n) => {
    let c: number[];
    if (rgb.length === 1) c = rgb[0];
    else {
      const seg = n * (rgb.length - 1);
      const i = Math.min(rgb.length - 2, Math.floor(seg));
      const t = seg - i;
      c = [0, 1, 2].map((k) => Math.round(rgb[i][k] + (rgb[i + 1][k] - rgb[i][k]) * t));
    }
    return `rgba(${c[0]},${c[1]},${c[2]},${(0.2 + 0.8 * n).toFixed(3)})`;
  };
}

export interface BuildCPortraitSvgOpts {
  data: string;
  cols: number;
  rows: number;
  targetCols?: number;
  width?: number;
  tone?: CPortraitTone;
  /** Custom colour stops (dark → light); overrides `tone` when set. */
  stops?: string[];
  crop?: [number, number, number, number];
  floorLift?: boolean;
  /** Background fill of the exported SVG. */
  ground?: string;
  /** Add a self-animating light sweep (works on a webpage; harmless if static). */
  shimmer?: boolean;
}

/**
 * Export a C-portrait as a self-contained SVG string (each cell a `<text>`
 * "C"). With `shimmer`, embeds a CSS keyframe light-sweep so the SVG animates
 * on its own when placed on a webpage. Note: the glyph is Fahkwang — the host
 * page needs that font loaded, else it falls back to a serif.
 */
export function buildCPortraitSvg({
  data, cols, rows, targetCols = 72, width = 520, tone = 'cream', stops, crop, floorLift = false, ground = '#060708', shimmer = false,
}: BuildCPortraitSvgOpts): string {
  let vals = decode(data);
  let sc = cols, sr = rows;
  if (crop) {
    const [x0, x1, y0, y1] = crop;
    const cx0 = Math.floor(x0 * cols), cx1 = Math.ceil(x1 * cols);
    const cy0 = Math.floor(y0 * rows), cy1 = Math.ceil(y1 * rows);
    const nc = cx1 - cx0, nr = cy1 - cy0;
    const cropped = new Array(nc * nr);
    for (let y = 0; y < nr; y++) for (let x = 0; x < nc; x++) cropped[y * nc + x] = vals[(y + cy0) * cols + (x + cx0)];
    vals = cropped; sc = nc; sr = nr;
  }
  const { grid } = down(vals, sc, sr, targetCols);
  const cell = width / targetCols;
  const rowH = cell * 1.02;
  const tRows = grid.length / targetCols;
  const H = Math.round(tRows * rowH);
  const thr = floorLift ? 0.11 : 0.05;
  const colFn = stops && stops.length ? stopsColorFn(stops) : toneFn(tone);
  let texts = '';
  for (let i = 0; i < grid.length; i++) {
    const n = grid[i];
    if (n < thr) continue;
    const c = i % targetCols, r = Math.floor(i / targetCols);
    const fs = (cell * (0.55 + n * 1.05)).toFixed(2);
    // split rgba() into fill + fill-opacity — the SVG `fill` attribute isn't reliably rgba-aware outside browsers
    const parts = (colFn(n).match(/\(([^)]+)\)/)?.[1] ?? '0,0,0,1').split(',').map((s) => s.trim());
    texts += `<text x="${((c + 0.5) * cell).toFixed(1)}" y="${((r + 0.5) * rowH).toFixed(1)}" font-size="${fs}" font-weight="${WP[Math.min(5, Math.floor(n * 6))]}" fill="rgb(${parts[0]},${parts[1]},${parts[2]})" fill-opacity="${parts[3] ?? '1'}">C</text>`;
  }
  const defs = shimmer
    ? `<defs><linearGradient id="cxshg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.5" stop-color="#fff" stop-opacity="0.5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>`
    : '';
  const style = shimmer
    ? `<style>.cxsh{mix-blend-mode:screen;animation:cxswp 3.4s linear infinite}@keyframes cxswp{from{transform:translateX(${-width}px)}to{transform:translateX(${width}px)}}@media(prefers-reduced-motion:reduce){.cxsh{animation:none;opacity:0}}</style>`
    : '';
  const sheen = shimmer ? `<rect class="cxsh" x="0" y="0" width="${width}" height="${H}" fill="url(#cxshg)"/>` : '';
  return `<svg viewBox="0 0 ${width} ${H}" xmlns="http://www.w3.org/2000/svg">${style}${defs}<rect width="${width}" height="${H}" fill="${ground}"/><g font-family="'Fahkwang',serif" text-anchor="middle" dominant-baseline="central">${texts}</g>${sheen}</svg>`;
}

export interface CPortraitProps {
  /** Row-major luminance string, one CGRID_ALPHA char per source pixel. */
  data: string;
  cols: number;
  rows: number;
  /** Output column count (detail). Aspect ratio derives automatically. */
  targetCols?: number;
  /** Render width in px. */
  width?: number;
  tone?: CPortraitTone;
  /** Custom colour stops (dark → light); overrides `tone` when set. */
  stops?: string[];
  /** Crop [x0,x1,y0,y1] as 0..1 fractions of the source, applied before downsample. */
  crop?: [number, number, number, number];
  /** Raise the skip threshold (0.05 → 0.11) so faint cells drop out on light grounds. */
  floorLift?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * The signature C-portrait — a photograph rebuilt entirely from Fahkwang "C"s,
 * where each cell's luminance drives the glyph's size and weight (brighter =
 * bigger + heavier). Oversized glyphs overflow their cells to create continuous
 * tone, so do not clip. Colour lives in `tone`; the mark/logo is unaffected.
 */
export function CPortrait({
  data, cols, rows, targetCols = 72, width = 340, tone = 'cream', stops, crop, floorLift = false, className, style,
}: CPortraitProps) {
  const cell = width / targetCols;
  const inner = useMemo(() => {
    let vals = decode(data);
    let sc = cols, sr = rows;
    if (crop) {
      const [x0, x1, y0, y1] = crop;
      const cx0 = Math.floor(x0 * cols), cx1 = Math.ceil(x1 * cols);
      const cy0 = Math.floor(y0 * rows), cy1 = Math.ceil(y1 * rows);
      const nc = cx1 - cx0, nr = cy1 - cy0;
      const cropped = new Array(nc * nr);
      for (let y = 0; y < nr; y++) for (let x = 0; x < nc; x++) cropped[y * nc + x] = vals[(y + cy0) * cols + (x + cx0)];
      vals = cropped; sc = nc; sr = nr;
    }
    const { grid } = down(vals, sc, sr, targetCols);
    const thr = floorLift ? 0.11 : 0.05;
    const col = stops && stops.length ? stopsColorFn(stops) : toneFn(tone);
    let s = '';
    for (let i = 0; i < grid.length; i++) {
      const n = grid[i];
      if (n < thr) { s += '<span></span>'; continue; }
      const fs = (cell * (0.55 + n * 1.05)).toFixed(2);
      s += `<span style="font-weight:${WP[Math.min(5, Math.floor(n * 6))]};font-size:${fs}px;color:${col(n)}">C</span>`;
    }
    return s;
  }, [data, cols, rows, targetCols, cell, tone, stops ? stops.join(',') : '', crop ? crop.join(',') : '', floorLift]);

  return (
    <div
      className={className}
      role="img"
      aria-label="Portrait drawn entirely in the letter C"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${targetCols}, ${cell}px)`,
        gridAutoRows: `${(cell * 1.02).toFixed(3)}px`,
        width: `${width}px`,
        maxWidth: '100%',
        fontFamily: "'Fahkwang', serif",
        lineHeight: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}
