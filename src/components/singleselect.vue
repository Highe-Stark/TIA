<template>
  <div>
  <div class="functional-select-wrapper" v-on:click.stop="singleFocus()">
    <label class="display-container clearfix" v-bind:class="(show)?'single-selected-focus':''">
              <p v-show="selected.id == '' ">
                  <span v-if="originOptions.length != 0 ">请选择</span>
                  <span v-else>没有选项</span>
              </p>
              <p class="single-selected">{{ selected.name }}</p>
      <i class="drop" v-bind:class="(show)?'drop-up':''">▼</i>
    </label>
          <div class="options-container" v-show="show">
              <div class="search-container">
                  <input placeholder="输入课程名称或编码查询" class="search-input" v-model="search" v-on:keyup="singleSearch()" v-on:click.stop />
              </div>
              <ul class="options-ul-list">
                  <li v-show="displayOptions.length == 0">没有查询到数据</li>
                  <li v-for="item in displayOptions" v-on:click.stop.prevent="singleSelect(item.id)" v-bind:class=" (item.id == selected.id)?'selected':'' ">{{ item.name }}</li>
              </ul>
          </div>
      </div>
    </div>
</template>

<script>
import originOptions from './curriculum.js'
export default {
  name: 'single-select',
  data(){
    return{
      originOptions,
      displayOptions: [],
      show: false,
      search: '',
      selected: {
          id: "",
          name: ""
    }
  }
},
  ready: function(){
		window.addEventListener('click',this.blur)
	},
   methods:{
          singleFocus: function(){
              if (!this.show){
                  document.body.click();
                  console.log('single show')
                  this.show = true;
                  this.singleSearch();
                  this.searchInputFocus();
              }
              else{
                  this.blur();
              }
          },
          searchInputFocus: function(){
              var searchInput = this.$el.getElementsByClassName('search-input')[0];

              this.$nextTick(function(){
                  searchInput.focus();
              })

          },
          singleSelect: function(id){
              var mySelf = this;
              var displayOptions = mySelf.displayOptions;
              for (var i=0; i<displayOptions.length;i++){
                  var item = displayOptions[i]
                  if (item.id == id){
                      var selected = mySelf.selected;
                      selected.id = item.id
                      selected.name = item.name
                  }
              }
              mySelf.show = false;
              this.search = '';
              this.$dispatch('selected', this.selected)
          },
          singleSearch: function(){
              var mySelf = this;
              var search = mySelf.search;
              var REG_RULE = new RegExp(search,"i")
              var originOptions = mySelf.originOptions;
              mySelf.displayOptions = [];

              for (var i=0;i<originOptions.length;i++){
                  var item = originOptions[i]
                  if (REG_RULE.test(item.name)){
                      mySelf.displayOptions.push(item)
                  }
              }
          },
          blur: function(){
              console.log('hide single！！')
              this.show = false;
              this.search = '';
          }
  	},
  }

</script>

<style>
  @import '../../static/select-vue-component.css'
</style>
