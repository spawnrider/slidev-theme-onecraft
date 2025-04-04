<script setup lang="ts">
import { resolveAssetUrl } from '../utils/layoutHelper'
const props = $frontmatter;
const logo = resolveAssetUrl(props.logo);
</script>

<template>
  <header v-if="
    props.logo
  " class="absolute p-4 top-0 right-0">
    <img :src="logo" class="w-32 object-contain" />
  </header>
</template>