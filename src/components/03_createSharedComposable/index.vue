<template>
  <div>
    <h1>03_createSharedComposable 创建共享组合式函数</h1>
    <p style="color: #666; font-size: 14px; margin-bottom: 20px">
      💡 提示：移动鼠标，观察两个组件显示相同的坐标值（共享状态）
    </p>
    <div style="display: flex; gap: 20px">
      <ComA />
      <ComB />
    </div>
    <hr />
  </div>
</template>
<script lang="ts" setup>
import ComA from "./demo/ComA.vue";
import ComB from "./demo/ComB.vue";
</script>
