import { Mark } from './Mark';
import { Button } from './Button';
import { EnergyField } from './EnergyField';
import { EnergyLine } from './EnergyLine';

/* --- tiny inline line-icons (stroke = currentColor) --- */
function Icon({ name }: { name: 'mail' | 'phone' | 'globe' | 'pin' | 'download' }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const inner = {
    mail: <><rect x="2.5" y="4" width="15" height="12" rx="2" {...p} /><path d="M3,5 L10,11 L17,5" {...p} /></>,
    phone: <path d="M5,3 C4,3 3,4 3,5 C3,11 9,17 15,17 C16,17 17,16 17,15 L17,12.5 L13.5,11 L12,13 C10,12 8,10 7,8 L9,6.5 L7.5,3 Z" {...p} />,
    globe: <><circle cx="10" cy="10" r="7.5" {...p} /><path d="M2.5,10 H17.5 M10,2.5 C6,6 6,14 10,17.5 C14,14 14,6 10,2.5" {...p} /></>,
    pin: <><path d="M10,17 C10,17 15.5,11.5 15.5,7.5 A5.5,5.5 0 1 0 4.5,7.5 C4.5,11.5 10,17 10,17 Z" {...p} /><circle cx="10" cy="7.5" r="2" {...p} /></>,
    download: <><path d="M10,3 V12 M6,8.5 L10,12.5 L14,8.5" {...p} /><path d="M4,15.5 H16" {...p} /></>,
  }[name];
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" style={{ flex: '0 0 auto' }}>
      {inner}
    </svg>
  );
}

/* --- decorative scan-to-save code (illustrative, not a real QR) --- */
function ScanCode({ color = 'var(--cx-cyan)' }: { color?: string }) {
  const N = 25;
  const cells: JSX.Element[] = [];
  const inFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x > 17 && y < 7) || (x < 7 && y > 17);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (inFinder(x, y)) continue;
      // deterministic pseudo-pattern
      if ((x * 3 + y * 5 + ((x ^ y) * 2)) % 5 < 2) {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />);
      }
    }
  }
  const finder = (fx: number, fy: number) => (
    <g key={`f-${fx}-${fy}`}>
      <rect x={fx} y={fy} width="7" height="7" fill="none" stroke={color} strokeWidth="1" />
      <rect x={fx + 2} y={fy + 2} width="3" height="3" fill={color} />
    </g>
  );
  return (
    <svg viewBox="0 0 25 25" width="64" height="64" role="img" aria-label="Scan to save contact" shapeRendering="crispEdges">
      {cells}
      {finder(0, 0)}
      {finder(18, 0)}
      {finder(0, 18)}
    </svg>
  );
}

export interface DigitalCardProps {
  name: string;
  role: string;
  company?: string;
  email?: string;
  phone?: string;
  web?: string;
  location?: string;
  /** Monogram initials; derived from name if omitted. */
  initials?: string;
  className?: string;
}

/**
 * A shareable digital business card. Ambient energy field behind the identity,
 * tap-to-act buttons (≥44px, ≥8px apart), and a scan-to-save code.
 */
export function DigitalCard({ name, role, company = 'Createchs', email, phone, web, location, initials, className }: DigitalCardProps) {
  const mono = initials ?? name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const rows: { icon: 'mail' | 'phone' | 'globe' | 'pin'; label: string; href?: string }[] = [];
  if (email) rows.push({ icon: 'mail', label: email, href: `mailto:${email}` });
  if (phone) rows.push({ icon: 'phone', label: phone, href: `tel:${phone.replace(/[^0-9+]/g, '')}` });
  if (web) rows.push({ icon: 'globe', label: web, href: web.startsWith('http') ? web : `https://${web}` });
  if (location) rows.push({ icon: 'pin', label: location });

  return (
    <div className={['cx-dcard', className].filter(Boolean).join(' ')}>
      <div className="cx-dcard__ambient">
        <EnergyField />
      </div>
      <div className="cx-dcard__body">
        <div className="cx-dcard__head">
          <Mark size={22} title="CreateCHS" />
          <span className="cx-dcard__word">CREATECHS</span>
        </div>

        <div className="cx-dcard__id">
          <div className="cx-dcard__mono" aria-hidden="true">{mono}</div>
          <div>
            <div className="cx-dcard__name">{name}</div>
            <div className="cx-dcard__role">{role}</div>
            <div className="cx-dcard__co">{company}</div>
          </div>
        </div>

        <EnergyLine variant="pulse" height={22} style={{ margin: '4px 0 2px' }} />

        <ul className="cx-dcard__rows">
          {rows.map((r) => {
            const content = (
              <>
                <span className="cx-dcard__ico"><Icon name={r.icon} /></span>
                <span className="cx-dcard__rowlabel">{r.label}</span>
              </>
            );
            return (
              <li key={r.label}>
                {r.href ? (
                  <a className="cx-dcard__row" href={r.href}>{content}</a>
                ) : (
                  <span className="cx-dcard__row">{content}</span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="cx-dcard__actions">
          <Button variant="primary" size="md" style={{ width: '100%' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="download" /> Save contact</span>
          </Button>
          <div className="cx-dcard__actions-row">
            {phone ? <Button variant="secondary" size="md" style={{ flex: 1 }} onClick={() => {}}>Call</Button> : null}
            {email ? <Button variant="secondary" size="md" style={{ flex: 1 }}>Email</Button> : null}
          </div>
        </div>

        <div className="cx-dcard__foot">
          <ScanCode />
          <div>
            <div className="cx-dcard__scan">Scan to save</div>
            <div className="cx-dcard__scan-sub">Adds {name.split(' ')[0]} to your contacts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
