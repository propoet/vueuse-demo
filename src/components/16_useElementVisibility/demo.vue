<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import BooleanDisplay from '../BooleanDisplay.vue'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const isVisible = useElementVisibility(el)
</script>

<template>
    <h1>16_useElementVisibility 使用元素可见性</h1>
    <div>
        <div class="mb-2">
            Info on the right bottom corner
        </div>
        <div ref="el" class="max-w-100 relative area bg-white dark:bg-gray-800 shadow-lg z-60">
            Target Element (scroll down)
        </div>
    </div>
    <div class=" position-fixed bottom-0 right-0 m-3 area shadow-lg">
        Element 16
        <BooleanDisplay :value="isVisible" true="inside" false="outside" class="font-bold" />
        the viewport
    </div>
    <hr />
</template>