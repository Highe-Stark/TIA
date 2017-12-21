<template>
  <div id="layout" class="container">
    <div class="alert alert-primary">Comment</div>
    <div v-for="cmt in comments" v-bind:key="cmt.cmtWord">
      <!--<div class="card cmt" style="height: 8rem">
        <img src="../assets/logo.png" alt="face" class="card-img-top img-circle cmt" height="30rem" width="30rem">
        <div class="card-body">
          <p class="card-text">{{cmt.cmtWord}}</p>
        </div>
      </div>-->
      <comment :comment='cmt'></comment>
    </div>
    <div class="container">
      <textarea class="form-control" id="user-cmt" placeholder="Give your comment here..."></textarea>
      <button class="btn btn-primary" v-on:click="issue">Submit</button>
    </div>
  </div>
</template>

<script>
import comment from './comment'
export default {
  name: 'layout',
  components: {
    comment
  },
  data() {
    return {
      comments:[
        { fimg: "@/assets/logo.png", fcmt: "This class is good", Sup: 0, Opp: 0 },
        { fimg: "@/assets/logo.png", fcmt: "Fantastic!", Sup: 0, Opp: 0 }
      ]
    }
  },
  methods: {
    issue() {
      let t = document.getElementById("user-cmt");
      this.comments.push({ fimg: "@/assets/logo.png", fcmt: t.value, Sup: 0, Opp: 0});
      t.value=""
    }
  }
}
</script>

<style>
#layout {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  background-color:rgb(175, 247, 247);
}
h1 {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ivory;
  background-color: aqua;
}
.cmt {
  text-align: left;
  padding:0.5rem;
  font-size: large;
}
</style>
