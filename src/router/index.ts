import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Source from "../components/Source.vue";

export default createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/source",
      name: "Test",
      component: Source,
    }
  ]
});
