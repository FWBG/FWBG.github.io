#!/usr/bin/env bash
# Audits every published page for accessibility and mobile-UX issues using
# Lighthouse (mobile-emulated), scoped to the accessibility + best-practices
# categories.
#
# index.html / index-minimal.html are manually maintained in this repo.
# The rest are CI-mirrored output from other source repos (living_collections,
# collections) — see PUBLISHING.md. This script only reports status; fixing an
# issue on a mirrored page means editing it in the source repo, not here.
#
# Requires: `npm install` has been run in this repo (installs lighthouse +
# http-server as pinned devDependencies) and a local Chrome/Chromium binary.

set -euo pipefail
cd "$(dirname "$0")/.."

THRESHOLD=90
PORT=8099
REPORT_DIR="tools/.a11y-reports"

PAGES=(
  "index.html"
  "index-minimal.html"
  "begonias/index.html"
  "begonias-unbranded/index.html"
  "begonias-unbranded-plain/index.html"
  "begonias-embed/index.html"
  "collections/index.html"
)

rm -rf "$REPORT_DIR"
mkdir -p "$REPORT_DIR"

echo "Starting local static server on port $PORT..."
npx --yes http-server . -p "$PORT" -s -c-1 >"$REPORT_DIR/server.log" 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT

# Give the server a moment to come up.
for _ in $(seq 1 20); do
  if curl -sf "http://localhost:$PORT/" >/dev/null; then
    break
  fi
  sleep 0.5
done

echo "Auditing pages (mobile-emulated, accessibility + best-practices)..."
echo

printf "  %-42s %8s %8s\n" "PAGE" "A11Y" "MOBILE"
printf "  %-42s %8s %8s\n" "----" "----" "------"

failing=0
for page in "${PAGES[@]}"; do
  if [[ ! -f "$page" ]]; then
    printf "  %-42s %8s %8s\n" "$page" "MISSING" "FILE"
    failing=1
    continue
  fi

  out_json="$REPORT_DIR/$(echo "$page" | tr '/' '_').json"

  npx --yes lighthouse "http://localhost:$PORT/$page" \
    --emulated-form-factor=mobile \
    --only-categories=accessibility,best-practices \
    --output=json \
    --output-path="$out_json" \
    --chrome-flags="--headless=new" \
    --quiet >/dev/null 2>&1 || {
      printf "  %-42s %8s %8s\n" "$page" "ERROR" "ERROR"
      failing=1
      continue
    }

  a11y=$(node -e "console.log(Math.round(require('./$out_json').categories.accessibility.score * 100))")
  mobile=$(node -e "console.log(Math.round(require('./$out_json').categories['best-practices'].score * 100))")

  mark_a11y="$a11y"
  mark_mobile="$mobile"
  [[ "$a11y" -lt "$THRESHOLD" ]] && { mark_a11y="${a11y} ✗"; failing=1; }
  [[ "$mobile" -lt "$THRESHOLD" ]] && { mark_mobile="${mobile} ✗"; failing=1; }

  printf "  %-42s %8s %8s\n" "$page" "$mark_a11y" "$mark_mobile"
done

echo
echo "Full Lighthouse JSON reports saved under $REPORT_DIR/ (gitignored)."
echo "Open a report's 'audits' section for the specific elements/rules behind a low score."
echo

if [[ "$failing" -eq 0 ]]; then
  echo "All pages meet the threshold ($THRESHOLD)."
else
  echo "Some pages are below the threshold ($THRESHOLD), or errored. For begonias/* and"
  echo "collections/* pages, fix issues in the source repo (living_collections or"
  echo "collections) — edits here get overwritten on the next automated publish."
fi
