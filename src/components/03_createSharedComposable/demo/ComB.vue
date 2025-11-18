<template>
  <div
    style="
      padding: 20px;
      background-color: #35495e;
      color: white;
      border-radius: 8px;
      margin: 10px;
    "
  >
    <h3>组件 B</h3>
    <p>鼠标 X 坐标: {{ x }}</p>
    <p>鼠标 Y 坐标: {{ y }}</p>
    <p><small>共享状态：组件 A 和 B 共享同一个鼠标位置</small></p>
  </div>
</template>
<script lang="ts" setup>
import { useShareMouse } from "./useShareMouse";
const { x, y } = useShareMouse();
</script>
