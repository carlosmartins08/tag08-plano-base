# Routes and anchors

This project is a single landing page. The current public surface is:

- `/` - main landing page
- `/llms.txt` - machine-readable summary for LLM and AI retrieval systems
- `robots.txt`
- `sitemap.xml`
- `/api/youtube/latest` - latest YouTube videos source for the gallery; accepts optional `limit` and `lang`
- `/api/google/reviews` - Google Business Profile reviews source for the testimonials section; accepts optional `limit` and `lang` and requires `GOOGLE_MAPS_API_KEY`

## Anchor map

- `#main-content` - skip-link target defined in `app/layout.tsx`
- `#hero` - hero section in `components/Hero.tsx`
- `#problema` - diagnosis section in `components/ProblemContext.tsx`
- `#calculadora` - revenue potential simulator in `components/OpportunityCalculator.tsx`
- `#solucao` - solution / value proposition in `components/ValueProposition.tsx`
- `#pilares` - service pillars in `components/IncludedPillars.tsx`
- `#ciclo` - monthly cycle in `components/MonthlyCycle.tsx`
- `#roadmap` - growth roadmap in `components/GrowthRoadmap.tsx`
- `#diferenciais` - strategic benefits in `components/StrategicBenefits.tsx`
- `#videos` - latest YouTube gallery in `components/VideoGallery.tsx`
- `#equipe` - team showcase in `components/TeamShowcase.tsx`
- `#depoimentos` - Google reviews and fallback testimonials in `components/Testimonials.tsx`
- `#investimento` - investment and security section in `components/InvestmentAndSecurity.tsx`
- `#faq` - FAQ section in `components/FAQ.tsx`
- `#contato` - contact router in `components/FinalCTA.tsx`

## Important notes

- There is no locale route tree in the current app structure.
- Any future locale routing must update canonical URLs, sitemap, robots and internal links together.
- Anchor targets should be stable. Do not create a second anchor for the same CTA or content block.
- The contact router exposes two WhatsApp destinations: Brazil and International / Español.
