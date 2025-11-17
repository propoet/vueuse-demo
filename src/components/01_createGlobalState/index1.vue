<template>
  <p>Count: {{ count }}</p>
</template>
<script setup lang="ts">
import { watch } from "vue";
import { useGlobalState } from "./utils";
const { count } = useGlobalState();
watch(count, (newVal) => {
  console.log("count changed", newVal);
});
</script>
