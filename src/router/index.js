import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/device-list",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/device-list",
    name: "Device List",
    component: () =>
      import(/* webpackChunkName: "device-list" */ "../views/DeviceList.vue"),
  },
  {
    path: "*",
    // redirect: "/",
    name: "errorpage",
    component: () =>
      import(/* webpackChunkName: "404-page" */ "../views/Error/ErrorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
