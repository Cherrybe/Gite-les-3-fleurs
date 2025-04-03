<template>
  <div :class="cn('rounded-xl border bg-card text-card-foreground shadow', className)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue';
import { cn } from '../lib/utils';

interface Props {
  className?: string;
}

defineProps<Props>();
</script>

<script lang="ts">
export const CardContent = defineComponent({
  name: 'CardContent',
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn('', props.className)
    }, slots.default?.());
  }
});
</script>