<script setup lang="ts">
import createGlobalState from "./components/01_createGlobalState/index.vue";
import createInjectionState from "./components/02_createInjectionState/index.vue";
import createSharedComposable from "./components/03_createSharedComposable/index.vue";
</script>

<template>
  <createGlobalState />
  <createInjectionState />
  <createSharedComposable />
</template>

<style scoped></style>
