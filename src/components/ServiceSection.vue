<template>
  <section class="flex flex-col gap-6 px-20 py-10">
    <div class="max-w-3xl  space-y-4">
      <p class="text-[#E0A544] text-base font-bold">Why Choose Us</p>
      <h2 class="text-5xl text-[#504949]">
        We work to an extremely high standard of customer satisfaction
      </h2>
    </div>
    <ServiceList />
  </section>
</template>

<script setup lang="ts">
import ServiceList from "./ServiceList.vue";
</script>
