import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
// import HowToBuild from '../views/HowToBuild.vue'
import Contact from '../views/Contact.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft',
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft',
    }
  },
/*   {
    path: '/howtobuild',
    name: 'HowToBuild',
    component: HowToBuild,
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'animate__animated animate__fadeOutRight',
    }
  }, */
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return{ x: 0, y: 0 }
  }
})

export default router
