<template>
  <div
    :class="cn('rounded-xl border bg-card text-card-foreground shadow', className)"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative"
  >
    <slot />
    <!-- Hover content, appears when hovering over the card -->
    <div
      class="absolute inset-0 bg-[#110809cc] flex items-center justify-center transition-all duration-500"
      :class="{'opacity-100': isHovered, 'opacity-0': !isHovered}"
    >
      <div class="text-white text-center p-4">
        <slot name="hover-content" />
      </div>
    </div>

    <!-- Expanding bottom area -->
    <div
      class="absolute bottom-0 w-full transition-all duration-500"
      :class="{'h-[200px]': isHovered, 'h-[51px]': !isHovered}"
      style="background-color: #110809cc;"
    >
      <div class="p-3 px-5">
        <p class="font-normal text-white text-xl">
          <slot name="room-title" />
        </p>
      </div>
      <div v-if="isHovered" class="p-4 text-white">
        <slot name="room-description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '../lib/utils';

const isHovered = ref(false);
interface Props {
  className?: string;
}

defineProps<Props>();
</script>
