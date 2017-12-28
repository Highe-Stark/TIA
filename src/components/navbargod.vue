<template>
<div id="container">
  <nav>
            <ul class="nav nav-justified">
              <li class="active"><a href="/"><span class="text-muted">首页</span></a></li>
              <li><a href="/DoM"><span class="text-muted">专业查询</span></a></li>
              <li><a href="/DoC"><span class="text-muted">课程查询</span></a></li>
              <li><a href="#"><span class="text-muted">资料下载</span></a></li>
              <li><a href="#"><span class="text-muted">关于我们</span></a></li>
              <li><a href="#"><span class="text-muted">联系方式</span></a></li>
            </ul>
          </nav>

</div>
</template>

<script>
export default {
  name: "navbargod",
  data(){
    return{
    style1:"",
    style2:"",
    style3:"",
  }
  },
  methods:{
    play1(){
      this.style1 = "active";
    },
    play2(){
      this.style2 = "active";
    },
    play3(){
      this.style3 = "active";
    },
  }
}
</script>

<style>
#logo{
  width:5%;
}
.nav-pills{

}
.text-muted{
  font-weight:600;
  font-size:medium;
  color:#af4155;
}
</style>
