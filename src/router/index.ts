import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
      ],
    },
    {
      path: "/writer",
      name: "writer",
      component: () => import("../views/writer/Index.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("../views/chat/Index.vue"),
    },
  ],
});

export default router;
