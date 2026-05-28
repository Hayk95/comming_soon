import { HeroBackgroundVideo } from "@/components/coming-soon/HeroBackgroundVideo";
import { NotifyForm } from "@/components/coming-soon/NotifyForm";
import { UgcLogo } from "@/components/ugc/UgcLogo";
import { PAGE_SUBTITLE, PAGE_TAGLINE, PAGE_TITLE } from "@/lib/seo";
import styles from "@/styles/coming-soon.module.css";

export function ComingSoonPage() {
  return (
    <div className={styles.page}>
      <HeroBackgroundVideo />

      <main className={styles.content} aria-labelledby="coming-soon-title">
        <UgcLogo className={styles.logo} />

        <h1 id="coming-soon-title" className={styles.title}>
          {PAGE_TITLE}
        </h1>

        <p className={styles.tagline}>{PAGE_TAGLINE}</p>

        <p className={styles.subtitle}>{PAGE_SUBTITLE}</p>

        <div className={styles.cta}>
          <NotifyForm />
        </div>

        <footer className={styles.footer}>
          <p className={styles.madeIn}>® Made in Armenia</p>
        </footer>
      </main>
    </div>
  );
}
