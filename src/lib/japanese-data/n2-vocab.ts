export type VocabEntry = {
  id: string;
  term: string; // kanji/kana form
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n2Vocab: VocabEntry[] = [
  { id: "kisou", term: "競う", reading: "きそう", meaning: "to compete", level: 1 },
  { id: "tatakau", term: "戦う", reading: "たたかう", meaning: "to fight", level: 1 },
  { id: "mamoru", term: "守る", reading: "まもる", meaning: "to protect", level: 1 },
  { id: "semeru", term: "攻める", reading: "せめる", meaning: "to attack", level: 1 },
  { id: "katsu", term: "勝つ", reading: "かつ", meaning: "to win", level: 1 },
  { id: "makeru", term: "負ける", reading: "まける", meaning: "to lose", level: 1 },
  { id: "tasukeru", term: "助ける", reading: "たすける", meaning: "to help/rescue", level: 1 },
  { id: "sukuu", term: "救う", reading: "すくう", meaning: "to rescue/save", level: 1 },
  { id: "sonaeru", term: "備える", reading: "そなえる", meaning: "to prepare", level: 1 },
  { id: "fusegu", term: "防ぐ", reading: "ふせぐ", meaning: "to prevent", level: 1 },
  
  { id: "kenkyu", term: "研究", reading: "けんきゅう", meaning: "research", level: 2 },
  { id: "jikken", term: "実験", reading: "じっけん", meaning: "experiment", level: 2 },
  { id: "kansatsu", term: "観察", reading: "かんさつ", meaning: "observation", level: 2 },
  { id: "bunseki", term: "分析", reading: "ぶんせき", meaning: "analysis", level: 2 },
  { id: "chousa", term: "調査", reading: "ちょうさ", meaning: "survey/investigation", level: 2 },
  { id: "hakken", term: "発見", reading: "はっけん", meaning: "discovery", level: 2 },
  { id: "hatsumei", term: "発明", reading: "はつめい", meaning: "invention", level: 2 },
  { id: "souzou", term: "創造", reading: "そうぞう", meaning: "creation", level: 2 },
  { id: "shinpo", term: "進歩", reading: "しんぽ", meaning: "progress", level: 2 },
  { id: "hatten", term: "発展", reading: "はってん", meaning: "development", level: 2 },
  
  { id: "shuuchou", term: "主張", reading: "しゅうちょう", meaning: "assertion/claim", level: 3 },
  { id: "giron", term: "議論", reading: "ぎろん", meaning: "argument/discussion", level: 3 },
  { id: "ronri", term: "論理", reading: "ろんり", meaning: "logic", level: 3 },
  { id: "shoumei", term: "証明", reading: "しょうめい", meaning: "proof", level: 3 },
  { id: "hihan", term: "批判", reading: "ひはん", meaning: "criticism", level: 3 },
  { id: "hyouka", term: "評価", reading: "ひょうか", meaning: "evaluation", level: 3 },
  { id: "iken", term: "意見", reading: "いけん", meaning: "opinion", level: 3 },
  { id: "kangae", term: "考え", reading: "かんがえ", meaning: "thought/idea", level: 3 },
  { id: "teian", term: "提案", reading: "ていあん", meaning: "proposal", level: 3 },
  { id: "kaketsu", term: "可決", reading: "かけつ", meaning: "approval/passage", level: 3 },
  
  { id: "kanri", term: "管理", reading: "かんり", meaning: "management", level: 4 },
  { id: "unei", term: "運営", reading: "うんえい", meaning: "operation", level: 4 },
  { id: "soshiki", term: "組織", reading: "そしき", meaning: "organization", level: 4 },
  { id: "seido", term: "制度", reading: "せいど", meaning: "system", level: 4 },
  { id: "houshin", term: "方針", reading: "ほうしん", meaning: "policy", level: 4 },
  { id: "senryaku", term: "戦略", reading: "せんりゃく", meaning: "strategy", level: 4 },
  { id: "mokuhyou", term: "目標", reading: "もくひょう", meaning: "goal/target", level: 4 },
  { id: "jitsugen", term: "実現", reading: "じつげん", meaning: "realization", level: 4 },
  { id: "tassei", term: "達成", reading: "たっせい", meaning: "achievement", level: 4 },
  { id: "seika", term: "成果", reading: "せいか", meaning: "result/outcome", level: 4 },
  
  { id: "shourai", term: "将来", reading: "しょうらい", meaning: "future", level: 5 },
  { id: "kako", term: "過去", reading: "かこ", meaning: "past", level: 5 },
  { id: "genzai", term: "現在", reading: "げんざい", meaning: "present", level: 5 },
  { id: "jidai", term: "時代", reading: "じだい", meaning: "era/period", level: 5 },
  { id: "seiki", term: "世紀", reading: "せいき", meaning: "century", level: 5 },
  { id: "nendai", term: "年代", reading: "ねんだい", meaning: "age/era", level: 5 },
  { id: "kigen", term: "起源", reading: "きげん", meaning: "origin", level: 5 },
  { id: "keisei", term: "形成", reading: "けいせい", meaning: "formation", level: 5 },
  { id: "henka", term: "変化", reading: "へんか", meaning: "change", level: 5 },
  { id: "shinka", term: "進化", reading: "しんか", meaning: "evolution", level: 5 },
];
