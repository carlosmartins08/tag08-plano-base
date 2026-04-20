# Decision Matrix

Use this before changing the base.

| Change type | Reuse existing | Expand existing | Refactor existing | Create new |
| --- | --- | --- | --- | --- |
| Copy change | Yes | Yes | Only if the structure is broken | No |
| New section on an existing landing page | Yes | Yes | If the section duplicates another one | Only if the responsibility is genuinely new |
| Route or anchor change | Yes | Yes | If the map is inconsistent | No |
| Consent / analytics / persistence | Yes | Yes | If the context has mixed responsibilities | No |
| External API integration | Yes | Yes | If the contract is unstable | Only if a dedicated contract layer does not exist |
| Visual variation | Yes | Yes | If the design system is drifting | No |
| New UI pattern (badge/card/panel/icon/CTA) | Yes | Yes | If `ds-*` or `Button` patterns are inconsistent | No |

## Mandatory questions

- Does this already exist somewhere else?
- Does this create a second source of truth?
- What breaks if I move this?
- What route, contract or section depends on it?
- Did I run `npm run ds:check` after visual changes?
