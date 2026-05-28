"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { UgcLogo } from "@/components/ugc/UgcLogo";
import {
  MODAL_CLOSE,
  MODAL_DISMISS_LABEL,
  MODAL_HINT,
  MODAL_MESSAGE,
  MODAL_TITLE,
} from "@/lib/seo";
import styles from "@/styles/coming-soon.module.css";

type NotifySuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export function NotifySuccessModal({ open, onClose }: NotifySuccessModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className={styles.modalOverlay}
      role="presentation"
      onClick={onClose}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="notify-modal-title"
        aria-describedby="notify-modal-desc notify-modal-hint"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalDismiss}
          onClick={onClose}
          aria-label={MODAL_DISMISS_LABEL}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className={styles.modalGlow} aria-hidden="true" />

        <UgcLogo className={styles.modalLogo} height={36} />

        <h2 id="notify-modal-title" className={styles.modalTitle}>
          {MODAL_TITLE}
        </h2>

        <p id="notify-modal-desc" className={styles.modalMessage}>
          {MODAL_MESSAGE}
        </p>

        <p id="notify-modal-hint" className={styles.modalHint}>
          {MODAL_HINT}
        </p>

        <button
          ref={closeRef}
          type="button"
          className={styles.modalButton}
          onClick={onClose}
        >
          {MODAL_CLOSE}
        </button>
      </div>
    </div>,
    document.body,
  );
}
