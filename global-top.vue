<!-- global-top.vue -->

<template>
  <header
    v-if="
      $slidev.themeConfigs.logoHeader && $slidev.nav.currentLayout !== 'cover'
    "
    class="absolute p-2 top-0 right-0 z-10"
  >
    <img
      :src="/logos/+ $slidev.themeConfigs.logoHeader"
      class="h-8 object-contain"
    />
  </header>
</template>