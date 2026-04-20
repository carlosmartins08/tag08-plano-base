# Decisions

These are the key decisions already made for this base.

## 2026-04-15

- The app stays as a single landing page; no locale route tree is introduced.
- Consent was split out of the language context into `ConsentContext`.
- Organization and Service schema were centralized in `components/StructuredData.tsx`.
- The contact router was kept as a single section with Brazil and International / Español WhatsApp paths.
- Latest YouTube videos and Google reviews are consumed through API routes instead of being copied into the page.
- The team showcase and video gallery are shared sections, not page-specific duplicates.
- The footer now uses the official company profile, address and social links from `constants.tsx`.

## 2026-04-19

- Design system primitives were centralized in `app/globals.css` (`ds-section-badge`, `ds-card-shell`, `ds-panel-shell`, `ds-icon-shell`, `ds-chip`).
- CTA behavior was standardized through `components/Button.tsx` variants and sizes.
- Visual governance became mandatory through `npm run ds:check` and `docs/PR_CHECKLIST.md`.

## Open decisions

- Whether the YouTube source should remain HTML scraping or move to a more stable published feed / API when credentials are available.
- Whether the Testimonials section should stay hybrid (Google + fallback) or become fully API-driven.
