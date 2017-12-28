<template>
  <div class="container">
    <div>
      <header id="head">
        <img src="../assets/head.jpg" id="headdd" />
      </header>
      <navbargod />
    </div>
    <hr />
    <h4>功能待完善...</h4>
  </div>
</template>

<script>
import navbargod from './navbargod.vue'
export default {
  name: 'download',
  components: {
    navbargod
  }
}
</script>

<style>
#headdd{
  width:100%;
}
</style>
