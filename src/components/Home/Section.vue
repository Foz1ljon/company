<script setup></script>

<template>
  <section class="container md:py-10 sm:py-3">
    <!-- Top >>  -->
    <div class="flex justify-between items-center md:py-11 sm:py-2">
      <h1
        class="font-semibold lg:text-5xl md:text-4xl sm:text-base text-deepBlue"
      >
        View our projects
      </h1>
      <button
        class="text-deepBlue flex items-center md:py-2.5 sm-py-1 md:px-5 sm:px-2 lg:text-base md:text-sm sm:text-[6px] font-semibold border-2 border-white rounded-3xl hover:border-orang"
      >
        View More &#8594;
      </button>
    </div>
    <!-- Top <<  -->

    <!-- Bottom >>  -->
    <div class="md:w-full md:ml-0 sm:w-[141%] sm:-ml-[23%] flex items-center gap-3">
      <div class="relative overflow-hidden group">
        <img class="w-[100%]" src="/img/bg-big.png" alt="big" />
        <div
          class="absolute top-0 duration-300 group-hover:left-0 -left-full w-[47%] h-[100%] bg-bgGr"
        ></div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="relative overflow-hidden group">
          <img class="w-[100%]" src="/img/bg-mini-1.png" alt="big" />
          <div
            class="absolute top-0 w-full h-full duration-300 group-hover:left-0 -left-full bg-bgGr"
          ></div>
        </div>
        <div class="relative overflow-hidden group">
          <img class="w-[100%]" src="/img/bg-mini-2.png" alt="big" />
          <div
            class="absolute top-0 w-full h-full duration-300 group-hover:left-0 -left-full bg-bgGr"
          ></div>
        </div>
      </div>
    </div>
    <!-- Bottom >>  -->
  </section>
</template>
