import { featureFlags } from "./features";

export const adsConfig = {
  enabled: featureFlags.ads.enabled,
  popUnder: {
    enabled: featureFlags.ads.popUnder,
    scriptSrc:
      "https://pl28480662.effectivegatecpm.com/5b/9e/bf/5b9ebf11a1c5d7a7e97f435c53621ae2.js",
    scriptId: "pop-under-ad-script",
    frequencyStorageKey: "popUnderAdLastShown",
    minIntervalMs: 1_800_000,
  },
  inline: {
    enabled: featureFlags.ads.inline,
    // Native banner; session-gated to avoid frequent impressions
    containerId: "container-8ae2682a00f7b4b2790fcf59a39a2936",
    scriptId: "native-banner-8ae2682a00f7b4b2790fcf59a39a2936",
    scriptSrc:
      "https://pl28537967.effectivegatecpm.com/8ae2682a00f7b4b2790fcf59a39a2936/invoke.js",
    sessionStorageKey: "nativeBannerLastShown",
    minIntervalMs: 300_000, // 5 minutes between injections
    ariaLabel: "Sponsored content",
  },
};
