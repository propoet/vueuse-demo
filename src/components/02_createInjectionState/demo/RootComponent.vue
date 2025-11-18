<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { useProvideCounterStore } from "./useCounterStore";
useProvideCounterStore(0);
</script>