# Design System Governance

This document is the source of truth for visual consistency.

## Tokens

- Colors live in `tailwind.config.ts` and `app/globals.css`.
- Shared brand constants live in `constants.tsx` only when they are used by more than one subsystem.
- Do not invent new color aliases inside individual components.

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

## Visual rules

- Keep the black + lime system as the baseline.
- Use lime for emphasis, not as a wall of color.
- Keep cards and sections legible on mobile first.
- If a new component repeats an existing pattern, extend the existing component instead of cloning it.

## Change rule

- If a component needs a visual variation, make it a variant of the same component.
- Do not create `V2`, `New`, `Updated`, `Shared` or `Common` files unless the responsibility is genuinely different.
- If a design choice affects more than one section, update the shared tokens or shared component first.

