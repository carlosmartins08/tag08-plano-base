# Cross-Project Synergy Blueprint (TAG08)

## Scope

This blueprint defines the shared strategic contract for:

- `LandingPage_plano-base-_TAG08` (current repository)
- `LandingPage_hospedagem_TAG08`
- `LandingPage_Influenciador_TAG08`
- `LandingPage_Process Inteligente _TAG08`
- `LandingPage_ProcessActivation_TAG08`

## Strategic north (single source)

- One acquisition system, multiple page-specific narratives.
- One funnel taxonomy, one event dictionary, one decision ritual.
- Local optimization is valid only if it improves ecosystem-level performance.

## Non-negotiable shared contracts

### 1) Funnel contract

Every project must expose the same core funnel events:

- `hero_cta`
- `calculator_submit` (or equivalent intent step)
- `final_cta_click`
- `whatsapp_click`

Mandatory params:

- `lang`
- `section`
- `cta`
- `country`
- `route`

### 2) Traffic and attribution

- Mandatory UTM standard across all campaigns.
- Same source/medium/campaign naming convention across all projects.
- No paid campaign runs without UTM validation.

### 3) Consent and tracking

- Consent behavior must be equivalent across all pages.
- GA4 + Meta Pixel events must map to the same business meaning.
- Any new CTA entry point must map to `whatsapp_click` with section/cta context.

### 4) Experimentation

- Experiment IDs must be globally unique (prefix by project).
- No experiment without explicit hypothesis and success step.
- Weekly prioritization favors tests with ecosystem reuse potential.

### 5) Copy and UX consistency

- Message hierarchy: pain -> mechanism -> proof -> action.
- Avoid contradictory offers/promises across pages.
- Keep role of each page clear, but preserve shared trust language and legal tone.

## Operating model (weekly)

### Inputs

- Daily funnel baseline by project.
- Segment split (`lang`, `country`, `route`).
- Experiment readout.
- External feed/ops health where applicable.

### Decision output

- `Primary ecosystem bottleneck`
- `Project owner for fix`
- `Expected impacted funnel step`
- `Rollback condition`

## Ownership model

- `Ecosystem owner`: approves shared contracts and weekly priorities.
- `Project owner`: executes local changes and reports impact.
- `Measurement owner`: validates event integrity and attribution consistency.

## Release gates (all projects)

- `npm run ds:check`
- `npm run lint`
- `npm run build`
- Tracking checklist pass (funnel + consent + pixel + GA4 debug)

## Change protocol

Any change in one project that affects event semantics, attribution, consent, or cross-page language must:

1. Update this blueprint contract.
2. Be mirrored in sibling projects.
3. Be validated in the weekly ecosystem ritual.
