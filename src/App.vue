<script setup lang="ts">
import createGlobalState from "./components/01_createGlobalState/index.vue";
import createInjectionState from "./components/02_createInjectionState/index.vue";
import createSharedComposable from "./components/03_createSharedComposable/index.vue";
import provideAndInjectLocal from "./components/04_provideAndInjectLocal/index.vue";
import useAsyncState from "./components/05_useAsyncState/index.vue";
import useRefHistory from "./components/06_useRefHistory/index.vue";
import useLastChanged from "./components/07_useLastChanged/index.vue";
import useStorage from "./components/08_UseStorage/index.vue";
import useManualRefHistory from "./components/09_useManualRefHistory/demo.vue";
import useActiveElement from "./components/10_useActiveElement/demo.vue";
import useDocumentVisibility from "./components/11_useDocumentVisibility/demo.vue";
import useDraggable from "./components/12_useDraggable/demo.vue";
import useDropZone from "./components/13_useDropZone/demo.vue";
import useElementBounding from "./components/14_useElementBounding/demo.vue";
import useElementSize from "./components/15_useElementSize/demo.vue";
import useElementVisibility from "./components/16_useElementVisibility/demo.vue";
import useIntersectionObserver from "./components/17_useIntersectionObserver/demo.vue";
import useMouseInElement from "./components/18_useMouseInElement/demo.vue";
import useMutationObserver from "./components/19_useMutationObserver/demo.vue";
import useParentElement from "./components/20_useParentElement/demo.vue";
import useResizeObserver from "./components/21_useResizeObserver/demo.vue";
import useWindowFocus from "./components/22_useWindowFocus/demo.vue";
import useWindowScroll from "./components/23_useWindowScroll/demo.vue";
import useWindowSize from "./components/24_useWindowSize/demo.vue";
import useCssVar from "./components/25_useCssVar/demo.vue";
import useImage from "./components/26_useImage/demo.vue";
</script>

<template>
  <useImage />
  <useWindowSize />
  <useWindowScroll />
  <useWindowFocus />
  <useResizeObserver />
  <!-- <useParentElement /> -->
  <useMutationObserver />
  <useMouseInElement />
  <useIntersectionObserver />
  <useElementVisibility />
  <useElementSize />
  <useElementBounding />
  <useDropZone />
  <!-- <useDraggable /> -->
  <useDocumentVisibility />
  <useActiveElement />
  <useManualRefHistory />
  <useStorage />
  <useLastChanged />
  <useRefHistory />
  <useAsyncState />
  <provideAndInjectLocal />
  <createSharedComposable />
  <createInjectionState />
  <createGlobalState />
</template>

<style scoped></style>
