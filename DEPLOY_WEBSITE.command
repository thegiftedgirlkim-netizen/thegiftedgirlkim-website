#!/bin/bash
set -e
cd "$(dirname "$0")"

echo ""
echo "  Website deploy — push is the last step"
echo "  ======================================"
echo ""
echo "  If GitHub Desktop shows 1 commit on MAIN named"
echo "  'Add Memories411 store pages...' — click Push origin."
echo ""
echo "  GitHub Actions deploys the live site in ~2 minutes."
echo ""
echo "  Check: https://thegiftedgirlkim.com/marketing/memories411.html"
echo ""
read -n 1 -s -r -p "  Press any key to close…"
