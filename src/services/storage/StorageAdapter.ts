export type StorageAdapter = {
  getItem: <TValue>(key: string) => TValue | null;
  setItem: <TValue>(key: string, value: TValue) => void;
  removeItem: (key: string) => void;
};
