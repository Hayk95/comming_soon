import type { Metadata } from "next";

export const SITE_NAME = "UGC.AM";

/** Same favicon as ugc_web (`/assets/brand/creoscale-favicon.png`) */
export const FAVICON_PATH = "/assets/brand/creoscale-favicon.png";

export const SEO_TITLE =
    "UGC.AM | Ստեղծիր և կառավարիր UGC արշավներ մեկ հարթակում | Շուտով"

export const SEO_DESCRIPTION =
  "UGC.AM-ը օգնում է բրենդներին և ստեղծողներին համագործակցել, ստեղծել արշավներ և ստանալ որակյալ UGC կոնտենտ արագ և հեշտ։";

/** Coming soon page copy */
export const PAGE_TITLE = "Շուտով";

export const PAGE_TAGLINE = "Նոր հարթակ UGC-ի համար";

export const PAGE_SUBTITLE =
  "Բրենդներն ու ստեղծողները շուտով կհանդիպեն մեկ տեղում՝ արշավներ ստեղծելու, կոնտենտ ստանալու և աճելու համար։ Մուտքագրեք էլ. փոստը կտեղեկացնենք բացման օրվա մասին։";

/** Single looped background video (Mixkit, free license) */
export const BACKGROUND_VIDEO = {
  poster: "/posters/poster-7.jpg",
  video: "/videos/creator-07.mp4",
} as const;

export const HERO_VIDEOS = [
  {
    poster: "/posters/poster-1.svg",
    video: "/videos/creator-01.mp4",
    alt: "Ստեղծող՝ պարում է սոցիալական մեդիայի համար",
  },
  {
    poster: "/posters/poster-2.svg",
    video: "/videos/creator-02.mp4",
    alt: "Ստեղծող՝ TikTok ոճի պար",
  },
  {
    poster: "/posters/poster-3.svg",
    video: "/videos/creator-03.mp4",
    alt: "Գունավոր պար ուղղահայաց վիդեոյում",
  },
  {
    poster: "/posters/poster-4.svg",
    video: "/videos/creator-04.mp4",
    alt: "Ուրախ ստեղծող՝ պարում է ականջակալներով",
  },
  {
    poster: "/posters/poster-5.svg",
    video: "/videos/creator-05.mp4",
    alt: "Պարող՝ neon լուսավորությամբ",
  },
  {
    poster: "/posters/poster-6.svg",
    video: "/videos/creator-06.mp4",
    alt: "Էներգիկ ստեղծող՝ UGC նկարահանում է",
  },
] as const;

export const NOTIFY_PLACEHOLDER = "Ձեր էլ. փոստը";
export const NOTIFY_BUTTON = "Տեղեկացրեք ինձ";
export const NOTIFY_ERROR = "Մուտքագրեք վավեր էլ. փոստի հասցե։";
export const NOTIFY_NETWORK_ERROR = "Չհաջողվեց գրանցվել։ Փորձեք կրկին։";

export const MODAL_EYEBROW = "UGC.AM";
export const MODAL_TITLE = "Դուք սպասումաթերթում եք";
export const MODAL_MESSAGE =
  "Բացման օրվա առաջինները լինելու համար մնացեք կապի մեջ  կտեղեկացնենք, հենց որ հարթակը ակտիվ լինի։";
export const MODAL_HINT = "Հաստատման նամակը արդեն ձեր էլ. փոստում է։";
export const MODAL_CLOSE = "Հասկանալի է";
export const MODAL_DISMISS_LABEL = "Փակել";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://ugc.am"),
  icons: {
    icon: FAVICON_PATH,
    apple: FAVICON_PATH,
  },
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
