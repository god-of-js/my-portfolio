import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import name from "./components/name.vue";

Vue.config.productionTip = false;
Vue.component("name", name);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
