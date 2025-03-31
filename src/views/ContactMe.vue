<template>

    <h1>Contact Me</h1>
    <p>Hi, I'm Salem Mangum! Contact me at @salemmangum@gmail.com.</p>
   
  </template>
  
  <script>
  
  export default {
    name: 'ContactMe',
    props: {
      msg: String
    },
  
    data() {
      return {
      }
    },
  
    methods: {
    },  
    
    computed: {
    },
  
    mounted() {  
      }}
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    
    h1 {
      margin-top: 30%;
      font-size: 25pt;
    }
  
    h1 span {
      text-transform: capitalize;
    }
  
    h2 {
      font-size: 25pt;
      margin-bottom: 0;
    }
  
    h3 {
      font-weight: bold;
    }
  
    p {
      font-size: 13pt;
      padding: 2%;
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
  
    @media screen and (min-width: 600px) {
      h1 {
        margin-top: 20%;
      }
      
      p {
        font-size: 16pt;
        color: #474747;
      }
    }
  
    @media screen and (min-width: 990px) {
  
      h1 {
        font-size: 40pt;
        margin-top: 15%;
        width: 100%;
      }
  
      h2 {
        font-size: 33pt;
      }
    }
  
    @media screen and (min-width: 1900px) {
      h1 {
        margin-top: 9%;
      }
    }
  </style>
  