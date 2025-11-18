import { createSharedComposable,useMouse } from "@vueuse/core";

export const useShareMouse = createSharedComposable(useMouse);