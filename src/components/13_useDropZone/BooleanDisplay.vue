<template>
  <span :class="value ? 'text-green-500' : 'text-red-500'">
    {{ value ? 'true' : 'false' }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  value: boolean
}>()
</script>

