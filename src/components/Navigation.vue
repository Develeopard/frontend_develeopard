<template>
  <div class="navigation" :class="{change_color: scrollPosition > 50}">
      <div class="nav-list" :class="{toggle: toggled}">
        <router-link class="link" @click="toggled = !toggled" :to="{ name: 'Home'}">
            Home
        </router-link>
        <router-link class="link" @click="toggled = !toggled" :to="{ name: 'Projects'}">
            Projects
        </router-link>
<!--         <router-link class="link" @click="toggled = !toggled" :to="{ name: 'HowToBuild'}">
            Build Vue App
        </router-link> -->
        <router-link class="link" @click="toggled = !toggled" :to="{ name: 'Contact'}">
            Contact
        </router-link>

      </div>
      
      <div class="nav-btn" @click="toggled = !toggled">
          <i class="fas fa-bars"></i>
      </div>

      <div class="dots">
        <div class="dot dot1"></div>
        <!-- <div class="dot dot2"></div> -->
        <div class="dot dot3"></div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
        const scrollPosition = ref(true)
        const toggled = ref(false)

        const updateScroll = (() => {
            scrollPosition.value = window.scrollY
        })

        onMounted(() => {
            window.addEventListener('scroll', updateScroll)
        })

        return{
            scrollPosition,
            toggled
        }
    }

}
</script>

<style>
    .navigation{
        /* position: absolute; */
        background-color: rgba(249, 252, 255, 0);
        position: fixed;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: start;
        padding: 20px;
        z-index: 22;
        transition: .3s;
        user-select: none;
    }

    .change_color{
        background-color: rgba(249, 252, 255, 0.651);
    }

    .nav-list{
        /* outline: 1px solid black; */
        width: 100%;
        display: flex;
    }

    .dots{
        /* border: 1px solid dodgerblue;     */
        display: flex;
        /* margin: 0 auto; */
    }

    .dot{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
        background-position: center;
        background-size: cover;
    }

    .dot1{
        background-image: url('../assets/leopardback2.jpg');
    }


    .dot3{
        background-image: url('../assets/logo DEVELEOPARD.png');
    }

    .link{
        text-decoration: none;
        font-family: 'Oleo Script Swash Caps', cursive;
        font-size: 2em;
        padding: 1px;
        border-radius: 12px;
        margin-right: 20px;
        color: rgb(0, 0, 0);
        /* background-color: rgba(14, 13, 13, 0.247); */
        transition: all .3s;
    }

    .router-link-active{
        color: #ccac20;
        text-shadow: 2px 2px rgb(39, 33, 33),
                    3px 3px 7px rgb(150, 11, 11);
    }

    .nav-btn{
        border: 1px solid green;
        position: relative;
        display: none;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-image: url('../assets/leopardback2.jpg');
        background-color: rgba(0, 0, 0, 0.068);
        background-blend-mode: darken;
        background-position: center;
        background-size: cover;
    }

    .fa-bars{
        position: absolute;
        display: block;
        color: rgb(255, 255, 255);
        font-size: 3.5rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .nav-btn::after{
        content: '';
        display: inline-block;
        position: absolute;
        background-image: url('../assets/logo DEVELEOPARD.png');
        background-size: cover;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        top: 0;
        left: 120px;
    }

    @media (max-width: 880px) {
        .navigation{
            position: fixed;
            /* background-color: red; */
            /* height: 100vh; */
            width: 100%;
            /* overflow: hidden; */
            align-items: center;
            justify-content: start;
        }
        
        .dots{
            display: none;
        }

        .nav-list{
            /* display: none; */
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            flex-direction: column;
            justify-content: top;
            align-items: start;
            padding: 10px;
            height: 100vh;
            width: 100vh;
            background-color: rgb(249, 252, 255);

            clip-path: circle(0px at top left);
            transition: clip-path ease-in-out .7s;
        }

        .toggle{
            clip-path: circle(200% at top);
        }

        .nav-btn{
            display: block;
        }

        .link{
            margin-bottom: 3rem;
            font-size: 2rem;
        }
    }
</style>