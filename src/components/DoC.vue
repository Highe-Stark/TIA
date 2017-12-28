<template>
  <div class="container">
    <div>
      <header id="head">
        <img src="../assets/head.jpg" id="headdd" />
      </header>
      <navbargod />
    </div>
    <hr />
    <div id="row" class="selectbar">
      <singleselect @pass="pass"></singleselect>
    </div>
    <br />
    <br />
  <div id="row">
    <tabs1 :detailselected="detailselected" />
  </div>
  <hr />
  </div>

</template>

<script>
import singleselect from './singleselect'
import details from './details.js'
import navbargod from './navbargod.vue'
import tabs1 from './tabs1.vue'


export default {
  name:"DoC",
  /*ready: function(){
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
            detailselected.average = item.average;
            detailselected.highest = item.highest;
            detailselected.number = item.number;
            detailselected.failRate = item.failRate;
            detailselected.teachers = item.teachers;
            detailselected.textbook = item.textbook;
        }
      }
  },*/

  data(){
      return{
        selectedid:this.$route.params.id,
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
              detailselected.average = item.average;
              detailselected.highest = item.highest;
              detailselected.number = item.number;
              detailselected.failRate = item.failRate;
              detailselected.teachers = item.teachers;
              detailselected.textbook = item.textbook;
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
    tabs1,
  }
}
</script>

<style>
#headdd{
  width:100%;
}
body,td,th {font-family: Verdana, Arial, Helvetica, sans-serif;font-size: 12px;color: #1d1007; line-height:24px}
.selectbar{

}
</style>
