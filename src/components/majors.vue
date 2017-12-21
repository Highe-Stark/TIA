<template>
  <div class="city-select">
     <select v-model="selectedCollege" name="college">
       <option v-for="(item, index) in colleges"
         v-if="item.level === 1"
         :value="item">
         {{ item.name }}
       </option>
     </select>
     <select v-model="selectedClass" name="class">
       <option
         v-for="(item, index) in classes"
         :value="item">
         {{ item.name }}
       </option>
     </select>
     <select v-model="selectedMajor" name="major">
       <option
         v-for="(item, index) in majors"
         :value="item">
         {{ item.name }}
       </option>
     </select>
   </div>
</template>

<script>
import colleges from './colleges.js'
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
     // 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
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
       // 此时在渲染DOM,渲染结束之后再选中第一个
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
       // 选择了一个市,要选择区了 di是城市的代表,sheng
       
         this.majors = this.colleges.filter(item => {
           if (item.level === 3 && item.yuan && item.yuan == newVal.yuan && item.lei === newVal.lei) {
             return true
           }
         })
       var _this = this
       Vue.nextTick(() => {
         _this.selectedMajor = _this.majors[0]
         // 触发与 v-model相关的 input事件
         _this.$emit('input', _this.info)
       })
     }
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

</style>
