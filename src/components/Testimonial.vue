<template>
  <section class="w-full py-8 px-10 bg-[#F9FAFF]">
    <div class="container mx-auto max-w-7xl">
      <div class="flex flex-col gap-8">
        <div class="text-center">
          <h2 class="text-5xl text-[#504949]">
            Guest Experiences That Speak for Themselves
          </h2>
        </div>

        <!-- Testimonials loop -->
        <div class="flex gap-8 items-center justify-center space-x-4">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="w-full"
          >
            <UserCard
              :img="testimonial.image"
              :name="testimonial.name"
              :job="testimonial.role"
              :description="testimonial.content"
            />
          </div>
        </div>

        <div class="flex gap-2 justify-center">
          <div
            class="bg-[#020A2B]/[0.13] size-1 rounded-full p-1 cursor-pointer"
          ></div>
          <div
            class="bg-[#020A2B]/[0.13] size-1 rounded-full p-1 cursor-pointer"
          ></div>
          <div
            class="bg-[#020A2B]/[0.13] size-1 rounded-full p-1 cursor-pointer"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UserCard from "./UserCard.vue";
import User1 from "../assets/images/1.jpg";
import User3 from "../assets/images/3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Angela Blankson",
    role: "Travel Blogger",
    image: User1,
    content:
      "As a travel blogger, I've stayed in countless hotels, but this one truly stands out. The ambiance, the comfort, and the impeccable service made my stay unforgettable. The staff went above and beyond to ensure I had a fantastic experience. Highly recommended!",
  },
  {
    id: 2,
    name: "Daniel Dupont",
    role: "UI/UX Designer",
    image: User3,
    content:
      "From the moment I arrived, I was blown away by the elegance and warmth of this place. The rooms were beautifully designed, the service was top-notch, and every detail felt carefully curated. Whether relaxing by the pool or enjoying a gourmet meal, every experience was pure perfection. I can't wait to come back!",
  },
];
</script>
