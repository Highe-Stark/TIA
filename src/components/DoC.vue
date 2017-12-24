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
<p>{{selectedid}}</p>
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
  watch: {
    '$route': 'getParams'
},
  methods: {
    getParams () {
        // 取到路由带过来的参数
        var sid = this.$route.query.id;
        // 将数据放在当前组件的数据内
        this.selectedid = sid;
      },

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
