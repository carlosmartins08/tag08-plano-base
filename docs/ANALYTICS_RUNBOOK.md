# Analytics Runbook (Operational)

## Daily workflow (15 min)

1. Export or query daily counts for events:
   - `hero_cta`
   - `calculator_submit`
   - `final_cta_click`
   - `whatsapp_click`
2. Break data by dimensions:
   - `lang`
   - `country`
   - `route`
   - `experiment` + `variant` (when available)
3. Fill `docs/analytics_daily_template.csv`.
4. Calculate conversion rates:
   - `Hero_to_Calc_pct = calculator_submit / hero_cta`
   - `Calc_to_Final_pct = final_cta_click / calculator_submit`
   - `Final_to_WA_pct = whatsapp_click / final_cta_click`

## Weekly workflow (30 min)

Use together:
- `docs/analytics_daily_template.csv`
- `docs/ANALYTICS_BASELINE.md`
- `docs/WEEKLY_RITUAL.md`

Decision rule:
- Prioritize the biggest drop in funnel with segment consistency (same issue appears in >=2 days or >=2 segments).

## Minimum acceptance for decision quality

- Event coverage: all 4 funnel events present.
- Segment view: at least `pt/BR/br` and `es/NON_BR/intl`.
- Experiment readout: both active experiments tracked.
- Ops check: SLA headers observed for YouTube and Google reviews routes.