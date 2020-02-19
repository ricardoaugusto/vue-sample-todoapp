import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

window._ = require("lodash");
Object.defineProperty(Vue.prototype, "lodash", { value: window._ });

window.uikit = require("uikit/dist/js/uikit.min");
Object.defineProperty(Vue.prototype, "uikit", { value: window.uikit });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
