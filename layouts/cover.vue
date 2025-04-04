<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../utils/layoutHelper'
const props = defineProps<{
  background?: string
  dimmed?: boolean
  logo?: string
  shape?: string
}>()

const style = computed(() => handleBackground(props.background, props.dimmed))
</script>

<template>
  <div class="slidev-layout cover grid" :style="style">
    <LayoutHeader />
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>