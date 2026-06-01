# Measurement Stack: GA4 + Meta Pixel + CAPI

## Objective

Use one event contract across product analytics and paid media optimization.

Official funnel events:
- `hero_cta`
- `calculator_submit`
- `final_cta_click`
- `whatsapp_click`

Required params:
- `lang`
- `section`
- `cta`
- `country`
- `route`

## Current implementation

### GA4 / Google Tag

- Loaded by consent in `components/AnalyticsManager.tsx`
- Events are sent via `trackEvent` / `trackFunnelEvent` in `lib/analytics.ts`

### Meta Pixel

- Loaded by marketing consent in `components/AnalyticsManager.tsx`
- Funnel mapping in `lib/analytics.ts`:
  - `whatsapp_click` -> `Lead` (`track`)
  - `hero_cta` -> `HeroCTA` (`trackCustom`)
  - `calculator_submit` -> `CalculatorSubmit` (`trackCustom`)
  - `final_cta_click` -> `FinalCTAClick` (`trackCustom`)

## Environment variables

- `NEXT_PUBLIC_GA_TRACKING_ID`
- `NEXT_PUBLIC_GOOGLE_TAG_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`

## Operational advantage

1. Product truth (GA4): complete funnel by segment and experiment.
2. Media truth (Meta): optimize campaigns based on high-intent events.
3. Shared contract: same business meaning across tools.

## CAPI rollout (next step)

1. Create server endpoint `/api/meta/conversions`.
2. Send hashed user data when available (email/phone) and `event_id` dedup key.
3. Mirror browser `Lead` events to server with same `event_name` + `event_id`.
4. Validate deduplication in Meta Events Manager.

## Validation checklist

1. Accept analytical+marketing cookies.
2. Open Meta Pixel Helper and confirm `PageView`.
3. Trigger each funnel step and confirm GA4 DebugView + Meta events.
4. Revoke consent and confirm scripts are removed.
5. Confirm no event loss in baseline after deployment.