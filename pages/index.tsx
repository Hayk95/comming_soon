import Head from "next/head";
import { ComingSoonPage } from "@/components/coming-soon/ComingSoonPage";
import {
  FAVICON_PATH,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
} from "@/lib/seo";

const SITE_URL = "https://ugc.am";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#fd1645" />
        <link rel="icon" href={FAVICON_PATH} type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href={FAVICON_PATH} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
      </Head>
      <ComingSoonPage />
    </>
  );
}
