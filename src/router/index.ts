import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Page from "../components/Page.vue";

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
      component: Page,
    }
  ]
});
