<script setup></script>

<template>
  <div class="container">
    <!-- Top >>  -->
    <div class="flex justify-between items-center py-10">
      <h1 class="font-semibold text-5xl text-[#282938]">View our projects</h1>
      <button
        class="text-[#282938] py-2.5 px-5 poppins-regular text-base font-semibold"
      >
        View More &#8594;
      </button>
    </div>
    <!-- Top <<  -->

    <!-- Bottom >>  -->
    <div class="flex gap-3 mb-10" >
        <div class="relative"><img src="/img/bg-big.png" alt="big">
            <div class="absolute top-0 w-[47%] h-[100%]  bg-bgGr"></div></div>
        <div class="flex flex-col gap-3">
            <div class="relative"><img src="/img/bg-mini-1.png" alt="big">
                <div class="absolute top-0 w-[100%] h-[100%]  bg-bgGr"></div>
            </div>
            <img src="/img/bg-mini-2.png" alt="big">
        </div>
    </div>
    <!-- Bottom >>  -->
  </div>
</template>
