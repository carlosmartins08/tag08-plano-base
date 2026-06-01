# External Feed SLA and Contingency

## Scope

- `/api/youtube/latest`
- `/api/google/reviews`

## SLA targets

- YouTube feed live refresh target: `<= 300s` when source is stable.
- Google reviews refresh target: `<= 3600s` when API is healthy.

## Degradation policy

### YouTube

1. Try live source.
2. If parsing/fetch fails, serve last successful payload (`stale-cache`).
3. If no cached payload exists, return controlled error with empty list.

Response observability headers:

- `X-Feed-Source: live | stale-cache | error`
- `X-Feed-SLA: refresh<=300s | degraded-cache | degraded-offline`

### Google reviews

1. Try Google Places API when `GOOGLE_MAPS_API_KEY` is configured.
2. If unconfigured/failure, API returns degraded source and UI keeps curated testimonials.

Response observability headers:

- `X-Reviews-Source: google | unconfigured | error`
- `X-Reviews-SLA: refresh<=3600s | blocked-by-config | degraded-fallback`

## UI fallback contract

- Testimonials must always provide readable social proof even without Google.
- Video gallery must always provide route to official YouTube channel.
- Degraded states must stay explicit to avoid silent data-quality drift.