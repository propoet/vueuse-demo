<script lang="ts" setup>
import { useResizeObserver } from "@vueuse/core";
import { shallowRef, useTemplateRef } from "vue";

const el = useTemplateRef("el");
const text = shallowRef("");

useResizeObserver(el, ([entry]) => {
  const { width, height } = entry?.contentRect || { width: 0, height: 0 };
  text.value = `width: ${width}\nheight: ${height}`;
});
</script>
<template>
  <h1>21_useResizeObserver 使用ResizeObserver</h1>
  <div class="text-center">
    <textarea ref="el" class="resizer" disabled v-text="text" />
  </div>
  <hr />
</template>
