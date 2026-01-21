type Mapping = Record<string, string>;

const BASIC_MAP: Mapping = {
  kyo: "きょ",
  kyu: "きゅ",
  kya: "きゃ",
  sho: "しょ",
  shu: "しゅ",
  sha: "しゃ",
  cho: "ちょ",
  chu: "ちゅ",
  cha: "ちゃ",
  nyo: "にょ",
  nyu: "にゅ",
  nya: "にゃ",
  hyo: "ひょ",
  hyu: "ひゅ",
  hya: "ひゃ",
  myo: "みょ",
  myu: "みゅ",
  mya: "みゃ",
  ryo: "りょ",
  ryu: "りゅ",
  rya: "りゃ",
  gyo: "ぎょ",
  gyu: "ぎゅ",
  gya: "ぎゃ",
  byo: "びょ",
  byu: "びゅ",
  bya: "びゃ",
  pyo: "ぴょ",
  pyu: "ぴゅ",
  pya: "ぴゃ",
  kka: "っか",
  kki: "っき",
  kku: "っく",
  kke: "っけ",
  kko: "っこ",
  ssa: "っさ",
  sshi: "っし",
  ssu: "っす",
  sse: "っせ",
  sso: "っそ",
  tta: "った",
  tti: "っち",
  ttu: "っつ",
  tte: "って",
  tto: "っと",
  ppa: "っぱ",
  ppi: "っぴ",
  ppu: "っぷ",
  ppe: "っぺ",
  ppo: "っぽ",
  bba: "っば",
  bbi: "っび",
  bbu: "っぶ",
  bbe: "っべ",
  bbo: "っぼ",
  // basic syllables
  k: "く",
  a: "あ",
  i: "い",
  u: "う",
  e: "え",
  o: "お",
  ka: "か",
  ki: "き",
  ku: "く",
  ke: "け",
  ko: "こ",
  sa: "さ",
  shi: "し",
  su: "す",
  se: "せ",
  so: "そ",
  ta: "た",
  chi: "ち",
  tsu: "つ",
  te: "て",
  to: "と",
  na: "な",
  ni: "に",
  nu: "ぬ",
  ne: "ね",
  no: "の",
  ha: "は",
  hi: "ひ",
  fu: "ふ",
  he: "へ",
  ho: "ほ",
  ma: "ま",
  mi: "み",
  mu: "む",
  me: "め",
  mo: "も",
  ya: "や",
  yu: "ゆ",
  yo: "よ",
  ra: "ら",
  ri: "り",
  ru: "る",
  re: "れ",
  ro: "ろ",
  wa: "わ",
  wo: "を",
  n: "ん",
  ga: "が",
  gi: "ぎ",
  gu: "ぐ",
  ge: "げ",
  go: "ご",
  za: "ざ",
  ji: "じ",
  zu: "ず",
  ze: "ぜ",
  zo: "ぞ",
  da: "だ",
  de: "で",
  do: "ど",
  ba: "ば",
  bi: "び",
  bu: "ぶ",
  be: "べ",
  bo: "ぼ",
  pa: "ぱ",
  pi: "ぴ",
  pu: "ぷ",
  pe: "ぺ",
  po: "ぽ",
};

const KATAKANA_OFFSET = 0x60; // Convert hiragana to katakana by offset.

const hiraganaToRomajiMap = Object.entries(BASIC_MAP).reduce<Record<string, string>>(
  (acc, [romaji, hira]) => {
    // prefer longer romaji mapping; keep first occurrence
    if (!acc[hira]) {
      acc[hira] = romaji;
    }
    return acc;
  },
  {}
);

const katakanaToRomajiMap: Record<string, string> = {};
Object.entries(hiraganaToRomajiMap).forEach(([hira, romaji]) => {
  const kata = String.fromCharCode(hira.charCodeAt(0) + KATAKANA_OFFSET);
  katakanaToRomajiMap[kata] = romaji;
});

export const toHiragana = (input: string): string => {
  const lower = input.toLowerCase();
  let result = "";
  let i = 0;
  while (i < lower.length) {
    const slice3 = lower.slice(i, i + 3);
    const slice2 = lower.slice(i, i + 2);
    const slice1 = lower.slice(i, i + 1);
    if (slice3 in BASIC_MAP) {
      result += BASIC_MAP[slice3];
      i += 3;
      continue;
    }
    if (slice2 in BASIC_MAP) {
      result += BASIC_MAP[slice2];
      i += 2;
      continue;
    }
    if (slice1 in BASIC_MAP) {
      result += BASIC_MAP[slice1];
      i += 1;
      continue;
    }
    // small tsu for double consonants (except n)
    const next = lower[i + 1];
    if (next && lower[i] === next && /[bcdfghjklmpqrstvwxyz]/.test(lower[i])) {
      result += "っ";
      i += 1;
      continue;
    }
    i += 1;
  }
  return result;
};

export const kanaToRomaji = (input: string): string => {
  let result = "";
  for (const char of input) {
    const romaji = hiraganaToRomajiMap[char] ?? katakanaToRomajiMap[char];
    if (romaji) {
      result += romaji;
    } else {
      result += char;
    }
  }
  return result;
};

export const normalizeAnswer = (input: string): string => {
  if (!input) {
    return "";
  }
  const trimmed = input.trim().toLowerCase();
  const kana = toHiragana(trimmed);
  const romaji = kanaToRomaji(kana);
  return romaji || trimmed;
};
