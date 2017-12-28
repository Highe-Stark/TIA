<template>
  <nav class ="navbar navbar-default navbar-fixed-top" style="height:60px">
    <div>
      <div class = "container-fluid">
        <a onclick = "history.back()" class="navbar-brand glyphicon glyphicon-menu-left"></a>
        <p class="navbar-brand text-center" style="font-size:30px;color: #2c3e50"> {{headtext}}</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:'head-bar',
  props:['headtext']
}
</script>

<style scoped>

p{
  margin-top: 15px;
  width:95vw;
}
.navbar-header a{
  padding-left: 15px;
  padding-right:0px;
}

</style>
