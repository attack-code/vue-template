import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import DefaultLayout from "@/layout/DefaultLayout";
import HelloWorld from "@/views/hello-world/HelloWorld";
import PageNotFound from "@/views/page-not-found/PageNotFound";

// name must be unique in route list
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/admin",
    name: "admin",
    props: {
      name: "datastar-web",
    },
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "root-hw",
        component: HelloWorld,
      },
      {
        path: "hw",
        name: "hw",
        component: HelloWorld,
      },
    ],
  },
  {
    path: "/hello-world",
    name: "hello-world",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => HelloWorld,
  },
  {
    path: "/page-not-found",
    name: "page-not-found",
    component: PageNotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/page-not-found",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
