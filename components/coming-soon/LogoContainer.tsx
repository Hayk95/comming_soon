"use client";

import { useLayoutEffect, useState } from "react";
import { UgcLogo } from "@/components/ugc/UgcLogo";
import styles from "@/styles/coming-soon.module.css";

const CORNERS = ["topRight", "bottomRight", "topLeft", "bottomLeft"] as const;

type Corner = (typeof CORNERS)[number];

const CORNER_CLASS: Record<Corner, string> = {
  topRight: styles.logoTopRight,
  bottomRight: styles.logoBottomRight,
  topLeft: styles.logoTopLeft,
  bottomLeft: styles.logoBottomLeft,
};

function pickCorner(): Corner {
  return CORNERS[Math.floor(Math.random() * CORNERS.length)]!;
}

export function LogoContainer() {
  const [corner, setCorner] = useState<Corner | null>(null);

  useLayoutEffect(() => {
    setCorner(pickCorner());
  }, []);

  if (corner === null) {
    return null;
  }

  return (
    <div className={`${styles.logoContainer} ${CORNER_CLASS[corner]}`}>
      <UgcLogo className={styles.logoMark} />
    </div>
  );
}
