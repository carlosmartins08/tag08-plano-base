# Weekly Conversion Ritual (30 min)

## Inputs (mandatory)

- Funnel baseline from `docs/ANALYTICS_BASELINE.md`
- Event split by `lang`, `country`, `route`
- Experiment readout for:
  - `hero-headline-v1`
  - `testimonials-structure-v1`
- Feed health status:
  - `/api/youtube/latest` headers (`X-Feed-Source`, `X-Feed-SLA`)
  - `/api/google/reviews` headers (`X-Reviews-Source`, `X-Reviews-SLA`)

## Decision sequence

1. Identify biggest drop in `hero_cta -> calculator_submit -> final_cta_click -> whatsapp_click`.
2. Validate if drop is global or segment-specific.
3. Check if experiment variant changed the same step.
4. Decide one priority action for next cycle.

## Output format

- `Primary bottleneck:`
- `Evidence:`
- `Decision for next week:`
- `Owner:`
- `Expected impact step:`
- `Rollback condition:`

## Guardrails

- No visual/copy change without a measurable hypothesis.
- No hypothesis without event coverage in production.
- No release if `ds:check`, `lint`, `build` fail.