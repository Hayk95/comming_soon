"use client";

import { useMemo } from "react";
import styles from "@/styles/coming-soon.module.css";

const REACTION_EMOJIS = [
  "👍",
  "❤️",
  "🔥",
  "😂",
  "😍",
  "🎉",
  "💯",
  "✨",
  "👏",
  "🤩",
  "😊",
  "💖",
  "🙌",
  "⭐",
  "💚",
  "🥳",
  "😮",
  "💬",
  "🫶",
  "⚡",
] as const;

type AnimationVariant = "drift" | "bob" | "spin";

type EmojiParticle = {
  id: number;
  emoji: string;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  rotation: number;
  variant: AnimationVariant;
};

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pickEmoji() {
  return REACTION_EMOJIS[Math.floor(Math.random() * REACTION_EMOJIS.length)]!;
}

function createParticles(count: number): EmojiParticle[] {
  const variants: AnimationVariant[] = ["drift", "bob", "spin"];

  return Array.from({ length: count }, (_, id) => ({
    id,
    emoji: pickEmoji(),
    left: randomBetween(1, 96),
    top: randomBetween(2, 95),
    size: randomBetween(1.1, 2.4),
    duration: randomBetween(14, 32),
    delay: randomBetween(0, 12),
    driftX: randomBetween(-55, 55),
    driftY: randomBetween(-45, 45),
    rotation: randomBetween(-30, 30),
    variant: variants[Math.floor(Math.random() * variants.length)]!,
  }));
}

const VARIANT_CLASS: Record<AnimationVariant, string> = {
  drift: styles.emojiDrift,
  bob: styles.emojiBob,
  spin: styles.emojiSpin,
};

type FloatingReactionEmojisProps = {
  count?: number;
};

export function FloatingReactionEmojis({ count = 26 }: FloatingReactionEmojisProps) {
  const particles = useMemo(() => createParticles(count), [count]);

  return (
    <div className={styles.emojiField} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`${styles.emoji} ${VARIANT_CLASS[p.variant]}`}
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              fontSize: `${p.size}rem`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift-x": `${p.driftX}px`,
              "--drift-y": `${p.driftY}px`,
              "--rotate": `${p.rotation}deg`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
