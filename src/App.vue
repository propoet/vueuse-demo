<script setup lang="ts">
import createGlobalState from "./components/01_createGlobalState/index.vue";
import createInjectionState from "./components/02_createInjectionState/index.vue";
import createSharedComposable from "./components/03_createSharedComposable/index.vue";
import provideAndInjectLocal from "./components/04_provideAndInjectLocal/index.vue";
import useAsyncState from "./components/05_useAsyncState/index.vue";
import useRefHistory from "./components/06_useRefHistory/index.vue";
</script>

<template>
  <useRefHistory />
  <useAsyncState />
  <provideAndInjectLocal />
  <createSharedComposable />
  <createInjectionState />
  <createGlobalState />
</template>

<style scoped></style>
