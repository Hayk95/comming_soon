"use client";

import { useState, type FormEvent } from "react";
import { NotifySuccessModal } from "@/components/coming-soon/NotifySuccessModal";
import { subscribeComingSoon } from "@/lib/api";
import {
  NOTIFY_BUTTON,
  NOTIFY_ERROR,
  NOTIFY_NETWORK_ERROR,
  NOTIFY_PLACEHOLDER,
} from "@/lib/seo";
import styles from "@/styles/coming-soon.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_RE.test(trimmed)) {
      setStatus("error");
      setErrorMessage(NOTIFY_ERROR);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await subscribeComingSoon(trimmed);
      setEmail("");
      setStatus("idle");
      setModalOpen(true);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : NOTIFY_NETWORK_ERROR,
      );
    }
  }

  return (
    <>
      <form
        className={styles.notifyForm}
        onSubmit={handleSubmit}
        noValidate
        suppressHydrationWarning
      >
        <label htmlFor="notify-email" className="sr-only">
          {NOTIFY_PLACEHOLDER}
        </label>
        <div className={styles.notifyRow}>
          <input
            id="notify-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder={NOTIFY_PLACEHOLDER}
            value={email}
            disabled={status === "loading"}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            className={styles.notifyInput}
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "notify-error" : undefined}
          />
          <button
            type="submit"
            className={styles.notifyButton}
            disabled={status === "loading"}
          >
            {status === "loading" ? "…" : NOTIFY_BUTTON}
          </button>
        </div>
        {status === "error" ? (
          <p id="notify-error" className={styles.notifyError} role="alert">
            {errorMessage}
          </p>
        ) : null}
      </form>

      <NotifySuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
