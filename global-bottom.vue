<!-- global-bottom.vue -->

<template>
    <footer
      v-if="$slidev.themeConfigs.footerLeft || $slidev.themeConfigs.footerRight"
      class="absolute bottom-0 p-2 mt-auto flex items-center w-full text-0.3em font-thin text-primary dark:text-white z-10"
    >
        <p>{{ $slidev.themeConfigs.footerLeft }}</p>
        <p class="ml-auto">{{ $slidev.themeConfigs.footerRight }}</p>
    </footer>
  </template>