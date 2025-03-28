<template id="app">
  
  <div id="top">
    <header>Random Pokémon Generator  </header>
    <nav id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact-me">Contact Me</router-link></li>
        <li><a href="https://pokeapi.co/" target="_blank">PokeAPI</a></li>
      </ul>
    </nav>
  </div>
  <router-view></router-view>

  <footer>
    <p>Made with pokeapi.co by Salem Mangum.</p>
  </footer>

</template>

<script>
// import HomePage from './components/HomePage.vue';
// import AboutPage from './components/AboutPage.vue';

export default {
  name: 'App',
  components: {
   // HomePage
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
    padding: 2% 5%;
    margin: 0;
    font-size: 13pt;
  }

  nav ul li:hover {
    background-color: #747474;
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
