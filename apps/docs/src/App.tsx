import { useState } from 'react';
import { Lockup } from '@createchs/ui';
import { brand } from './content/content';
import * as P from './pages';

interface NavItem {
  id: string;
  label: string;
  group: string;
  swatch?: string;
  Page: () => JSX.Element;
}

const NAV: NavItem[] = [
  { id: 'overview', label: 'Overview', group: 'Start', Page: P.Overview },
  { id: 'story', label: 'Brand Story', group: 'Start', Page: P.BrandStory },
  { id: 'idea', label: 'The Idea', group: 'Foundations', Page: P.Idea },
  { id: 'logo', label: 'Logo & Mark', group: 'Foundations', Page: P.Logo },
  { id: 'color', label: 'Color', group: 'Foundations', swatch: 'var(--cx-cyan)', Page: P.Color },
  { id: 'type', label: 'Typography', group: 'Foundations', Page: P.Typography },
  { id: 'motif', label: 'Motif', group: 'Foundations', Page: P.Motif },
  { id: 'energy', label: 'Energy', group: 'Foundations', Page: P.Energy },
  { id: 'fourcs', label: 'The 4Cs', group: 'System', Page: P.FourCs },
  { id: 'inpractice', label: 'In Practice', group: 'System', Page: P.InPractice },
  { id: 'components', label: 'Components', group: 'System', Page: P.Components },
  { id: 'applications', label: 'Applications', group: 'System', Page: P.Applications },
  { id: 'a11y', label: 'Accessibility', group: 'System', Page: P.Accessibility },
];

export function App() {
  const [active, setActive] = useState('overview');
  const item = NAV.find((n) => n.id === active) ?? NAV[0];
  const Page = item.Page;
  const groups = [...new Set(NAV.map((n) => n.group))];

  return (
    <div className="app">
      <aside className="side">
        <div className="side__brand">
          <Lockup markSize={24} wordSize={15} />
        </div>
        <div className="side__tag">{brand.tagline}</div>
        {groups.map((g) => (
          <div key={g}>
            <div className="side__group">{g}</div>
            <nav className="nav">
              {NAV.filter((n) => n.group === g).map((n) => (
                <button
                  key={n.id}
                  className={n.id === active ? 'active' : ''}
                  aria-current={n.id === active ? 'page' : undefined}
                  onClick={() => {
                    setActive(n.id);
                    window.scrollTo(0, 0);
                  }}
                >
                  {n.swatch ? <span className="swatch" style={{ background: n.swatch }} /> : null}
                  {n.label}
                </button>
              ))}
            </nav>
          </div>
        ))}
      </aside>
      <main className="main">
        <Page />
      </main>
    </div>
  );
}
