<template>
  <InfoBar />
  <NavBar />
  <main class="main-content">
    <HeroSection />
    <BookRoom class="absolute left-1/2 -translate-x-1/2 -mt-16" />
    <div class="mt-20">
      <AboutHotel />
    </div>
    <div class="mt-20">
      <HotelRooms />
    </div>
    <ServiceSection />
    <Testimonial />

    <div
      class="max-w-7xl h-[400px] bg-cover bg-center mx-auto flex justify-center items-center mt-12"
      :style="{ backgroundImage: `url(${ClubBanner})` }"
    ></div>
  </main>
  <FooterBar />
</template>

<script setup lang="ts">
import InfoBar from "../components/InfoBar.vue";
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import HeroSection from "../components/HeroSection.vue";
import BookRoom from "../components/BookRoom.vue";
import AboutHotel from "../components/AboutHotel.vue";
import HotelRooms from "../components/HotelRooms.vue";
import ServiceSection from "../components/ServiceSection.vue";
import Testimonial from "../components/Testimonial.vue";
import ClubBanner from "../assets/images/club banner.png";
</script>
