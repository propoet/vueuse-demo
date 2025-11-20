<script lang="ts" setup>
import { useWindowFocus } from "@vueuse/core";
import { shallowRef, watch } from "vue";

const startMessage = "click somemessage outside of the document to unfocus";
const message = shallowRef(startMessage);
const focused = useWindowFocus();
watch(focused, (isFocused) => {
  if (isFocused) message.value = startMessage;
  else message.value = "ℹ Tab is unfocused";
});
</script>
<template>
  <h1>22_useWindowFocus 使用窗口焦点</h1>
  <div>{{ message }}</div>
  <hr />
</template>
