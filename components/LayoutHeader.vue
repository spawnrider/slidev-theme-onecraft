<script setup lang="ts">
const props = $frontmatter;
</script>

<template>
  <header v-if="
    props.logo
  " class="absolute p-4 top-0 right-0">
    <img :src="props.logo
      " class="w-32 object-contain" />
  </header>
</template>