<template>
  <div id="container1" class="container">
    <div id="page">
      <h1 class="alert alert-primary">Comment</h1>
      <span id="cmt-pane" v-for="cmt in comments" v-bind:key="cmt.cmtWord" class="row">
        <div class="cmt row">
          <div>
            <img src="../assets/logo.png" alt="face" class="card-img-top img-circle cmt" height="45rem" width="45rem">
          </div>
          <div>
            <span v-html='cmt.cmtWord'></span>
          </div>
          <div>
            <p class="time">{{cmt.time}}</p>
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
    </div>
    <div id="input-pane" class="footer">
      <textarea class="form-control" id="user-cmt" placeholder="Give your comment here..."></textarea>
      <button id="post" class="btn btn-primary btn-block" v-on:click="issue" >
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
      t.value = t.value.replace('\n','<br/>')
      let day = new Date()
      let timetmp = day.getFullYear();
      let timeStr = timetmp + '年 '
      timetmp = day.getMonth();
      timeStr += timetmp + '月 '
      timetmp = day.getDate();
      timeStr += timetmp + '日 '
      timetmp = day.getHours();
      timeStr += timetmp + ':'
      timetmp = day.getMinutes();
      timeStr += timetmp;
      this.comments.push({ img: "@/assets/logo.png", time: timeStr, cmtWord: t.value, numSup: 0, numOpp: 0})
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

<style scoped>
#container1 {
  min-height: 100%;
  height: auto;
  height: 100%;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  background-color:rgba(75, 250, 192, 0.575);
}
#page {
  min-height: 100%;
  padding-bottom: 110px;
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
.time {
  font-size: 0.3rem;
  color: rgba(128, 134, 117, 0.75);
}
.footer {
  position: fixed;
  bottom: 0;
  width: 86%;
  height: 108px;
}
#post {
  margin-top: 0.35rem;
  margin-bottom:0.35rem;
}
</style>
