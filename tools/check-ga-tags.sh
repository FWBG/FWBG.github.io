#!/usr/bin/env bash
# Checks whether the GA4 tag has been rolled out to every published page.
#
# index.html / index-minimal.html are manually maintained in this repo.
# The rest are CI-mirrored output from other source repos (living_collections,
# collections) — see PUBLISHING.md. This script only reports status; adding
# the tag here directly would get clobbered on the next automated publish.

set -euo pipefail
cd "$(dirname "$0")/.."

GA_ID="G-QDL0NZLDKZ"

PAGES=(
  "index.html"
  "index-minimal.html"
  "begonias/index.html"
  "begonias-unbranded/index.html"
  "begonias-unbranded-plain/index.html"
  "collections/index.html"
)

echo "Checking for GA tag ($GA_ID) across published pages:"
echo

missing=0
for page in "${PAGES[@]}"; do
  if [[ ! -f "$page" ]]; then
    printf "  %-42s %s\n" "$page" "MISSING FILE"
    missing=1
  elif grep -q "$GA_ID" "$page"; then
    printf "  %-42s %s\n" "$page" "✓ present"
  else
    printf "  %-42s %s\n" "$page" "✗ not found"
    missing=1
  fi
done

echo
if [[ "$missing" -eq 0 ]]; then
  echo "All pages have the GA tag."
else
  echo "Some pages are missing the GA tag. For begonias/* and collections/*, add it in the"
  echo "source repo (living_collections or collections) — not here, it'll be overwritten."
fi
