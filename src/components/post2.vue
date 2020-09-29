<template>
  <div class="d-flex">
    <div class="trail d-flex flex-column align-items-center ">
      <div class="line">
        <div class="child" style="height: 80px;"></div>
        <div class="child" style="height: 8px;"></div>
        <div class="child" style="height: 5px;"></div>
        <div class="child" style="height: 3px;"></div>
      </div>
      <div class="circle"></div>
      <div class="line">
        <div class="child" style="height: 3px;"></div>
        <div class="child" style="height: 5px;"></div>
        <div class="child" style="height: 8px;"></div>
        <div class="child" style="height: 80px;"></div>
      </div>
    </div>
    <div class="description">
        <div > <a :href="link" target="_blank" class="name" style="font-size: 1.5em; color: #000000;"> {{name}}
          
        <button class="trans_btn p-1">
          <img src="/img/external-link.png" width="15" />
        </button>
        </a></div>
        <div class="languages" style="font-size: 0.8em; font-weight: bold;">{{languages}}</div>
        <span class="pt-3 text-overflow" style="font-size: 1em">{{text}}</span> <a :href="link" target="_blank" v-if="type === 'blog'">read more...</a>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        name: String,
        languages: String,
        text: String,
        type: String,
        link: String
    }
}
</script>