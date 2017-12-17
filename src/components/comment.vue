<template>
  <div app=Comment>
    <!--<h1>Comment Pane</h1>-->
    <!--<p>Welcome to comment pane, make comments about course/speciality here</p>-->
    <img src="../assets/face.png" alt="face" height="36rem" width="36rem"/>
    <p>{{comment}}</p>
    <!--<div id="cmt">Comments</div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data() {
    return { comment: "Good" }
  }
}
</script>

<style>
#comment {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
