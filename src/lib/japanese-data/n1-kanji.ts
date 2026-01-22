export type KanjiEntry = {
  id: string;
  kanji: string;
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n1Kanji: KanjiEntry[] = [
  { id: "kisoku", kanji: "規則", reading: "きそく", meaning: "rule/regulation", level: 1 },
  { id: "tebiki", kanji: "手引", reading: "てびき", meaning: "guide/manual", level: 1 },
  { id: "shidou", kanji: "指導", reading: "しどう", meaning: "guidance", level: 1 },
  { id: "kunren", kanji: "訓練", reading: "くんれん", meaning: "training", level: 1 },
  { id: "shuuren", kanji: "修練", reading: "しゅうれん", meaning: "training/discipline", level: 1 },
  { id: "tanren", kanji: "鍛錬", reading: "たんれん", meaning: "tempering/training", level: 1 },
  { id: "koutei", kanji: "工程", reading: "こうてい", meaning: "process", level: 1 },
  { id: "tejun", kanji: "手順", reading: "てじゅん", meaning: "procedure", level: 1 },
  { id: "junjo", kanji: "順序", reading: "じゅんじょ", meaning: "order/sequence", level: 1 },
  { id: "dankai", kanji: "段階", reading: "だんかい", meaning: "stage/phase", level: 1 },
  
  { id: "kenkyuu", kanji: "顕著", reading: "けんちょ", meaning: "remarkable/conspicuous", level: 2 },
  { id: "ichijirushii", kanji: "著", reading: "いちじるしい", meaning: "remarkable", level: 2 },
  { id: "konkyo", kanji: "根拠", reading: "こんきょ", meaning: "basis/grounds", level: 2 },
  { id: "kijun", kanji: "基準", reading: "きじゅん", meaning: "standard/criterion", level: 2 },
  { id: "gensoku", kanji: "原則", reading: "げんそく", meaning: "principle", level: 2 },
  { id: "housoku", kanji: "法則", reading: "ほうそく", meaning: "law/rule", level: 2 },
  { id: "genri", kanji: "原理", reading: "げんり", meaning: "principle/theory", level: 2 },
  { id: "riron", kanji: "理論", reading: "りろん", meaning: "theory", level: 2 },
  { id: "gakusetsu", kanji: "学説", reading: "がくせつ", meaning: "theory/doctrine", level: 2 },
  { id: "kasetsu", kanji: "仮説", reading: "かせつ", meaning: "hypothesis", level: 2 },
  
  { id: "honshitsu", kanji: "本質", reading: "ほんしつ", meaning: "essence/nature", level: 3 },
  { id: "jittai", kanji: "実態", reading: "じったい", meaning: "actual situation", level: 3 },
  { id: "genjou", kanji: "現状", reading: "げんじょう", meaning: "present condition", level: 3 },
  { id: "yousu", kanji: "様子", reading: "ようす", meaning: "situation/appearance", level: 3 },
  { id: "joukyou", kanji: "状況", reading: "じょうきょう", meaning: "situation/circumstances", level: 3 },
  { id: "baai", kanji: "場合", reading: "ばあい", meaning: "case/situation", level: 3 },
  { id: "jitai", kanji: "事態", reading: "じたい", meaning: "situation/affair", level: 3 },
  { id: "jikenbo", kanji: "事情", reading: "じじょう", meaning: "circumstances", level: 3 },
  { id: "keii", kanji: "経緯", reading: "けいい", meaning: "circumstances/background", level: 3 },
  { id: "yurai", kanji: "由来", reading: "ゆらい", meaning: "origin/history", level: 3 },
  
  { id: "kanzen", kanji: "完璧", reading: "かんぺき", meaning: "perfect/flawless", level: 4 },
  { id: "seimitsu", kanji: "精密", reading: "せいみつ", meaning: "precise/exact", level: 4 },
  { id: "seikaku", kanji: "正確", reading: "せいかく", meaning: "accurate/exact", level: 4 },
  { id: "tekisetsu", kanji: "適切", reading: "てきせつ", meaning: "appropriate", level: 4 },
  { id: "tekitou", kanji: "適当", reading: "てきとう", meaning: "suitable/appropriate", level: 4 },
  { id: "souou", kanji: "相応", reading: "そうおう", meaning: "suitable/befitting", level: 4 },
  { id: "tekigou", kanji: "適合", reading: "てきごう", meaning: "conformity", level: 4 },
  { id: "itchi", kanji: "一致", reading: "いっち", meaning: "agreement/coincidence", level: 4 },
  { id: "gouchi", kanji: "合", reading: "ごうち", meaning: "agreement", level: 4 },
  { id: "kyouchou", kanji: "強調", reading: "きょうちょう", meaning: "emphasis", level: 4 },
  
  { id: "zettai", kanji: "絶対", reading: "ぜったい", meaning: "absolute", level: 5 },
  { id: "soutai", kanji: "相対", reading: "そうたい", meaning: "relative", level: 5 },
  { id: "kyokutan", kanji: "極端", reading: "きょくたん", meaning: "extreme", level: 5 },
  { id: "chuusei", kanji: "中性", reading: "ちゅうせい", meaning: "neutral", level: 5 },
  { id: "chouritu", kanji: "中立", reading: "ちゅうりつ", meaning: "neutrality", level: 5 },
  { id: "koutei", kanji: "肯定", reading: "こうてい", meaning: "affirmation", level: 5 },
  { id: "hitei", kanji: "否定", reading: "ひてい", meaning: "negation/denial", level: 5 },
  { id: "hantai", kanji: "反対", reading: "はんたい", meaning: "opposition", level: 5 },
  { id: "gyaku", kanji: "逆", reading: "ぎゃく", meaning: "reverse/opposite", level: 5 },
  { id: "taihi", kanji: "対比", reading: "たいひ", meaning: "contrast", level: 5 },
];
