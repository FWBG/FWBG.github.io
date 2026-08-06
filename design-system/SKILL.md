---
name: fwbg-design
description: Use this skill to generate well-branded interfaces and assets for the Fort Worth Botanic Garden (FWBG), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Font caveat — state this every time

Display type uses **New Kansas**, served only from FWBG's Adobe Fonts kit
(`https://use.typekit.net/pgm0cqm.css`), which is domain-restricted; licensed files cannot be
self-hosted. Outside fwbg.org it falls back to **Georgia**. Whenever you produce an asset with this
system that uses display type, say so in your closing summary and note that uploading licensed
New Kansas woff2 files (Thin 100, Medium 500) removes the fallback. Never substitute a different
display family.
