import type { KanaEntry } from "./japanese-data/kana";
import type { KanjiEntry } from "./japanese-data/n5-kanji";
import type { VocabEntry } from "./japanese-data/n5-vocab";

const DB_NAME = "japanese-trainer-content";
const DB_VERSION = 1;
const STORE_KANA = "kana";
const STORE_KANJI = "kanji";
const STORE_VOCAB = "vocab";

type StoreName = typeof STORE_KANA | typeof STORE_KANJI | typeof STORE_VOCAB;

type ContentRecord = {
  [STORE_KANA]: KanaEntry;
  [STORE_KANJI]: KanjiEntry;
  [STORE_VOCAB]: VocabEntry;
};

const isBrowser = () => typeof indexedDB !== "undefined";

const openDb = (): Promise<IDBDatabase | null> => {
  if (!isBrowser()) {
    return Promise.resolve(null);
  }
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_KANA)) {
        db.createObjectStore(STORE_KANA, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE_KANJI)) {
        db.createObjectStore(STORE_KANJI, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE_VOCAB)) {
        db.createObjectStore(STORE_VOCAB, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const seedStore = async <T extends StoreName>(
  storeName: T,
  items: ContentRecord[T][]
) => {
  const db = await openDb();
  if (!db) {
    return;
  }
  const tx = db.transaction(storeName, "readonly");
  const store = tx.objectStore(storeName);
  const count = await new Promise<number>((resolve) => {
    const req = store.count();
    req.onsuccess = () => resolve(req.result ?? 0);
    req.onerror = () => resolve(0);
  });
  if (count > 0) {
    return;
  }
  const writeTx = db.transaction(storeName, "readwrite");
  const writeStore = writeTx.objectStore(storeName);
  await Promise.all(
    items.map(
      (item) =>
        new Promise<void>((resolve) => {
          const req = writeStore.put(item);
          req.onsuccess = () => resolve();
          req.onerror = () => resolve();
        })
    )
  );
};

const readAll = async <T extends StoreName>(storeName: T) => {
  const db = await openDb();
  if (!db) {
    return [] as ContentRecord[T][];
  }
  return new Promise<ContentRecord[T][]>((resolve) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result as ContentRecord[T][]);
    req.onerror = () => resolve([] as ContentRecord[T][]);
  });
};

export const japaneseDb = {
  seedStore,
  readAll,
};
