<template>
  <div id="app">
    <side v-if="sidebar === true" />
    <navbar />
    <router-view />
  </div>
</template>
<script>
import navbar from "./components/nav.vue";
import side from "./components/sidebar.vue";
import {EventBus} from './helpers/eventbus.js'
export default {
  data: () => {
    return {
      sidebar: false
    }
  },
  components: {
    navbar,
    side
  },
  mounted() {
    EventBus.$on('sidebar', (value) => {
      this.sidebar = value
    })
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
  color: #2c3e50;
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
