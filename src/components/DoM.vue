<template>
  <div id="container">
    <div>
      <header id="head">
        <img src="../assets/head.jpg" id="headdd" />
      </header>
      <navbargod />
    </div>
    <hr />


  </div>
</template>

<script>
import navbargod from './navbargod.vue'
export default {
  name: 'DoM',
  babel: {
        presets: ['es2015']
    },
  components: {
    navbargod,
  }
}
</script>

<style>

</style>
