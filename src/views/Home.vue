<template>
  <div class="home">
    <section class="d-flex landing_page align-items-center">
      <img src="/img/henrysmile.jpeg" width="300" class="img"/>
      <div class="text_container">
        <div class="header pb-5">
          Hey,<br />
          I am Henry
        </div>
        <div class="col-lg-8 col-sm-12 p-0 text_sm">
          I build Enterprise full stack applications, and of course I am a
          technical writer.
        </div>
        <div class="pt-5 font_sm">
          You can reach me via my social media handles:
        </div>
        <div class="pt-4 d-flex align-items-center socials">
          <a href="https://twitter.com/godofjs" target="_blank"
            ><button class="mdi-twitter mdi trans_btn"></button>
          </a>
          <a href="https://www.instagram.com/_henry_eze/" target="_blank"
            ><button class="mdi-instagram mdi trans_btn"></button>
          </a>
          <a
            href="https://www.linkedin.com/in/henry-eze-1b1385185/"
            target="_blank"
            ><button class="mdi-linkedin mdi trans_btn"></button>
          </a>
          <a href="https://github.com/god-of-js" target="_blank"
            ><button class="mdi-github mdi trans_btn"></button>
          </a>
          <a href="https://medium.com/@Godofjs" target="_blank">
            <button class="trans_btn">
            <span class="iconify" data-icon="mdi-medium" data-inline="false"></span>
            </button>
          </a>
        </div>
      </div>
    </section>
    <section class="pl-5 pt-5 pr-5 pb-2 no_padding">
      <div class="title pl-5 ml-5 no_padding">Projects</div>
      <div class="row p-4 d-flex justify-content-center no_padding">
        <post 
        v-for="(project, index) in projects" 
        :key="index" 
        :name="project.name" 
        :img="project.img"
        :link="project.link" />
      </div>
    </section>
    <section class="pl-5 pt-5 pr-5 pb-2 no_padding">
      <div class="title pl-5 ml-5 no_padding">Blog</div>
      <div class="row p-4 d-flex justify-content-center no_padding">
        <post 
        v-for="(post, index) in blog" 
        :key="index" 
        :name="post.name" 
        :img="post.img"
        :link="post.link" />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: () => {
    return {
      projects: [
        {
          name: 'Winsusu',
          img: '/img/winsusu.png',
          link: 'https://winsusuafrica.com/'
        },

      ],
      blog: [
        {
          name: 'Building Static Websites with Vuepress',
          img: '/img/vuepress.png',
          link: 'https://medium.com/@Godofjs/building-a-static-website-using-vuepress-b6cc34f70f70?source=friends_link&sk=e59c6851c2c192d06c09d3035120266c'
        },
        {
          name: 'Modularization in Vuejs and Vuex',
          img: '/img/vuexmodules.png',
          link:'https://medium.com/swlh/building-large-scale-applications-with-vuex-6d7e8ce0dfef?source=friends_link&sk=cd343c3d40274e766c872839a7854050'
        },
        {
          name: 'Introduction to vuex (part one)',
          img: '/img/vuex.png',
          link:'https://medium.com/swlh/introduction-to-vuex-part-one-f0b6153a90d9?source=friends_link&sk=902a8074ed36d35223a049e645da89a6'
        },
        {
          name: 'Introduction to vuex (part two)',
          img: '/img/vuex.png',
          link:'https://medium.com/@Godofjs/introduction-to-vuex-part-2-384f85a2a9db?source=friends_link&sk=78304dd1d013718aecdba96fee8a197e'
        },
      ]
    }
  }
};
</script>
