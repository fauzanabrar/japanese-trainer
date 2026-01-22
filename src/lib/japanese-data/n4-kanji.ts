export type KanjiEntry = {
  id: string;
  kanji: string;
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n4Kanji: KanjiEntry[] = [
  { id: "shiru", kanji: "知", reading: "しる", meaning: "know", level: 1 },
  { id: "kangaeru", kanji: "考", reading: "かんがえる", meaning: "think", level: 1 },
  { id: "hanasu", kanji: "話", reading: "はなす", meaning: "speak", level: 1 },
  { id: "kiku", kanji: "聞", reading: "きく", meaning: "listen/ask", level: 1 },
  { id: "yomu", kanji: "読", reading: "よむ", meaning: "read", level: 1 },
  { id: "kaku", kanji: "書", reading: "かく", meaning: "write", level: 1 },
  { id: "miru", kanji: "見", reading: "みる", meaning: "see", level: 1 },
  { id: "iu", kanji: "言", reading: "いう", meaning: "say", level: 1 },
  { id: "omou", kanji: "思", reading: "おもう", meaning: "think/feel", level: 1 },
  { id: "shiraberu", kanji: "調", reading: "しらべる", meaning: "investigate", level: 1 },
  
  { id: "aruku", kanji: "歩", reading: "あるく", meaning: "walk", level: 2 },
  { id: "hashiru", kanji: "走", reading: "はしる", meaning: "run", level: 2 },
  { id: "tobu", kanji: "飛", reading: "とぶ", meaning: "fly", level: 2 },
  { id: "noru", kanji: "乗", reading: "のる", meaning: "ride", level: 2 },
  { id: "oriru", kanji: "降", reading: "おりる", meaning: "get off", level: 2 },
  { id: "tomaru", kanji: "止", reading: "とまる", meaning: "stop", level: 2 },
  { id: "ugoku", kanji: "動", reading: "うごく", meaning: "move", level: 2 },
  { id: "tatsu", kanji: "立", reading: "たつ", meaning: "stand", level: 2 },
  { id: "suwaru", kanji: "座", reading: "すわる", meaning: "sit", level: 2 },
  { id: "yasumu", kanji: "休", reading: "やすむ", meaning: "rest", level: 2 },
  
  { id: "tsukau", kanji: "使", reading: "つかう", meaning: "use", level: 3 },
  { id: "tsukuru", kanji: "作", reading: "つくる", meaning: "make", level: 3 },
  { id: "uru", kanji: "売", reading: "うる", meaning: "sell", level: 3 },
  { id: "kau", kanji: "買", reading: "かう", meaning: "buy", level: 3 },
  { id: "harau", kanji: "払", reading: "はらう", meaning: "pay", level: 3 },
  { id: "morau", kanji: "貰", reading: "もらう", meaning: "receive", level: 3 },
  { id: "ageru", kanji: "上", reading: "あげる", meaning: "give/raise", level: 3 },
  { id: "sageru", kanji: "下", reading: "さげる", meaning: "lower", level: 3 },
  { id: "dasu", kanji: "出", reading: "だす", meaning: "take out", level: 3 },
  { id: "ireru", kanji: "入", reading: "いれる", meaning: "put in", level: 3 },
  
  { id: "machi", kanji: "町", reading: "まち", meaning: "town", level: 4 },
  { id: "mura", kanji: "村", reading: "むら", meaning: "village", level: 4 },
  { id: "michi", kanji: "道", reading: "みち", meaning: "road/way", level: 4 },
  { id: "hashi", kanji: "橋", reading: "はし", meaning: "bridge", level: 4 },
  { id: "eki", kanji: "駅", reading: "えき", meaning: "station", level: 4 },
  { id: "ko", kanji: "戸", reading: "こ", meaning: "door", level: 4 },
  { id: "mado", kanji: "窓", reading: "まど", meaning: "window", level: 4 },
  { id: "mise", kanji: "店", reading: "みせ", meaning: "shop", level: 4 },
  { id: "byouin", kanji: "病院", reading: "びょういん", meaning: "hospital", level: 4 },
  { id: "gakkou", kanji: "学校", reading: "がっこう", meaning: "school", level: 4 },
  
  { id: "hayai", kanji: "早", reading: "はやい", meaning: "early", level: 5 },
  { id: "osoi", kanji: "遅", reading: "おそい", meaning: "late", level: 5 },
  { id: "takai", kanji: "高", reading: "たかい", meaning: "high/tall", level: 5 },
  { id: "hikui", kanji: "低", reading: "ひくい", meaning: "low", level: 5 },
  { id: "nagai", kanji: "長", reading: "ながい", meaning: "long", level: 5 },
  { id: "mijikai", kanji: "短", reading: "みじかい", meaning: "short", level: 5 },
  { id: "omoi", kanji: "重", reading: "おもい", meaning: "heavy", level: 5 },
  { id: "karui", kanji: "軽", reading: "かるい", meaning: "light", level: 5 },
  { id: "tsuyoi", kanji: "強", reading: "つよい", meaning: "strong", level: 5 },
  { id: "yowai", kanji: "弱", reading: "よわい", meaning: "weak", level: 5 },
];
