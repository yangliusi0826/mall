<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    let url = '/5e5fa191dc856429bc70dee9/example/query'
    this.$axios.get(url).then((resp) => {
      console.log('11111111111111')
      console.log(resp)
    })
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
