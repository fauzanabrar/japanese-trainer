export type VocabEntry = {
  id: string;
  term: string; // kanji/kana form
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n5Vocab: VocabEntry[] = [
  { id: "konnichiwa", term: "こんにちは", reading: "こんにちは", meaning: "hello", level: 1 },
  { id: "arigatou", term: "ありがとう", reading: "ありがとう", meaning: "thank you", level: 1 },
  { id: "ohayou", term: "おはよう", reading: "おはよう", meaning: "good morning", level: 1 },
  { id: "konbanwa", term: "こんばんは", reading: "こんばんは", meaning: "good evening", level: 1 },
  { id: "sayounara", term: "さようなら", reading: "さようなら", meaning: "goodbye", level: 1 },
  { id: "ie", term: "家", reading: "いえ", meaning: "house", level: 2 },
  { id: "gakkou", term: "学校", reading: "がっこう", meaning: "school", level: 2 },
  { id: "kuruma", term: "車", reading: "くるま", meaning: "car", level: 2 },
  { id: "eki", term: "駅", reading: "えき", meaning: "station", level: 2 },
  { id: "densha", term: "電車", reading: "でんしゃ", meaning: "train", level: 2 },
  { id: "mizu", term: "水", reading: "みず", meaning: "water", level: 3 },
  { id: "ocha", term: "お茶", reading: "おちゃ", meaning: "tea", level: 3 },
  { id: "gohan", term: "ご飯", reading: "ごはん", meaning: "meal/rice", level: 3 },
  { id: "pan", term: "パン", reading: "ぱん", meaning: "bread", level: 3 },
  { id: "yasai", term: "野菜", reading: "やさい", meaning: "vegetable", level: 3 },
  { id: "inu", term: "犬", reading: "いぬ", meaning: "dog", level: 4 },
  { id: "neko", term: "猫", reading: "ねこ", meaning: "cat", level: 4 },
  { id: "sora", term: "空", reading: "そら", meaning: "sky", level: 4 },
  { id: "ame", term: "雨", reading: "あめ", meaning: "rain", level: 4 },
  { id: "yuki", term: "雪", reading: "ゆき", meaning: "snow", level: 4 },
];
