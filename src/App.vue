<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
</style>
