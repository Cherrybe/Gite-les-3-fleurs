<template>
  <div class="flex items-center space-x-3  pr-4 last:border-r-0">
    <component
      v-if="typeof icon !== 'string'"
      :is="icon"
      class="w-6 h-6 text-gray-500"
    />
    <img v-else :src="icon" alt="icon" class="w-6 h-6 text-gray-500" />
    <div>
      <p class="text-sm font-semibold">{{ title }}</p>
      <p v-if="typeof info === 'string'" class="text-sm text-gray-600">
        {{ info }}
      </p>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: [String, Object],
  title: String,
  info: [String, Object],
});
</script>
