<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll({ behavior: "smooth" });
</script>
<template>
  <h1>23_useWindowScroll 使用窗口滚动</h1>
  <div>X: {{ x }}</div>
  <div>Y: {{ y }}</div>
  <hr />
</template>
