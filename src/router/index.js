import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../Views/HomeView.vue";
import AboutView from "../Views/AboutView.vue";
import PolicyView from "../Views/PolicyView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/About",
      name: "about",
      component: AboutView,
    },
    {
      path: "/Policy",
      name: "policy",
      component: PolicyView,
    },
  ],
});

export default router;
