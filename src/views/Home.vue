<template>
  <div class="page home">
    <!-- <h1>HOME Page</h1> -->
    <div class="container">
      <p class="home-text">
        Hello there, in a jungle full of web designers, programers and develeopers, you found a Develeopard. But don't worry, I'm only lurkin for an oppourtunity to help people with their projects on the web. Frontend (as you may assume) is my passion and I'm dedicated to earn my spots.<br> I am self-educated developer, mainly focused on Vue and Flutter. Please feel free to check some of my work and contact me for collaboration.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  setup(){

  }
}
</script>

<style scoped>
  .home{

    width: 100%;
    display: grid;
    place-items: center;
    /* font-family: 'Fredericka the Great', cursive; */
  }

  .container{
    /* border: 2px solid red; */
    /* background-color: rgba(224, 197, 160, 0.185); */
    font-family: 'Fredericka the Great', cursive;
    width: 80%;
    padding: 20px;
    margin-top: 180px;
  }

  .home-text{
    color: rgb(0, 0, 0);
    font-size: 3rem;
    text-align: center;
    line-height: 1.3;
    text-shadow: 1px 1px 300px rgba(24, 24, 26, 0.904);
  }

  @media(max-width: 1240px){
    .container{
      max-width: 80%;
    }
  }

  @media(max-width: 720px){
    .container{
      max-width: 95%;
    }

    .home-text{
      font-size: 2.2rem;
    }
  }

  @media(max-width: 420px){
    .container{
      max-width: 100%;
    }
    .home-text{
      font-size: 1.8rem;
    }
  }


</style>
