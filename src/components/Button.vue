<template>
  <button
    :class="[
      'font-semibold transition-all duration-200',
      variant === 'primary' ? 'bg-[#D68806] text-white' : '',
      variant === 'icon' ? 'bg-transparent text-gray-700 hover:text-black' : '',
      sizeClass,
      fullWidth ? 'w-full' : ''
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits(["click"]);
defineProps({
  fullWidth: Boolean,
  variant: {
    type: String,
    default: "primary", // "primary" (default), "icon" (for +/- buttons)
  },
  size: {
    type: String,
    default: "md",
  },
});

const sizeClass = computed(() => ({
  md: "h-10 text-base",
  lg: "h-12 text-lg",
  sm: "h-8 text-sm",
}));

const handleClick = (event: Event) => {
  event.stopPropagation(); // ✅ Stops event here
  event.preventDefault();  // ✅ Prevents default action
  emit("click");
};
</script>
