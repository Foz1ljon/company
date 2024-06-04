<script setup>
import { ref } from "vue";
import { menu } from "../data/index";
const isShow = ref(false);

const show = () => {
  !isShow.value ? (isShow.value = true) : (isShow.value = false);
};
</script>

<template>
  <main class="bg-dblue">
    <div class="md:container md:px-0 sm:px-6 ">
      <div
        class="sm:flex md:static sm:relative sm:items-center sm:justify-between md:items-center sm:py-2 md:py-4"
      >
        <h1 class="text-white poppins-black text-3xl">{Finsweet</h1>
        <img
          @click="show"
          class="w-[19%] p-3 md:hidden sm:block"
          src="/icons/hamburger.svg"
          alt="hamburger"
        />
        <div
          class="sm:flex sm:flex-col sm:items-center sm:absolute sm:bg-slate-950 sm:rounded-s-2xl sm:p-4 sm:-bottom-56 sm:-right-7 duration-300 md:p-0 md:bg-[#fff0] md:flex md:flex-row md:gap-6 md:items-center md:static"
          :class="!isShow ? 'sm:hidden md:block' : 'md:block '"
        >
          <router-link
            class="text-[#BBBBCB] sm:text-sm sm:mb-2 md:text-base md:mb-0 rounded-3xl focus:text-white"
            v-for="(item, i) in menu"
            :class="
              i == menu.length - 1
                ? 'border-2 py-2 px-4 border-[#F4F6FC33] focus:border-white'
                : ''
            "
            :key="i"
            :to="item.url"
            >{{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
