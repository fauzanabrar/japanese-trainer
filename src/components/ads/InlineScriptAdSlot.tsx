"use client";

import { useEffect, useRef, useState } from "react";
import { storage } from "@/lib/storage";

export type InlineScriptAdConfig = {
  enabled: boolean;
  containerId: string;
  scriptId: string;
  scriptSrc: string;
  sessionStorageKey?: string;
  /** Minimum interval in ms between injections; prevents frequent refreshes. */
  minIntervalMs?: number;
  ariaLabel?: string;
};

type InlineScriptAdSlotProps = {
  config: InlineScriptAdConfig;
  className?: string;
};

export function InlineScriptAdSlot({ config, className }: InlineScriptAdSlotProps) {
  const injectedRef = useRef(false);
  const [shouldShow] = useState(() => {
    if (!config.enabled) {
      return false;
    }
    if (!config.sessionStorageKey) {
      return true;
    }

    const lastShownRaw = storage.readSession(config.sessionStorageKey);
    const lastShown = lastShownRaw ? Number(lastShownRaw) : undefined;
    const hasInterval =
      typeof config.minIntervalMs === "number" && config.minIntervalMs > 0;

    if (!lastShown || Number.isNaN(lastShown)) {
      return true;
    }

    if (!hasInterval) {
      // Only block once per session when no interval is provided
      return false;
    }

    return Date.now() - lastShown >= config.minIntervalMs!;
  });

  useEffect(() => {
    if (!shouldShow || !config.sessionStorageKey) {
      return;
    }
    storage.writeSession(config.sessionStorageKey, Date.now().toString());
  }, [config.sessionStorageKey, shouldShow]);

  useEffect(() => {
    if (!config.enabled || !shouldShow || injectedRef.current) {
      return;
    }
    if (typeof document === "undefined") {
      return;
    }
    const timeout = window.setTimeout(() => {
      const container = document.getElementById(config.containerId);
      if (!container) {
        return;
      }
      if (document.getElementById(config.scriptId)) {
        injectedRef.current = true;
        return;
      }
      const script = document.createElement("script");
      script.id = config.scriptId;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = config.scriptSrc;
      container.appendChild(script);
      injectedRef.current = true;
    }, 500);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [config, shouldShow]);

  if (!config.enabled || !shouldShow) {
    return null;
  }

  return (
    <section
      className={className}
      aria-label={config.ariaLabel}
      style={{
        minHeight: 250,
        width: "100%",
        position: "relative",
        willChange: "contents",
      }}
    >
      <div
        id={config.containerId}
        style={{ width: "100%", height: "100%" }}
        aria-hidden
      />
    </section>
  );
}
