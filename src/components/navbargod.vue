<template>
<div id="container">
  <nav>
            <ul class="nav nav-justified">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
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
</style>
