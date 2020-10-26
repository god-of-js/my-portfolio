<template>
  <div class="d-flex post__box border m-3 p-3 col-lg-5 col-md-6 col-sm-12">
    <div class="description">
      <div
        :href="link"
        target="_blank"
        class="name font__color"
        style="font-size: 1.2em;"
      >
        {{ name }}
      </div>
      <div class="languages pt-2 pl-0" style="font-size: 0.8em;">
        <a
          :href="link"
          v-if="link"
          target="_blank"
          class="name font__color"
          style="font-size: 0.9em;"
        >
          APPLICATION
        </a>
        <a
          :href="repo"
          v-if="repo"
          target="_blank"
          class="name font__color"
          style="font-size: 0.9em;"
        >
          GIT REPO
        </a>
        <a
          v-if="blog"
          :href="blog"
          target="_blank"
          class="name font__color"
          style="font-size: 0.9em;"
        >
          BLOG POST
        </a>
      </div>
      <div class="languages mt-2" style="font-size: 0.8em;">
        {{ languages }}
      </div>
      <span class="pt-3 text-overflow" style="font-size: 1em">{{ text }}</span>
      <a :href="link" target="_blank" v-if="type === 'blog'">read more...</a>
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
    link: [String, Boolean],
    blog: [String, Boolean],
    repo: [String, Boolean]
  }
};
</script>
