# Repository Conventions (TAG08)

## Goal

Define naming and folder conventions to keep all TAG08 landing repositories consistent and easy to replicate.

## Folder conventions

- `app/`:
  - route composition, metadata, public routes (`robots`, `sitemap`, `llms.txt`), API handlers.
- `components/`:
  - section components and reusable UI primitives.
- `contexts/`:
  - shared UI/application state.
- `lib/`:
  - cross-cutting logic (analytics, experiments, observability).
- `public/`:
  - static assets.
  - brand assets must live under `public/assets/brand/`.
- `docs/`:
  - governance, operations, and strategic contracts.
- `scripts/`:
  - project checks/automation used by package scripts.

## Naming conventions

- Components: `PascalCase.tsx` (`Hero.tsx`, `FinalCTA.tsx`).
- Contexts: `PascalCase.tsx` (`LanguageContext.tsx`).
- Library modules: `kebab` or concise lowercase by domain (`analytics.ts`, `observability.ts`).
- Docs: `UPPER_SNAKE_CASE.md` for governance contracts (`CROSS_PROJECT_SYNERGY.md`).
- Data templates: descriptive lowercase (`analytics_daily_template.csv`).

## Asset conventions

- Logos and brand marks: `public/assets/brand/`.
- Team photos: `public/team/`.
- Do not hardcode asset paths in components; use `constants.tsx` as source of truth.

## Routing and discoverability conventions

- Keep `/robots.txt`, `/sitemap.xml`, `/llms.txt` in `app/` metadata/routes.
- Any change to public surface must update `docs/ROUTES.md`.
- API routes under `app/api/*` must be excluded from indexation and documented when public-facing data is consumed.

## Quality conventions

- Required gates before release:
  - `npm run validate:tracking`
  - `npm run ds:check`
  - `npm run lint`
  - `npm run build`
- Keep CI workflow aligned with the same gates.

## Anti-drift rules

- Do not create duplicate files with suffixes like `V2`, `New`, `Updated`, `Shared`, `Common`.
- Prefer extending existing components/contexts before adding new files.
- Keep event contract and semantic entities synchronized with:
  - `docs/CROSS_PROJECT_SYNERGY.md`
  - `docs/CONTENT_ENTITY_MAP.md`