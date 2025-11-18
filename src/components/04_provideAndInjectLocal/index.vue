<template>
  <h1>04_provideAndInjectLocal 提供和注入局部状态</h1>
  {{ name }}
  <hr />
</template>

<script setup lang="ts">
import { provideLocal, injectLocal } from "@vueuse/core";

provideLocal("name", "John");
const name = injectLocal("name");
</script>
