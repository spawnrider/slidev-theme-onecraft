<!-- global-top.vue -->
<script setup lang="ts">
  import { resolveAssetUrl } from './utils/layoutHelper';
  const themeConfigs = $slidev.themeConfigs;
  const logo = resolveAssetUrl(themeConfigs.logoHeader);
</script>

<template>
  <header
    v-if="
      logo && $slidev.nav.currentLayout !== 'cover'
    "
    class="absolute p-2 top-0 right-0 z-10"
  >
    <img
      :src="$slidev.themeConfigs.logoHeader"
      class="h-8 object-contain"
    />
  </header>
</template>