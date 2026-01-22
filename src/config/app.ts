export const appConfig = {
  name: "Japanese Trainer",
  shortName: "JP",
  description:
    "Adaptive Japanese practice (kana, kanji, vocab) with deliberate practice and offline support.",
  // Public site URL for sitemap/robots and metadata
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://japanesetrainer.netlify.app",
  themeColor: "#ff6b35",
  locale: "en-US",
  author: "Your Team",
  keywords: [
    "japanese",
    "kana",
    "hiragana",
    "katakana",
    "kanji",
    "JLPT",
    "vocabulary",
    "adaptive learning",
  ],
  socialImage: "/icons/icon-512.png",
  storagePrefix: "japanese-trainer",
};
