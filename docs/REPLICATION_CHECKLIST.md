# Cross-Project Replication Checklist (TAG08)

Use this checklist when replicating this base to:

- `LandingPage_hospedagem_TAG08`
- `LandingPage_Influenciador_TAG08`
- `LandingPage_Process Inteligente _TAG08`
- `LandingPage_ProcessActivation_TAG08`

## 1) Core contracts

- Copy and adopt:
  - `docs/CROSS_PROJECT_SYNERGY.md`
  - `docs/CONTENT_ENTITY_MAP.md`
  - `docs/REPO_CONVENTIONS.md`
- Confirm same funnel event contract in code (`hero_cta`, `calculator_submit`, `final_cta_click`, `whatsapp_click`).

## 2) Tracking stack

- Ensure `lib/analytics.ts` and `components/AnalyticsManager.tsx` follow the same event semantics.
- Ensure `.env.example` includes:
  - `GOOGLE_MAPS_API_KEY`
  - `NEXT_PUBLIC_GA_TRACKING_ID`
  - `NEXT_PUBLIC_GOOGLE_TAG_ID`
  - `NEXT_PUBLIC_GOOGLE_ADS_ID`
  - `NEXT_PUBLIC_META_PIXEL_ID`
- Run `npm run validate:tracking`.

## 3) SEO + AI discoverability

- Ensure routes exist and are working:
  - `/robots.txt`
  - `/sitemap.xml`
  - `/llms.txt`
- Ensure `StructuredData` is present and aligned to the project offer.
- Update `docs/ROUTES.md` with public surface.

## 4) Design system governance

- Ensure `scripts/check-design-system.mjs` exists and is wired to `npm run ds:check`.
- Ensure text contrast hierarchy and shared `ds-*` classes exist in `app/globals.css`.

## 5) Security and runtime quality

- Ensure `next.config.ts` includes security headers and CSP compatible with analytics stack.
- Ensure API routes emit structured logs through `lib/observability.ts`.

## 6) CI quality gate

- Ensure `.github/workflows/quality-gate.yml` is present.
- Confirm CI runs:
  - `validate:tracking`
  - `ds:check`
  - `lint`
  - `build`

## 7) Final acceptance

- Local:
  - `npm run validate`
- Runtime checks:
  - consent lifecycle
  - GA4 DebugView
  - Meta Pixel Helper
  - WhatsApp route behavior