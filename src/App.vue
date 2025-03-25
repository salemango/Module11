<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  body {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    text-align: center;
  }

  @media screen and (min-width: 990px) {
    #div-2 {
    text-align: left;
  }  
  }
  
</style>
