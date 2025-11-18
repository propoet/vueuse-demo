<template>
  <h1>06_useRefHistory 使用引用历史</h1>
  <div>count: {{ count }}</div>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="undo" :disabled="!canUndo">撤销 undo</button>
  <button @click="redo" :disabled="!canRedo">重做 Redo</button>
  <hr />
  <h2>History</h2>
  <ul>
    <li v-for="item in history" :key="item.timestamp">
      {{ format(item.timestamp) }}: {{ item.snapshot }}
    </li>
  </ul>
  <hr />
</template>
<script setup lang="ts">
import { useRefHistory, formatDate } from "@vueuse/core";
import { shallowRef } from "vue";

function format(ts: number) {
  return formatDate(new Date(ts), "YYYY-MM-DD HH:mm:ss");
}
const count = shallowRef(0);

function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
const { history, undo, redo, canUndo, canRedo } = useRefHistory(count, {
  capacity: 10,
});
</script>
