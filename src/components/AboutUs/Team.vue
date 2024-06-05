<template>
  <div class="bg-[#F4F6FC] w-full py-[74px]">
    <div class="container">
      <h3 class="text-center font-semibold text-5xl text-deepBlue my-8">
        Meet our team
      </h3>
      <div class="grid grid-cols-4 gap-8">
        <div
          class="flex flex-col items-center bg-white p-4 py-8"
          v-for="(item, i) in team"
          :key="i"
        >
          <div class="">
            <img :src="item.img" width="168" height="168" alt="img" />
          </div>

          <h6 class="font-medium text-2xl text-[#1D2130]">
            {{ item.fullName }}
          </h6>
          <p class="font-normal text-base text-[#1D2130]/70">{{ item.job }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { team } from "../../data";
</script>
