import Head from "next/head";
import { ComingSoonPage } from "@/components/coming-soon/ComingSoonPage";
import { SEO_DESCRIPTION, SEO_TITLE } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ComingSoonPage />
    </>
  );
}
