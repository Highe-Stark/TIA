<template>
  <div id="app">
   <img src="./assets/Christmas3.png">
    <router-view></router-view>
  </div>
</template>

<script>
import Major from './components/Major'
export default {
  name: 'app',
  components: [
    Major
  ]
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
