<template>
  <div
    :style="{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    }"
    class="text-white"
  >
    <h1 class="text-[5.625rem]">Explore! Discover! Live!</h1>
    <p class="text-[2rem]">The best hotel for your family</p>
  </div>
</template>

<script setup lang="ts">
import heroImage from "../assets/images/hero.png";
</script>
