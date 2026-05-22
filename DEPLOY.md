# Server deployment (UGC.AM coming soon)

This project uses **Next.js 16** with the **Pages Router** (`pages/`) so it runs on servers that require a `pages` directory. Shared styles live in `app/globals.css`.

## Requirements

- **Node.js 20.9+** (see `.nvmrc`)
- Deploy the **full repository** (`pages/`, `components/`, `app/globals.css`, `package-lock.json`)

## Install and run

```bash
cd /home/comming_soon   # your server path
rm -rf node_modules .next
npm ci                  # use lockfile — do not use plain npm install on old caches
npm run build
npm run start
```

Development:

```bash
npm run dev
```

## Fix: "Couldn't find a `pages` directory"

This means the server is using an **old Next.js** install or an **incomplete deploy**.

1. Pull/copy the latest code (must include `pages/` and `app/`).
2. Delete `node_modules` and run **`npm ci`** (not `npm install` without lockfile).
3. Confirm version: `node -e "console.log(require('next/package.json').version)"` → should print **16.2.6**.
4. Confirm Node: `node -v` → **v20** or newer.

## Production process manager (example)

```bash
npm run build
PORT=3000 npm run start
```

Or with PM2:

```bash
pm2 start npm --name ugc-coming-soon -- start
```
