import { appConfig } from "./app";
import { japaneseTrainingProvider } from "@/features/training/providers/japaneseTrainingProvider";

type ProviderSkillKey = keyof typeof japaneseTrainingProvider.skills;
type TrainingModeKey = ProviderSkillKey | "mix";

const storagePrefix = appConfig.storagePrefix;

const mixMode: {
  key: TrainingModeKey;
  label: string;
  subtitle: string;
  icon: string;
} = {
  key: "mix" as const,
  label: "Random mix",
  subtitle: "Adaptive blend",
  icon: "M",
};

const skillModes: Array<{
  key: ProviderSkillKey;
  label: string;
  subtitle: string;
  icon: string;
}> = japaneseTrainingProvider.skillOrder.map((skill) => ({
  key: skill,
  label: japaneseTrainingProvider.skills[skill].label,
  subtitle: japaneseTrainingProvider.skills[skill].subtitle,
  icon: japaneseTrainingProvider.skills[skill].symbol,
}));

export const trainingConfig = {
  provider: japaneseTrainingProvider,
  storageKeys: {
    session: `${storagePrefix}:session`,
    settings: `${storagePrefix}:settings`,
    theme: `${storagePrefix}:theme`,
  },
  modes: [mixMode, ...skillModes] as Array<{
    key: TrainingModeKey;
    label: string;
    subtitle: string;
    icon: string;
  }>,
  copy: {
    brand: {
      name: appConfig.name,
      shortName: appConfig.shortName,
    },
    menu: {
      title: "Choose a practice",
      description:
        "Start with kana, then unlock kanji and vocabulary as you improve.",
      statsAction: "Statistics",
      settingsAction: "Settings",
      questionsSuffix: "questions",
      timeSuffix: "s per question",
      weakestPrefix: "Weakest:",
      inputModeLabel: "Input mode:",
      unlockNote: "Unlock higher levels with 70% accuracy and 80% coverage.",
    },
    drill: {
      subtitle: "Answer quickly and accurately to level up.",
      questionLabel: "Question",
      timeLabel: "Time",
      skillLabel: "Category",
      levelLabel: "Level",
      targetLabel: "Target",
      answerPlaceholder: "Type romaji, kana, or choose",
      answerPlaceholderKeypad: "Tap to answer",
      checkAction: "Check",
      nextAction: "Next",
      loading: "Loading your prompt...",
      sessionScoreLabel: "Session score",
      sessionHint: "Stay focused and keep moving.",
    },
    stats: {
      title: "Statistics",
      intro:
        "Recent performance across your drills (last 100 attempts per skill).",
      overallTitle: "Overall",
      overallIntro: "Based on your recent attempts across all skills.",
      accuracyLabel: "Accuracy",
      attemptsLabel: "Attempts",
      avgTimeLabel: "Avg time",
      noData: "No data yet",
      noAttempts: "No attempts yet",
    },
    summary: {
      title: "Session complete",
      accuracyLabel: "Accuracy",
      correctLabel: "Correct",
      wrongLabel: "Wrong",
      practiceAgain: "Practice again",
      backToMenu: "Back to menu",
    },
    settings: {
      title: "Settings",
      intro: "Tune the session size, time, and input style.",
      themeLabel: "Theme",
      themeLight: "Light",
      themeDark: "Dark",
      resetStats: "Reset all stats",
      backToMenu: "Back to menu",
    },
    appBar: {
      menu: appConfig.name,
      drillSuffix: "drill",
      summary: "Session summary",
      stats: "Statistics",
      settings: "Settings",
    },
    feedback: {
      correctPrefix: "Correct.",
      wrongPrefix: "Not yet. Answer:",
      timeoutPrefix: "Time's up. Answer:",
    },
  },
};
