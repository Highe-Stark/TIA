<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-link to="/components/comment">Comment Pane</router-link>-->
    <!--<layout></layout>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
  // components: [
  //  layout
  // ]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
