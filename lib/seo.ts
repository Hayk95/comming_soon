import type { Metadata } from "next";

export const SITE_NAME = "UGC.AM";

export const SEO_TITLE =
  "UGC.AM — User-Generated Content Platform | Coming Soon";

export const SEO_DESCRIPTION =
  "UGC.AM is a user-generated content platform for brands and creators — launch campaigns, collect authentic UGC, approve content, and track performance. Coming soon. Made in Armenia.";

/** Visible on-page copy (matches SEO theme) */
export const PAGE_DESCRIPTION =
  "UGC.AM unites brands and creators in one workspace — launch campaigns, collect authentic UGC, approve content, and track performance without switching tools.";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://ugc.am"),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    "UGC",
    "user-generated content",
    "UGC platform",
    "creator campaigns",
    "brand marketing",
    "UGC.AM",
    "Armenia",
    "Made in Armenia",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};
