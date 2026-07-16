import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  Mark, MARK_PATHS, MarkConstruction, MarkFormation, CPortrait, buildCPortraitSvg, CGRID_ALPHA, Lockup, Kicker, Button, Badge, Field, Card, Stat, Sparkline,
  ColorSwatch, TypeSpecimen, EnergyLine, EnergyField, PodIcon,
  FOUR_CS,
} from '@createchs/ui';
import { woman, horse } from '../content/cgrid';
import machineSvg from '../assets/createchs-4cs-machine.svg';
import { accents, colors } from '@createchs/tokens';
import { brand, idea, a11yFixes, contrastPairs } from '../content/content';
import { story } from '../content/story';

/* ---------- shared layout helpers ---------- */
function Head({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <header>
      <Kicker className="page__eyebrow">{eyebrow}</Kicker>
      <h1 className="page__title">{title}</h1>
      <p className="page__intro">{intro}</p>
      <EnergyLine height={22} style={{ marginTop: 24 }} />
    </header>
  );
}
function Sec({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="sec">
      <div className="sec__label"><h2>{title}</h2></div>
      {children}
    </section>
  );
}
const C_DOTS = [
  ['Creative', 'var(--cx-cyan)'],
  ['Connect', 'var(--cx-orange)'],
  ['Code', 'var(--cx-lime)'],
  ['CRM', 'var(--cx-pink)'],
] as const;

/* ============================= OVERVIEW ============================= */
export function Overview() {
  return (
    <div className="page">
      <Head eyebrow="The CreateCHS Design System" title="One connected system, in code." intro="A single source of truth — design tokens and accessible React components — for Creative, Connect, Code and CRM. Built accessible by default (WCAG AA)." />

      <Card variant="raised" style={{ marginTop: 40, padding: 48, textAlign: 'center' }}>
        <Mark size={92} title="CreateCHS" />
        <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 600, fontSize: 64, letterSpacing: 1, marginTop: 20 }}>CREATECHS</div>
        <div style={{ fontFamily: 'var(--cx-font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 24, color: 'var(--cx-cyan)', marginTop: 10 }}>{brand.tagline}</div>
        <div className="row wrap" style={{ justifyContent: 'center', gap: 30, marginTop: 34 }}>
          {C_DOTS.map(([label, col]) => (
            <div key={label} className="stack" style={{ alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 600, fontSize: 26, color: col }}>C</span>
              <Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)' }}>{label}</Kicker>
            </div>
          ))}
        </div>
      </Card>

      <Sec title="What's in the system">
        <div className="grid g3">
          {[
            ['@createchs/tokens', 'Framework-agnostic colours, type scale, spacing, radius, motion & a11y constants — as CSS custom properties and typed TS.'],
            ['@createchs/ui', 'Accessible React components: Button, Badge, Field, Stat, Mark, EnergyLine, the 4Cs Machine and more.'],
            ['apps/docs', 'This site — the living guidelines, rendered entirely from the library.'],
          ].map(([t, d]) => (
            <Card key={t}><div className="code" style={{ display: 'inline-block', marginBottom: 10 }}>{t}</div><p className="muted" style={{ fontSize: 14, margin: 0 }}>{d}</p></Card>
          ))}
        </div>
      </Sec>

      <Sec title="Install">
        <Card><pre style={{ margin: 0, fontFamily: 'ui-monospace, monospace', fontSize: 13, color: 'var(--cx-text-muted)', whiteSpace: 'pre-wrap' }}>{`import '@createchs/tokens/tokens.css';
import '@createchs/ui/styles.css';
import { Button } from '@createchs/ui';

<Button variant="accent">Book a demo</Button>`}</pre></Card>
      </Sec>
    </div>
  );
}

/* ============================= THE IDEA ============================= */
export function Idea() {
  return (
    <div className="page">
      <Head eyebrow="Chapter One" title="The Idea" intro="Positioning, mission, vision and belief." />
      <p style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 300, fontSize: 44, lineHeight: 1.18, marginTop: 44 }}>
        Createchs replaces fragmented tools, agencies, and manual work with <span style={{ fontStyle: 'italic', color: 'var(--cx-cyan)' }}>one connected system</span> — powered by creativity, technology, and AI.
      </p>
      <div className="grid g3" style={{ marginTop: 44 }}>
        {idea.pillars.map((p) => (
          <div key={p.label}>
            <Kicker style={{ color: p.color }}>{p.label}</Kicker>
            <p className="muted" style={{ fontSize: 14.5, marginTop: 12 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================= BRAND STORY ============================= */
export function BrandStory() {
  return (
    <div className="page">
      <Head eyebrow="Brand · Story & Voice" title="Brand Story" intro="Why Createchs exists, how we say it, and the voice behind the mark." />

      <div style={{ marginTop: 44 }}>
        {story.narrative.map((para, i) => (
          <p
            key={i}
            style={
              i === 0
                ? { fontFamily: 'var(--cx-font-display)', fontWeight: 300, fontSize: 32, lineHeight: 1.25, marginBottom: 20 }
                : { fontSize: 16, lineHeight: 1.7, color: 'var(--cx-text-muted)', marginBottom: 16, maxWidth: '68ch' }
            }
          >
            {para}
          </p>
        ))}
      </div>

      <div className="grid g3" style={{ marginTop: 28 }}>
        {story.taglines.map((t, i) => (
          <Card key={t} style={{ borderColor: i === 0 ? 'var(--cx-cyan)' : 'var(--cx-border)' }}>
            <span style={{ fontFamily: 'var(--cx-font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 20, color: i === 0 ? 'var(--cx-cyan)' : 'var(--cx-text)' }}>{t}</span>
          </Card>
        ))}
      </div>

      <Sec title="What makes us different">
        <div className="grid g3">
          {story.differentiators.map((d) => (
            <Card key={d.title}><h3 style={{ fontSize: 18 }}>{d.title}</h3><p className="muted" style={{ fontSize: 13.5, marginTop: 8 }}>{d.body}</p></Card>
          ))}
        </div>
      </Sec>

      <Sec title="Core values">
        <div className="grid g4">
          {story.values.map((v) => (
            <Card key={v.name} style={{ padding: 18 }}><h3 style={{ fontSize: 16 }}>{v.name}</h3><p className="subtle" style={{ fontSize: 12.5, marginTop: 6 }}>{v.body}</p></Card>
          ))}
        </div>
      </Sec>

      <Sec title="How we message">
        <Card>
          <p style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 300, fontSize: 22, lineHeight: 1.3 }}>{story.messaging.core}</p>
          <div style={{ marginTop: 18 }}>
            <Kicker className="subtle">Lead with</Kicker>
            <ol style={{ margin: '10px 0 0', paddingLeft: 20, color: 'var(--cx-text-muted)', fontSize: 14, lineHeight: 1.8 }}>
              {story.messaging.leadWith.map((m) => <li key={m}>{m}</li>)}
            </ol>
          </div>
        </Card>
      </Sec>

      <Sec title="One platform replaces">
        <div className="row wrap gap-2">
          {story.platformReplaces.map((t) => <Badge key={t} tone="neutral">{t}</Badge>)}
        </div>
      </Sec>

      <Sec title="Who we serve">
        <div className="row wrap gap-2">
          {story.industries.map((t) => <Badge key={t} tone="primary">{t}</Badge>)}
        </div>
        <p className="subtle" style={{ fontSize: 13, marginTop: 16 }}>
          <a href="/assets/brand-story.md" target="_blank" rel="noreferrer" style={{ color: 'var(--cx-cyan)' }}>Read the full brand story →</a>
        </p>
      </Sec>
    </div>
  );
}

/* ============================= LOGO & MARK ============================= */
const MARK_QUARTERS = ['top', 'right', 'bottom', 'left'] as const;

export function Logo() {
  const treatments = [
    { bg: '#0A0B0D', fg: '#F4F5F7', name: 'White on Ink' },
    { bg: '#F3F1EA', fg: '#0A0B0D', name: 'Black on Paper' },
    { bg: '#17D4D4', fg: '#0A0B0D', name: 'Black on Cyan' },
    { bg: '#FF6B2C', fg: '#F4F5F7', name: 'White on Orange' },
  ];
  const specs: [string, string][] = [
    ['Base glyph', 'Fahkwang "C"'],
    ['Instances', '4'],
    ['Rotation step', '90°'],
    ['Pivot', 'Shared centre'],
    ['Symmetry', '4-fold rotational'],
  ];
  const frames = [
    { n: '01', t: 'Place one C', s: 'at 0°', solid: 1 },
    { n: '02', t: 'Rotate +90°', s: 'copy struck', solid: 2 },
    { n: '03', t: 'Rotate +180°', s: 'three arcs', solid: 3 },
    { n: '04', t: 'Rotate +270°', s: 'quatrefoil closes', solid: 4 },
    { n: '05', t: 'The mark', s: 'solid, unified', solid: 4, reverse: true },
  ];
  return (
    <div className="page">
      <Head eyebrow="Chapter Two" title="The Mark" intro="Four interlocking rings — one per C — woven into a single quatrefoil. One Fahkwang C, struck and turned 90° around a shared centre." />
      <div className="grid g2" style={{ marginTop: 40 }}>
        <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26, minHeight: 300 }}>
          <Mark size={132} title="CreateCHS mark" />
          <Lockup markSize={0} wordSize={26} />
        </Card>
        <Card style={{ display: 'flex', flexDirection: 'column', minHeight: 300 }}>
          <Kicker className="subtle">Formation — one C, four turns</Kicker>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MarkFormation size={176} />
          </div>
        </Card>
      </div>

      <Sec title="Construction">
        <div className="grid g2" style={{ alignItems: 'stretch' }}>
          <Card variant="paper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <MarkConstruction size={360} />
          </Card>
          <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <Kicker className="subtle">Specification</Kicker>
            <div style={{ marginTop: 10 }}>
              {specs.map(([k, v]) => (
                <div key={k} className="tokline">
                  <span className="k">{k}</span>
                  <span style={{ fontFamily: 'var(--cx-font-display)', fontSize: 15 }}>{v}</span>
                </div>
              ))}
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 16 }}>
              Each <span style={{ fontFamily: 'var(--cx-font-display)' }}>C</span> is an arc of one generating ring. The four rings overlap so their open counters meet at the centre — the negative space becomes a fifth, implied <span style={{ fontFamily: 'var(--cx-font-display)' }}>C</span>.
            </p>
          </Card>
        </div>
      </Sec>

      <Sec title="Strike, rotate, repeat">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {frames.map((f) => (
            <div key={f.n} className="stack" style={{ gap: 9 }}>
              <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 10, border: `1px solid ${f.reverse ? 'var(--cx-ink)' : 'var(--cx-border)'}`, background: f.reverse ? 'var(--cx-ink)' : 'var(--cx-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 133.89 133.89" width="62%" height="62%" style={{ color: f.reverse ? 'var(--cx-paper)' : 'var(--cx-text)' }} aria-hidden="true">
                  {MARK_QUARTERS.map((q, i) => (
                    <path key={q} d={MARK_PATHS[q]} fill="currentColor" style={{ opacity: i < f.solid ? 1 : 0.14 }} />
                  ))}
                </svg>
              </div>
              <div className="row gap-2" style={{ alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--cx-font-display)', fontSize: 13, color: 'var(--cx-text-subtle)' }}>{f.n}</span>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{f.t}</span>
              </div>
              <span className="subtle" style={{ fontSize: 10 }}>{f.s}</span>
            </div>
          ))}
        </div>
      </Sec>

      <Sec title="Placement — always white or black">
        <div className="grid g4">
          {treatments.map((t) => (
            <div key={t.name} className="stack" style={{ gap: 8 }}>
              <div style={{ background: t.bg, borderRadius: 12, aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--cx-border)' }}>
                <Mark size={64} style={{ color: t.fg }} />
              </div>
              <Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)' }}>{t.name}</Kicker>
            </div>
          ))}
        </div>
        <p className="subtle" style={{ fontSize: 13, marginTop: 16 }}>The logo is always solid white or black — whichever holds contrast on the ground. Never tint it.</p>
      </Sec>
    </div>
  );
}

/* ============================= COLOR ============================= */
export function Color() {
  return (
    <div className="page">
      <Head eyebrow="Chapter Three" title="Color" intro="Two grounds — Ink and Paper — plus four accent C's, each with a tint ramp. Accent fills always take ink text; on Paper, text uses the darker ramp step." />
      <div className="grid g2" style={{ marginTop: 40 }}>
        {[
          { name: 'Ink', hex: colors.ink, role: 'Primary dark ground' },
          { name: 'Paper', hex: colors.paper, role: 'Warm light ground' },
        ].map((g) => (
          <div key={g.name} style={{ display: 'flex', alignItems: 'stretch', minHeight: 72, borderRadius: 'var(--cx-radius)', overflow: 'hidden', border: '1px solid var(--cx-border)', background: 'var(--cx-surface)' }}>
            <div style={{ width: 96, flex: '0 0 auto', background: g.hex, borderRight: '1px solid var(--cx-border)' }} aria-hidden="true" />
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px' }}>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--cx-font-display)', fontSize: 18 }}>{g.name}</span>
                <span className="subtle" style={{ fontSize: 11 }}>{g.role}</span>
              </span>
              <span className="num subtle">{g.hex}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid g4" style={{ marginTop: 16 }}>
        {Object.values(accents).map((a) => (
          <ColorSwatch key={a.base} name={a.name} hex={a.base} role={a.role} tints={a.tints} onColor={a.onColor} />
        ))}
      </div>
      <p className="subtle" style={{ fontSize: 13, marginTop: 18 }}>
        <span className="code">--cx-on-accent</span> = Ink on every accent fill · <span className="code">--cx-cyan-on-paper</span> = #0A5C5C · <span className="code">--cx-orange-on-paper</span> = #B3410F.
      </p>
    </div>
  );
}

/* ============================= TYPOGRAPHY ============================= */
export function Typography() {
  return (
    <div className="page">
      <Head eyebrow="Chapter Four" title="Typography" intro="Fahkwang for display, Space Grotesk for text & UI — both self-hosted in the tokens package." />
      <div className="grid g2" style={{ marginTop: 40 }}>
        <Card>
          <div className="row" style={{ justifyContent: 'space-between' }}><Kicker style={{ color: 'var(--cx-cyan)' }}>Display</Kicker><span className="subtle" style={{ fontSize: 12 }}>Fahkwang</span></div>
          <div style={{ fontFamily: 'var(--cx-font-display)', fontSize: 92, lineHeight: 0.9, marginTop: 6 }}>Aa</div>
          <p style={{ fontFamily: 'var(--cx-font-display)', fontSize: 13, letterSpacing: 1, color: 'var(--cx-text-muted)', marginTop: 10 }}>ABCDEFGHIJKLM · abcdefghijklm · 0123456789</p>
        </Card>
        <Card>
          <div className="row" style={{ justifyContent: 'space-between' }}><Kicker style={{ color: 'var(--cx-orange)' }}>Text &amp; UI</Kicker><span className="subtle" style={{ fontSize: 12 }}>Space Grotesk</span></div>
          <div style={{ fontWeight: 500, fontSize: 92, lineHeight: 0.9, marginTop: 6 }}>Aa</div>
          <p style={{ fontSize: 13, letterSpacing: 0.5, color: 'var(--cx-text-muted)', marginTop: 10 }}>ABCDEFGHIJKLM · abcdefghijklm · 0123456789</p>
        </Card>
      </div>
      <Sec title="Type scale"><TypeSpecimen /></Sec>
    </div>
  );
}

/* ============================= C-DRAWING MAKER ============================= */
const CD_GROUNDS: Record<string, string> = { ink: '#060708', paper: '#F3F1EA', cyan: '#17D4D4' };
const CD_PALETTE = ['#F3F1EA', '#F4F5F7', '#17D4D4', '#0A5C5C', '#FF6B2C', '#BEE83A', '#FF2D8E', '#0A0B0D'];
const CD_BLENDS: { n: 1 | 2 | 3; label: string }[] = [
  { n: 1, label: 'Solid' }, { n: 2, label: 'Duotone' }, { n: 3, label: 'Tritone' },
];
const CD_STOP_LABELS: Record<number, string[]> = { 1: ['Colour'], 2: ['Shadow', 'Highlight'], 3: ['Shadow', 'Mid', 'Highlight'] };

function PaletteRow({ value, onChange }: { value: string; onChange: (hex: string) => void }) {
  return (
    <div className="cx-emk-seg">
      {CD_PALETTE.map((hex) => (
        <button key={hex} className="cx-emk-swatch" aria-pressed={value === hex} aria-label={hex} title={hex} onClick={() => onChange(hex)} style={{ background: hex }} />
      ))}
    </div>
  );
}

function CDrawingMaker() {
  const [subject, setSubject] = useState('horse');
  const [portrait, setPortrait] = useState<{ data: string; cols: number; rows: number }>({ data: horse.data, cols: horse.cols, rows: horse.rows });
  const [detail, setDetail] = useState(72);
  const [blend, setBlend] = useState<1 | 2 | 3>(2);
  const [stops, setStops] = useState<string[]>(['#0A5C5C', '#FF2D8E', '#DBF48C']);
  const [ground, setGround] = useState('ink');
  const [copied, setCopied] = useState(false);

  const crop: [number, number, number, number] | undefined = subject === 'woman' ? [0, 1, 0, 0.6] : undefined;
  const floorLift = ground !== 'ink';
  const groundColor = CD_GROUNDS[ground];
  const activeStops = stops.slice(0, blend);
  const setStop = (i: number, hex: string) => setStops((prev) => prev.map((s, j) => (j === i ? hex : s)));

  const pickPreset = (k: 'horse' | 'woman') => {
    setSubject(k);
    const p = k === 'horse' ? horse : woman;
    setPortrait({ data: p.data, cols: p.cols, rows: p.rows });
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const COLS = 108;
      const rows = Math.max(1, Math.round((COLS * img.height) / img.width));
      const cvs = document.createElement('canvas');
      cvs.width = COLS; cvs.height = rows;
      const ctx = cvs.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, COLS, rows);
      const d = ctx.getImageData(0, 0, COLS, rows).data;
      let s = '';
      for (let i = 0; i < COLS * rows; i++) {
        let L = (0.2126 * d[i * 4] + 0.7152 * d[i * 4 + 1] + 0.0722 * d[i * 4 + 2]) / 255;
        L = Math.pow(L, 0.9);
        L = Math.max(0, Math.min(1, (L - 0.04) / 0.92));
        s += CGRID_ALPHA[Math.round(L * 63)];
      }
      setSubject('upload');
      setPortrait({ data: s, cols: COLS, rows });
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const copy = () => {
    const svg = buildCPortraitSvg({ data: portrait.data, cols: portrait.cols, rows: portrait.rows, targetCols: detail, width: 520, stops: activeStops, crop, floorLift, ground: groundColor });
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(svg).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1400); });
  };

  return (
    <section className="sec">
      <div className="sec__label"><h2>C-drawing maker</h2></div>
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <div className="cx-cd-preview" style={{ background: groundColor }}>
          <CPortrait data={portrait.data} cols={portrait.cols} rows={portrait.rows} targetCols={detail} width={300} stops={activeStops} crop={crop} floorLift={floorLift} />
        </div>
        <div className="cx-emk-controls">
          <div className="cx-emk-ctl">
            <label>Subject</label>
            <div className="cx-cd-seg">
              <button className={subject === 'horse' ? 'on' : ''} onClick={() => pickPreset('horse')}>Horse</button>
              <button className={subject === 'woman' ? 'on' : ''} onClick={() => pickPreset('woman')}>Portrait</button>
              <label className={`cx-cd-up${subject === 'upload' ? ' on' : ''}`}>Upload<input type="file" accept="image/*" onChange={onFile} hidden /></label>
            </div>
          </div>
          <div className="cx-emk-ctl">
            <label>Detail <span className="v">{detail}</span></label>
            <input className="cx-emk-range" type="range" min={40} max={104} value={detail} onChange={(e) => setDetail(+e.target.value)} />
          </div>
          <div className="cx-emk-ctl">
            <label>Blend</label>
            <div className="cx-cd-seg">
              {CD_BLENDS.map((b) => (
                <button key={b.n} className={blend === b.n ? 'on' : ''} onClick={() => setBlend(b.n)}>{b.label}</button>
              ))}
            </div>
          </div>
          {activeStops.map((s, i) => (
            <div className="cx-emk-ctl" key={i}>
              <label>{CD_STOP_LABELS[blend][i]}</label>
              <PaletteRow value={s} onChange={(hex) => setStop(i, hex)} />
            </div>
          ))}
          <div className="cx-emk-ctl">
            <label>Ground</label>
            <div className="cx-cd-seg">
              {Object.keys(CD_GROUNDS).map((g) => (
                <button key={g} className={ground === g ? 'on' : ''} onClick={() => setGround(g)} style={{ textTransform: 'capitalize' }}>{g}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="cx-emk-actions">
          <Button variant="secondary" size="sm" onClick={copy}>{copied ? 'Copied ✓' : 'Copy SVG'}</Button>
          <span className="subtle" style={{ fontSize: 12, marginLeft: 'auto' }}>Fahkwang “C” · stops map the image's shadows → highlights (dark → light)</span>
        </div>
      </Card>
    </section>
  );
}

/* ============================= MOTIF ============================= */
export function Motif() {
  const grounds = [
    { tone: 'cream' as const, bg: 'var(--cx-ink)', floorLift: false, name: 'Cream on Ink' },
    { tone: 'ink' as const, bg: 'var(--cx-paper)', floorLift: true, name: 'Ink on Paper' },
    { tone: 'cyan' as const, bg: '#17D4D4', floorLift: true, name: 'Ink on Cyan' },
  ];
  return (
    <div className="page">
      <Head eyebrow="Chapter Five" title="Motif" intro="The signature C-drawing — any image rebuilt entirely from the Fahkwang “C”. Glyph size and weight carry the light; the same system works on any ground." />

      <Sec title="Drawn in C">
        <Card style={{ display: 'flex', justifyContent: 'center', padding: 28, background: '#060708' }}>
          <CPortrait data={horse.data} cols={horse.cols} rows={horse.rows} targetCols={84} width={440} tone="cream" />
        </Card>
      </Sec>

      <CDrawingMaker />

      <Sec title="Works on any ground">
        <div className="grid g3">
          {grounds.map((g) => (
            <div key={g.name} className="stack" style={{ gap: 8 }}>
              <div style={{ background: g.bg, borderRadius: 12, padding: 16, display: 'flex', justifyContent: 'center', border: '1px solid var(--cx-border)' }}>
                <CPortrait data={woman.data} cols={woman.cols} rows={woman.rows} crop={[0, 1, 0, 0.6]} targetCols={46} width={200} tone={g.tone} floorLift={g.floorLift} />
              </div>
              <Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)' }}>{g.name}</Kicker>
            </div>
          ))}
        </div>
        <p className="subtle" style={{ fontSize: 13, marginTop: 16 }}>Only the C colour changes for contrast — cream on dark, near-black on light. Brighter pixels become larger, heavier C's; shadows fall away.</p>
      </Sec>

      <Sec title="The mark as a graphic device">
        <div className="grid g3">
          <div className="stack" style={{ gap: 8 }}>
            <div style={{ background: 'var(--cx-ink)', borderRadius: 12, aspectRatio: '1 / 1', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mark size="150%" style={{ color: 'var(--cx-white)' }} />
            </div>
            <Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)' }}>Solid · cropped &amp; bled</Kicker>
          </div>
          <div className="stack" style={{ gap: 8 }}>
            <div style={{ background: 'var(--cx-ink)', borderRadius: 12, aspectRatio: '1 / 1', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', placeItems: 'center', padding: 10 }} aria-hidden="true">
              {Array.from({ length: 36 }, (_, i) => (
                <span key={i} style={{ fontFamily: 'var(--cx-font-display)', fontSize: 26, color: i % 2 ? 'var(--cx-cyan-core)' : 'var(--cx-cyan)' }}>C</span>
              ))}
            </div>
            <Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)' }}>Grid · C-texture</Kicker>
          </div>
          <div className="stack" style={{ gap: 8 }}>
            <div style={{ background: 'var(--cx-paper)', borderRadius: 12, aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mark size={92} style={{ color: 'var(--cx-ink)' }} />
            </div>
            <Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)' }}>Reversed · ink on paper</Kicker>
          </div>
        </div>
      </Sec>
    </div>
  );
}

/* ============================= ENERGY-LINE MAKER ============================= */
const EMK_COLORS: Record<string, [string, string]> = {
  cyan: ['#17D4D4', '#6BEAEA'],
  orange: ['#FF6B2C', '#FFB06A'],
  pink: ['#FF2D8E', '#FF6FB0'],
  lime: ['#BEE83A', '#DBF48C'],
};
function SwatchRow({ value, onChange }: { value: string; onChange: (k: string) => void }) {
  return (
    <div className="cx-emk-seg">
      {Object.keys(EMK_COLORS).map((k) => (
        <button key={k} className="cx-emk-swatch" aria-pressed={value === k} aria-label={k} title={k} onClick={() => onChange(k)} style={{ background: EMK_COLORS[k][0] }} />
      ))}
    </div>
  );
}
function mulberry32(a: number) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
interface EmkParams { colorA: string; colorB: string; lines: number; amp: number; bloom: number; speed: number; animate: boolean; seed: number; }
function buildEnergySVG({ colorA, colorB, lines, amp, bloom, speed, animate, seed }: EmkParams): string {
  const W = 500, H = 200;
  const dur = (8.5 - speed * 0.65).toFixed(2);
  const pair = [colorA, colorB];
  let paths = '';
  for (let i = 0; i < lines; i++) {
    const rand = mulberry32(seed * 131 + i * 977);
    const cy = H * 0.5 + (rand() * 2 - 1) * H * 0.18;
    const seg = 4, dx = W / seg;
    let prevY = cy, d = `M0,${cy.toFixed(1)}`;
    for (let s = 1; s <= seg; s++) {
      const x = dx * s;
      const y = Math.max(14, Math.min(H - 14, H * 0.5 + (rand() * 2 - 1) * amp));
      d += ` C ${(x - dx * 0.55).toFixed(1)},${prevY.toFixed(1)} ${(x - dx * 0.42).toFixed(1)},${y.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`;
      prevY = y;
    }
    const [b, c] = EMK_COLORS[pair[i % 2]] ?? EMK_COLORS.cyan;
    paths += `<path d="${d}" fill="none" stroke="${b}" stroke-width="${bloom}" opacity="0.12" stroke-linecap="round"/>`;
    paths += `<path d="${d}" fill="none" stroke="${c}" stroke-width="1.3" opacity="0.32" stroke-linecap="round"/>`;
    paths += `<path class="cx-emk-cur" d="${d}" fill="none" stroke="${c}" stroke-width="1.9" opacity="0.95" stroke-linecap="round" stroke-dasharray="34 520" style="animation-duration:${dur}s;animation-delay:${(i * 0.45).toFixed(2)}s"/>`;
    paths += `<circle cx="${W}" cy="${prevY.toFixed(1)}" r="2.4" fill="${c}"/>`;
  }
  const style = `<style>.cx-emk-cur{${animate ? 'animation-name:cx-emk-flow;animation-timing-function:linear;animation-iteration-count:infinite;' : ''}}@keyframes cx-emk-flow{from{stroke-dashoffset:554}to{stroke-dashoffset:0}}@media(prefers-reduced-motion:reduce){.cx-emk-cur{animation:none!important}}</style>`;
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">${style}${paths}</svg>`;
}

function EnergyMaker() {
  const [colorA, setColorA] = useState('cyan');
  const [colorB, setColorB] = useState('orange');
  const [lines, setLines] = useState(4);
  const [amp, setAmp] = useState(46);
  const [bloom, setBloom] = useState(8);
  const [speed, setSpeed] = useState(5);
  const [animate, setAnimate] = useState(true);
  const [seed, setSeed] = useState(7);
  const [copied, setCopied] = useState(false);
  const svg = useMemo(() => buildEnergySVG({ colorA, colorB, lines, amp, bloom, speed, animate, seed }), [colorA, colorB, lines, amp, bloom, speed, animate, seed]);

  const copy = () => {
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(svg).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1400); });
  };

  return (
    <section className="sec">
      <div className="sec__label"><h2>Energy-line maker</h2></div>
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <div className="cx-emk-preview" dangerouslySetInnerHTML={{ __html: svg }} />
        <div className="cx-emk-controls">
          <div className="cx-emk-ctl">
            <label>Colour A</label>
            <SwatchRow value={colorA} onChange={setColorA} />
          </div>
          <div className="cx-emk-ctl">
            <label>Colour B</label>
            <SwatchRow value={colorB} onChange={setColorB} />
          </div>
          <div className="cx-emk-ctl">
            <label>Lines <span className="v">{lines}</span></label>
            <input className="cx-emk-range" type="range" min={2} max={6} step={1} value={lines} onChange={(e) => setLines(+e.target.value)} />
          </div>
          <div className="cx-emk-ctl">
            <label>Flow <span className="v">{amp}</span></label>
            <input className="cx-emk-range" type="range" min={10} max={80} step={1} value={amp} onChange={(e) => setAmp(+e.target.value)} />
          </div>
          <div className="cx-emk-ctl">
            <label>Bloom <span className="v">{bloom}</span></label>
            <input className="cx-emk-range" type="range" min={4} max={16} step={1} value={bloom} onChange={(e) => setBloom(+e.target.value)} />
          </div>
          <div className="cx-emk-ctl">
            <label>Speed <span className="v">{speed}</span></label>
            <input className="cx-emk-range" type="range" min={1} max={10} step={1} value={speed} onChange={(e) => setSpeed(+e.target.value)} disabled={!animate} />
          </div>
        </div>
        <div className="cx-emk-actions">
          <Button variant={animate ? 'primary' : 'secondary'} size="sm" onClick={() => setAnimate((a) => !a)}>Animation: {animate ? 'On' : 'Off'}</Button>
          <Button variant="secondary" size="sm" onClick={() => setSeed(Math.floor(Math.random() * 100000))}>Randomize</Button>
          <Button variant="secondary" size="sm" onClick={copy}>{copied ? 'Copied ✓' : 'Copy SVG'}</Button>
          <span className="subtle" style={{ fontSize: 12, marginLeft: 'auto' }}>Cyan leads · bloom + core · respects reduced-motion</span>
        </div>
      </Card>
    </section>
  );
}

/* ---- Rope maker: two live, moving currents ---- */
function ropePath(W: number, H: number, phase: number, amp: number, waves: number): string {
  const N = 64, mid = H / 2;
  let d = '';
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const env = Math.sin(Math.PI * u); // taper to the centreline at both ends
    const y = mid + env * amp * (0.7 * Math.sin(waves * u * Math.PI * 2 + phase) + 0.3 * Math.sin(waves * 1.7 * u * Math.PI * 2 - phase * 1.3));
    d += (i ? ' L ' : 'M ') + (u * W).toFixed(1) + ',' + y.toFixed(1);
  }
  return d;
}

function RopeMaker() {
  const [colorA, setColorA] = useState('cyan');
  const [colorB, setColorB] = useState('pink');
  const [amp, setAmp] = useState(52);
  const [waves, setWaves] = useState(2);
  const [speed, setSpeed] = useState(5);
  const [bloom, setBloom] = useState(12);
  const [animate, setAnimate] = useState(true);
  const [copied, setCopied] = useState(false);
  const bloomA = useRef<SVGPathElement>(null);
  const coreA = useRef<SVGPathElement>(null);
  const bloomB = useRef<SVGPathElement>(null);
  const coreB = useRef<SVGPathElement>(null);
  const W = 500, H = 200;

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const draw = (t: number) => {
      const ph = reduce || !animate ? 0.6 : (t / 1000) * (speed * 0.6);
      const dA = ropePath(W, H, ph, amp, waves);
      const dB = ropePath(W, H, ph + Math.PI, amp, waves);
      bloomA.current?.setAttribute('d', dA); coreA.current?.setAttribute('d', dA);
      bloomB.current?.setAttribute('d', dB); coreB.current?.setAttribute('d', dB);
      if (animate && !reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [amp, waves, speed, animate]);

  const A = EMK_COLORS[colorA] ?? EMK_COLORS.cyan;
  const B = EMK_COLORS[colorB] ?? EMK_COLORS.pink;

  const copySvg = () => {
    const rope = (d: string, col: [string, string]) =>
      `<path d="${d}" fill="none" stroke="${col[0]}" stroke-width="${bloom}" opacity="0.16" stroke-linecap="round"/>` +
      `<path d="${d}" fill="none" stroke="${col[1]}" stroke-width="2" opacity="0.9" stroke-linecap="round"/>`;
    const dA = coreA.current?.getAttribute('d') ?? '';
    const dB = coreB.current?.getAttribute('d') ?? '';
    const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" fill="#0A0B0D"/>${rope(dA, A)}${rope(dB, B)}</svg>`;
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(svg).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1400); });
  };

  return (
    <section className="sec">
      <div className="sec__label"><h2>Woven ropes — live motion</h2></div>
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <div className="cx-emk-preview">
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" preserveAspectRatio="none" aria-label="Two energy ropes weaving in real time">
            <path ref={bloomA} fill="none" stroke={A[0]} strokeWidth={bloom} opacity="0.16" strokeLinecap="round" />
            <path ref={coreA} fill="none" stroke={A[1]} strokeWidth="2" opacity="0.9" strokeLinecap="round" />
            <path ref={bloomB} fill="none" stroke={B[0]} strokeWidth={bloom} opacity="0.16" strokeLinecap="round" />
            <path ref={coreB} fill="none" stroke={B[1]} strokeWidth="2" opacity="0.9" strokeLinecap="round" />
          </svg>
        </div>
        <div className="cx-emk-controls">
          <div className="cx-emk-ctl"><label>Rope A</label><SwatchRow value={colorA} onChange={setColorA} /></div>
          <div className="cx-emk-ctl"><label>Rope B</label><SwatchRow value={colorB} onChange={setColorB} /></div>
          <div className="cx-emk-ctl"><label>Amplitude <span className="v">{amp}</span></label><input className="cx-emk-range" type="range" min={16} max={80} value={amp} onChange={(e) => setAmp(+e.target.value)} /></div>
          <div className="cx-emk-ctl"><label>Waves <span className="v">{waves}</span></label><input className="cx-emk-range" type="range" min={1} max={5} value={waves} onChange={(e) => setWaves(+e.target.value)} /></div>
          <div className="cx-emk-ctl"><label>Speed <span className="v">{speed}</span></label><input className="cx-emk-range" type="range" min={1} max={10} value={speed} onChange={(e) => setSpeed(+e.target.value)} disabled={!animate} /></div>
          <div className="cx-emk-ctl"><label>Bloom <span className="v">{bloom}</span></label><input className="cx-emk-range" type="range" min={4} max={24} value={bloom} onChange={(e) => setBloom(+e.target.value)} /></div>
        </div>
        <div className="cx-emk-actions">
          <Button variant={animate ? 'primary' : 'secondary'} size="sm" onClick={() => setAnimate((a) => !a)}>Motion: {animate ? 'On' : 'Off'}</Button>
          <Button variant="secondary" size="sm" onClick={copySvg}>{copied ? 'Copied ✓' : 'Copy SVG'}</Button>
          <span className="subtle" style={{ fontSize: 12, marginLeft: 'auto' }}>Two ropes weave in counter-phase · respects reduced-motion</span>
        </div>
      </Card>
    </section>
  );
}

/* ============================= ENERGY ============================= */
const ENERGY_MOTIFS: [string, string][] = [
  ['Flow', 'Banners · Dividers'], ['Radial burst', 'Focus · Launch'], ['Orbit', 'Systems · Connection'],
  ['Pulse node', 'Live · Realtime'], ['Data field', 'Tech · Analytics'], ['Corner frame', 'Framing · Ads'],
  ['Signal', 'Voice · Realtime'], ['Data stream', 'Pipeline · Flow'], ['Mesh', 'Connected network'],
];

function EnergyMotif({ name }: { name: string }) {
  const cx = 120, cy = 55;
  const pol = (r: number, d: number): [number, number] => [cx + r * Math.cos(((d - 90) * Math.PI) / 180), cy + r * Math.sin(((d - 90) * Math.PI) / 180)];
  const C = 'var(--cx-cyan)', CC = 'var(--cx-cyan-core)', O = 'var(--cx-orange)', OC = 'var(--cx-orange-core)', P = 'var(--cx-pink)';
  let body: JSX.Element = <></>;
  if (name === 'Flow') body = (<>
    <path d="M12,50 C70,30 150,72 228,44" fill="none" stroke={C} strokeWidth="4" opacity="0.14" strokeLinecap="round" />
    <path d="M12,50 C70,30 150,72 228,44" fill="none" stroke={CC} strokeWidth="1.4" opacity="0.85" strokeLinecap="round" />
    <path d="M12,63 C80,82 160,42 228,60" fill="none" stroke={O} strokeWidth="3" opacity="0.13" strokeLinecap="round" />
    <path d="M12,63 C80,82 160,42 228,60" fill="none" stroke={OC} strokeWidth="1.1" opacity="0.6" strokeLinecap="round" />
    <path d="M12,71 C90,60 150,84 228,72" fill="none" stroke={P} strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    <circle cx="228" cy="44" r="2.4" fill={CC} /></>);
  else if (name === 'Radial burst') body = (<>
    {Array.from({ length: 12 }, (_, i) => { const d = i * 30; const a = pol(11, d), b = pol(43, d); const col = i === 0 ? P : i === 3 ? O : C; return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={col} strokeWidth="1.4" opacity={i % 3 === 0 ? 0.9 : 0.5} strokeLinecap="round" />; })}
    <circle cx={cx} cy={cy} r="3.4" fill="none" stroke={CC} strokeWidth="1" /><circle cx={cx} cy={cy} r="1.8" fill={CC} /></>);
  else if (name === 'Orbit') body = (<>
    <ellipse cx={cx} cy={cy} rx="62" ry="26" fill="none" stroke={C} strokeWidth="1.3" opacity="0.7" transform={`rotate(-16 ${cx} ${cy})`} />
    <ellipse cx={cx} cy={cy} rx="52" ry="30" fill="none" stroke={O} strokeWidth="1.1" opacity="0.55" transform={`rotate(20 ${cx} ${cy})`} />
    <ellipse cx={cx} cy={cy} rx="28" ry="28" fill="none" stroke={CC} strokeWidth="0.8" opacity="0.3" />
    <circle cx={cx} cy={cy} r="2.4" fill={CC} /><circle cx="188" cy="40" r="2" fill={OC} /></>);
  else if (name === 'Pulse node') body = (<>
    <path d="M12,55 L228,55" fill="none" stroke={C} strokeWidth="4" opacity="0.12" strokeLinecap="round" />
    <path d="M12,55 L228,55" fill="none" stroke={CC} strokeWidth="1.3" opacity="0.7" strokeLinecap="round" />
    <circle cx={cx} cy={cy} r="11" fill="none" stroke={CC} strokeWidth="1" opacity="0.35" /><circle cx={cx} cy={cy} r="6" fill="none" stroke={CC} strokeWidth="1" opacity="0.7" /><circle cx={cx} cy={cy} r="2.6" fill={CC} /></>);
  else if (name === 'Data field') body = (<>{Array.from({ length: 22 }, (_, i) => { const x = 18 + i * 9.7; const hs = [12, 20, 28, 16, 32, 22, 12, 28, 20, 34, 14, 24, 18, 30, 22, 12, 26, 16, 20, 30, 14, 22][i]; return <line key={i} x1={x} y1={cy - hs / 2} x2={x} y2={cy + hs / 2} stroke={CC} strokeWidth="1.4" opacity="0.5" />; })}</>);
  else if (name === 'Corner frame') body = (<>
    <path d="M18,34 L18,18 L52,18" fill="none" stroke={CC} strokeWidth="1.6" opacity="0.85" strokeLinecap="round" />
    <path d="M222,76 L222,92 L188,92" fill="none" stroke={OC} strokeWidth="1.6" opacity="0.7" strokeLinecap="round" />
    <svg x={cx - 13} y={cy - 13} width="26" height="26" viewBox="0 0 133.89 133.89">{Object.values(MARK_PATHS).map((d, i) => <path key={i} d={d} fill={CC} opacity="0.7" />)}</svg></>);
  else if (name === 'Signal') body = (<>
    <path d="M12,55 C26,28 40,28 54,55 S82,82 96,55 S124,28 138,55 S166,82 180,55 S208,28 222,55" fill="none" stroke={CC} strokeWidth="1.5" opacity="0.85" strokeLinecap="round" />
    <circle cx="54" cy="55" r="2" fill={CC} /><circle cx="138" cy="55" r="2" fill={CC} /><circle cx="222" cy="55" r="2.4" fill={CC} /></>);
  else if (name === 'Data stream') body = (<>
    {[{ y: 30, col: C }, { y: 55, col: OC }, { y: 80, col: P }].map((row, r) => Array.from({ length: 12 }, (_, i) => <circle key={`${r}-${i}`} cx={18 + i * 18} cy={row.y + (i - 6) * 2.2} r={Math.max(0.8, 1.8 - i * 0.06)} fill={row.col} opacity={0.85 - i * 0.05} />))}</>);
  else { const nodes: [number, number][] = [[40, 40], [95, 72], [140, 34], [188, 60], [110, 90], [70, 20]]; const edges = [[0, 1], [1, 2], [2, 3], [1, 4], [0, 5], [2, 5], [3, 4]]; const cols = [C, C, O, C, P, C];
    body = (<>{edges.map(([a, b], i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={CC} strokeWidth="1" opacity="0.45" />)}{nodes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill={cols[i % cols.length]} />)}</>); }
  return <svg viewBox="0 0 240 110" width="100%" height="72" aria-hidden="true">{body}</svg>;
}

export function Energy() {
  const rules = [
    ['Cyan leads', 'Cyan is the lead current. Orange supports, pink accents sparingly — never more than three colours in one field.'],
    ['Bloom + core', 'A soft, wide bloom beneath a bright thin core — luminous, never a single flat line.'],
    ['Margins only', 'Energy lines live in margins and dividers — never behind live text.'],
  ];
  return (
    <div className="page">
      <Head eyebrow="Chapter Six" title="Energy" intro="The signature energy-line system — luminous curves built from a soft bloom beneath a bright core." />
      <Card style={{ marginTop: 40, padding: 30 }}>
        <Kicker className="subtle">Signature current</Kicker>
        <EnergyLine height={90} style={{ marginTop: 12 }} />
      </Card>
      <EnergyMaker />
      <RopeMaker />
      <Sec title="Rules">
        <div className="grid g3">
          {rules.map(([t, d]) => (
            <Card key={t}><h3 style={{ fontSize: 18 }}>{t}</h3><p className="muted" style={{ fontSize: 13.5, marginTop: 8 }}>{d}</p></Card>
          ))}
        </div>
      </Sec>
      <Sec title="The line library — nine motifs, one system">
        <div className="grid g3">
          {ENERGY_MOTIFS.map(([m, use]) => (
            <Card key={m} style={{ padding: 18 }}>
              <EnergyMotif name={m} />
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline', marginTop: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{m}</span>
                <Kicker style={{ fontSize: 7.5, color: 'var(--cx-text-subtle)' }}>{use}</Kicker>
              </div>
            </Card>
          ))}
        </div>
      </Sec>
    </div>
  );
}

/* ============================= THE 4Cs ============================= */
export function FourCs() {
  return (
    <div className="page">
      <Head eyebrow="Chapter Seven" title="The 4Cs" intro="Four capabilities geared into one connected core — Creative, Connect, Code and CRM." />
      <div style={{ marginTop: 40 }}>
        <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: 32, background: '#0E0F12' }}>
          <img src={machineSvg} alt="The 4Cs Machine — Creative, Connect, Code and CRM geared into one connected core" style={{ width: '100%', maxWidth: 460, height: 'auto' }} />
          <a href={machineSvg} download="createchs-4cs-machine.svg" style={{ color: 'var(--cx-cyan)', fontWeight: 600, fontSize: 13 }}>Download the machine (SVG) →</a>
        </Card>
      </div>
      <Sec title="The four capabilities">
        <div className="grid g2">
          {FOUR_CS.map((c) => (
            <Card key={c.key}>
              <div className="row gap-3" style={{ alignItems: 'center' }}>
                <svg viewBox="-14 -14 28 28" width={30} height={30} aria-hidden="true"><PodIcon icon={c.icon} cx={0} cy={0} color={c.color} size={11} /></svg>
                <div>
                  <h3 style={{ fontSize: 22, color: c.color }}>{c.label}</h3>
                  <Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)' }}>{c.tagline}</Kicker>
                </div>
              </div>
              <p className="muted" style={{ fontSize: 14, marginTop: 14 }}>{c.deliverable}</p>
            </Card>
          ))}
        </div>
      </Sec>
      <Sec title="The 4Cs animation script">
        <Card>
          <p className="subtle" style={{ fontSize: 13, marginBottom: 16 }}>Voiceover / caption, timed to the build — one C rotating into four, then locking into the mark.</p>
          <ol className="stack" style={{ margin: 0, padding: 0, listStyle: 'none', gap: 2 }}>
            {story.voiceover.map((v, i) => (
              <li key={i} className="row gap-4" style={{ padding: '9px 0', borderBottom: '1px solid var(--cx-border)', alignItems: 'baseline' }}>
                <span className="num" style={{ color: 'var(--cx-cyan)', width: 22, flex: '0 0 auto' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ flex: 1 }}>{v.line}</span>
                <Kicker className="subtle" style={{ fontSize: 9 }}>{v.cue}</Kicker>
              </li>
            ))}
          </ol>
        </Card>
      </Sec>
    </div>
  );
}

/* ============================= COMPONENTS ============================= */
const CONNECTOR_CS: { label: string; tag: string; color: string }[] = [
  { label: 'Creative', tag: 'IDEA · DESIGN', color: 'var(--cx-cyan)' },
  { label: 'Connect', tag: 'REACH · ENGAGE', color: 'var(--cx-orange)' },
  { label: 'CRM', tag: 'NURTURE · CONVERT', color: 'var(--cx-pink)' },
  { label: 'Code', tag: 'BUILD · SCALE', color: 'var(--cx-lime)' },
];

export function InPractice() {
  const pipeline = [
    { name: 'Aurora Rebrand', tag: 'CREATIVE', color: 'var(--cx-cyan)', pct: 82 },
    { name: 'Q3 Launch Blast', tag: 'CONNECT', color: 'var(--cx-orange)', pct: 64 },
    { name: 'Enterprise Lead', tag: 'CRM', color: 'var(--cx-pink)', pct: 46 },
    { name: 'Portal v2', tag: 'CODE', color: 'var(--cx-lime)', pct: 38 },
  ];
  return (
    <div className="page">
      <Head eyebrow="Chapter Eight" title="In Practice" intro="How the four C's wire into one core — every capability feeding a single, shared engine in the same bloom-and-core language." />

      <Sec title="The connector">
        <Card style={{ padding: 24 }}>
          <svg viewBox="0 0 980 400" width="100%" style={{ height: 'auto' }} role="img" aria-label="The four C's connecting into one core and one connected product">
            {CONNECTOR_CS.map((c, i) => {
              const y = 30 + i * 88; const midY = y + 34;
              return (
                <g key={c.label}>
                  <path d={`M330,${midY} C 460,${midY} 500,200 596,200`} fill="none" stroke={c.color} strokeWidth="6" opacity="0.16" strokeLinecap="round" />
                  <path d={`M330,${midY} C 460,${midY} 500,200 596,200`} fill="none" stroke={c.color} strokeWidth="1.6" opacity="0.85" strokeLinecap="round" />
                  <rect x="30" y={y} width="300" height="68" rx="14" fill="#141519" stroke={c.color} strokeOpacity="0.5" />
                  <rect x="30" y={y} width="4" height="68" rx="2" fill={c.color} />
                  <rect x="52" y={y + 18} width="32" height="32" rx="8" fill={c.color} />
                  <text x="68" y={y + 40} textAnchor="middle" fontFamily="'Fahkwang',serif" fontWeight="600" fontSize="18" fill="#0A0B0D">C</text>
                  <text x="98" y={y + 33} fontFamily="'Fahkwang',serif" fontWeight="500" fontSize="18" fill="#F4F5F7">{c.label}</text>
                  <text x="98" y={y + 49} fontFamily="'Space Grotesk',sans-serif" fontWeight="600" fontSize="8" letterSpacing="1.5" fill={c.color}>{c.tag}</text>
                </g>
              );
            })}
            <circle cx="600" cy="200" r="40" fill="var(--cx-cyan)" opacity="0.12" />
            <circle cx="600" cy="200" r="30" fill="#0B0C0F" stroke="rgba(255,255,255,.12)" />
            <svg x="576" y="176" width="48" height="48" viewBox="0 0 133.89 133.89">{Object.values(MARK_PATHS).map((d, i) => <path key={i} d={d} fill="#F4F5F7" />)}</svg>
            <path d="M640,200 L716,200" fill="none" stroke="var(--cx-cyan)" strokeWidth="6" opacity="0.16" strokeLinecap="round" />
            <path d="M640,200 L716,200" fill="none" stroke="var(--cx-cyan-core)" strokeWidth="1.6" opacity="0.85" strokeLinecap="round" />
            <rect x="720" y="132" width="230" height="136" rx="16" fill="#141519" stroke="var(--cx-cyan)" strokeOpacity="0.4" />
            <text x="742" y="164" fontFamily="'Space Grotesk',sans-serif" fontWeight="600" fontSize="8" letterSpacing="2" fill="var(--cx-cyan)">OUTPUT</text>
            <text x="742" y="192" fontFamily="'Fahkwang',serif" fontWeight="500" fontSize="20" fill="#F4F5F7">One connected</text>
            <text x="742" y="216" fontFamily="'Fahkwang',serif" fontWeight="500" fontSize="20" fill="#F4F5F7">product</text>
            <text x="742" y="242" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="rgba(255,255,255,.6)">Every C feeds one core and ships</text>
            <text x="742" y="256" fontFamily="'Space Grotesk',sans-serif" fontSize="10" fill="rgba(255,255,255,.6)">as a single, unified experience.</text>
          </svg>
        </Card>
      </Sec>

      <Sec title="The product">
        <Card variant="raised" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="row" style={{ alignItems: 'center', gap: 9, padding: '12px 16px', borderBottom: '1px solid var(--cx-border)' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cx-orange)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cx-lime)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cx-cyan)' }} />
            <span style={{ flex: 1, textAlign: 'center', fontSize: 12, color: 'var(--cx-text-subtle)', background: 'var(--cx-input-bg)', borderRadius: 100, padding: '5px 12px', maxWidth: 280, margin: '0 auto' }}>app.createchs.com/dashboard</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="stack" style={{ gap: 12, padding: 16, borderRight: '1px solid var(--cx-border)', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--cx-font-display)', fontSize: 20, color: 'var(--cx-cyan)' }}>C</span>
              {[0, 1, 2, 3].map((i) => <span key={i} style={{ width: 26, height: 26, borderRadius: 8, border: '1px solid var(--cx-border)', background: i === 0 ? 'rgba(23,212,212,.12)' : 'transparent' }} />)}
            </div>
            <div style={{ flex: 1, padding: 20, minWidth: 0 }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div><h3 style={{ fontSize: 22 }}>Overview</h3><span className="subtle" style={{ fontSize: 12 }}>All four C's, one connected view</span></div>
                <Kicker className="subtle" style={{ fontSize: 9 }}>This week</Kicker>
              </div>
              <div className="grid g3" style={{ marginTop: 16 }}>
                <Card style={{ padding: 16, borderLeft: '3px solid var(--cx-cyan)' }}><Stat label="Active campaigns" value="24" delta="+12%" /></Card>
                <Card style={{ padding: 16, borderLeft: '3px solid var(--cx-orange)' }}><Stat label="Messages sent" value="18.2k" delta="+8%" color="var(--cx-orange)" /></Card>
                <Card style={{ padding: 16, borderLeft: '3px solid var(--cx-pink)' }}><Stat label="Leads in pipeline" value="312" delta="+5%" color="var(--cx-pink)" /></Card>
              </div>
              <div className="grid g2" style={{ marginTop: 16 }}>
                <Card style={{ padding: 16 }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}><span style={{ fontSize: 13, fontWeight: 600 }}>Engagement flow</span><Kicker className="subtle" style={{ fontSize: 8 }}>Live · Realtime</Kicker></div>
                  <div style={{ marginTop: 12 }}><Sparkline data={[6, 9, 7, 12, 10, 15, 13, 19, 17, 22]} width={360} height={90} /></div>
                </Card>
                <Card style={{ padding: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>Pipeline</span>
                  <div className="stack" style={{ gap: 12, marginTop: 12 }}>
                    {pipeline.map((p) => (
                      <div key={p.name}>
                        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}><span style={{ fontSize: 12.5 }}>{p.name}</span><Kicker style={{ fontSize: 7.5, color: p.color }}>{p.tag}</Kicker></div>
                        <div style={{ height: 5, borderRadius: 100, background: 'rgba(255,255,255,.08)', marginTop: 5, overflow: 'hidden' }}><div style={{ width: `${p.pct}%`, height: '100%', background: p.color, borderRadius: 100 }} /></div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </Sec>
    </div>
  );
}

export function Components() {
  return (
    <div className="page">
      <Head eyebrow="Chapter Nine" title="Components" intro="The interface kit — accessible by default: 44px targets, visible focus rings, ink-on-accent, labelled fields. Tab through to see focus states." />
      <Sec title="Buttons">
        <Card>
          <div className="row wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link →</Button>
            <Button variant="primary" loading>Saving</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="row wrap gap-3" style={{ marginTop: 16 }}>
            <Button variant="accent" size="sm">Small</Button>
            <Button variant="accent" size="md">Medium</Button>
            <Button variant="accent" size="lg">Large</Button>
          </div>
        </Card>
      </Sec>
      <Sec title="Badges">
        <Card>
          <div className="row wrap gap-2">
            <Badge tone="primary" dot>Active</Badge>
            <Badge tone="accent">In progress</Badge>
            <Badge tone="positive">New</Badge>
            <Badge tone="notice">Priority</Badge>
            <Badge tone="neutral">Draft</Badge>
          </div>
        </Card>
      </Sec>
      <Sec title="Inputs">
        <Card>
          <div className="grid g2">
            <Field label="Full name" placeholder="Jane Doe" helper="As it should appear on the account." />
            <Field label="Work email" type="email" defaultValue="jane@" error="Enter a valid email — e.g. jane@createchs.us" />
            <Field label="Company" placeholder="Createchs" required />
            <Field label="Read-only" defaultValue="locked@createchs.us" disabled />
          </div>
        </Card>
      </Sec>
      <Sec title="Data">
        <div className="grid g3">
          <Card><Stat label="Leads in pipeline" value="312" delta="+12%" data={[8, 10, 9, 13, 12, 16, 15, 20]} /></Card>
          <Card><Stat label="Messages sent" value="18.2k" delta="+8%" color="var(--cx-orange)" data={[4, 6, 5, 8, 10, 9, 12, 14]} /></Card>
          <Card><Stat label="Churn" value="1.4%" delta="-3%" color="var(--cx-lime)" data={[9, 8, 8, 6, 7, 5, 5, 4]} /></Card>
        </div>
      </Sec>
    </div>
  );
}

/* ============================= APPLICATIONS ============================= */
/** A proportioned mockup frame with a caption below. */
function AppFrame({ label, ratio, ground = 'ink', pad = 18, children }: { label: string; ratio: string; ground?: 'ink' | 'paper'; pad?: number; children: ReactNode }) {
  const dark = ground === 'ink';
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          aspectRatio: ratio, borderRadius: 12, overflow: 'hidden', padding: pad,
          border: '1px solid var(--cx-border)', position: 'relative', display: 'flex', flexDirection: 'column',
          background: dark ? 'var(--cx-ink)' : 'var(--cx-paper)', color: dark ? 'var(--cx-text)' : 'var(--cx-paper-text)',
        }}
      >
        {children}
      </div>
      <figcaption><Kicker style={{ fontSize: 9, color: 'var(--cx-text-subtle)', marginTop: 8, display: 'block' }}>{label}</Kicker></figcaption>
    </figure>
  );
}

export function Applications() {
  return (
    <div className="page">
      <Head eyebrow="Chapter Ten" title="Applications" intro="One connected system, on paper. An identity suite art-directed around two motifs — the energy-line current and the C-drawing — carried across every touchpoint." />

      <Sec title="Presentation folder">
        <AppFrame label="Folder · A4 presentation · 4-colour litho" ratio="1.5 / 1" pad={0}>
          <div style={{ flex: 1, position: 'relative', display: 'flex' }}>
            <div style={{ position: 'absolute', inset: 0 }}><EnergyField opacity={0.75} /></div>
            <div style={{ position: 'relative', zIndex: 1, flex: 1, padding: '30px 34px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="row gap-3" style={{ alignItems: 'center' }}>
                <Mark size={24} title="CreateCHS" />
                <span style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 600, letterSpacing: '.18em', fontSize: 13 }}>CREATECHS</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 34, lineHeight: 1.06 }}>Creative &amp; Technology,<br /><span style={{ color: 'var(--cx-cyan)' }}>connected.</span></div>
                <EnergyLine variant="stream" height={42} style={{ marginTop: 16, maxWidth: 300 }} />
              </div>
              <Kicker className="subtle" style={{ fontSize: 9 }}>The Createchs Brand Book · Edition 01</Kicker>
            </div>
            <div style={{ position: 'relative', zIndex: 1, width: '40%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
              <CPortrait data={woman.data} cols={woman.cols} rows={woman.rows} crop={[0, 1, 0, 0.62]} targetCols={44} width={210} stops={['#0A5C5C', '#FF2D8E', '#8CEDED']} />
            </div>
          </div>
        </AppFrame>
      </Sec>

      <Sec title="Business card — two sides">
        <div className="grid g2" style={{ alignItems: 'start' }}>
          <AppFrame label="Front · 3.5 × 2 in" ratio="1.75 / 1" pad={22}>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Mark size={22} title="CreateCHS" />
              <Kicker style={{ fontSize: 7, color: 'var(--cx-text-subtle)' }}>{brand.web}</Kicker>
            </div>
            <EnergyLine height={12} style={{ margin: '14px 0' }} />
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontFamily: 'var(--cx-font-display)', fontSize: 20, lineHeight: 1 }}>Jane Doe</div>
              <div style={{ fontSize: 10.5, color: 'var(--cx-cyan)', fontWeight: 600, marginTop: 3 }}>Creative Director</div>
              <div className="num" style={{ fontSize: 9.5, color: 'var(--cx-text-subtle)', marginTop: 8 }}>{brand.email} · {brand.phone}</div>
            </div>
          </AppFrame>
          <AppFrame label="Back · drawn in C" ratio="1.75 / 1" pad={0}>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <CPortrait data={woman.data} cols={woman.cols} rows={woman.rows} crop={[0.08, 0.92, 0, 0.6]} targetCols={40} width={240} stops={['#0A5C5C', '#17D4D4', '#8CEDED']} />
              <div style={{ position: 'absolute', bottom: 12, left: 16 }}><Mark size={15} title="CreateCHS" /></div>
              <div style={{ position: 'absolute', bottom: 13, right: 16 }}><Kicker style={{ fontSize: 6.5, color: 'var(--cx-text-subtle)' }}>createchs.us</Kicker></div>
            </div>
          </AppFrame>
        </div>
      </Sec>

      <Sec title="Correspondence">
        <div className="grid g3" style={{ alignItems: 'start' }}>
          {/* Letterhead */}
          <AppFrame label="Letterhead · A4" ratio="210 / 297" ground="paper">
            <div style={{ position: 'absolute', right: -36, bottom: -36, opacity: 0.06, pointerEvents: 'none' }}><Mark size={160} style={{ color: 'var(--cx-paper-text)' }} /></div>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Lockup markSize={15} wordSize={10} color="var(--cx-paper-text)" />
              <Kicker style={{ fontSize: 6.5, color: 'var(--cx-paper-subtle)' }}>{brand.web}</Kicker>
            </div>
            <EnergyLine height={10} style={{ margin: '12px 0' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, width: '80%' }}>
              {[100, 96, 90, 0, 92, 68].map((w, i) => (w ? <span key={i} style={{ height: 4.5, width: `${w}%`, background: 'rgba(10,11,13,.09)', borderRadius: 3 }} /> : <span key={i} style={{ height: 5 }} />))}
            </div>
            <Kicker style={{ fontSize: 6.5, color: 'var(--cx-paper-subtle)' }}>{brand.address}</Kicker>
          </AppFrame>
          {/* Envelope */}
          <AppFrame label="Envelope · DL" ratio="2.3 / 1" ground="paper">
            <div className="row gap-3" style={{ alignItems: 'center' }}>
              <Mark size={16} title="CreateCHS" />
              <Kicker style={{ fontSize: 6.5, color: 'var(--cx-paper-subtle)' }}>Createchs · Tampa, FL</Kicker>
            </div>
            <EnergyLine height={9} style={{ marginTop: 10 }} />
            <div style={{ marginTop: 'auto', alignSelf: 'flex-end', width: '52%' }}>
              {[100, 78, 90].map((w, i) => (<span key={i} style={{ display: 'block', height: 4, width: `${w}%`, background: 'rgba(10,11,13,.12)', borderRadius: 2, marginTop: 6 }} />))}
            </div>
          </AppFrame>
          {/* Compliment slip */}
          <AppFrame label="With compliments · ⅓ A4" ratio="2.1 / 1" ground="paper">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Lockup markSize={13} wordSize={9} color="var(--cx-paper-text)" />
              <Kicker style={{ fontSize: 6.5, color: 'var(--cx-paper-subtle)' }}>{brand.web}</Kicker>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--cx-font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 26, color: 'var(--cx-paper-text)' }}>With compliments</span>
            </div>
            <EnergyLine height={10} />
          </AppFrame>
        </div>
      </Sec>

      <Sec title="Campaign — out of home">
        {/* Billboard — ink */}
        <AppFrame label="Billboard · 48-sheet · 2.6:1 · ink" ratio="2.6 / 1" pad={0}>
          <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '26px 32px' }}>
            <div style={{ position: 'absolute', inset: 0 }}><EnergyField opacity={0.7} /></div>
            <div className="row gap-3" style={{ position: 'relative', alignItems: 'center' }}>
              <Mark size={22} title="CreateCHS" />
              <span style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 600, letterSpacing: '.16em', fontSize: 12 }}>CREATECHS</span>
            </div>
            <div style={{ position: 'relative', fontFamily: 'var(--cx-font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 40, lineHeight: 1.02 }}>Creative &amp; Technology,<br /><span style={{ color: 'var(--cx-cyan)' }}>connected.</span></div>
            <div className="row" style={{ position: 'relative', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <EnergyLine variant="stream" height={26} style={{ maxWidth: 220 }} />
              <Kicker style={{ color: 'var(--cx-cyan)' }}>createchs.us</Kicker>
            </div>
          </div>
        </AppFrame>
        <div className="grid g2" style={{ alignItems: 'start', marginTop: 16 }}>
          {/* Poster — drawn in C, on paper (dark C's on cream) */}
          <AppFrame label="Poster · drawn in C · A1 · paper" ratio="2 / 3" ground="paper" pad={0}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', minHeight: 0 }}>
                <CPortrait data={woman.data} cols={woman.cols} rows={woman.rows} crop={[0, 1, 0, 0.6]} targetCols={44} width={230} tone="ink" floorLift />
              </div>
              <div style={{ padding: '18px 22px 22px' }}>
                <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 500, fontSize: 22, lineHeight: 1.05, color: 'var(--cx-paper-text)' }}>One connected system.</div>
                <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                  <Lockup markSize={16} wordSize={11} color="var(--cx-paper-text)" />
                  <Kicker style={{ fontSize: 8, color: 'var(--cx-paper-subtle)' }}>createchs.us</Kicker>
                </div>
              </div>
            </div>
          </AppFrame>
          {/* Poster — type, ink */}
          <AppFrame label="Poster · type · A1 · ink" ratio="2 / 3" pad={28}>
            <EnergyLine variant="stream" height={34} />
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 500, fontSize: 34, lineHeight: 1.02 }}>One connected system. <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--cx-cyan)' }}>Infinite growth.</span></div>
            </div>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Lockup markSize={18} wordSize={12} />
              <Kicker style={{ fontSize: 8, color: 'var(--cx-text-subtle)' }}>Edition 01</Kicker>
            </div>
          </AppFrame>
        </div>
      </Sec>

      <Sec title="Campaign — social">
        <div className="grid g3" style={{ alignItems: 'start' }}>
          {/* Story — ink */}
          <AppFrame label="Story · 9:16 · ink" ratio="9 / 16">
            <Mark size={20} />
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 500, fontSize: 22, lineHeight: 1.12 }}>AI that answers every call. <span style={{ color: 'var(--cx-cyan)' }}>24/7.</span></div>
            </div>
            <div>
              <EnergyLine height={14} style={{ marginBottom: 14 }} />
              <Button variant="accent" size="sm">Book a demo →</Button>
            </div>
          </AppFrame>
          {/* Post — paper */}
          <AppFrame label="Post · 1:1 · paper" ratio="1 / 1" ground="paper">
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 14 }}>
              <Mark size={32} />
              <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 500, fontSize: 24, lineHeight: 1.1, color: 'var(--cx-paper-text)' }}>One system.<br />Every channel.</div>
              <EnergyLine height={12} style={{ maxWidth: 150 }} />
            </div>
          </AppFrame>
          {/* Landscape — ink */}
          <AppFrame label="Landscape · 1.91:1 · ink" ratio="1.91 / 1">
            <div className="row gap-3" style={{ alignItems: 'center' }}><Mark size={18} /><Kicker style={{ fontSize: 8, color: 'var(--cx-text-subtle)' }}>createchs.us</Kicker></div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 500, fontSize: 20, lineHeight: 1.05 }}>Not four services. <span style={{ color: 'var(--cx-cyan)' }}>One system.</span></div>
            </div>
            <EnergyLine height={12} />
          </AppFrame>
        </div>
      </Sec>

      <Sec title="Campaign — digital advertising">
        {/* Leaderboard — ink */}
        <AppFrame label="Leaderboard · 728×90 · ink" ratio="728 / 90" pad={14}>
          <div className="row" style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div className="row gap-3" style={{ alignItems: 'center' }}>
              <Mark size={26} />
              <span style={{ fontFamily: 'var(--cx-font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 17 }}>Creative &amp; Technology, connected.</span>
            </div>
            <Button variant="accent" size="sm">Book a demo →</Button>
          </div>
        </AppFrame>
        <div className="row" style={{ gap: 16, alignItems: 'flex-start', marginTop: 16, flexWrap: 'wrap' }}>
          {/* MPU — paper */}
          <div style={{ width: 220 }}>
            <AppFrame label="MPU · 300×250 · paper" ratio="300 / 250" ground="paper" pad={18}>
              <Mark size={20} />
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 500, fontSize: 20, lineHeight: 1.05, color: 'var(--cx-paper-text)' }}>One connected system.</div>
              </div>
              <div><EnergyLine height={10} style={{ marginBottom: 10 }} /><Button variant="accent" size="sm">Start now →</Button></div>
            </AppFrame>
          </div>
          {/* Skyscraper — ink */}
          <div style={{ width: 128 }}>
            <AppFrame label="Skyscraper · 160×600 · ink" ratio="160 / 600" pad={14}>
              <Mark size={18} />
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--cx-font-display)', fontWeight: 500, fontSize: 17, lineHeight: 1.1 }}>Creative &amp; Technology, <span style={{ color: 'var(--cx-cyan)' }}>connected.</span></div>
              </div>
              <div><EnergyLine height={10} style={{ marginBottom: 10 }} /><Button variant="accent" size="sm">Start →</Button></div>
            </AppFrame>
          </div>
          {/* Email header — paper */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <AppFrame label="Email header · 4:1 · paper" ratio="4 / 1" ground="paper" pad={20}>
              <div className="row" style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <Lockup markSize={22} wordSize={14} color="var(--cx-paper-text)" />
                <span style={{ fontFamily: 'var(--cx-font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 16, color: 'var(--cx-cyan-on-paper)' }}>connected.</span>
              </div>
            </AppFrame>
          </div>
        </div>
      </Sec>

      <Sec title="Email signature">
        <div style={{ maxWidth: 460 }}>
          <Card variant="paper">
            <div className="row gap-4" style={{ alignItems: 'center' }}>
              <Mark size={42} />
              <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--cx-paper-border)' }} />
              <div>
                <div style={{ fontFamily: 'var(--cx-font-display)', fontSize: 17, color: 'var(--cx-paper-text)' }}>Jane Doe</div>
                <div style={{ fontSize: 11, color: 'var(--cx-orange-on-paper)', fontWeight: 600 }}>Creative Director · Createchs</div>
                <div className="num" style={{ fontSize: 11, color: 'var(--cx-paper-subtle)', marginTop: 6 }}>{brand.email} · {brand.phone}</div>
                <div style={{ fontSize: 11, color: 'var(--cx-paper-subtle)' }}>{brand.web}</div>
              </div>
            </div>
          </Card>
        </div>
      </Sec>

      <Sec title="Contact">
        <Card>
          <div className="row wrap gap-6">
            <div><Kicker className="subtle" style={{ fontSize: 9 }}>Web</Kicker><p className="muted" style={{ margin: 0 }}>{brand.web}</p></div>
            <div><Kicker className="subtle" style={{ fontSize: 9 }}>Email</Kicker><p className="muted" style={{ margin: 0 }}>{brand.email}</p></div>
            <div><Kicker className="subtle" style={{ fontSize: 9 }}>Phone</Kicker><p className="muted num" style={{ margin: 0 }}>{brand.phone}</p></div>
            <div><Kicker className="subtle" style={{ fontSize: 9 }}>Studio</Kicker><p className="muted" style={{ margin: 0 }}>{brand.address}</p></div>
          </div>
        </Card>
      </Sec>
    </div>
  );
}

/* ============================= ACCESSIBILITY ============================= */
export function Accessibility() {
  return (
    <div className="page">
      <Head eyebrow="Baseline · Approved 2026-07-15" title="Accessibility" intro="Seven fixes are baked into the tokens and components so the system ships accessible by default. Ratios measured against WCAG 2.1 AA (4.5:1 for text)." />
      <Sec title="The seven baseline fixes">
        <div className="stack">
          {a11yFixes.map((f) => (
            <div key={f.n} className="tokline">
              <span className="k"><span className="num" style={{ color: 'var(--cx-cyan)', marginRight: 10 }}>{String(f.n).padStart(2, '0')}</span>{f.title}</span>
              <span className="num"><span className="fail">{f.before}</span> → <span className="pass">{f.after}</span></span>
            </div>
          ))}
        </div>
      </Sec>
      <Sec title="Measured contrast (shipped token pairs)">
        <table className="ctable">
          <thead><tr><th>Pair</th><th>Ratio</th><th>AA</th></tr></thead>
          <tbody>
            {contrastPairs.map((c) => (
              <tr key={c.pair}><td>{c.pair}</td><td className="num">{c.ratio}</td><td className={c.pass ? 'pass' : 'fail'}>{c.pass ? 'Pass' : 'Fail'}</td></tr>
            ))}
          </tbody>
        </table>
      </Sec>
      <Sec title="Built in">
        <div className="grid g3">
          {[
            ['Focus', 'Every control ships a :focus-visible ring (2px cyan, 2px offset).'],
            ['Targets', 'Interactive elements meet the 44px minimum hit target.'],
            ['Motion', 'All animation respects prefers-reduced-motion.'],
          ].map(([t, d]) => (
            <Card key={t}><h3 style={{ fontSize: 18 }}>{t}</h3><p className="muted" style={{ fontSize: 13.5, marginTop: 8 }}>{d}</p></Card>
          ))}
        </div>
      </Sec>
    </div>
  );
}
