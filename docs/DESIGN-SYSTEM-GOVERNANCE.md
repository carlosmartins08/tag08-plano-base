# Design System Governance

This document is the source of truth for visual consistency.

## Tokens

- Colors live in `tailwind.config.ts` and `app/globals.css`.
- Shared brand constants live in `constants.tsx` only when they are used by more than one subsystem.
- Do not invent new color aliases inside individual components.
- Surface and interaction primitives live in `app/globals.css` under `ds-*` classes.

## Typography

- `Darker Grotesque` is the display face.
- `Manrope` is the body face.
- Section titles should stay in the display voice.
- Supporting copy should stay in the body voice.

## Components

- Reuse existing shells before creating a new one.
- `ModalShell` owns backdrop, escape handling and scroll lock.
- `ConsentContext` owns consent state and modal visibility.
- `StructuredData` owns schema injection.
- `BrandLogo` is the shared brand mark wrapper.
- `Button` owns CTA variants (`solid`, `outline`, `subtle`) and sizes (`sm`, `md`, `lg`).

## Visual rules

- Keep the black + lime system as the baseline.
- Use lime for emphasis, not as a wall of color.
- Keep cards and sections legible on mobile first.
- If a new component repeats an existing pattern, extend the existing component instead of cloning it.
- Section badges must use `ds-section-badge`.
- Card and panel surfaces must use `ds-card-shell` or `ds-panel-shell`.
- Icon containers must use `ds-icon-shell`.
- Small status/info chips must use `ds-chip`.

## Change rule

- If a component needs a visual variation, make it a variant of the same component.
- Do not create `V2`, `New`, `Updated`, `Shared` or `Common` files unless the responsibility is genuinely different.
- If a design choice affects more than one section, update the shared tokens or shared component first.

## Automated enforcement

- Run `npm run ds:check` before opening a PR.
- Directory policy:
  - `components/` uses strict visual enforcement (easing + badge/chip recipes).
  - `app/` and `contexts/` keep baseline governance without component-only visual blocks.
- The guard blocks:
  - hardcoded hex colors outside approved files (`TeamShowcase`, `Testimonials`, etc.)
  - custom easing in components (`ease-out`, `ease-in-out`, `ease-[...]`, inline `cubic-bezier(...)`)
  - legacy section badge recipe (must use `ds-section-badge`)
  - legacy chip recipes (must use `ds-chip` variants)
  - filenames with drift tokens (`V2`, `New`, `Updated`, `Shared`, `Common`)
