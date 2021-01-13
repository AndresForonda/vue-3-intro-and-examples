import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Layout.vue"),
  },
  {
    path: "/mouse-move-event",
    name: "MouseMoveEvent",
    component: () => import("../views/mouse-move-event/Layout.vue"),
  },
  {
    path: "/simple-todo-list",
    name: "SimpleTodoList",
    component: () => import("../views/simple-todo-list/Layout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
