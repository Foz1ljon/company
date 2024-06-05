<template>
  <div>
    <div class="container">
      <div class="bg-[#F4F5F5] w-full pt-10 mb-20">
        <div class="flex justify-center gap-5">
          <div class="w-[515px]" v-for="(item, i) in cards2" :key="i">
            <h3 class="font-semibold text-[38px] text-deepBlue">
              {{ item.title }}
            </h3>
            <p class="font-normal text-base text-deepBlue/70">
              {{ item.description }}
            </p>
          </div>
        </div>
      <img src="/img/bg-about.png" alt="bg-aboutus" />

      </div>

    </div>
  </div>
</template>

<script setup>
import { cards2 } from "../../data";
</script>
