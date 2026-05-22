import styles from "@/styles/coming-soon.module.css";

type UgcLogoProps = {
  className?: string;
};

/** Renders assets/ugc_logo.svg unchanged via public/ugc_logo.svg */
export function UgcLogo({ className }: UgcLogoProps) {
  return (
    <img
      src="/ugc_logo.svg"
      alt="UGC.AM"
      className={className ?? styles.logoMark}
      decoding="async"
    />
  );
}
