<template>
  <img src="./assets/logo.png" alt="Vue logo">
  <Counter title="Entraron" v-bind:start="1+3"/>
  <Counter :start="6" />
  <Counter />
</template>

<script>

import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
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
</style>
