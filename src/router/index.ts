import { createRouter, createWebHistory } from "vue-router";
import NusachPage from "../components/NusachPage.vue";
import Source from "../components/Source.vue";
import Info from "../components/Info.vue";

export default createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: NusachPage,
    },
    {
      path: "/info",
      name: "Info",
      component: Info,
    },
    {
      path: "/source",
      name: "Test",
      component: Source,
    }
  ]
});
