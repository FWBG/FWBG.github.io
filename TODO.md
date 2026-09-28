# TODO

- Add GA4 tag (`G-QDL0NZLDKZ`) to `collections/index.html` — must be added in the `FWBG/collections` source repo, not here (`tools/check-ga-tags.sh` confirms it's still missing as of 2026-09-28).
- Reconcile the two unbranded/minimal styling patterns: `living_collections` uses a token-swap approach (`fwbg-unbranded/tokens/*.css`) while this repo's `index-minimal.html` + `minimal/styles.css` is a separate hand-rolled stylesheet. Decide whether to retrofit the homepage to the token-swap pattern.
- Add link from index to collections page when design system is approved.
- Fix missing Satoshi font files: `design-system/tokens/fonts.css` declares `@font-face` rules pointing at `design-system/assets/fonts/*.woff2`, but that directory doesn't exist, so every page silently falls back to system fonts instead of the brand typeface. Found via `tools/check-a11y-mobile.sh`.
