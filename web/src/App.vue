<template>
  <HelloWorld />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --cardRadius: 1em;
  --cardMargin: 1em;
  --cardPadding: 1em;
  --extrasmallTextSize: 50%;
  --smallTextSize: 75%;
  --mediumTextSize: 100%;
  --largeTextSize: 150%;
  --extralargeTextSize: 200%;
  --primaryColor: #045775;
  --secondaryColor: #49b60e;
  --longButton: 3%;
  --boxButton: 1em;
}
</style>
