export type VocabEntry = {
  id: string;
  term: string; // kanji/kana form
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n3Vocab: VocabEntry[] = [
  { id: "kanashii", term: "悲しい", reading: "かなしい", meaning: "sad", level: 1 },
  { id: "ureshii", term: "嬉しい", reading: "うれしい", meaning: "happy/glad", level: 1 },
  { id: "ikaru", term: "怒る", reading: "いかる", meaning: "to get angry", level: 1 },
  { id: "yorokobu", term: "喜ぶ", reading: "よろこぶ", meaning: "to rejoice", level: 1 },
  { id: "odoroku", term: "驚く", reading: "おどろく", meaning: "to be surprised", level: 1 },
  { id: "kowai", term: "怖い", reading: "こわい", meaning: "scary", level: 1 },
  { id: "tanoshii", term: "楽しい", reading: "たのしい", meaning: "fun/enjoyable", level: 1 },
  { id: "sabishii", term: "寂しい", reading: "さびしい", meaning: "lonely", level: 1 },
  { id: "hazukashii", term: "恥ずかしい", reading: "はずかしい", meaning: "embarrassed", level: 1 },
  { id: "shinpai", term: "心配", reading: "しんぱい", meaning: "worry", level: 1 },
  
  { id: "seiji", term: "政治", reading: "せいじ", meaning: "politics", level: 2 },
  { id: "keizai", term: "経済", reading: "けいざい", meaning: "economy", level: 2 },
  { id: "shakai", term: "社会", reading: "しゃかい", meaning: "society", level: 2 },
  { id: "bunka", term: "文化", reading: "ぶんか", meaning: "culture", level: 2 },
  { id: "rekishi", term: "歴史", reading: "れきし", meaning: "history", level: 2 },
  { id: "kagaku", term: "科学", reading: "かがく", meaning: "science", level: 2 },
  { id: "gijutsu", term: "技術", reading: "ぎじゅつ", meaning: "technology", level: 2 },
  { id: "kyouiku", term: "教育", reading: "きょういく", meaning: "education", level: 2 },
  { id: "kankyo", term: "環境", reading: "かんきょう", meaning: "environment", level: 2 },
  { id: "mondai", term: "問題", reading: "もんだい", meaning: "problem", level: 2 },
  
  { id: "shizen", term: "自然", reading: "しぜん", meaning: "nature", level: 3 },
  { id: "doubutsu", term: "動物", reading: "どうぶつ", meaning: "animal", level: 3 },
  { id: "shokubutsu", term: "植物", reading: "しょくぶつ", meaning: "plant", level: 3 },
  { id: "konchuu", term: "昆虫", reading: "こんちゅう", meaning: "insect", level: 3 },
  { id: "sakana", term: "魚", reading: "さかな", meaning: "fish", level: 3 },
  { id: "tori", term: "鳥", reading: "とり", meaning: "bird", level: 3 },
  { id: "mori", term: "森", reading: "もり", meaning: "forest", level: 3 },
  { id: "hara", term: "原", reading: "はら", meaning: "field/plain", level: 3 },
  { id: "ike", term: "池", reading: "いけ", meaning: "pond", level: 3 },
  { id: "shima", term: "島", reading: "しま", meaning: "island", level: 3 },
  
  { id: "kioku", term: "記憶", reading: "きおく", meaning: "memory", level: 4 },
  { id: "souzou", term: "想像", reading: "そうぞう", meaning: "imagination", level: 4 },
  { id: "rikai", term: "理解", reading: "りかい", meaning: "understanding", level: 4 },
  { id: "handan", term: "判断", reading: "はんだん", meaning: "judgment", level: 4 },
  { id: "sentaku", term: "選択", reading: "せんたく", meaning: "choice/selection", level: 4 },
  { id: "kettei", term: "決定", reading: "けってい", meaning: "decision", level: 4 },
  { id: "ishi", term: "意志", reading: "いし", meaning: "will/intention", level: 4 },
  { id: "mokuteki", term: "目的", reading: "もくてき", meaning: "purpose", level: 4 },
  { id: "keikaku", term: "計画", reading: "けいかく", meaning: "plan", level: 4 },
  { id: "houhou", term: "方法", reading: "ほうほう", meaning: "method", level: 4 },
  
  { id: "kanzen", term: "完全", reading: "かんぜん", meaning: "perfect/complete", level: 5 },
  { id: "fukanzen", term: "不完全", reading: "ふかんぜん", meaning: "imperfect", level: 5 },
  { id: "tashika", term: "確か", reading: "たしか", meaning: "certain", level: 5 },
  { id: "fumei", term: "不明", reading: "ふめい", meaning: "unclear", level: 5 },
  { id: "hitsuyou", term: "必要", reading: "ひつよう", meaning: "necessary", level: 5 },
  { id: "juuryou", term: "重要", reading: "じゅうよう", meaning: "important", level: 5 },
  { id: "tokubetsu", term: "特別", reading: "とくべつ", meaning: "special", level: 5 },
  { id: "ippan", term: "一般", reading: "いっぱん", meaning: "general", level: 5 },
  { id: "kouhou", term: "公", reading: "こうほう", meaning: "public/official", level: 5 },
  { id: "watakushi", term: "私", reading: "わたくし", meaning: "private/I", level: 5 },
];
