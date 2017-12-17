<template>
  <div id="layout">
    <h1>{{greet}}</h1>
    <span class="cmt">
      <p>
      <Comment></Comment>
      </p>
    </span>
  </div>
</template>

<script>
import Comment from './comment'
export default {
  name: 'layout',
  components: {
    Comment
  },
  data() {
    return {"greet": "Welcome!"}
  }
}
</script>

<style>
#id {
  margin: 0.3rem;
  padding: 0.12rem;
  background-color:aquamarine;
}
h1 {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: red
}
.cmt {
  text-align: left;
}
</style>
