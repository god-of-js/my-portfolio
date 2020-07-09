<template>
    <div class="sidebar">
    <div class="d-flex justify-content-between pt-3 pl-1 pr-3 align-items-center"> 
        <name class="ml-5 name_padding" />
        <button class="trans_btn mdi mdi-close" @click="close"> </button>
    </div>
    <div style="width: 100%;">
    <div @click="close"><router-link to="/" class="link">Home</router-link> </div>
      <div @click="close"><router-link to="/about" class="link">About</router-link> </div>
      <div @click="close"><a href="mailto:henryeze019@gmail.com" class="link">Contact</a> </div>
      <div @click="close"><a
        class="link"
        target="_blank"
        href="https://docs.google.com/document/d/1ITVyudR-U-TqnbRvzCYIiUBkUrnEp_FAKnzyMMSWE2Y/edit?usp=sharing"
        >Resume
      </a> </div>
      
    </div>
    </div>
</template>
<script>
import {EventBus} from '../helpers/eventbus.js'
export default {
    methods: {
        close() {
            EventBus.$emit('sidebar', false)

        }
    },
}
</script>