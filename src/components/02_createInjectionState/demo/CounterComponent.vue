<template>
  <p>Count: {{ count }}</p>
  <p>Double: {{ double }}</p>
</template>
<script setup lang="ts">
import { useCounterStoreOrThrow } from "./useCounterStore";
const { count, double } = useCounterStoreOrThrow();
</script>
