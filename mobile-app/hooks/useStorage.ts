import * as SecureStore from "expo-secure-store";
import { useCallback } from "react";

type UseSecureStoreReturn = {
  save: (key: string, value: string) => Promise<void>;
  get: (key: string) => Promise<string>;
};

export function useSecureStore(): UseSecureStoreReturn {
  const save = useCallback(async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }, []);

  const get = useCallback(async function get(key: string) {
    const value = await SecureStore.getItemAsync(key);
    return value;
  }, []);

  return {
    save,
    get,
  };
}