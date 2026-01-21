import { japaneseDb } from "@/lib/japanese-db";
import { normalizeAnswer, toHiragana, kanaToRomaji } from "@/lib/romaji-converter";
import { hiragana, katakana } from "@/lib/japanese-data/kana";
import { n5Kanji } from "@/lib/japanese-data/n5-kanji";
import { n5Vocab } from "@/lib/japanese-data/n5-vocab";
import type {
  AnswerParseResult,
  SettingControl,
  TrainingProvider,
  TrainingQuestion,
  TrainingSettingsBase,
} from "../types";

const MAX_LEVEL = 50;
const HISTORY_LIMIT = 100;
const COVERAGE_TARGET = 20; // attempts per prerequisite set for unlocks
const UNLOCK_ACCURACY = 0.7;
const UNLOCK_COVERAGE = 0.8;

export type JapaneseSkillKey =
  | "hiragana"
  | "katakana"
  | "kanji-n5"
  | "vocab-n5";

export type InputModeSetting = "auto" | "multiple-choice" | "typing";

type JapaneseSettings = TrainingSettingsBase & {
  inputMode: InputModeSetting;
};

type JapaneseQuestion = TrainingQuestion<JapaneseSkillKey> & {
  prompt: string;
  display: string;
  answer: string;
  acceptable: string[];
  choices?: string[];
  reading?: string;
  meaning?: string;
  inputType: "choice" | "text";
};

type JapaneseStats = Record<JapaneseSkillKey, {
  level: number;
  streak: number;
  mistakeStreak: number;
  history: { correct: boolean; ms: number }[];
}>;

const SKILL_ORDER: JapaneseSkillKey[] = [
  "hiragana",
  "katakana",
  "kanji-n5",
  "vocab-n5",
];

const SKILL_DEFINITIONS = {
  hiragana: {
    label: "Hiragana",
    symbol: "あ",
    subtitle: "Core script",
  },
  katakana: {
    label: "Katakana",
    symbol: "ア",
    subtitle: "Loanwords script",
  },
  "kanji-n5": {
    label: "Kanji N5",
    symbol: "漢",
    subtitle: "Starter kanji",
  },
  "vocab-n5": {
    label: "Vocab N5",
    symbol: "語",
    subtitle: "Everyday words",
  },
} satisfies Record<JapaneseSkillKey, { label: string; symbol: string; subtitle: string }>;

const DEFAULT_SETTINGS: JapaneseSettings = {
  questionCount: 15,
  timeLimitSeconds: 12,
  inputMode: "auto",
};

const clampValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const settingControls: SettingControl<JapaneseSettings>[] = [
  {
    id: "questionCount",
    label: "Questions per session",
    hint: "Default is 10",
    min: 5,
    max: 30,
    step: 1,
    getValue: (settings) => settings.questionCount,
    setValue: (settings, value) => ({
      ...settings,
      questionCount: clampValue(value, 5, 30),
    }),
  },
  {
    id: "timeLimitSeconds",
    label: "Time per question",
    hint: "Seconds allowed",
    min: 5,
    max: 30,
    step: 1,
    getValue: (settings) => settings.timeLimitSeconds,
    setValue: (settings, value) => ({
      ...settings,
      timeLimitSeconds: clampValue(value, 5, 30),
    }),
    formatValue: (value) => `${value}s`,
  },
  {
    id: "inputMode",
    label: "Input mode",
    hint: "Auto uses multiple choice at low levels, typing later.",
    min: 0,
    max: 2,
    step: 1,
    getValue: (settings) =>
      settings.inputMode === "auto"
        ? 0
        : settings.inputMode === "multiple-choice"
          ? 1
          : 2,
    setValue: (settings, value) => ({
      ...settings,
      inputMode: value === 0 ? "auto" : value === 1 ? "multiple-choice" : "typing",
    }),
    formatValue: (_, settings) => settings.inputMode,
  },
];

const baseStats = (): JapaneseStats =>
  SKILL_ORDER.reduce((acc, skill) => {
    acc[skill] = { level: 1, streak: 0, mistakeStreak: 0, history: [] };
    return acc;
  }, {} as JapaneseStats);

const pushHistory = (
  stats: JapaneseStats,
  skill: JapaneseSkillKey,
  entry: { correct: boolean; ms: number }
) => {
  const nextHistory = [...stats[skill].history, entry];
  if (nextHistory.length > HISTORY_LIMIT) {
    nextHistory.splice(0, nextHistory.length - HISTORY_LIMIT);
  }
  return { ...stats[skill], history: nextHistory };
};

const getAccuracy = (stats: { history: { correct: boolean }[] }) => {
  if (stats.history.length === 0) {
    return 0;
  }
  const correct = stats.history.filter((h) => h.correct).length;
  return correct / stats.history.length;
};

const getAverageMs = (stats: { history: { ms: number }[] }) => {
  if (stats.history.length === 0) {
    return 0;
  }
  const total = stats.history.reduce((sum, item) => sum + item.ms, 0);
  return total / stats.history.length;
};

const getTargetMs = (level: number) => Math.max(3, 9 - level * 0.1);

const adjustLevel = (
  stats: JapaneseStats,
  skill: JapaneseSkillKey,
  correct: boolean
) => {
  const current = stats[skill];
  const streak = correct ? current.streak + 1 : 0;
  const mistakeStreak = correct ? 0 : current.mistakeStreak + 1;
  let level = current.level;
  if (streak >= 3) {
    level = Math.min(MAX_LEVEL, level + 1);
  } else if (mistakeStreak >= 2) {
    level = Math.max(1, level - 1);
  }
  return { ...current, streak, mistakeStreak, level };
};

const updateStats = (
  stats: JapaneseStats,
  skill: JapaneseSkillKey,
  correct: boolean,
  elapsedMs: number
): JapaneseStats => {
  const next: JapaneseStats = { ...stats };
  next[skill] = adjustLevel(next, skill, correct);
  next[skill] = pushHistory(next, skill, { correct, ms: elapsedMs });
  return next;
};

const getWeakestSkill = (stats: JapaneseStats): JapaneseSkillKey => {
  let weakest: JapaneseSkillKey = SKILL_ORDER[0];
  let lowest = Number.POSITIVE_INFINITY;
  SKILL_ORDER.forEach((skill) => {
    const acc = getAccuracy(stats[skill]);
    const attempts = stats[skill].history.length;
    const score = attempts === 0 ? 1 : acc;
    if (score < lowest) {
      lowest = score;
      weakest = skill;
    }
  });
  return weakest;
};

const pickSkill = (stats: JapaneseStats): JapaneseSkillKey => {
  const unlocked = SKILL_ORDER.filter((skill) => isSkillUnlocked({ skill, stats }));
  if (unlocked.length === 0) {
    return SKILL_ORDER[0];
  }
  const weakest = unlocked.reduce<{ skill: JapaneseSkillKey; score: number }>(
    (acc, skill) => {
      const accScore = getAccuracy(stats[skill]);
      if (accScore < acc.score) {
        return { skill, score: accScore };
      }
      return acc;
    },
    { skill: unlocked[0], score: getAccuracy(stats[unlocked[0]]) }
  );
  return weakest.skill;
};

const buildChoices = (
  correct: string,
  pool: string[],
  confusion?: string[]
): string[] => {
  const set = new Set<string>();
  set.add(correct);
  const candidates = confusion
    ?.map((id) => pool.find((p) => p === id))
    .filter(Boolean) as string[];
  const fallback = pool.filter((p) => p !== correct);
  [...candidates, ...fallback].some((choice) => {
    if (set.size >= 4) {
      return true;
    }
    set.add(choice);
    return false;
  });
  return Array.from(set).slice(0, 4);
};

const maybeShuffle = <T>(items: T[]): T[] => {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const normalizeToRomaji = (value: string) => {
  if (!value) return "";
  const kanaRomaji = kanaToRomaji(value);
  if (kanaRomaji !== value) {
    return kanaRomaji;
  }
  const hira = toHiragana(value);
  const hiraRomaji = kanaToRomaji(hira);
  return hiraRomaji || normalizeAnswer(value);
};

const coverageForSkills = (stats: JapaneseStats, skills: JapaneseSkillKey[]) => {
  let attempts = 0;
  let correct = 0;
  skills.forEach((skill) => {
    attempts += stats[skill].history.length;
    correct += stats[skill].history.filter((h) => h.correct).length;
  });
  const accuracy = attempts ? correct / attempts : 0;
  const coverage = attempts / (COVERAGE_TARGET * skills.length);
  return { accuracy, coverage };
};

const prerequisites: Record<JapaneseSkillKey, JapaneseSkillKey[] | null> = {
  hiragana: null,
  katakana: null,
  "kanji-n5": null,
  "vocab-n5": null,
};

const isSkillUnlocked = ({
  skill,
  stats,
}: {
  skill: JapaneseSkillKey;
  stats: JapaneseStats;
}) => {
  const req = prerequisites[skill];
  if (!req) {
    return true;
  }
  const { accuracy, coverage } = coverageForSkills(stats, req);
  return accuracy >= UNLOCK_ACCURACY && coverage >= UNLOCK_COVERAGE;
};

const contentCache = {
  hiragana,
  katakana,
  kanji: n5Kanji,
  vocab: n5Vocab,
};

const warmContent = async () => {
  try {
    await japaneseDb.seedStore("kana", [...hiragana, ...katakana]);
    await japaneseDb.seedStore("kanji", n5Kanji);
    await japaneseDb.seedStore("vocab", n5Vocab);
    const [kana, kanji, vocab] = await Promise.all([
      japaneseDb.readAll("kana"),
      japaneseDb.readAll("kanji"),
      japaneseDb.readAll("vocab"),
    ]);
    if (kana.length) {
      contentCache.hiragana = kana.filter((k) => k.script === "hiragana");
      contentCache.katakana = kana.filter((k) => k.script === "katakana");
    }
    if (kanji.length) {
      contentCache.kanji = kanji;
    }
    if (vocab.length) {
      contentCache.vocab = vocab;
    }
  } catch (err) {
    // Swallow errors; fallback to bundled seeds.
    console.warn("japanese content warm failed", err);
  }
};

if (typeof window !== "undefined") {
  warmContent();
}

const createKanaQuestion = (
  skill: "hiragana" | "katakana",
  level: number,
  settings: JapaneseSettings
): JapaneseQuestion => {
  const pool = skill === "hiragana" ? contentCache.hiragana : contentCache.katakana;
  const entry = pool[Math.floor(Math.random() * pool.length)];
  const useChoices =
    settings.inputMode === "multiple-choice" ||
    (settings.inputMode === "auto" && level <= 5);
  const prompt = skill === "hiragana" ? "Hiragana" : "Katakana";
  const confusionRomaji = entry.confusion
    ?.map((id) => pool.find((k) => k.id === id)?.romaji)
    .filter(Boolean) as string[] | undefined;
  const choices = useChoices
    ? maybeShuffle(
        buildChoices(
          entry.romaji,
          pool.map((k) => k.romaji),
          confusionRomaji
        )
      )
    : undefined;
  const acceptable = [entry.romaji, entry.char];
  return {
    id: `${skill}-${Date.now()}-${entry.id}`,
    skill,
    level,
    prompt: `${prompt} reading?`,
    display: entry.char,
    answer: entry.romaji,
    acceptable,
    choices,
    inputType: choices ? "choice" : "text",
  };
};

const pickByLevel = <T extends { level: number }>(items: T[], level: number) => {
  const eligible = items.filter((item) => item.level <= Math.min(level, MAX_LEVEL));
  if (eligible.length === 0) {
    return items[0];
  }
  return eligible[Math.floor(Math.random() * eligible.length)];
};

const createKanjiQuestion = (
  level: number,
  settings: JapaneseSettings
): JapaneseQuestion => {
  const entry = pickByLevel(contentCache.kanji, level);
  const useChoices = settings.inputMode === "multiple-choice" ||
    (settings.inputMode === "auto" && level <= 5);
  const choices = useChoices
    ? maybeShuffle(
        buildChoices(
          entry.kanji,
          contentCache.kanji.map((k) => k.kanji)
        )
      )
    : undefined;
  const acceptable = [normalizeToRomaji(entry.reading), entry.reading, entry.kanji];
  return {
    id: `kanji-${Date.now()}-${entry.id}`,
    skill: "kanji-n5",
    level,
    prompt: "Reading?",
    display: entry.kanji,
    answer: normalizeToRomaji(entry.reading),
    acceptable,
    choices,
    reading: entry.reading,
    meaning: entry.meaning,
    inputType: choices ? "choice" : "text",
  };
};

const createVocabQuestion = (
  level: number,
  settings: JapaneseSettings
): JapaneseQuestion => {
  const entry = pickByLevel(contentCache.vocab, level);
  const useChoices = settings.inputMode === "multiple-choice" ||
    (settings.inputMode === "auto" && level <= 5);
  const choices = useChoices
    ? maybeShuffle(
        buildChoices(
          entry.term,
          contentCache.vocab.map((v) => v.term)
        )
      )
    : undefined;
  const acceptable = [normalizeToRomaji(entry.reading), entry.reading, entry.term, entry.meaning.toLowerCase()];
  return {
    id: `vocab-${Date.now()}-${entry.id}`,
    skill: "vocab-n5",
    level,
    prompt: "Meaning or reading?",
    display: entry.term,
    answer: entry.meaning.toLowerCase(),
    acceptable,
    choices,
    reading: entry.reading,
    meaning: entry.meaning,
    inputType: choices ? "choice" : "text",
  };
};

const sanitizeInput = (
  raw: string
): string => normalizeAnswer(raw);

const parseInput = (value: string): AnswerParseResult<string> => {
  if (!value) {
    return { error: "empty" };
  }
  return { value };
};

const isCorrect = (value: string, question: JapaneseQuestion): boolean => {
  const normalized = normalizeAnswer(value);
  return question.acceptable.some((item) => normalizeAnswer(item) === normalized);
};

const formatExpected = (question: JapaneseQuestion) => {
  if (question.reading) {
    return `${question.display} = ${question.reading}${question.meaning ? ` (${question.meaning})` : ""}`;
  }
  return question.display;
};

export const japaneseTrainingProvider: TrainingProvider<
  JapaneseSkillKey,
  JapaneseQuestion,
  JapaneseSettings,
  string
> = {
  id: "japanese",
  title: "Japanese Trainer",
  description: "Adaptive Japanese practice across kana, kanji, and vocabulary.",
  skillOrder: SKILL_ORDER,
  skills: SKILL_DEFINITIONS,
  maxLevel: MAX_LEVEL,
  createDefaultStats: baseStats,
  createQuestion: ({ skill, level, settings, stats }) => {
    if (!isSkillUnlocked({ skill, stats })) {
      // if locked, fallback to first unlocked skill
      const first = SKILL_ORDER.find((s) => isSkillUnlocked({ skill: s, stats })) ?? "hiragana";
      return japaneseTrainingProvider.createQuestion({
        skill: first,
        level: stats[first].level,
        settings,
        stats,
      });
    }
    if (skill === "hiragana" || skill === "katakana") {
      return createKanaQuestion(skill, level, settings);
    }
    if (skill === "kanji-n5") {
      return createKanjiQuestion(level, settings);
    }
    return createVocabQuestion(level, settings);
  },
  getQuestionText: (question) => question.prompt,
  updateStats: (stats, { skill, correct, elapsedMs }) =>
    updateStats(stats as JapaneseStats, skill, correct, elapsedMs),
  getAccuracy: (stats) => getAccuracy(stats),
  getAverageMs: (stats) => getAverageMs(stats),
  getTargetMs,
  getWeakestSkill: (stats) => getWeakestSkill(stats as JapaneseStats),
  pickSkill: (stats) => pickSkill(stats as JapaneseStats),
  answer: {
    inputMode: "text",
    placeholder: "Type romaji, kana, or meaning",
    sanitizeInput: (raw) => sanitizeInput(raw),
    parseInput: (value) => parseInput(value),
    isCorrect: (value, question) => isCorrect(value, question as JapaneseQuestion),
    formatExpected: (question) => formatExpected(question as JapaneseQuestion),
    errors: {
      empty: "Provide an answer to continue.",
      incomplete: "",
      invalid: "",
    },
  },
  settings: {
    defaultValue: DEFAULT_SETTINGS,
    controls: settingControls,
  },
  isSkillUnlocked: ({ skill, stats }) => isSkillUnlocked({ skill, stats: stats as JapaneseStats }),
};
