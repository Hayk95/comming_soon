"use client";

import { useEffect, useRef } from "react";
import { BACKGROUND_VIDEO } from "@/lib/seo";
import styles from "@/styles/coming-soon.module.css";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className={styles.bgVideo} aria-hidden="true">
      <video
        ref={videoRef}
        className={styles.bgVideoMedia}
        src={BACKGROUND_VIDEO.video}
        poster={BACKGROUND_VIDEO.poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />
      <div className={styles.bgVideoOverlay} />
    </div>
  );
}
