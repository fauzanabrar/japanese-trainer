export type VocabEntry = {
  id: string;
  term: string; // kanji/kana form
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n4Vocab: VocabEntry[] = [
  { id: "shiru", term: "知る", reading: "しる", meaning: "to know", level: 1 },
  { id: "kangaeru", term: "考える", reading: "かんがえる", meaning: "to think", level: 1 },
  { id: "hanasu", term: "話す", reading: "はなす", meaning: "to speak", level: 1 },
  { id: "kiku", term: "聞く", reading: "きく", meaning: "to listen/ask", level: 1 },
  { id: "yomu", term: "読む", reading: "よむ", meaning: "to read", level: 1 },
  { id: "kaku", term: "書く", reading: "かく", meaning: "to write", level: 1 },
  { id: "miru", term: "見る", reading: "みる", meaning: "to see", level: 1 },
  { id: "iu", term: "言う", reading: "いう", meaning: "to say", level: 1 },
  { id: "omou", term: "思う", reading: "おもう", meaning: "to think/feel", level: 1 },
  { id: "wakaru", term: "分かる", reading: "わかる", meaning: "to understand", level: 1 },
  
  { id: "aruku", term: "歩く", reading: "あるく", meaning: "to walk", level: 2 },
  { id: "hashiru", term: "走る", reading: "はしる", meaning: "to run", level: 2 },
  { id: "tobu", term: "飛ぶ", reading: "とぶ", meaning: "to fly", level: 2 },
  { id: "noru", term: "乗る", reading: "のる", meaning: "to ride", level: 2 },
  { id: "oriru", term: "降りる", reading: "おりる", meaning: "to get off", level: 2 },
  { id: "tomaru", term: "止まる", reading: "とまる", meaning: "to stop", level: 2 },
  { id: "ugoku", term: "動く", reading: "うごく", meaning: "to move", level: 2 },
  { id: "tatsu", term: "立つ", reading: "たつ", meaning: "to stand", level: 2 },
  { id: "suwaru", term: "座る", reading: "すわる", meaning: "to sit", level: 2 },
  { id: "yasumu", term: "休む", reading: "やすむ", meaning: "to rest", level: 2 },
  
  { id: "tsukau", term: "使う", reading: "つかう", meaning: "to use", level: 3 },
  { id: "tsukuru", term: "作る", reading: "つくる", meaning: "to make", level: 3 },
  { id: "uru", term: "売る", reading: "うる", meaning: "to sell", level: 3 },
  { id: "kau", term: "買う", reading: "かう", meaning: "to buy", level: 3 },
  { id: "harau", term: "払う", reading: "はらう", meaning: "to pay", level: 3 },
  { id: "ageru", term: "上げる", reading: "あげる", meaning: "to give/raise", level: 3 },
  { id: "sageru", term: "下げる", reading: "さげる", meaning: "to lower", level: 3 },
  { id: "dasu", term: "出す", reading: "だす", meaning: "to take out", level: 3 },
  { id: "ireru", term: "入れる", reading: "いれる", meaning: "to put in", level: 3 },
  { id: "akeru", term: "開ける", reading: "あける", meaning: "to open", level: 3 },
  
  { id: "kimochi", term: "気持ち", reading: "きもち", meaning: "feeling", level: 4 },
  { id: "kokoro", term: "心", reading: "こころ", meaning: "heart/mind", level: 4 },
  { id: "karada", term: "体", reading: "からだ", meaning: "body", level: 4 },
  { id: "atama", term: "頭", reading: "あたま", meaning: "head", level: 4 },
  { id: "kao", term: "顔", reading: "かお", meaning: "face", level: 4 },
  { id: "ashi", term: "足", reading: "あし", meaning: "leg/foot", level: 4 },
  { id: "yubi", term: "指", reading: "ゆび", meaning: "finger", level: 4 },
  { id: "mimi", term: "耳", reading: "みみ", meaning: "ear", level: 4 },
  { id: "hana", term: "鼻", reading: "はな", meaning: "nose", level: 4 },
  { id: "ha", term: "歯", reading: "は", meaning: "tooth", level: 4 },
  
  { id: "hayai", term: "早い", reading: "はやい", meaning: "early", level: 5 },
  { id: "osoi", term: "遅い", reading: "おそい", meaning: "late", level: 5 },
  { id: "takai", term: "高い", reading: "たかい", meaning: "high/tall", level: 5 },
  { id: "hikui", term: "低い", reading: "ひくい", meaning: "low", level: 5 },
  { id: "nagai", term: "長い", reading: "ながい", meaning: "long", level: 5 },
  { id: "mijikai", term: "短い", reading: "みじかい", meaning: "short", level: 5 },
  { id: "omoi", term: "重い", reading: "おもい", meaning: "heavy", level: 5 },
  { id: "karui", term: "軽い", reading: "かるい", meaning: "light", level: 5 },
  { id: "tsuyoi", term: "強い", reading: "つよい", meaning: "strong", level: 5 },
  { id: "yowai", term: "弱い", reading: "よわい", meaning: "weak", level: 5 },
];
