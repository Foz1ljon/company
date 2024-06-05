<script setup>
import Header from "./components/Header.vue";
import Main from "./components/AboutUs/Main.vue";
import Section from "./components/AboutUs/Section.vue";
import Team from "./components/AboutUs/Team.vue";

import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
