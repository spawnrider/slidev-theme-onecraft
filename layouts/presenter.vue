<template>
  <div class="slidev-layout relative">
    <div class="flex items-center">
      <div class="w-1/2">
        <slot></slot>
      </div>
      <figure class="w-1/2 relative">
        <AsGraphic
          type="donut"
          absolute
          top-2
          left-0
          text-secondary-200
        />
        <img
          :src="$attrs.presenterImage || 'https://anonymous-animals.azurewebsites.net/animal/penguin'"
          class="bg-gray-400 relative important-rounded-full object-cover h-80 w-80 border border-8 border-secondary-400 z-10"
        />
      </figure>
    </div>
  </div>
</template>
