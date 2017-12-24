<template>
  <div id="container">
    <div>
      <header id="head">
        <img src="../assets/head.jpg" id="headdd" />
      </header>
      <navbargod />
    </div>
    <hr />
    <div id="selectMajor">
      <majors />
    </div>


  </div>
</template>

<script>
import majors from './majors.vue'
import navbargod from './navbargod.vue'
export default {
  name: 'DoM',
  babel: {
        presets: ['es2015']
    },
  components: {
    navbargod,
    majors
  }
}
</script>

<style>

</style>
