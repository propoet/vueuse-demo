<template>
  <h1>08_UseStorage 使用存储</h1>
  <p>useStorageAsync 使用异步存储， 可以使用promise</p>
  <div>
    <input type="text" v-model="state.name" />
    <input type="text" v-model="state.color" />
    <input type="text" v-model="state.size" />
    <input
      v-model.number="state.count"
      type="range"
      min="0"
      step="0.01"
      max="1000"
    />
    <pre>{{ text }}</pre>
  </div>
  <hr />
</template>
<script setup lang="ts">
import { useStorage, reactify } from "@vueuse/core";
import YAML from "yaml";
const stringify = reactify((input: any) =>
  YAML.stringify(
    input,
    (k, v) => {
      if (typeof v === "function") {
        return undefined;
      }
      return v;
    },
    {
      singleQuote: true,
      flowCollectionPadding: false,
    }
  )
);

const theDefault = {
  name: "banana",
  color: "yellow",
  size: "Medium",
  count: 0,
};
// 存储到 sessionStorage 中, 默认存储到 localStorage 中
const state = useStorage("banana-state", theDefault, sessionStorage);
const text = stringify(state);
</script>
