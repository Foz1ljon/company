import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../components/Home/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: import("../components/AboutUs/AboutUs.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
