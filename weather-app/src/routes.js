import { createRouter, createWebHistory } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";

const routes = [
  {
    path:"/",
    name: "Home",
    component:SiteNavigation
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
