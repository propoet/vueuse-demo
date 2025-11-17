import { createGlobalState, useLocalStorage } from "@vueuse/core";
import { shallowRef } from "vue";
export const useGlobalState = createGlobalState(() => {
  const count = shallowRef(0);
  return {
    count,
  };
});
export const useGlobalStateWithLocalStorage = createGlobalState(() => {
  return useLocalStorage("vueuse-local-storage", "initialValue");
});
