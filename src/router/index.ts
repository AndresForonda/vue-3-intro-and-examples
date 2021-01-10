import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home/Layout.vue";
import MouseMoveEvent from "../views/mouse-move-event/Layout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mouse-move-event",
    name: "MouseMoveEvent",
    component: MouseMoveEvent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
