<template>
  <VueDatePicker
    v-model="selectedDate"
    :format="formatDate"
    :enable-time-picker="false"
    hide-input-icon
    :ui="{
      input:
        'border-none focus:outline-none focus:ring-2 focus:ring-[#D68B06]',
      menu: 'shadow-lg rounded-lg',
    }"
    class="custom-datepicker"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const selectedDate = ref(null);

const formatDate = (date: string | Date) => {
  return date ? new Date(date).toLocaleDateString("en-GB") : "";
};
</script>
