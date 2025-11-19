<script setup lang="ts">
import { reactify, useElementSize } from '@vueuse/core'
import { reactive, useTemplateRef } from 'vue'
import YAML from 'yaml'

const stringify = reactify(
    (input: any) => YAML.stringify(input, (k, v) => {
        if (typeof v === 'function') {
            return undefined
        }
        return v
    }, {
        singleQuote: true,
        flowCollectionPadding: false,
    }),
)

const el = useTemplateRef('el')
const size = reactive(
    useElementSize(
        el,
        { width: 0, height: 0 },
        { box: 'border-box' },
    ),
)
const text = stringify(size)
</script>

<template>
    <h1>15_useElementSize 使用元素大小</h1>
    <div class="mb-2">
        Resize the box to see changes
    </div>
    <textarea ref="el" class="resizer" v-text="text" />
    <hr />
</template>