<template>
  <div id="app" :class="[dark === true ? 'dark__mode' : 'light__mode', ' body ']">
    <side v-if="sidebar === true" />
    <div class="d-flex align-items-center pt-4">
      <navbar class=""/>
      <div class="ml-3">
      <button class="mdi mdi-weather-night mode__btn active__bg" v-if="dark == false" @click="dark = true"> </button>
      <button class="mdi mdi-weather-sunny mode__btn active__bg" v-else @click="dark = false"></button>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
import navbar from "./components/nav.vue";
import side from "./components/sidebar.vue";
import { EventBus } from "./helpers/eventbus.js";
export default {
  data: () => {
    return {
      sidebar: false,
      dark: false,
    };
  },
  components: {
    navbar,
    side,
  },
  mounted() {
    EventBus.$on("sidebar", (value) => {
      this.sidebar = value;
    });
  },
};
</script>
<style lang="scss">
@import "./style/style.scss";
@import "./style/mobile.scss";
@font-face {
  font-family: Montserrat;
  src: url("/fonts/Montserrat/Montserrat-Medium.ttf");
}
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: -0px !important;
}
body {
  padding: 0px;
  margin: 0px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #f1f1f1;
    }
  }
}
</style>
