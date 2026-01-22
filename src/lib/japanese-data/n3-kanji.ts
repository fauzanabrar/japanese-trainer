export type KanjiEntry = {
  id: string;
  kanji: string;
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n3Kanji: KanjiEntry[] = [
  { id: "kanashii", kanji: "悲", reading: "かなしい", meaning: "sad", level: 1 },
  { id: "ureshii", kanji: "嬉", reading: "うれしい", meaning: "happy/glad", level: 1 },
  { id: "ikaru", kanji: "怒", reading: "いかる", meaning: "angry", level: 1 },
  { id: "yorokobu", kanji: "喜", reading: "よろこぶ", meaning: "rejoice", level: 1 },
  { id: "odoroku", kanji: "驚", reading: "おどろく", meaning: "surprise", level: 1 },
  { id: "kowai", kanji: "怖", reading: "こわい", meaning: "scary", level: 1 },
  { id: "tanoshii", kanji: "楽", reading: "たのしい", meaning: "fun/enjoyable", level: 1 },
  { id: "sabishii", kanji: "寂", reading: "さびしい", meaning: "lonely", level: 1 },
  { id: "hazukashii", kanji: "恥", reading: "はずかしい", meaning: "embarrassed", level: 1 },
  { id: "shinpai", kanji: "心配", reading: "しんぱい", meaning: "worry", level: 1 },
  
  { id: "seiji", kanji: "政治", reading: "せいじ", meaning: "politics", level: 2 },
  { id: "keizai", kanji: "経済", reading: "けいざい", meaning: "economy", level: 2 },
  { id: "shakai", kanji: "社会", reading: "しゃかい", meaning: "society", level: 2 },
  { id: "bunka", kanji: "文化", reading: "ぶんか", meaning: "culture", level: 2 },
  { id: "rekishi", kanji: "歴史", reading: "れきし", meaning: "history", level: 2 },
  { id: "kagaku", kanji: "科学", reading: "かがく", meaning: "science", level: 2 },
  { id: "gijutsu", kanji: "技術", reading: "ぎじゅつ", meaning: "technology", level: 2 },
  { id: "kyouiku", kanji: "教育", reading: "きょういく", meaning: "education", level: 2 },
  { id: "kankyo", kanji: "環境", reading: "かんきょう", meaning: "environment", level: 2 },
  { id: "mondai", kanji: "問題", reading: "もんだい", meaning: "problem", level: 2 },
  
  { id: "shizen", kanji: "自然", reading: "しぜん", meaning: "nature", level: 3 },
  { id: "doubutsu", kanji: "動物", reading: "どうぶつ", meaning: "animal", level: 3 },
  { id: "shokubutsu", kanji: "植物", reading: "しょくぶつ", meaning: "plant", level: 3 },
  { id: "konchuu", kanji: "昆虫", reading: "こんちゅう", meaning: "insect", level: 3 },
  { id: "sakana", kanji: "魚", reading: "さかな", meaning: "fish", level: 3 },
  { id: "tori", kanji: "鳥", reading: "とり", meaning: "bird", level: 3 },
  { id: "mori", kanji: "森", reading: "もり", meaning: "forest", level: 3 },
  { id: "hara", kanji: "原", reading: "はら", meaning: "field/plain", level: 3 },
  { id: "ike", kanji: "池", reading: "いけ", meaning: "pond", level: 3 },
  { id: "shima", kanji: "島", reading: "しま", meaning: "island", level: 3 },
  
  { id: "kioku", kanji: "記憶", reading: "きおく", meaning: "memory", level: 4 },
  { id: "souzou", kanji: "想像", reading: "そうぞう", meaning: "imagination", level: 4 },
  { id: "rikai", kanji: "理解", reading: "りかい", meaning: "understanding", level: 4 },
  { id: "handan", kanji: "判断", reading: "はんだん", meaning: "judgment", level: 4 },
  { id: "sentaku", kanji: "選択", reading: "せんたく", meaning: "choice/selection", level: 4 },
  { id: "kettei", kanji: "決定", reading: "けってい", meaning: "decision", level: 4 },
  { id: "ishi", kanji: "意志", reading: "いし", meaning: "will/intention", level: 4 },
  { id: "mokuteki", kanji: "目的", reading: "もくてき", meaning: "purpose", level: 4 },
  { id: "keikaku", kanji: "計画", reading: "けいかく", meaning: "plan", level: 4 },
  { id: "houhou", kanji: "方法", reading: "ほうほう", meaning: "method", level: 4 },
  
  { id: "kanzen", kanji: "完全", reading: "かんぜん", meaning: "perfect/complete", level: 5 },
  { id: "fukanzen", kanji: "不完全", reading: "ふかんぜん", meaning: "imperfect", level: 5 },
  { id: "tashika", kanji: "確", reading: "たしか", meaning: "certain", level: 5 },
  { id: "fumei", kanji: "不明", reading: "ふめい", meaning: "unclear", level: 5 },
  { id: "hitsuyou", kanji: "必要", reading: "ひつよう", meaning: "necessary", level: 5 },
  { id: "juuryou", kanji: "重要", reading: "じゅうよう", meaning: "important", level: 5 },
  { id: "tokubetsu", kanji: "特別", reading: "とくべつ", meaning: "special", level: 5 },
  { id: "ippan", kanji: "一般", reading: "いっぱん", meaning: "general", level: 5 },
  { id: "kouhou", kanji: "公", reading: "こうほう", meaning: "public/official", level: 5 },
  { id: "watakushi", kanji: "私", reading: "わたくし", meaning: "private/I", level: 5 },
];
