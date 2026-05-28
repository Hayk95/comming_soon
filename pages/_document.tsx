import { Head, Html, Main, NextScript } from "next/document";
import { FAVICON_PATH } from "@/lib/seo";

export default function Document() {
  return (
    <Html lang="hy">
      <Head>
        <link rel="icon" href={FAVICON_PATH} type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href={FAVICON_PATH} />
      </Head>
      <body className="min-h-full flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
