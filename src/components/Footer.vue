<script setup>
import { url } from "../data";
</script>

<template>
  <div class="bg-dblue">
    <div class="container">
      <div class="flex flex-wrap py-16 gap-[200px]">
        <!-- Part 1 >> -->

        <div class="flex flex-col w-[399px] gap-16">
          <div class="flex flex-col gap-3">
            <h1 class="text-white text-2xl poppins-bold">{Finsweet</h1>
            <p class="text-base text-white font-medium leading-7">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div class="flex bg-[#FCD980] p-6 gap-5 w-[517px]">
            <!-- Email >> -->
            <div class="flex flex-col justify-center">
              <h2 class="text-lg font-medium text-[#282938]">Email at me</h2>
              <p class="text-base">contact@website.com</p>
            </div>
            <!-- Email << -->

            <!-- Call us >> -->

            <div class="flex flex-col">
              <h1 class="text-lg font-medium text-[#282938]">Call us</h1>
              <p class="text-base">0927 6277 28525</p>
            </div>

            <!-- Call us << -->
          </div>
        </div>
        <!-- Part 1 << -->

        <!-- Part 2 >> -->

        <div class="flex flex-col w-[379px] gap-3">
          <h1 class="text-2xl poppins-bold text-white">Lets Talk</h1>
          <p class="text-base text-white font-medium leading-7">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div class="flex gap-3">
            <a v-for="(item, i) in url" :key="i" :href="item.url">
              <img :src="item.img" alt="items" />
            </a>
          </div>
        </div>
        <!-- Part 2 << -->
      </div>
    </div>
  </div>
</template>
