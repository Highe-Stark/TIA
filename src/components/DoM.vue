<template>
  <div class="container">
    <div>
      <header id="head">
        <img src="../assets/head.jpg" id="headdd" />
      </header>
      <navbargod />
    </div>
    <hr />
    <div id="row">
      <singleselect @pass="pass"></singleselect>
    </div>
  <div id="row">
    <tabs :detailselected="detailselected" />
  </div>

  </div>
</template>

<script>
import singleselect from './singleselect'
import details from './details.js'
import navbargod from './navbargod.vue'
import tabs from './tabs.vue'
export default {
  name:"DoM",
  data(){
      return{
        selectedid:null,
        details,
        detailselected:{
          id:"",
          name:"",
          ename:"",
          src:"",
          credit:"",
          lesson:"",
        },
      }
  },
  methods: {
    pass(id){
      this.selectedid = id;
      var details = this.details;
      var id = this.selectedid;
      for (var i=0; i<details.length;i++){
          var item = details[i]
          if (item.id == id){
              var detailselected = this.detailselected;
              detailselected.id = item.id;
              detailselected.name = item.name;
              detailselected.ename = item.ename;
              detailselected.src = item.src;
              detailselected.lesson = item.lesson;
              detailselected.credit = item.credit;
          }
        }
    },
  },
  babel: {
        presets: ['es2015']
    },
  components: {
    singleselect,
    navbargod,
    tabs,
  }
}
</script>

<style>
#headdd{
  width:100%;
}

</style>
