<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
</script>
<template>
  <h1>24_useWindowSize 使用窗口大小</h1>
  <div>Width: {{ width }}</div>
  <div>Height: {{ height }}</div>
  <hr />
</template>
