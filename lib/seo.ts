import type { Metadata } from "next";

export const SITE_NAME = "UGC.AM";

export const SEO_TITLE =
    "UGC.AM | Ստեղծիր և կառավարիր UGC արշավներ մեկ հարթակում | Շուտով"

export const SEO_DESCRIPTION =
  "UGC.AM-ը օգնում է բրենդներին և ստեղծողներին համագործակցել, ստեղծել արշավներ և ստանալ որակյալ UGC կոնտենտ արագ և հեշտ։";

/** Visible on-page copy (matches SEO theme) */
export const PAGE_DESCRIPTION =
  "UGC.AM-ը համախմբում է բրենդներին և կոնտենտ ստեղծողներին մեկ միասնական աշխատանքային միջավայրում՝ ստեղծելով արդյունավետ համագործակցության նոր ձևաչափ։";

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
