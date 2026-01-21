"use client";

import { useEffect, useRef, useState } from "react";
import { storage } from "@/lib/storage";

export type InlineScriptAdConfig = {
  enabled: boolean;
  containerId: string;
  scriptId: string;
  scriptSrc: string;
  sessionStorageKey?: string;
  ariaLabel?: string;
};

type InlineScriptAdSlotProps = {
  config: InlineScriptAdConfig;
  className?: string;
};

export function InlineScriptAdSlot({
  config,
  className,
}: InlineScriptAdSlotProps) {
  const injectedRef = useRef(false);
  const [shouldShow] = useState(() => {
    if (!config.enabled) {
      return false;
    }
    if (!config.sessionStorageKey) {
      return true;
    }
    return !storage.readSession(config.sessionStorageKey);
  });

  useEffect(() => {
    if (!shouldShow || !config.sessionStorageKey) {
      return;
    }
    storage.writeSession(config.sessionStorageKey, "true");
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
