<template>
  <div class="home p-5 no_padding">
    <section class="d-flex landing_page align-items-center">
      <img src="/img/formalhenry.jpg" width="300" alt="a picture of Eze Henry(godofjs) smiling" />
      <div class="text_container">
        <div class="header pb-3">
          Henry Eze
        </div> 
        <!-- Eze Hennry, Godofjs, js, vue developer, Vue, node, webpack, -->
        <div class="col-lg-8 col-md-12 p-0">
          Hello! I'm Eze Henry an innovative and well versed developer with over
          two years active professional experience. I started as a front end web
          developer, presently I am on the verge of becoming a full stack
          developer. <br />
          I started learning development in 2018 using
          <a href="https://freecodecamp.org" target="_blank"> Freecodecamp</a>
          web developers course and youtube videos. I dropped the course halfway
          and began hands-on learning by taking on various web development
          projects. <br />
          I am also a technical writer documenting my journey in tech so that 
          other developers don't go re-inventing the wheel, and would
          begin writing on other parts of life soon enough.
        </div>
      </div>
    </section>
    <section class="pl-5 pr-5 pt-0 pb-5 no_padding">
      <div class="title pl-5 ml-3 no_padding text-center pb-3">Interests</div>
      <div class="row d-flex justify-content-center p-3 no_padding">
        <interest
          v-for="interest in interests"
          :key="interest"
          :name="interest"
        />
      </div>
    </section>
    <section class="pl-5 pr-5 pt-0 no_padding">
      <div class="title pl-5 ml-3 no_padding text-center pb-3">Services</div>
      <div class="row d-flex justify-content-center p-3 no_padding">
        <services
          v-for="(service, index) in services"
          :key="index"
          :name="service.name"
          :text="service.text"
          :icon="service.icon"
        />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      interests: [
        "Music",
        "Dogs",
        "Books",
        "Entrepreneurship",
        "Artificial Intelligence",
        "Web Development",
        "Human psychology",
        "African Culture",
        "Writing",
      ],
      services: [
        {
          name: "Web Development",
          icon: 'mdi mdi-cogs',
          text: `Having a website and online presence strategy 
          allows you to market your business online. ... A website is also 
          important because it helps you establish credibility as a business. 
          Most people just assume that you have a website since the vast majority of 
          businesses do, at least the vast majority of big companies do.`
        },
        {
          name: "Business Strategy and Ideation",
          icon: 'mdi mdi-laptop',
          text: `The key to successful businesses is proactive planning and 
          strategizing, with a solution driven and innovative mindset like mine,
           I'm your best go to pal to discuss that crazy idea.`
        },
        {
          name: "IT Support and Consultancy",
          icon: 'mdi mdi-briefcase',
          text: `In this era of vast technological advancement, 
          your best bet is to bank on ICT & Innovation. However, that 
          doesn't mean dropping your busy schedule to start from scratch. 
          I'm ever ready to answer your questions and clear your doubts and before 
          you know it that business/company of yours would be tech driven.`
        },
      ]
    };
  }
};
</script>
