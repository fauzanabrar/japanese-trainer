export type KanjiEntry = {
  id: string;
  kanji: string;
  reading: string; // hiragana
  meaning: string;
  level: number;
};

export const n2Kanji: KanjiEntry[] = [
  { id: "seru", kanji: "競", reading: "せる", meaning: "compete", level: 1 },
  { id: "tatakau", kanji: "戦", reading: "たたかう", meaning: "fight/war", level: 1 },
  { id: "mamoru", kanji: "守", reading: "まもる", meaning: "protect", level: 1 },
  { id: "semeru", kanji: "攻", reading: "せめる", meaning: "attack", level: 1 },
  { id: "katsu", kanji: "勝", reading: "かつ", meaning: "win", level: 1 },
  { id: "makeru", kanji: "負", reading: "まける", meaning: "lose", level: 1 },
  { id: "tasukeru", kanji: "助", reading: "たすける", meaning: "help/rescue", level: 1 },
  { id: "sukuu", kanji: "救", reading: "すくう", meaning: "rescue/save", level: 1 },
  { id: "sonaeru", kanji: "備", reading: "そなえる", meaning: "prepare", level: 1 },
  { id: "fusegu", kanji: "防", reading: "ふせぐ", meaning: "prevent", level: 1 },
  
  { id: "kenkyu", kanji: "研究", reading: "けんきゅう", meaning: "research", level: 2 },
  { id: "jikken", kanji: "実験", reading: "じっけん", meaning: "experiment", level: 2 },
  { id: "kansatsu", kanji: "観察", reading: "かんさつ", meaning: "observation", level: 2 },
  { id: "bunseki", kanji: "分析", reading: "ぶんせき", meaning: "analysis", level: 2 },
  { id: "chousa", kanji: "調査", reading: "ちょうさ", meaning: "survey/investigation", level: 2 },
  { id: "hakken", kanji: "発見", reading: "はっけん", meaning: "discovery", level: 2 },
  { id: "hatsumei", kanji: "発明", reading: "はつめい", meaning: "invention", level: 2 },
  { id: "souhou", kanji: "創", reading: "そうほう", meaning: "creation", level: 2 },
  { id: "shinpo", kanji: "進歩", reading: "しんぽ", meaning: "progress", level: 2 },
  { id: "hatten", kanji: "発展", reading: "はってん", meaning: "development", level: 2 },
  
  { id: "shuuchou", kanji: "主張", reading: "しゅうちょう", meaning: "assertion/claim", level: 3 },
  { id: "giron", kanji: "議論", reading: "ぎろん", meaning: "argument/discussion", level: 3 },
  { id: "ronri", kanji: "論理", reading: "ろんり", meaning: "logic", level: 3 },
  { id: "shoumei", kanji: "証明", reading: "しょうめい", meaning: "proof", level: 3 },
  { id: "hihan", kanji: "批判", reading: "ひはん", meaning: "criticism", level: 3 },
  { id: "hyouka", kanji: "評価", reading: "ひょうか", meaning: "evaluation", level: 3 },
  { id: "iken", kanji: "意見", reading: "いけん", meaning: "opinion", level: 3 },
  { id: "kangae", kanji: "考", reading: "かんがえ", meaning: "thought/idea", level: 3 },
  { id: "teian", kanji: "提案", reading: "ていあん", meaning: "proposal", level: 3 },
  { id: "kaketsu", kanji: "可決", reading: "かけつ", meaning: "approval/passage", level: 3 },
  
  { id: "kanri", kanji: "管理", reading: "かんり", meaning: "management", level: 4 },
  { id: "unei", kanji: "運営", reading: "うんえい", meaning: "operation", level: 4 },
  { id: "soshiki", kanji: "組織", reading: "そしき", meaning: "organization", level: 4 },
  { id: "seido", kanji: "制度", reading: "せいど", meaning: "system", level: 4 },
  { id: "houshin", kanji: "方針", reading: "ほうしん", meaning: "policy", level: 4 },
  { id: "senryaku", kanji: "戦略", reading: "せんりゃく", meaning: "strategy", level: 4 },
  { id: "mokuhyou", kanji: "目標", reading: "もくひょう", meaning: "goal/target", level: 4 },
  { id: "jitsugen", kanji: "実現", reading: "じつげん", meaning: "realization", level: 4 },
  { id: "tassei", kanji: "達成", reading: "たっせい", meaning: "achievement", level: 4 },
  { id: "seika", kanji: "成果", reading: "せいか", meaning: "result/outcome", level: 4 },
  
  { id: "shourai", kanji: "将来", reading: "しょうらい", meaning: "future", level: 5 },
  { id: "kako", kanji: "過去", reading: "かこ", meaning: "past", level: 5 },
  { id: "genzai", kanji: "現在", reading: "げんざい", meaning: "present", level: 5 },
  { id: "jidai", kanji: "時代", reading: "じだい", meaning: "era/period", level: 5 },
  { id: "seiki", kanji: "世紀", reading: "せいき", meaning: "century", level: 5 },
  { id: "nendai", kanji: "年代", reading: "ねんだい", meaning: "age/era", level: 5 },
  { id: "kigen", kanji: "起源", reading: "きげん", meaning: "origin", level: 5 },
  { id: "keisei", kanji: "形成", reading: "けいせい", meaning: "formation", level: 5 },
  { id: "henka", kanji: "変化", reading: "へんか", meaning: "change", level: 5 },
  { id: "shinka", kanji: "進化", reading: "しんか", meaning: "evolution", level: 5 },
];
