<template>
<section >
  <head-bar headtext="问题详情"></head-bar>
  <div  id="qa-detail" class="container" style="background-color:white">
    <div class="col-xs-10 col-xs-offset-1 text-center panel panel-default"style="background-color: #FFFFFF;box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444">
      <div class ="panel-body">
      <p style="margin-top:25px">{{item.question}}</p>
      <p class="text-right" >{{'——'+item.name+' '+item.time}}</p>
    </div>
    </div>

    <div id="split-border" style="margin-top:150px"></div>
    <h1 class = "text-left" style="color: #2c3e50">回答区：</h1>
    <table class="table">
      <tbody class="text-center" v-for="ele in list">
        <td style="height:100px">
          <p>{{ele.answer}}</p>
          <p class="text-right" style="margin-right:100px;margin-bottom:0px">{{'——'+ele.name+' '+ele.time}}</p>
        </td>
      </tbody>
    </table>

    <br>
    <label class="field field_type2">
        <span class="field__label">名字：</span>
        <input class="field__input"  v-model="username" style="width: 600px;height: 25px;margin: 0px 0px 0px 10px">
        <span class="field__line"></span>
    </label>
    <br><br>
    <label class="field field_type1">
        <span class="field__label">回答：</span>
        <input class="field__input"  v-model="content" style="width: 600px;height: 100px;margin: 0px 0px 0px 10px">
    </label>
    <br>
    <button v-on:click="fx" class="btn btn-primary btn-sm active" style="margin: 10px 0px 0px 500px;" >提交</button>
  </div>
</section>
</template>

<script>
import HeadBar from './head-bar'
export default{
  name:'qa-detail',
  components: {
    HeadBar
  },
  data () {
    return {
      item: this.data.todos[this.$route.params.id],
      list: this.data.todos[this.$route.params.id].answers,
      username:'',
      content:'',
      show:false
    }
  },
  methods: {
      fx: function (event) {
            if (this.content=='') {
                alert('请输入回答内容！')
                return
            }
            var tempName = this.username
            if (this.username=='')
                tempName='匿名'
            var d=new Date()
            d+=''
            d=d.substr(3,20)
            var tempTime = d
            var tempContent=this.content
            this.list.push({name : tempName ,answer: tempContent ,time:tempTime})
            this.username =''
            this.content =''
        }
  }
}
</script>

<style>
#qa-detail {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
#split-border{
  border:1px solid grey;
  opacity: 0.3;
}
.panel{
  border-radius: 8px;
}
</style>
