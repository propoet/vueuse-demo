<script lang="ts" setup>
import { useMutationObserver } from "@vueuse/core";
import { ref as deepRef, shallowRef, useTemplateRef } from "vue";

const el = useTemplateRef("el");
const messages = deepRef<string[]>([]);
const className = shallowRef({});
const style = shallowRef({});

useMutationObserver(
  el,
  (mutations) => {
    const mutation = mutations[0];
    if (!mutation) {
      return;
    }
    // console.log(mutation);

    messages.value.push(mutation.attributeName!);
  },
  { attributes: true }
);

setTimeout(() => {
  className.value = {
    test: true,
    test2: true,
  };
}, 1000);
setTimeout(() => {
  style.value = {
    color: "red",
  };
}, 1550);
</script>
<template>
  <h1>19_useMutationObserver 使用MutationObserver</h1>
  <p>
    听 DOM 结构变化的原生
    API。注册后它会在目标节点及其子树里有如下变化时异步回调：节点增删、属性变更、文本内容更新等，用于实现
    DOM 变化感知、动态绑定、性能优化的监听
  </p>
  <div class="text-center">
    <div ref="el" :class="className" :style="style">
      <div v-for="(text, index) of messages" :key="index">
        Mutation Attribute: {{ text }}
      </div>
    </div>
  </div>
  <hr />
</template>
