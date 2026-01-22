export type VocabEntry = {
  id: string;
  term: string; // kanji/kana form
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n1Vocab: VocabEntry[] = [
  { id: "kisoku", term: "規則", reading: "きそく", meaning: "rule/regulation", level: 1 },
  { id: "tebiki", term: "手引き", reading: "てびき", meaning: "guide/manual", level: 1 },
  { id: "shidou", term: "指導", reading: "しどう", meaning: "guidance", level: 1 },
  { id: "kunren", term: "訓練", reading: "くんれん", meaning: "training", level: 1 },
  { id: "shuuren", term: "修練", reading: "しゅうれん", meaning: "training/discipline", level: 1 },
  { id: "tanren", term: "鍛錬", reading: "たんれん", meaning: "tempering/training", level: 1 },
  { id: "koutei", term: "工程", reading: "こうてい", meaning: "process", level: 1 },
  { id: "tejun", term: "手順", reading: "てじゅん", meaning: "procedure", level: 1 },
  { id: "junjo", term: "順序", reading: "じゅんじょ", meaning: "order/sequence", level: 1 },
  { id: "dankai", term: "段階", reading: "だんかい", meaning: "stage/phase", level: 1 },
  
  { id: "kencho", term: "顕著", reading: "けんちょ", meaning: "remarkable/conspicuous", level: 2 },
  { id: "ichijirushii", term: "著しい", reading: "いちじるしい", meaning: "remarkable", level: 2 },
  { id: "konkyo", term: "根拠", reading: "こんきょ", meaning: "basis/grounds", level: 2 },
  { id: "kijun", term: "基準", reading: "きじゅん", meaning: "standard/criterion", level: 2 },
  { id: "gensoku", term: "原則", reading: "げんそく", meaning: "principle", level: 2 },
  { id: "housoku", term: "法則", reading: "ほうそく", meaning: "law/rule", level: 2 },
  { id: "genri", term: "原理", reading: "げんり", meaning: "principle/theory", level: 2 },
  { id: "riron", term: "理論", reading: "りろん", meaning: "theory", level: 2 },
  { id: "gakusetsu", term: "学説", reading: "がくせつ", meaning: "theory/doctrine", level: 2 },
  { id: "kasetsu", term: "仮説", reading: "かせつ", meaning: "hypothesis", level: 2 },
  
  { id: "honshitsu", term: "本質", reading: "ほんしつ", meaning: "essence/nature", level: 3 },
  { id: "jittai", term: "実態", reading: "じったい", meaning: "actual situation", level: 3 },
  { id: "genjou", term: "現状", reading: "げんじょう", meaning: "present condition", level: 3 },
  { id: "yousu", term: "様子", reading: "ようす", meaning: "situation/appearance", level: 3 },
  { id: "joukyou", term: "状況", reading: "じょうきょう", meaning: "situation/circumstances", level: 3 },
  { id: "baai", term: "場合", reading: "ばあい", meaning: "case/situation", level: 3 },
  { id: "jitai", term: "事態", reading: "じたい", meaning: "situation/affair", level: 3 },
  { id: "jijou", term: "事情", reading: "じじょう", meaning: "circumstances", level: 3 },
  { id: "keii", term: "経緯", reading: "けいい", meaning: "circumstances/background", level: 3 },
  { id: "yurai", term: "由来", reading: "ゆらい", meaning: "origin/history", level: 3 },
  
  { id: "kanpeki", term: "完璧", reading: "かんぺき", meaning: "perfect/flawless", level: 4 },
  { id: "seimitsu", term: "精密", reading: "せいみつ", meaning: "precise/exact", level: 4 },
  { id: "seikaku", term: "正確", reading: "せいかく", meaning: "accurate/exact", level: 4 },
  { id: "tekisetsu", term: "適切", reading: "てきせつ", meaning: "appropriate", level: 4 },
  { id: "tekitou", term: "適当", reading: "てきとう", meaning: "suitable/appropriate", level: 4 },
  { id: "souou", term: "相応", reading: "そうおう", meaning: "suitable/befitting", level: 4 },
  { id: "tekigou", term: "適合", reading: "てきごう", meaning: "conformity", level: 4 },
  { id: "itchi", term: "一致", reading: "いっち", meaning: "agreement/coincidence", level: 4 },
  { id: "goui", term: "合意", reading: "ごうい", meaning: "agreement", level: 4 },
  { id: "kyouchou", term: "強調", reading: "きょうちょう", meaning: "emphasis", level: 4 },
  
  { id: "zettai", term: "絶対", reading: "ぜったい", meaning: "absolute", level: 5 },
  { id: "soutai", term: "相対", reading: "そうたい", meaning: "relative", level: 5 },
  { id: "kyokutan", term: "極端", reading: "きょくたん", meaning: "extreme", level: 5 },
  { id: "chuusei", term: "中性", reading: "ちゅうせい", meaning: "neutral", level: 5 },
  { id: "chuuritsu", term: "中立", reading: "ちゅうりつ", meaning: "neutrality", level: 5 },
  { id: "koutei", term: "肯定", reading: "こうてい", meaning: "affirmation", level: 5 },
  { id: "hitei", term: "否定", reading: "ひてい", meaning: "negation/denial", level: 5 },
  { id: "hantai", term: "反対", reading: "はんたい", meaning: "opposition", level: 5 },
  { id: "gyaku", term: "逆", reading: "ぎゃく", meaning: "reverse/opposite", level: 5 },
  { id: "taihi", term: "対比", reading: "たいひ", meaning: "contrast", level: 5 },
];
