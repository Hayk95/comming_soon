import { FloatingReactionEmojis } from "@/components/coming-soon/FloatingReactionEmojis";
import { PAGE_DESCRIPTION } from "@/lib/seo";
import styles from "@/styles/coming-soon.module.css";

export function ComingSoonPage() {
  return (
    <div className={styles.page}>
      <div className={styles.ambient} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.gridOverlay} />
        <FloatingReactionEmojis />
      </div>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.description}>{PAGE_DESCRIPTION}</h1>
          <div className={styles.legal}>
            <p className={styles.madeIn}>® Made in Armenia</p>
          </div>
        </div>
      </main>
    </div>
  );
}
