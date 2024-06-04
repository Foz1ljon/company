<script setup>
import emblaCarouselVue from "embla-carousel-vue";

const [emblaRef] = emblaCarouselVue();
</script>

<template>
  <div class="bg-[#F9fbfd] py-16">
    <div class="container">
      <div class="flex justify-between">
        <div class="flex flex-col gap-3 text-darkBlue w-[327px]">
          <h1 class="font-semibold text-[38px]">
            What our clients say about us
          </h1>
          <p class="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>

        <div class="bottoms w-[63%]">
          <div class="overflow-hidden" ref="emblaRef">
            <div class="flex">
              <div v-for="(item, i) in 4" :key="i" class="embla__slide flex flex-col gap-3">
                <h5 class="text-3xl font-medium text-darkBlue">
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h5>
                <div class="flex gap-2 items-center">
                   <img class="object-cover w-10 h-10 rounded-full" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="">
                   <div class="flex flex-col">
                    <p class="font-medium text-lg text-darkBlue">Jenny Wilson</p>
                    <p class="font-normal text-darkBlue text-xs">Vice President</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
</style>
