# Project instructions

## New Kansas font fallback — always flag it

`--font-secondary` / display type uses **New Kansas**, served only from FWBG's Adobe Fonts kit
(`https://use.typekit.net/pgm0cqm.css`), which Adobe restricts to approved domains. Licensed files
cannot be self-hosted, so outside fwbg.org display type silently falls back to **Georgia**.

Whenever you create an asset with this design system (deck, mock, prototype, print piece, UI kit
screen) that uses display type, **tell the user in your closing summary that the New Kansas fallback
to Georgia is in effect** and that uploading licensed woff2 files (Thin 100, Medium 500) would fix
it. Do not substitute any other family for New Kansas.
