<template>
  <div class="flex items-center justify-between bg-white shadow-md w-[1140px] h-[133px]">
    <div class="p-9 flex justify-between w-full">
      <BookRoomItem :icon="CalendarIcon" title="Check In">
      <CalendarInput />
    </BookRoomItem>

    <BookRoomItem :icon="CalendarIcon" title="Check Out">
      <CalendarInput />
    </BookRoomItem>

    <BookRoomItem :icon="UserIcon" title="Guests" info="2 Persons" />

    <BookRoomItem :icon="BedIcon" title="Beds">
      <div class="flex items-center space-x-3 p-2 pr-0">
        <BaseButton variant="icon" @click="decreaseBeds" class="cursor-pointer">-</BaseButton>
        <span>{{ beds }}</span>
        <BaseButton variant="icon" @click="increaseBeds" class="cursor-pointer">+</BaseButton>
      </div>
    </BookRoomItem>

    <BookRoomItem :icon="BathIcon" title="Baths">
      <div class="flex items-center space-x-3 p-2 pr-0">
        <BaseButton variant="icon" @click="decreaseBaths" class="cursor-pointer">-</BaseButton>
        <span>{{ baths }}</span>
        <BaseButton variant="icon" @click="increaseBaths" class="cursor-pointer">+</BaseButton>
      </div>
    </BookRoomItem>
    </div>

    <BaseButton class="h-full w-[205px]">Search</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BookRoomItem from "./BookRoomItem.vue";
import BaseButton from "./Button.vue";
import CalendarInput from "./CalendarInput.vue";
import CalendarIcon from "../assets/icons/calendar.svg";
import BedIcon from "../assets/icons/bed.svg";
import BathIcon from "../assets/icons/bath.svg";
import UserIcon from "../assets/icons/people.svg";

// Reactive state for beds and baths
const beds = ref(1);
const baths = ref(1);

const increaseBeds = () => beds.value++;
const decreaseBeds = () => {
  if (beds.value > 1) beds.value--;
};

const increaseBaths = () => baths.value++;
const decreaseBaths = () => {
  if (baths.value > 1) baths.value--;
};
</script>
