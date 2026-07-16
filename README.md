# CreateCHS Design System

The reusable, installable design system for **CreateCHS** — one source of truth any Createchs app can import. Built accessible by default (WCAG AA).

## Packages

| Package | What it is |
|---|---|
| [`@createchs/tokens`](packages/tokens) | Framework-agnostic design tokens — CSS custom properties (`--cx-*`) + typed TS. Colours, the 4-C accents with tint ramps, type scale, spacing, radius, motion and a11y constants. Self-hosts Fahkwang + Space Grotesk. |
| [`@createchs/ui`](packages/ui) | React component library — `Mark`, `Lockup`, `Button`, `Badge`, `Field`, `Stat`, `Sparkline`, `ColorSwatch`, `TypeSpecimen`, `EnergyLine`, `PageHeader/Footer`, `FourCsDiagram`, `FourCsMachine`. Ships ESM + `.d.ts`. |
| [`apps/docs`](apps/docs) | The living brand guidelines, rendered entirely from the library. |

## Getting started

```bash
pnpm install
pnpm dev        # builds tokens + ui, then runs the docs site at http://localhost:5173
```

Other scripts:

```bash
pnpm build            # build packages + a static docs bundle
pnpm build:packages   # build @createchs/tokens then @createchs/ui
pnpm typecheck        # type-check every package
```

## Using it in an app

```tsx
import '@createchs/tokens/tokens.css';   // custom properties + self-hosted fonts
import '@createchs/ui/styles.css';
import { Button, Badge, FourCsMachine } from '@createchs/ui';

export default () => (
  <>
    <Button variant="accent">Book a demo</Button>
    <Badge tone="positive">New</Badge>
    <FourCsMachine animated />
  </>
);
```

## Accessibility baseline

Seven WCAG-AA fixes are encoded in the tokens and components (see the **Accessibility** page in the docs site): ink-on-accent text, darker teal/orange on Paper, a 55% muted-text floor, visible focus rings, 44px hit targets, and labelled inputs with error states. All motion respects `prefers-reduced-motion`.

## Brand

Fahkwang (display) + Space Grotesk (UI) · Ink `#0A0B0D` / Paper `#F3F1EA` · the four C's — Creative (cyan `#17D4D4`), Connect (orange `#FF6B2C`), Code (lime `#BEE83A`), CRM (pink `#FF2D8E`).

Source: derived from the Claude Design handoff bundle in `../Createchs Assets/`.
