<template>
  <div id = "qa-index" class="container text-center">
    <div align="left">
      <a href='/' class="btn">
        <span class="glyphicon glyphicon-home"></span>
      </a>
    </div>
      <table class="table table-hover">
	       <caption style="font-size:40px;color: #2c3e50">问答区</caption>
          <thead>
            <tr>
              <th class="text-center">问题</th>
              <th class="text-center">提问人</th>
              <th class="text-center">时间</th>
            </tr>
          </thead>
          <tbody v-for="(todo, index) in todos">
            <tr>
              <td class="text-left"><router-link :to="{ name: 'qaDetail', params:{id: index} }">{{todo.question}}</router-link></td>
              <td>{{todo.name}}</td>
              <td>{{todo.time}}</td>
            </tr>
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
        <span class="field__label">问题：</span>
        <input class="field__input"  v-model="content" style="width: 600px;height: 100px;margin: 0px 0px 0px 10px">
    </label>
    <br>
    <button v-on:click="fx" class="btn btn-primary btn-sm active" style="margin: 10px 0px 0px 500px;" >提交</button>
  </div>
</template>

<script>
export default {
  name: 'qaindex',
  data () {
    return {
       todos: this.data.todos,
       username:'',
       content:'',
       show:false
    }
  },
  methods: {
      fx: function (event) {
            if (this.content=='') {
                alert('请输入问题内容！')
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
            this.todos.push({name : tempName ,question: tempContent ,time:tempTime})
            this.username =''
            this.content =''
        }
  }
}
</script>

<style>
#qa-index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
</style>
