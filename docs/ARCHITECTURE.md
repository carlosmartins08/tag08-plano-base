# Architecture

This repository delivers the multilingual TAG08 Plano Base landing. components/LandingPage.tsx composes the public sections; i18n/*.ts is the single source for public copy; constants.tsx owns domain, institutional profile and WhatsApp channels.

Active sections: Hero, ProblemContext, ValueProposition, IncludedPillars, MonthlyCycle, GrowthRoadmap (fit), StrategicBenefits (process criteria), InvestmentAndSecurity (scope), ClientResponsibilities, FAQ, FinalCTA and institutional Footer.

ConsentContext owns consent; AnalyticsManager is the only tag loader. lib/analytics.ts owns the conversion-event contract. No calculator, testimonials, gallery, team, Decision Lens, blueprint mode or persona/high-value state is part of the public landing.

PENDENTE_VALIDACAO_DE_PROVA: testimonials remain intentionally absent until an official source is validated.
PENDENTE_VALIDACAO_JURIDICO_INSTITUCIONAL: legal identity and contact data require institutional confirmation before release.
