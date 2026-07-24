import type { StorageAdapter } from './StorageAdapter';

export class SessionStorageAdapter implements StorageAdapter {
  getItem<TValue>(key: string) {
    if (typeof window === 'undefined') {
      return null;
    }

    const value = window.sessionStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as TValue;
  }

  setItem<TValue>(key: string, value: TValue) {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.removeItem(key);
  }
}
