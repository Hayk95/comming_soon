/* eslint-disable @typescript-eslint/no-require-imports */
const { existsSync } = require("fs");
const { join } = require("path");

const root = join(__dirname, "..");
const nextPkg = join(root, "node_modules", "next", "package.json");
const webpackPkg = join(root, "node_modules", "webpack", "package.json");

function fail(message) {
  console.error("\n[UGC.AM build check] FAILED\n");
  console.error(message);
  console.error("\nFix on the server:\n");
  console.error("  cd /home/comming_soon");
  console.error("  rm -rf node_modules .next");
  console.error("  npm ci");
  console.error('  node -e "console.log(require(\'next/package.json\').version)"  # expect 16.2.6');
  console.error("  npm run build\n");
  process.exit(1);
}

const nodeVersion = process.versions.node;
console.log(`[UGC.AM] Node.js ${nodeVersion}`);

if (!existsSync(nextPkg)) {
  fail("Next.js is not installed. Run: npm ci");
}

const next = require(nextPkg);
const major = Number.parseInt(next.version.split(".")[0], 10);

if (major < 16) {
  fail(
    `Wrong Next.js version: ${next.version}\n` +
      "This project requires Next.js 16.x (see package-lock.json).\n" +
      "Your node_modules folder is outdated — delete it and run npm ci.",
  );
}

console.log(`[UGC.AM] Next.js ${next.version} OK`);

if (existsSync(webpackPkg)) {
  const webpack = require(webpackPkg);
  const wMajor = Number.parseInt(webpack.version.split(".")[0], 10);
  if (wMajor < 5) {
    fail(
      `Old webpack ${webpack.version} detected (from a legacy Next install).\n` +
        "This breaks on Node 17+ with ERR_OSSL_EVP_UNSUPPORTED.\n" +
        "Remove node_modules completely and run npm ci to install Next 16.",
    );
  }
}

console.log("[UGC.AM] Environment OK\n");
