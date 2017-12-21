<template>
  <div id="layout" class="container">
    <h1 class="alert alert-primary">Comment</h1>
    <p id="none" class="white-space: pre-line">{{nothing}}</p>
    <span id="cmt-pane" v-for="cmt in comments" v-bind:key="cmt.cmtWord" class="row">
      <div class="cmt row">
        <img src="../assets/logo.png" alt="face" class="card-img-top img-circle cmt" height="45rem" width="45rem">
        <div>
          <span v-html='cmt.cmtWord'></span>
        </div>
        <button type="button" v-on:click="support(cmt)" class="btn btn-primary btn-sm">
          <span class="glyphicon glyphicon-chevron-up"></span>
          <span class="badge">{{cmt.numSup}}</span>
        </button>
        <button type="button" v-on:click="oppose(cmt)" class="btn btn-primary btn-sm">
          <span class="glyphicon glyphicon-chevron-down"></span>
          <span class="badge">{{cmt.numOpp}}</span>
        </button>
      </div>
    </span>
    <div id="input-pane">
      <textarea class="form-control" id="user-cmt" placeholder="Give your comment here..."></textarea>
      <button class="btn btn-primary btn-block" v-on:click="issue" style="margin-top: 0.35rem; margin-bottom:0.35rem">
        <span class="glyphicon glyphicon-send"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      nothing:'',
      comments:[
      ]
    }
  },
  methods: {
    issue() {
      let t = document.getElementById("user-cmt")
      if (t.value===""){
        alert("Blank Comment!")
        return
      }
      t.value = t.value.replace('\n','<br />')
      this.comments.push({ img: "@/assets/logo.png", cmtWord: t.value, numSup: 0, numOpp: 0})
      t.value=""
    },
    support(cmt) {
      cmt.numSup = cmt.numSup + 1
    },
    oppose(cmt) {
      cmt.numOpp = cmt.numOpp + 1
    }
  }
}
</script>

<style>
#layout {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  background-color:rgba(75, 250, 192, 0.575);
}
h1 {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ivory;
  background-color: aqua;
}
.cmt {
  margin-top:0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  text-align: left;
  padding:0.5rem;
  font-size: large;
}
#input-pane {
  margin-top: 0.8rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}
</style>
