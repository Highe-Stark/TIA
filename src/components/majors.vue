<template>
  <div>
  <p style="display:none">请选择专业</p>
  <div class="major-select">
     <select v-model="selectedCollege" name="college" class="selectpicker btn btn-danger">
       <option v-for="(item, index) in colleges"
         v-if="item.level === 1"
         :value="item">
         {{ item.name }}
       </option>
     </select>
     <select v-model="selectedClass" name="class" class="selectpicker btn btn-danger">
       <option
         v-for="(item, index) in classes"
         :value="item">
         {{ item.name }}
       </option>
     </select>
     <select v-model="selectedMajor" name="major" class="selectpicker btn btn-danger">
       <option
         v-for="(item, index) in majors"
         :value="item">
         {{ item.name }}
       </option>
     </select>
  </div>
  <div>
    <tabs2 v-bind:detailselected= "this.selectedMajor" ></tabs2>
  </div>
</div>
</template>

<script>
import colleges from './colleges.js'
import tabs2 from './tabs2.vue'
import Vue from 'vue'
export default {
  name: 'majors',
  data () {
    return{
      selectedCollege: colleges[0],
      selectedClass: 0,
      selectedMajor: 0,
      classes: 0,
      colleges,
      majors: 0
    }
  },
  created() {
     let dianyuan = this.colleges.slice(0, 16)
     this.classes = dianyuan.filter(item => {
       if (item.level === 2) {
         return true
       }
     })
     this.selectedClass = this.classes[0]
     this.majors = dianyuan.filter(item => {
       if (item.level === 3) {
         return true
       }
     })
     this.selectedMajor = this.majors[0]
   },
  watch: {
     selectedCollege(newVal, oldVal) {
         this.classes = this.colleges.filter(item => {
           if (item.level === 2 && item.yuan && newVal.yuan === item.yuan) {
             return true
           }
        })
       var _this = this
       Vue.nextTick(() => {
         _this.selectedClass = _this.classes[0]
         _this.$emit('input', _this.info)
       })
     },

     selectedMajor() {
       var _this = this
       Vue.nextTick(() => {
         _this.$emit('input', _this.info)
       })
     },
     selectedClass(newVal) { 
         this.majors = this.colleges.filter(item => {
           if (item.level === 3 && item.yuan && item.yuan == newVal.yuan && item.lei === newVal.lei) {
             return true
           }
         })
       var _this = this
       Vue.nextTick(() => {
         _this.selectedMajor = _this.majors[0]
         _this.$emit('input', _this.info)
       })
     }
   },
  components:{
    tabs2
  },
  computed: {
     info() {
       return {
         college: this.selectedCollege,
         class: this.selectedClass,
         major: this.selectedMajor
       }
     }
   },

  methods: {
  },
}
</script>

<style>
.btn-danger{
  background-color:#e96d6d
}
pre {
white-space: pre-wrap; /*css-3*/
white-space: -moz-pre-wrap; /*Mozilla,since1999*/
white-space: -pre-wrap; /*Opera4-6*/
white-space: -o-pre-wrap; /*Opera7*/
word-wrap: break-word; /*InternetExplorer5.5+*/
}

</style>
