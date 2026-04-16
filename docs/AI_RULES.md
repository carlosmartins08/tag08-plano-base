# Rules for AI-assisted edits

These rules exist to prevent the project from drifting into duplicate implementations.

## Mandatory rules

- Read the existing file before writing a new one.
- Prefer editing an existing module over creating `V2`, `Updated`, `New`, `Shared` or `Common` variants.
- Do not introduce a second source of truth for domain, SEO, anchors, copy or consent state.
- Keep UI in UI components, orchestration in contexts or page composition, and external integration in dedicated helpers.
- When changing a route or anchor, update all references together.

## Refactor checklist

- Identify direct consumers.
- Identify indirect consumers.
- List every route, anchor and metadata field affected.
- Check whether state already exists in a context or helper.
- Verify the change with `lint` and `build`.

## Consent and analytics rule

- Consent updates must include load and cleanup paths.
- Revocation must actually remove active scripts or disable them, not only update localStorage.

## File creation rule

- Create a new file only when the responsibility is genuinely new.
- If the responsibility overlaps with an existing file, extend the existing file first.
- If the same behavior already exists in another form, consolidate instead of duplicating.
