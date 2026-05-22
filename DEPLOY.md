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

## One-command server setup

```bash
chmod +x scripts/server-install.sh
npm run server:install
```

## Fix: `ERR_OSSL_EVP_UNSUPPORTED` / `digital envelope routines::unsupported`

This almost always means **`node_modules` has an old Next.js (webpack 4)** while you run **Node 17+** (you have Node 22).

Next.js **16** does not use that old webpack stack. Your server never installed the correct dependencies.

```bash
cd /home/comming_soon
rm -rf node_modules .next
npm ci
node -e "console.log(require('next/package.json').version)"   # must be 16.2.6
npm run check-env
npm run build
```

Do **not** rely on `NODE_OPTIONS=--openssl-legacy-provider` — fix the install instead.

If `npm ci` fails, upload **`package-lock.json`** from this repo and ensure **`package.json`** lists `"next": "16.2.6"`.

## Fix: "Couldn't find a `pages` directory"

The server is using an **old Next.js** install or an **incomplete deploy**.

1. Pull/copy the latest code (must include `pages/`).
2. Delete `node_modules` and run **`npm ci`**.
3. Confirm version: **16.2.6**.
4. Confirm Node: **v20+** (v22 is fine with Next 16).

## Production process manager (example)

```bash
npm run build
PORT=3000 npm run start
```

Or with PM2:

```bash
pm2 start npm --name ugc-coming-soon -- start
```
