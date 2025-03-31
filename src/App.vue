<template id="app">
  
  <TheNavigation></TheNavigation>
  
  <GoBack></GoBack>
  
  <router-view></router-view>
  
  <TheFooter></TheFooter>

</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import GoBack from './components/GoBack.vue';
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
   TheNavigation,
   GoBack,
   TheFooter
  }
};

</script>



<style>
  body {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    text-align: center;
  }

  #top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: black;
    padding: 0;
    margin: 0;
  }

  header {
    background: #000;
    color: white;
    text-align: center;
    font-size: 20pt;
    font-weight: normal;
    padding-top: 2%;
    margin: 0;
    width: 100%;
  }

  .go-back {
    z-index: 3;
    background-color: black;
    position: fixed;
    bottom: 0;
    left: 0;
    border: none;
    cursor: pointer;
  }

  .go-back img {
    height: 40px;
    width: 40px;
  }

  nav {
    margin: 0;
    padding: 0;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding: 0;
    margin: 3%;
  }

  nav ul li {
    background-color: #979797;
    padding: 2%;
    margin: 0;
    font-size: 13pt;
  }

  .active-link {
    font-weight: bolder;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }

  footer {
    border-top: 1px solid #d9d9d9;
    margin-top: 5%;
    padding: 5%; 
  }

  footer p {
    color: #979797;
  }

  @media screen and (min-width: 600px) {
    header {
      font-size: 25pt;
    }

    .go-back {
      position: fixed;
      top: 0;
      left: 0;
      bottom: auto;
    }

    nav ul {
      margin: 2%
    }
   
    nav ul li {
      font-size: 16pt;
      padding: 1% 5%;
    }

    footer {
      padding: 2%;
    }
  }
  
  @media screen and (min-width: 990px) {
    header {
      padding-top: 1%;
    }

    nav ul {
      margin: .5%;
      margin: 1% auto;
      max-width: 70%;

    }

    nav ul li {
      font-size: 16pt;
      padding: 1% 3%;
    }

    
    footer {
      margin-top: 2%;
      padding: 1%;
    }

  }

  @media screen and (min-width: 1900px) {
    
    nav ul {
      margin: .5% auto;
      max-width: 50%;
    }
    
    nav ul li {
      padding: 1% 2%;
    }

    footer {
      margin-top: 1%;
      padding: 1%;
    }
  }

</style>
