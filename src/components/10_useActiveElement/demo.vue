<script lang="ts" setup>
import { useActiveElement } from "@vueuse/core";
import { computed } from "vue";
const activeElement = useActiveElement();
const key = computed(() => {
  // console.log(activeElement.value);
  return activeElement.value?.dataset?.id || null;
});
</script>
<template>
  <h1>10_useActiveElement 使用活动元素</h1>
  <input v-for="i in 10" :key="i" :data-id="i" type="text" />
  <div>Key: {{ key }}</div>
  <hr />
</template>
