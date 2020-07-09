<template>
  <nav class="d-flex p-2 align-items-center justify-content-between pl-5">
    <name class="ml-5 name_padding" />
    <div class="col-lg-3 col-md-6  d-flex justify-content-between nav_links">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">About</router-link>
      <a href="mailto:henryeze019@gmail.com" class="link">Contact</a>
      <a
        class="link"
        target="_blank"
        href="https://docs.google.com/document/d/1ITVyudR-U-TqnbRvzCYIiUBkUrnEp_FAKnzyMMSWE2Y/edit?usp=sharing"
        >Resume
      </a>
    </div>
    <button class="trans_btn mdi mdi-menu " @click="activate" style="display: none;"> </button>
  </nav>
</template>
<script>
import {EventBus} from '../helpers/eventbus.js'
export default {
  methods: {
    activate() {
      EventBus.$emit('sidebar', true)
    }
  }
}
</script>
