#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Cleaning old install..."
rm -rf node_modules .next

echo "==> Installing from package-lock.json (Next.js 16)..."
npm ci

echo "==> Verifying Next.js version..."
node -e "const v=require('next/package.json').version; console.log('Next.js', v); if(!v.startsWith('16.')) process.exit(1)"

echo "==> Building..."
npm run build

echo "==> Done. Start with: npm run start"
