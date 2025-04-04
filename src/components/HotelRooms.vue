<template>
  <section class="w-full py-8 px-11 bg-[#12172b]">
    <div class="flex flex-col items-center max-w-[1353px] mx-auto">
      <div class="text-center mb-12 space-y-4">
        <p class="text-xl text-white">THE BEST FOR YOUR FAMILY</p>
        <h2 class="text-5xl text-white">Our Room</h2>
      </div>

      <div class="flex flex-row gap-6 w-full">
        <Card
          v-for="room in featuredRooms"
          :key="room.id"
          class="w-full relative rounded-none border-0 overflow-hidden bg-cover bg-center group"
          :style="{ backgroundImage: 'url(' + room.image + ')' }"
        >
          <CardContent class="p-0 h-[576px]">
            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 bg-black/50 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
            >
              <div class="bg-[#110809cc] absolute bottom-0 p-4 rounded-b-r-xl">
                <h4 class="text-xl text-white">{{ room.title }}</h4>
                <p
                  class="text-md text-[#d2d2ff] mb-2 underline underline-offset-4"
                >
                  {{ room.subtitle }}
                </p>
                <p class="text-sm text-white">{{ room.description }}</p>
              </div>
            </div>

            <!-- Bottom Title (fallback when not hovered) -->
            <div
              class="absolute bottom-0 w-full h-[51px] bg-[#110809cc] group-hover:hidden"
            >
              <div class="p-3 px-5">
                <h4 class="font-normal text-white text-xl">
                  {{ room.title }}
                </h4>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import { CardContent } from "./Card.vue";
import lavendar from "../assets/images/lavendar.jpg";
import rose from "../assets/images/rose.png";
import cosmos from "../assets/images/cosmos.jpg";

const featuredRooms = [
  {
    id: 1,
    title: "Lavendar Room",
    subtitle: "Peaceful Garden View",
    image: lavendar,
    description:
      "Experience tranquillity in our cozy wooden suite, featuring traditional décor, warm tones, and a private balcony with a serene garden view.",
  },
  {
    id: 2,
    title: "Rose Room",
    subtitle: "Premium Jungle Escape",
    image: rose,
    description:
      "Indulge in luxury with our elegant canopy bed, handcrafted furnishings, and floor-to-ceiling windows that immerse you in nature’s beauty.",
  },
  {
    id: 3,
    title: "Cosmos Suite",
    subtitle: "Elegant City Comfort",
    image: cosmos,
    description:
      "A sophisticated blend of comfort and style, this suite boasts high-end finishes, spacious interior, and a peaceful ambiance for a perfect stay.",
  },
];
</script>
