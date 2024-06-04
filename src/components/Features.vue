<template>
  <div class="bg-[#F4F6FC] py-16">
    <div class="container">
      <div class="flex flex-col items-center ">
        <p class="font-semibold text-darlBlue text-base text-center py-4">Features</p>
        <h1 class="font-semibold text-darlBlue text-5xl w-[50%] text-center" >Design that solves problems, one product at a time</h1>
      </div>

      <div class="grid grid-cols-3 gap-2 ">
        <div v-for="item, i in cards" :key="i" class="flex flex-col w-[390px] p-5 bg-white gap-2 mb-2">
            <div><img :src="item.img" alt="img"></div>
            <h1 class="text-2xl  font-normal text-darkBlue" >{{ item.title }}</h1>
            <p class="w-[324px]" >{{ item.about }}</p> 
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { cards } from "../data";

</script>
