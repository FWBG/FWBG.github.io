# Publishing Paths to fwbg.github.io

As of 2026-09-22.

The site is fed by three distinct mechanisms: direct manual commits, and two automated GitHub
Actions pipelines that push generated pages in from sibling repos.

## 1. Manual direct commits

A maintainer commits straight to this repo's `main` branch (often with Claude Code assistance).
This is how the site's own scaffolding is maintained — nothing generates or syncs these files
automatically.

| File / folder | Purpose |
| --- | --- |
| `index.html` | Site homepage |
| `design-system/` | FWBG brand design system (tokens, components, guide) — copied in from the design-system skill/source, not built by CI |
| `llms.txt`, `llms-full.txt` | LLM-oriented site map, pointing at pages here and their source repos |
| `.nojekyll`, `README.md`, `TODO.md` | Repo housekeeping |

Commit history confirms this: `first commit`, `Add basic homepage using FWBG design system`,
`new text and links`, `Add .nojekyll to skip Jekyll processing` are all authored directly, not by
the publishing bot.

## 2. Automated: `begonias/` from FWBG/living_collections

A GitHub Actions workflow in the `living_collections` repo
(`.github/workflows/publish-begonia.yml`) rebuilds and pushes the Begonia dashboard into this
repo's `begonias/` folder.

**Trigger:** push to `main` touching `dashboards/begonia/**`, `fwbg/**`, `tools/stage-pages.py`,
or the workflow file itself — or manual `workflow_dispatch`.

**Steps:**
1. Check out `living_collections`.
2. Run `tools/stage-pages.py --out _stage/begonias` to stage static source files (CDN scripts for
   React/Babel stay external, not bundled).
3. Check out `FWBG/FWBG.github.io` using a `FWBG_PAGES_TOKEN` secret (a PAT with push access).
4. `rsync -av --delete` the staged files into `fwbg-pages/begonias/`.
5. Commit as `fwbg-pages-bot <actions@github.com>` with message
   `Publish begonia dashboard from FWBG/living_collections@<short sha>`, then push.

Only one such publish has landed so far (`4c47256`, 2026-09-10).

## 3. Automated: `collections/` from FWBG/collections

Same mechanism as the begonia pipeline, driven from a separate source repo, `FWBG/collections`
(not cloned in this local workspace, so its workflow file couldn't be inspected directly —
inferred from commit evidence).

**Evidence it's the identical pattern:** every landing commit is authored by the same bot
identity, `fwbg-pages-bot <actions@github.com>`, with message
`Publish collections page from FWBG/collections@<short sha>`. This is by far the most active
pipeline — 7 of the repo's 13 total commits.

| Commit | Date |
| --- | --- |
| `2457ccb` | 2026-09-10 |
| `166e1ae` | 2026-09-10 |
| `43f9171` | 2026-09-11 |
| `4e8f5d9` | 2026-09-11 |
| `eedb746` | 2026-09-16 |
| `1dc6efc` | 2026-09-16 |
| `3d4782b` | 2026-09-16 |

This publishes the `collections/` folder: an index page plus a shared copy of the `fwbg/`
design-system assets (fonts, tokens, logos) bundled alongside it.

## `llms.txt`

`llms.txt` and `llms-full.txt` at the repo root give LLM crawlers a single entry point into
everything fwbg.github.io aggregates — pages, the pipelines that publish them, links back to the
source repos above, and (in `llms-full.txt`) crawling guidance for third-party collection portals
linked from the Collections page (e.g. preferring a Symbiota collection's Darwin Core Archive
download over crawling its search pages). Maintained by manual commit, same as `index.html`;
update them whenever a page is added, moved, its source repo changes, or a linked external portal's
bulk-access endpoints change.

## Sources

| Repo | Role |
| --- | --- |
| [FWBG/FWBG.github.io](https://github.com/FWBG/FWBG.github.io) | This site — the publish target |
| [FWBG/living_collections](https://github.com/FWBG/living_collections) | Source of the begonia dashboard, pushed into `begonias/` |
| [FWBG/collections](https://github.com/FWBG/collections) | Source of the collections page, pushed into `collections/` |
