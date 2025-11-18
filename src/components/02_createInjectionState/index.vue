<template>
  <h1>02_createInjectionState 创建注入状态管理</h1>
  <div>
    <RootComponent>
      <ButtonComponent />
      <CounterComponent />
    </RootComponent>
  </div>
  <hr />
</template>
<script lang="ts" setup>
import RootComponent from "./demo/RootComponent.vue";
import CounterComponent from "./demo/CounterComponent.vue";
import ButtonComponent from "./demo/ButtonComponent.vue";
</script>
