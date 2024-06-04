<script setup>
import { menu } from "../data/index";
</script>

<template>
  <div class="bg-dblue">
    <div class="container
    ">
      <div class="flex justify-between items-center py-4">
        <h1 class="text-white poppins-black text-2xl" >{Finsweet</h1>
        <div class="flex gap-6 items-center">
          <router-link class="text-[#BBBBCB] text-base rounded-3xl" v-for="(item, i) in menu"  :class="i == menu.length-1 ? 'border-2 py-2 px-4 border-[#F4F6FC33]': ''" :key="i" :to="item.url"
            >{{ item.name }} 
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>
