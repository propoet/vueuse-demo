<template>
  <h1>01_createGlobalState 创建全局状态管理</h1>
  <button @click="increment">Increment</button>
  <p>Count: {{ count }}</p>
  <index1 />

  <p>持久化 存储到本地存储中的值 state: {{ state }}</p>
  <p>页面接收后 解包 存储到本地存储中的值 state2: {{ state2 }}</p>
  <p>页面接收后 引用赋值 存储到本地存储中的值 state3: {{ state3 }}</p>
  <hr />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useGlobalState, useGlobalStateWithLocalStorage } from "./utils";
import index1 from "./index1.vue";
const { count } = useGlobalState();
const state = useGlobalStateWithLocalStorage();
// 解包 state.value，得到原始值，然后创建新的 ref
// state2 和 state 是两个独立的响应式对象
// 修改 state2，state 不会变化
const state2 = ref(state.value);
// state3 和 state 指向同一个 ref 对象
// 修改任意一个，另一个也会变化
// 这是引用赋值，不是拷贝
// 修改 state3，state 也会变化
const state3 = ref(state);
const increment = () => {
  count.value++;
  state2.value = state2.value + 1;
  state3.value = state3.value + 2;
};
</script>
