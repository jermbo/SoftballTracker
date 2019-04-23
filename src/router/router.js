import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fantasy",
      name: "fantasy",
      component: () => import("@/views/Fantasy")
    },
    {
      path: "/divisions",
      name: "divisions",
      component: () => import("@/views/Divisions")
    },
    {
      path: "/teams",
      name: "teams",
      component: () => import("@/views/Teams")
    },
    {
      path: "/players",
      name: "players",
      component: () => import("@/views/Players")
    },
    {
      path: "/games",
      name: "games",
      component: () => import("@/views/Games")
    }
  ]
});
