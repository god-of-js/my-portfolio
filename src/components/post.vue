<template>
  <div class="post m-2 p-0 pl-0">
    <div
      class="image d-flex justify-content-center align-items-center"
      :style="`background-image: url(${img})`"
    ></div>
    <div
      class="p-2 border name d-flex justify-content-between align-items-center"
    >
      <div class="overflow">{{name}}</div>
      <a :href="link" target="_blank"> 
        <button class="trans_btn p-1">
          <img src="/img/external-link.png" width="15" />
        </button>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    img: String,
    link: String
  }
};
</script>
