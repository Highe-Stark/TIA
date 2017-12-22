<template>
  <div id="qa" class="container">
      <table class="table table-hover">
	       <caption style="font-size:40px;color: #2c3e50">问答区</caption>
          <thead>
            <tr>
              <th class="text-center">问题</th>
              <th class="text-center">提问人</th>
              <th class="text-center">时间</th>
            </tr>
          </thead>
          <tbody v-for="todo in todos">
            <tr>
              <td>{{todo.question}}</td>
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
  name: 'qa',
  data () {
    return {
       todos:[
           { name : '516030910297' ,question : '为什么骑自行车时腿前摆是车会明显减速，摆到最大幅度时速度几乎为零，且比摆腿前慢很多？' ,time :'Nov 23 2016 16:12:05 '},
           { name : '516021910745' ,question : '光谱的定义到底是什么，有一种定义为衍射条纹中第一色条纹到最后一色条纹的距离即为光谱，还有一种定义为光栅衍射中中央主极大到第一个缺级处的距离。那么，光谱到底是什么？', time :'Nov 23 2016 16:12:05 '},
           { name : '516030910114' ,question : '满足哪些条件时才可以在地球上用肉眼观测到引力透镜的现象。', time:'Nov 23 2016 16:12:05 '}
       ],
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
#qa {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
