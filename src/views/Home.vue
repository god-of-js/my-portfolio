<template>
  <div class="home pb-5">
    <section
      class="first-layer d-flex flex-column justify-content-center align-items-center"
    >
      <div><img src="/img/dogme.jpg" /></div>
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
            <span
              class="iconify"
              data-icon="mdi-medium"
              data-inline="false"
            ></span>
          </button>
        </a>
        <a
          href="https://open.spotify.com/user/houecxx92nsbsmgz85rjfgkd4"
          target="_blank"
          ><button class="mdi-spotify mdi trans_btn"></button>
        </a>
      </div>
      <div class="pt-4">
        <div class="hello-world pb-2 text-center">Hello World! &#x1F604;</div>
        <p class="text text-center">
          You've just come across a developer and tehnical writer &#x1F913;.
          <br />

          Find below few of my works, articles, and a little bit about me.
        </p>
      </div>
    </section>
    <div class="mx-auto col-lg-6 col-md-8 col-sm-12 mt-3">
      <section>
        <div class="hello-world pb-2">Hi, I'm Henry</div>
        <div class="pt-3">
          I'm a full stack web developer building creative products at
          <a
            href="http://www.skernel.com/"
            target="_blank"
            class="font__color active__link"
          >
            Skernel.
          </a>
          I am currently based in Lagos, Nigeria.
        </div>
        <div class="pt-3">
          I'm a student at
          <a
            href="https://www.uopeople.edu/"
            target="_blank"
            class="font__color active__link"
          >
            University of the people </a
          >, Aiming to complete 50 semesters towards a computer science degree.
        </div>
        <div class="pt-3">
          I'm a massive fan of Javascript(vue.js, node, typescript and vanilla
          Javascript) hence I love integrating and building products using
          Javascript.
        </div>
      </section>
      <section class=" mt-3">
        <div class="hello-world pb-2">Sectors I have worked in</div>
        <div class="pt-3">
          During my years of active development, I have worked on projects in
          sectors like health, vendor management, real estate, logistics,
          foreign exchange e.t.c.
        </div>
      </section>
      <section class=" mt-3">
        <div class="hello-world pb-2">Technologies</div>
        <div class="pt-3">
          During my years of active development, I have learnt and worked with
          technologies like Javascript, Vue, Node, Express, Typescript, Mocha,
          Webpack, Python, Java, Jest, Sinon e.t.c. I am a huge practitioner of
          test driven development and Agile development.
        </div>
      </section>
      <section class=" mt-3">
        <div class="hello-world pb-2">Projects</div>
        <div class="pt-3 row">
          <postt
            v-for="(project, index) in projects"
            :key="index"
            :type="'project'"
            :name="project.name"
            :repo="project.repo"
            :text="project.text"
            :languages="project.language"
            :link="project.link"
          />
        </div>
      </section>
      <section class=" mt-3">
        <div class="hello-world pb-2">Blog Posts</div>
        <div class="pt-3 row">
          <postt
            v-for="(project, index) in blog"
            :key="index"
            :type="'project'"
            :name="project.name"
            :blog="project.blog"
            :text="project.text"
            :languages="project.language"
            :link="false"
          />
        </div>
      </section>
      <section class="mt-3">
        <div class="hello-world pb-2">My personality</div>
        <div class="pt-3">
          I find it really hard to point out my personality traits so I took a
          personality test on
          <a
            href="http://www.skernel.com/"
            target="_blank"
            class="font__color active__link"
          >
            16Personalities </a
          >. Here is the
          <a
            href="https://www.16personalities.com/profiles/e5f639fe59741"
            target="_blank"
            class="font__color active__link"
          >
            result </a
          >.
        </div>
      </section>
      <section class="mt-3">
        <div class="hello-world pb-2">Leisure time.</div>
        <div class="pt-3">
          When I am away from visual studio code, I try to hit the gym, watch
          movies, social media e.t.c.
        </div>
      </section>
      <section class="mt-3">
        <div class="hello-world pb-2">Music.</div>
        <div class="pt-3">
          Well, when it comes to music, I might be a psycho &#x1F92A;. On an
          average, I listen to more than a 100 songs per week.
          <br />
          I do not have a preffered genre, any song that sounds good is great by
          me.
        </div>
      </section>
      <section class="mt-3">
        <div class="hello-world pb-2">Interest.</div>
        <div class="pt-3">
          I have a ton of interests in so many fields some of which are Programming, Artificial intelligence, music, entertainment, humans psychology, dogs, entrepreneurship, books, art, African culture e.t.c.
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import postt from "../components/post2.vue";
export default {
  name: "Home",
  components: {
    postt
  },
  data: () => {
    return {
      projects: [
        {
          name: "Winsusu",
          language: "Javascript, Vue.js, Bootstrap",
          link: "https://winsusuafrica.com/",
          type: "project",
          text: `Winsusu is a platform that delivers a human centric and community focused ecosystem, where sustainable impact-driven businesses, solutions and ideas are built.`
        },
        {
          name: "Sozo hospital application",
          language: "Javascript, Vue.js, Antdv, Firebase",
          link: "https://sozo-hospital-app.firebaseapp.com/",
          type: "project",
          text: `Sozo presents a new way of hospital management and automates appointments users have with doctors. `
        },
        {
          name: "Blue Streak(front end)",
          language: "Javascript, Vue.js, Bootstrap",
          link: false,
          repo: "https://github.com/god-of-js/streakfrontend",
          type: "project",
          text: `Blue streak is an open source platform for streaming movies and many more. `
        },
        {
          name: "Blue Streak(back end)",
          language: "Javascript, node, Express",
          repo: "https://github.com/god-of-js/streak",
          link: false,
          type: "project",
          text: `Blue streak is an open source platform for streaming movies and many more. `
        },
        {
          name: "Gizmo(frontend)",
          language:
            "Typescript, Vue.js, Vuetify,  Express, Mocha, Chai, CircleCi",
          text: `Gizmo is a real estate application where users purchase land, houses and properties with utmost security due to set protocols.`,
          type: "project",
          link: "https://gizmo-front-end.herokuapp.com/",
          repo: "https://github.com/god-of-js/gizmo"
        },
        {
          name: "Gizmo(backend)",
          language: "Node, Express, twillio, Javascript",
          text: `Gizmo is a real estate application where users purchase land, houses and properties with utmost security due to set protocols.`,
          type: "project",
          link: "https://gizmo-front-end.herokuapp.com/",
          repo: "https://github.com/god-of-js/gizmobackend"
        }
      ],
      blog: [
        {
          name: "Building Static Websites with Vuepress",
          language: "Vuepress",
          type: "blog",
          text: `Vuepress is a minimalistic Vue-powered static site generator by Evan you used for generation of static sites and documentations. A static web page is a web page that is delivered to the user’s web browser exactly as stored, in contrast to dynamic web pages which are generated by a web application( A site meant solely for Visual purposes and passing of information or A site with little to no JavaScript).`,
          blog:
            "https://medium.com/@Godofjs/building-a-static-website-using-vuepress-b6cc34f70f70?source=friends_link&sk=e59c6851c2c192d06c09d3035120266c"
        },
        {
          name: "Modularization in Vuejs and Vuex",
          language: "Vuex, Vue, Javascript",
          type: "blog",
          text: `When writing large front end applications, state management can be quite a difficult and tiring task. \nFor vue.js, a plugin named vuex was created for the purpose of state management. By default it comes with a default folder structure
whose structure could be used in small applications but if used in large applications the codebase would most likely look unreadable, dirty, and over time become difficult to handle.`,
          blog:
            "https://medium.com/swlh/building-large-scale-applications-with-vuex-6d7e8ce0dfef?source=friends_link&sk=cd343c3d40274e766c872839a7854050"
        },
        {
          name: "Introduction to vuex",
          language: "Vuex, Vue, Javascript",
          type: "blog",
          text: `Vuex is the official state management library of vuex, It is used for state management as the description implies. It serves as a centralized store for the components in an application, with rules ensuring that the state can only be mutated predictably.
Starting up as a vuejs developer, vuex gave me a tough time, was confusing, and took sometime before I could master it.
In the course of this tutorial, We would be building a book library using vue and firebase. So brace yourself`,
          blog:
            "https://medium.com/swlh/introduction-to-vuex-part-one-f0b6153a90d9?source=friends_link&sk=902a8074ed36d35223a049e645da89a6"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.first-layer {
  min-height: 88.5vh;
  img {
    width: 200px;
    border-radius: 50%;
  }
}
</style>
