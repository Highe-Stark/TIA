<template>
  <div class="container">
    <div>
      <header id="head">
        <img src="../assets/head.jpg" id="headdd" />
      </header>
      <navbargod />
    </div>
    <hr />
    <div id="row" class="slectMajor">
      <majors />
    </div>

    <div>
      <tabs2 />
    </div>
    <hr />
    <div class="col-sm-4" id="row">
      <div class="panel panel-danger box1" id="column">
        <div class="panel-heading">
          <h3 class="panel-title"><a href="">问答区</a></h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>
              <div class="panel panel-info box2" id="column">
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
#headdd{
  width:100%
}
body,td,th {
  font-family: Verdana, Arial, Helvetica, sans-serif;font-size: 12px;color: #1d1007; line-height:24px
}
.box1, .box2{

}
</style>
