---
name: createchs-design
description: Use whenever building, styling, or reviewing ANY user interface, web page, app screen, component, email, deck, or graphic for Createchs / CreateCHS — apply the brand's design tokens, components, and accessibility rules. Also use when answering questions about the CreateCHS brand (colors, fonts, logo rules, the 4 Cs).
---

# CreateCHS Design System

Everything Createchs ships must come from this system. Full living guidelines: https://antoni-gerges.github.io/createchs-design-system/ · Source: https://github.com/antoni-gerges/createchs-design-system

## In React apps: install, don't re-create

```tsx
import '@createchs/tokens/tokens.css';   // CSS custom properties (--cx-*) + self-hosted fonts
import '@createchs/ui/styles.css';
import { Button, Badge, Field, Stat, Card, Mark, Lockup, EnergyLine } from '@createchs/ui';
```

Available components: `Mark`, `Lockup`, `MarkConstruction`, `MarkFormation`, `CPortrait`, `Kicker`, `Button`, `Badge`, `Field`, `Card`, `Sparkline`, `Stat`, `ColorSwatch`, `TypeSpecimen`, `EnergyLine`, `EnergyField`, `DigitalCard`, `PageChrome` (PageHeader/Footer), `PodIcon`. Never hand-roll a component that exists here; never hard-code hex values where a `--cx-*` token exists.

## Grounds & color

| Token | Value | Role |
|---|---|---|
| Ink | `#0A0B0D` | Primary dark ground and text-on-light |
| Paper | `#F3F1EA` | Brand "paper white" — warm off-white. NEVER substitute pure `#FFFFFF` |
| Cyan | `#17D4D4` | **Creative** — primary accent (the single accent in most layouts) |
| Orange | `#FF6B2C` | **Connect** — secondary accent, CTAs |
| Lime | `#BEE83A` | **Code** — positive |
| Pink | `#FF2D8E` | **CRM** — notice |

The 4 Cs are always: **Creative · Connect · Code · CRM** (the second C is "Connect", never "Communication").

## Type

- **Fahkwang** — display/headlines (italic for editorial statements)
- **Space Grotesk** — UI, body, labels
- Radius default: **16**

## Hard brand rules

1. **The logo/mark is ALWAYS solid white or black — never tinted, never colored.** (The C-portrait motif and C-texture MAY be colored; the restriction applies to the logo/mark only.)
2. On Paper grounds: ink mono logo, ink text; accent words use the on-paper ramp (teal `#0A5C5C`, orange `#B3410F`); orange CTAs and energy lines hold on cream.
3. The energy line is the recurring rule/motif across applications; the C-drawing is the hero texture; cyan is the single accent.
4. The 4Cs Machine is canonical SVG artwork (`apps/docs/public/assets/createchs-4cs-machine.svg`) — use the SVG, never re-draw it in code.

## Accessibility baseline (WCAG AA — approved, do not regress)

1. Accent fills take **Ink text, never white** (white-on-orange 2.6:1 and white-on-pink 3.2:1 both fail).
2. Every accent fill = Ink label text — no exceptions.
3. Text on Paper uses the darker ramp step: teal `#0A5C5C`, orange `#B3410F`.
4. Muted text on Ink: floor at **55%** white (`rgba(255,255,255,.55)`); 40% is decorative-only.
5. Visible `:focus-visible` ring on every interactive element — 2px cyan, 2px offset.
6. Minimum **44px hit target** for buttons, links, icon buttons.
7. Inputs: persistent visible label + helper text + real error state (`aria-invalid`, `aria-live`) — never placeholder-as-label.
8. All motion respects `prefers-reduced-motion`.

## Outside React (decks, emails, graphics, non-React code)

Apply the same colors, type, grounds, and rules manually. Reference the live guidelines site for specimens, motif examples, and application templates (posters, social, digital ads, stationery).
