<template>
  <h1>05_useAsyncState 使用异步状态</h1>
  <div>
    <div>Ready: {{ isReady.toString() }}</div>

    <div>Loading: {{ isLoading.toString() }}</div>
    <pre lang="json" class="ml-2">{{ stringify(state) }}</pre>
    <button @click="() => execute(2000, { id: 2 })">Execute</button>
  </div>
  <hr />
</template>
<script lang="ts" setup>
import { useAsyncState, reactify } from "@vueuse/core";
import YAML from "yaml";
import axios from "axios";

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
//isReady 表示是否至少成功执行过一次异步操作  一旦为 true，永不重置
//isLoading 表示是否正在执行异步操作
//state 表示异步操作的结果
//execute 表示执行异步操作
//delay 表示延迟时间
//resetOnExecute 表示是否在执行时重置状态
// 自动管理所有状态 自动更新响应式数据  支持参数化查询
const { isLoading, state, isReady, execute } = useAsyncState(
  (args) => {
    const id = args?.id || 1;
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((t) => t.data);
  },
  {},
  {
    delay: 2000,
    resetOnExecute: false, // 是否在执行时重置状态
    immediate: false, // 是否立即执行
  }
);
</script>
