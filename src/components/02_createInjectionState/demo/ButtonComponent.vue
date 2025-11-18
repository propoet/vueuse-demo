<template>
  <button @click="increment">+</button>
</template>
<script setup lang="ts">
import { useCounterStoreOrThrow } from "./useCounterStore";
const { increment } = useCounterStoreOrThrow();
</script>
