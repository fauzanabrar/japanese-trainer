export type KanjiEntry = {
  id: string;
  kanji: string;
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n5Kanji: KanjiEntry[] = [
  { id: "hito", kanji: "人", reading: "ひと", meaning: "person", level: 1 },
  { id: "ki", kanji: "木", reading: "き", meaning: "tree", level: 1 },
  { id: "kuchi", kanji: "口", reading: "くち", meaning: "mouth", level: 1 },
  { id: "te", kanji: "手", reading: "て", meaning: "hand", level: 1 },
  { id: "hi", kanji: "日", reading: "ひ", meaning: "sun/day", level: 2 },
  { id: "tsuki", kanji: "月", reading: "つき", meaning: "moon/month", level: 2 },
  { id: "yama", kanji: "山", reading: "やま", meaning: "mountain", level: 2 },
  { id: "kawa", kanji: "川", reading: "かわ", meaning: "river", level: 2 },
  { id: "mizu", kanji: "水", reading: "みず", meaning: "water", level: 3 },
  { id: "hi-fire", kanji: "火", reading: "ひ", meaning: "fire", level: 3 },
  { id: "kane", kanji: "金", reading: "かね", meaning: "gold/money", level: 3 },
  { id: "tsuchi", kanji: "土", reading: "つち", meaning: "earth", level: 3 },
  { id: "onna", kanji: "女", reading: "おんな", meaning: "woman", level: 4 },
  { id: "otoko", kanji: "男", reading: "おとこ", meaning: "man", level: 4 },
  { id: "ko", kanji: "子", reading: "こ", meaning: "child", level: 4 },
  { id: "gaku", kanji: "学", reading: "がく", meaning: "study", level: 5 },
  { id: "sei", kanji: "生", reading: "せい", meaning: "life", level: 5 },
  { id: "sen", kanji: "先", reading: "せん", meaning: "previous", level: 5 },
  { id: "koo", kanji: "校", reading: "こう", meaning: "school", level: 5 },
  { id: "joo", kanji: "上", reading: "じょう", meaning: "up", level: 5 },
];
