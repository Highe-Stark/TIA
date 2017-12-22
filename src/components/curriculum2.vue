<template>
  <div>
    <div class="wrapper">
      <h3>单选</h3>
      <singleselect v-bind:optionsdata="single.originOptions" v-bind:selecteddata="single.selected" v-on:selected="singleCallback"></singleselect>

    </div>
    <div class="wrapper" style="display: none">
        <h3>单选</h3>
        <div class="functional-select-wrapper">
            <!-- 展示 -->
            <label class="display-container clearfix" for="functional-select-search">
                <p class="single-selected">lemon</p>
                <i class="drop">▼</i>
            </label>
            <!-- 下拉 -->
            <div class="options-container">
                <div class="search-container">
                    <input placeholder="search here" id="functional-select-search" />
                </div>
                <ul class="options-ul-list">
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </div>
      </div>
  </div>
</div>
</template>

<script>
import singleselect from './singleselect'
export default {
  name: 'curriculum',
  data(){
    return{
      single: {
            originOptions: [],
            selected: {}
        },
    }
  },
  babel: {
        presets: ['es2015']
    },
  components: {
    singleselect
  },
  ready: function() {
		this.queryData();
	},
  methods: {
    queryData: function(){
      var mySelf = this
            //do ajax here

            // 单选
      mySelf.single.originOptions = [{"id":"1","name":"lemon"},{"id":"2","name":"mike"},{"id":"3","name":"lara"},{"id":"4","name":"zoe"},{"id":"5","name":"steve"},{"id":"6","name":"nolan"}];
      mySelf.single.selected = {"id":"6","name":"nolan"}

      this.$nextTick(function(){

      })
    },
  },
  singleCallback: function(data){
            this.single.selected = data;
            // console.log('父级元素调用singleCallback 选中的是' + JSON.stringify(data))
        },
}
</script>

<style>

</style>
