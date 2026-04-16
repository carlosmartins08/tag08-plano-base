# Architecture

This repository is a single landing page built around a small set of explicit sources of truth.

## Layer split

- UI components render sections and user interactions.
- `app/` composes the page, metadata and top-level providers.
- `contexts/` owns shared UI state and persisted preferences.
- `components/` contains reusable presentation blocks and section shells.
- `translations.ts` is the source of truth for copy.
- `constants.tsx` holds domain-level constants, contacts, social links and shared URLs.

## Current sources of truth

- Domain, site name, logos, WhatsApp routes, Google Business profile and social profiles: `constants.tsx`
- Metadata and canonical tags: `app/layout.tsx`
- Structured data: `components/StructuredData.tsx`
- Locale state: `contexts/LanguageContext.tsx`
- Cookie consent state and modal visibility: `contexts/ConsentContext.tsx`
- Analytics lifecycle: `components/AnalyticsManager.tsx`
- Blueprint / strategy mode and visitor context: `contexts/UXContext.tsx`
- Localized copy: `translations.ts`
- Shared modal shell: `components/ModalShell.tsx`
- Latest YouTube gallery: `components/VideoGallery.tsx` + `app/api/youtube/latest/route.ts`
- Google reviews testimonials: `components/Testimonials.tsx` + `app/api/google/reviews/route.ts`
- Contact routing: `components/FinalCTA.tsx`

## Section ownership

- `components/Hero.tsx` owns the opening message and the first CTA.
- `components/ProblemContext.tsx` owns the diagnosis section.
- `components/ValueProposition.tsx` owns the solution / value proposition section.
- `components/IncludedPillars.tsx` owns the service pillars.
- `components/MonthlyCycle.tsx` owns the monthly workflow section.
- `components/GrowthRoadmap.tsx` owns the growth roadmap section.
- `components/StrategicBenefits.tsx` owns the differentiators and proof markers.
- `components/VideoGallery.tsx` owns the latest public video showcase.
- `components/TeamShowcase.tsx` owns the expert/team showcase.
- `components/Testimonials.tsx` owns the social proof section and Google reviews fallback.
- `components/InvestmentAndSecurity.tsx` owns the investment / trust section.
- `components/ClientResponsibilities.tsx` owns the client responsibilities section.
- `components/FAQ.tsx` owns the final question-and-answer block and FAQ schema.
- `components/FinalCTA.tsx` owns the final contact router and WhatsApp destinations.

## Rules for future edits

- If a change affects SEO, route behavior, schema or domain data, update the top-level source first.
- If a change affects copy, update `translations.ts` instead of hardcoding a second version inside the component.
- If a change affects consent or analytics, use `ConsentContext` and keep load / cleanup together.
- If a component starts holding business logic, move the rule to the proper coordination layer instead of duplicating it in UI.
- If an anchor changes, update the page, navbar and route map together.

## Current debt that should stay visible

- `app/api/youtube/latest/route.ts` still derives latest videos from the public channel page, which is acceptable for now but remains an external dependency.
- `app/api/google/reviews/route.ts` depends on `GOOGLE_MAPS_API_KEY` and the Google Places API.

