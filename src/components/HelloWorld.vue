<template>
  <div class="hello">
    <Major-component></Major-component>
  </div>
</template>

<script>
import Major from './Major.vue'
export default {
  name: 'HelloWorld',
  components: {
    'Major-component': Major
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
