<template>
  <div id='QA'>
    <ul>
        <li v-for="todo in todos">
            {{ todo.question }}
            <br>
        </li>
    </ul>
    <br>
    <label class="field field_type2">
        <input class="field__input" placeholder="" v-model="message2" style="width: 200px;height: 30px;margin: 0px 0px 0px 10px">
        <span class="field__label">Your name？</span>
        <span class="field__line"></span>
    </label>
    <br><br>
    <label class="field field_type1">
        <input class="field__input" placeholder="" v-model="message1"style="width: 470px;height: 100px;margin: 0px 0px 0px 10px">
        <span class="field__label">Please write down what you want to ask</span>
    </label>
    <br>
    <button v-on:click="fx" style="width: 50px; height:30px;margin: 0px 0px 0px 430px;" >commit</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'QA'
  data: {
      todos:[
          { question : 'when'}
          { question : 'where'}
          { question : 'how'}
      ],
      message1:'',
      message2:'',
      show:false
  },
  methods: {
      fx: function (event) {
            if (this.message1=='') {
                alert('请输入内容！')
                return
            }
            var tempName=this.message2+'：'
            if (this.message2=='')
                tempName='Nameless：'
            var d=new Date()
            d+=''
            d=d.substr(3,20)
            d='——'+d
            var tempElement=tempName+this.message1+d
            this.todos.push({text: tempElement})
            this.message1=''
        }
  }
}
</script>

<style>
#QA {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
