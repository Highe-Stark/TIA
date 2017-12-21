<template>
  <div id="Comment" >
    <img id = 'face' src="../assets/face.png" alt="face" height="36rem" width="36rem" class="img-circle">
    <p class="card cmt" v-text='cmt'></p>
    <button v-on:click="numSup = numSup + 1" value=" ^ " class="btn btn-primary">Support</button>
    <button v-on:click="numOpp = numOpp + 1" value=" v " class="btn btn-primary">Oppose</button>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: [
    'cmmt'
  ],
  data: function() {
    return { img: this.cmmt.fimg, cmt: this.cmmt.fcmt, numSup: this.cmmt.Sup, numOpp: this.cmmt.Opp };
  },
  computed: {
    createCmt: function() {
      let faceImg = document.getElementById('face');
      faceImg.src=this.img;
    }
  }
}
</script>

<style>
#comment {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
