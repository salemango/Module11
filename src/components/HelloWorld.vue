<template>
  <header>Random Pokemon Generator</header>

  <h1> #{{ id }} <span>{{ name }}</span></h1>
  
  <div id="pokemon-image">
    <img v-bind:src="`https://img.pokemondb.net/artwork/large/${name}.jpg`">
  </div>
    <ul id="types">
      <li v-for="type in info.types" :key="type.id">{{ type.type.name }}</li>
    </ul>

    <div id="more-info">
      <p>Abilities:</p>
      <ul>
        <li v-for="ability in info.abilities" :key="ability.id"> {{  ability.ability.name }}</li>
      </ul>

    </div>

  <button @click="reloadPage">Generate New</button>

  <footer>
    <p>Made with pokeapi.co by Salem Mangum.</p>
  </footer>
</template>

<script>
import axios from 'axios';


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      info: [],
      loading: true,
      id: this.generateNum(1025),
      name: null,
      // displayName: this.name.replace("-", " ") 
    }
  },

  methods: {
    generateNum(num) {
      this.num = num
      this.id = Math.ceil(Math.random() * num);
      return this.id;
    },

    reloadPage() {
      location.reload();
      console.log(this.info);
    },
  },  
  
  computed: {
    
  },

  mounted() {
    axios 
        .get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        .then ((response => {
          this.info = response.data;
          this.name = response.data.name;
          this.loading = false;
        }));    
      
      }}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    background: #000;
    color: white;
    position: fixed;
    text-align: center;
    font-size: 16pt;
    font-weight: normal;
    padding: 2%;
    top: 0;
    left: 0;
    width: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
  
  h1 {
    margin-top: 20%;
    font-size: 25pt;
  }

  h1 span {
    text-transform: capitalize;
  }

  h2 {
    font-size: 25pt;
    margin-bottom: 0;
  }

  #pokemon-image {
    height: 244px;
    width: 244px;
    margin: 0 auto;
  }

  ul#types {
    display: flex;
    max-width: 244px;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-top: 1%;
  }

  ul#types li {
    background-color: #979797;
    color: white;
    padding: 2% 10%;
    width: auto;
    text-transform: uppercase;
    font-size: 16pt;
    margin: 1%;
  }

  #more-info {
    margin-top: 2%;
  }

  #more-info > p, #more-info > ul {
    font-size: 15pt;
    line-height: 1.1em;
    padding: 0;
    margin: 0;
  }

  #more-info ul li {
    display: inline;
    margin: 0 2%;
    text-transform: lowercase;
  }

  p {
    font-weight: bold;
  }

  button {
    background-color: black;
    color: white;
    font-size: 25pt;
    font-weight: bold;
    padding: 5%;
    margin: 7% 0;
    border: none;
    cursor: pointer;
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
    h1 {
      margin-top: 10%;
    }

    #pokemon-image {
      height: 350px;
      width: 350px;
    }

    ul#types {
      width: 350px;
    }

    #more-info > p {
      font-size: 20pt;
    }

    button {
      padding: 3%;
    }
  }

  @media screen and (min-width: 990px) {

    header {
      padding: 1%;
    }

    h1 {
      font-size: 40pt;
      margin-top: 5%;
      width: 100%;
    }

    h2 {
      font-size: 33pt;
    }

    #pokemon-image {
      height: 475px;
      width: 475px;
    }

    ul#types {
      width: 475px;
    }

    #moreinfo > p {
      font-size: 30pt;
    }

    button {
      margin-top: 2%;
      padding: 1%;
    }

    footer {
      margin-top: 2;
      padding: 2%;
    }
  }
</style>
