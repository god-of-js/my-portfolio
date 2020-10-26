<template>
  <nav
    class="d-flex p-2 align-items-center justify-content-between pl-5 col-lg-4"
  >
    <b> Godofjs </b>
    <div class="  d-flex justify-content-between align-center">
      <a href="mailto:henryeze019@gmail.com" class="link active__bg nav_links"
        >Contact</a
      >
      <a
        class="link active__bg nav_links"
        target="_blank"
        href="https://docs.google.com/document/d/1ITVyudR-U-TqnbRvzCYIiUBkUrnEp_FAKnzyMMSWE2Y/edit?usp=sharing"
        >Résumé
      </a>
    </div>
    <button
      class="trans_btn mdi mdi-menu "
      @click="activate"
      style="display: none;"
    ></button>
  </nav>
</template>
<script>
import { EventBus } from "../helpers/eventbus.js";
export default {
  methods: {
    activate() {
      EventBus.$emit("sidebar", true);
    }
  }
};
</script>
