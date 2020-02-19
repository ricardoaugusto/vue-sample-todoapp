import Vue from "vue";
import VueRouter from "vue-router";
import InboxView from "../views/InboxView.vue";
import TodayView from "../views/TodayView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "inbox" }
  },
  {
    path: "/inbox",
    name: "inbox.index",
    redirect: { name: "inbox", params: { currentPage: 1 } }
  },
  {
    path: "/inbox/:currentPage?",
    name: "inbox",
    component: InboxView,
    props: true
  },
  {
    path: "/today",
    name: "today",
    component: TodayView,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
