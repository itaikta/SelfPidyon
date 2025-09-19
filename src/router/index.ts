import { createRouter, createWebHistory } from "vue-router";
const NusachPage = () => import("../components/NusachPage.vue");
const Source = () => import("../components/Source.vue");
const Info = () => import("../components/Info.vue");

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
      name: "Source",
      component: Source,
    }
    ,
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../components/NotFound.vue"),
    }
  ]
});
