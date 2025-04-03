<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 ">
    <div
      v-for="(items, index) in serviceCards"
      :key="index"
      class=" text-center"
    >
      <img :src="items.icon" alt="" class="w-16 h-16 mx-auto mb-6" />
      <h3 class="text-xl font-semibold text-[#504949] mb-4">
        {{ items.title }}
      </h3>
      <p class="text-[#504949] text-base">{{ items.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Intergrity from "../assets/icons/intergrity.svg";
import Service from "../assets/images/fullService.png";
import Partners from "../assets/icons/partners.svg";
import Value from "../assets/icons/value.svg";
import Excellence from "../assets/icons/excellence.svg";

const serviceCards = [
  {
    title: "Full Service",
    icon: Service,
    description:
      "Unsure where to start? We handle everything for your perfect retreat.",
  },
  {
    title: "Deliver Value",
    icon: Value,
    description:
      "Value means different things to everyone—we promise to deliver the best for you.",
  },
  {
    title: "Partners",
    icon: Partners,
    description:
      "In every interaction, we see our stakeholders as partners in creating beauty.",
  },
  {
    title: "Integrity",
    icon: Intergrity,
    description:
      "Drives our success, forming the foundation of strong relationship and mindful decisions.",
  },
  {
    title: "Excellence",
    icon: Excellence,
    description:
      "We uphold the highest standards, ensuring every detail reflects quality and care.",
  },
];
</script>
