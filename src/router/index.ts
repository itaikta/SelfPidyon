import { createRouter, createWebHistory } from "vue-router";
import NusachPage from "../components/NusachPage.vue";
import Source from "../components/Source.vue";

export default createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: NusachPage,
    },
    {
      path: "/source",
      name: "Test",
      component: Source,
    }
  ]
});
