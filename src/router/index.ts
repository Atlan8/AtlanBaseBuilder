import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Layout from "@/layout/index.vue";

export const customRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    meta: { title: "主菜单" },
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "首页" },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/antiStress",
        name: "antiStress",
        meta: { title: "抗压背锅吧" },
        component: () => import("@/views/antiStress/index.vue"),
      },
      {
        path: "/assemble",
        name: "assemble",
        meta: { title: "装机计算器" },
        component: () => import("@/views/assemble/index.vue"),
      },
      {
        path: "/assemble/edit",
        name: "assembleEdit",
        meta: { hidden: true },
        component: () => import("@/views/assemble/edit.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: Layout,
    redirect: "/about/index",
    meta: { title: "关于", hideChildrenInMenu: true },
    children: [
      {
        path: "index",
        name: "aboutIndex",
        meta: { title: "关于" },
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: customRoutes,
});

export default router;
