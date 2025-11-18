<template>
  <h1>07_useLastChanged 使用最后更改</h1>
  <div>
    <input v-model="input" type="text" />
    <div>
      Last changed:
      <div>
        <span>timeAgo:{{ timeAgo }}</span>
        <br />
        <span>ms:{{ ms }}</span>
      </div>
    </div>
  </div>
  <hr />
</template>
<script setup lang="ts">
import { timestamp, useLastChanged, useTimeAgo } from "@vueuse/core";
import { shallowRef } from "vue";
const input = shallowRef("1");
const ms = useLastChanged(input, { initialValue: timestamp() - 1000 * 60 * 5 });
const timeAgo = useTimeAgo(ms);
</script>
