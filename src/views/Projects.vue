<template>
  <div class="page projects">
    <div class="container">
      <div class="project" v-for="project in projects" :key="project.id">
        <h4 class="project-title">{{ project.title }}</h4>
        <div class="icons">
          <a :href="project.link" target="_blank" class="project-link"><i class="fas fa-link"></i></a>
        </div>
        <p class="project-desc">{{ project.desc }}</p>
      </div>

      <div class="git-info">
        <p><a href="https://github.com/Develeopard?tab=repositories" target="_blank">
        <i class="fab fa-github"></i></a>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup(){
    const projects = ref(
      [{
        title: 'Vue Chatroom',
        desc: 'Chatroom build with Vue and Firebase.',
        link: 'https://vue-live-chat-996ad.web.app/',
        id: 1,
      },
      {
        title: 'Vue Blog',
        desc: 'Blog made with Vue and Firebase, it does not have admin authentication built in so it\'s a read only.',
        link: 'https://vue-projects-76de9.web.app/',
        id: 2,
      },
      {
        title: 'Tiny Project',
        desc: 'This small app is an exercise with dark mode toggle and a local storage.',
        link: 'https://adoring-lamarr-dd7c85.netlify.app/',
        id: 3,
      },
      {
        title: 'Wuper',
        desc: 'Site I made in WordPress for my dear friend and a great artist Dejan Ivanovic alias Wuper.',
        link: 'http://wuper.net/',

        id: 4,
      },
      {
        title: 'Site Layout2',
        desc: 'One of my first "big" projects. It is a site built with HTML, SCSS and a little bit of JavaScript',
        link: 'https://angry-einstein-928ceb.netlify.app/',
        id: 5,
      },
      {
        title: 'Site Layout1',
        desc: 'My first completed site, it is a first big finished project by me with HTML, SCSS an JavaScript. Basically learning how to build responsive layouts.',
        link: 'https://optimistic-poitras-0dce03.netlify.app/',
        id: 6,
      },
      {
        title: 'BlockBuster',
        desc: 'Site with just one live page, it is an exercise with some scroll events.',
        link: 'https://clever-swirles-a90498.netlify.app',
        id: 7,
      },]
      )


    return{
      projects
    }
  }
}
</script>

<style scoped>
  .projects{
    /* min-height: 100vh; */
    width: 100%;
    display: grid;
    place-items: center;
  }

  .container{
    /* border: 1px solid red; */
    width: 70%;
    margin-top: 200px;
    padding: 20px;
  }

  .git-info{
    background-color: rgba(245, 245, 245, 0.329);
    font-family: 'Fredericka the Great', cursive;
    padding: 20px;
    margin-bottom: 30px;
    border-top-left-radius: 12px;
    border-left: 12px solid #e9c213;
    box-shadow: 1px 1px 12px 12px rgba(0, 0, 0, 0.13);
    font-size: 1.3rem;
  }

  .project{
    background-color: rgba(245, 245, 245, 0.329);
    font-family: 'Fredericka the Great', cursive;
    padding: 20px;
    margin-bottom: 30px;
    border-top-left-radius: 12px;
    border-left: 12px solid rgb(19, 18, 18);
    box-shadow: 1px 1px 12px 12px rgba(0, 0, 0, 0.13);
  }

  .project-title{
    font-size: 2rem;
    margin-bottom: 25px;
  }

  .project-link{
    display: block;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .icons{
    display: flex;
  }

  .fas, .fab{
    font-size: 2em;
    color: rgb(48, 52, 53);
    margin-right: 30px;
    cursor: pointer;
  }

  .project-desc{
    font-size: 1.2rem;
  }

  @media(max-width: 720px){
    .container{
      width: 95%;
    }
  }
</style>