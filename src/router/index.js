import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/audit",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/audit",
    name: "Audit",
    component: () =>
      import(/* webpackChunkName: "audit" */ "../views/Pages/Audit.vue"),
  },
  {
    path: "/device-list",
    name: "Device List",
    component: () =>
      import(
        /* webpackChunkName: "device-list" */ "../views/Pages/DeviceList.vue"
      ),
  },
  {
    path: "/bulk-installation",
    name: "Bulk Installation",
    component: () =>
      import(
        /* webpackChunkName: "bulk-installation" */ "../views/Pages/BulkInstallation.vue"
      ),
  },
  {
    path: "/file-rating",
    name: "File Rating",
    component: () =>
      import(
        /* webpackChunkName: "device-list" */ "../views/Pages/FileRating.vue"
      ),
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
