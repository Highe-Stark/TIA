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

    <div>
      <tabs2 />
    </div>
    <hr />
    <div class="col-sm-4">
      <div class="panel panel-danger box1">
        <div class="panel-heading">
          <h3 class="panel-title"><a href="">问答区</a></h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>
              <div class="panel panel-info box2">
                <div class="panel-heading">
                  <h3 class="panel-title"><a href="">评论区</a></h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>

    </div>
  </div>
</template>

<script>
import majors from './majors.vue'
import navbargod from './navbargod.vue'
import tabs2 from './tabs2.vue'
import layout from './layout.vue'
export default {
  name: 'DoM',
  babel: {
        presets: ['es2015']
    },
  components: {
    navbargod,
    majors,
    tabs2
  }
}
</script>

<style>
.box1, .box2{

}
</style>
