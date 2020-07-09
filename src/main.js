import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import name from "./components/name.vue";
import post from "./components/post.vue";
import interest from "./components/interest.vue";
import services from "./components/services.vue";

Vue.config.productionTip = false;
Vue.component("name", name);
Vue.component("post", post);
Vue.component("interest", interest);
Vue.component("services", services);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
