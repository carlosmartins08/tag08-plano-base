# Funnel Baseline (Daily)

Track daily conversion for the official funnel:

`hero_cta -> calculator_submit -> final_cta_click -> whatsapp_click`

## Required dimensions

- `lang`
- `country`
- `route`
- `section`
- `cta`

## Daily table template

| Date | Sessions | hero_cta | calculator_submit | final_cta_click | whatsapp_click | Hero->Calc | Calc->Final | Final->WA |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| YYYY-MM-DD | 0 | 0 | 0 | 0 | 0 | 0% | 0% | 0% |

## Rules

- Always compare by language (`pt`, `en`, `es`, `fr`).
- Track route split (`br`, `intl`) for WhatsApp events.
- Register experiment variant impact (`hero-headline-v1`, `testimonials-structure-v1`).
- Weekly decision gate: only prioritize changes with measurable effect on at least one step.