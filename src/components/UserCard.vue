<template>
  <div class="flex items-center border border-[#020A2B]/[0.13]">
    <!-- user image -->
     <img :src="img" alt="User" class="w-full h-90 mr-4 object-cover"/>

     <!-- user details -->
      <div class="w-[650px]">
        <h3 class="text-3xl text-[#504949]">
          {{ name}}
        </h3>
        <p class="text-base text-[#D68806] mb-4">{{job}}</p>
        <p class="text-base text-[#504949]">{{description}}</p>
      </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  job: { type: String, required: true },
  description: { type: String, required: true }
})

</script>
