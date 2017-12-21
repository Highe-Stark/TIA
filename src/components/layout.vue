<template>
  <div id="layout" class="container">
    <div class="alert alert-primary">Comment</div>
    <span class="cmt">
      <p>
      <Comment></Comment>
      </p>
    </span>
    <a v-for="cmt in comments" v-bind:key="cmt.cmtWord">
      <div class="card cmt" style="height: 8rem">
        <img src="../assets/logo.png" alt="face" class="card-img-top img-circle cmt" height="30rem" width="30rem">
        <div class="card-body">
          <p class="card-text">{{cmt.cmtWord}}</p>
        </div>
      </div>
    </a>
    <div class="container">
      <textarea class="form-control" id="user-cmt" placeholder="Give your comment here..."></textarea>
      <button class="btn btn-primary" v-on:click="issue">Submit</button>
    </div>
  </div>
</template>

<script>
import Comment from './comment'
export default {
  name: 'layout',
  components: {
    Comment
  },
  data: {
    comments:[
      { img: "@/assets/logo.png", cmtWord: "This class is good" },
      { img: "@/assets/logo.png", cmtWord: "Fantastic!"}
    ]
  },
  data() {
    return this.comments;
  },
  methods: {
    issue() {
      let t = document.getElementById("user-cmt");
      console.log(t.value);
      this.comments.push({ img: "@/assets/logo.png", cmtWord: t.value})
    }
  }
}
</script>

<style>
#layout {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  background-color:aquamarine;
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
