# PR Checklist

Use this checklist before requesting review.

## Scope and ownership

- The change extends an existing component when responsibility already existed.
- No duplicate source of truth was introduced for SEO, routes, copy, consent or visual tokens.
- If anchors or routes changed, all references were updated (`page`, `navbar`, docs).

## Design system integrity

- Section badges use `ds-section-badge`.
- Shared surfaces use `ds-card-shell` or `ds-panel-shell`.
- Icon wrappers use `ds-icon-shell`.
- Compact labels/status pills use `ds-chip` variants.
- CTA buttons use shared `Button` variants and sizes.
- No hardcoded hex color was added outside approved exceptions.
- No custom easing (`ease-out`, `ease-in-out`, `ease-[...]`, inline `cubic-bezier(...)`) was added in components.

## Validation

- `npm run ds:check`
- `npm run lint`
- `npm run build`

## Evidence in PR description

- List files touched.
- Explain why each new variation could not reuse an existing one.
- Include before/after screenshots for visual changes.
