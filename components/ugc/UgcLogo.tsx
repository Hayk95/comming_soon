import styles from "@/styles/coming-soon.module.css";

const LOGO_ALT = "UGC.AM";
const SVG_SRC = "/assets/brand/creoscale-logo-lockup.svg";
const LOGO_WIDTH = 14970;
const LOGO_HEIGHT = 3943;
const LOGO_ASPECT = LOGO_WIDTH / LOGO_HEIGHT;

type UgcLogoProps = {
  className?: string;
  /** Lockup height in CSS pixels */
  height?: number;
};

function LockupObject({ height }: { height: number }) {
  const width = Math.round(height * LOGO_ASPECT);
  return (
    <object
      className={styles.logoSvg}
      type="image/svg+xml"
      data={SVG_SRC}
      width={width}
      height={height}
      aria-label={LOGO_ALT}
    >
      {LOGO_ALT}
    </object>
  );
}

/** Same animated heart + wordmark lockup as ugc_web BrandLogo */
export function UgcLogo({ className, height = 44 }: UgcLogoProps) {
  return (
    <span
      className={className ?? styles.logoLockup}
      style={{ ["--logo-height" as string]: `${height}px` }}
      aria-label={LOGO_ALT}
    >
      <span className={styles.logoLockupInner}>
        <LockupObject height={height} />
      </span>
    </span>
  );
}
