<template>
<div>
    <div class="container" >
        <img src="../assets/Christmas3.png">
        <div class="row">
            <div class="col-xs-5 col-xs-offset-1">
                <div class="panel panel-danger">
                    <div class="panel-heading">
                    <h3 class = "panel-title">专业查询</h3>
                    </div>
                    <div class="panel-body">
                            <div class="functional-select-wrapper" v-on:click.stop="singleFocus()" id="box1">
                                <label for = "专业选择" class ="display-container clearfix" v-bind:class="(show)? 'single-select-focus':''">
                                            <p v-show="selected.id==''">
                                                <span v-if="originOptions.length != 0">请选择</span>
                                                <span v-else>没有选项</span>
                                            </p>
                                            <p class="single-selected">{{selected.name}}</p>
                                    <i class="drop" v-bind:class="(show)?'drop-up':''">▼</i>
                                </label>
                                    <div class="options-container" v-show="show">
                                        <div class="search-container">
                                            <input placeholder="输入专业名称查询" class="search-input" v-model="search" v-on:keyup="singleSearch()" v-on:click.stop />
                                        </div>
                                        <ul class="option-ul-list bb" >
                                            <li v-show= "displayOptions.length ==0 ">没有查询到数据</li>
                                            <li v-for= "item, index in displayOptions" v-on:click.stop.prevent="singleSelect(item.id)" v-bind:key =" (item.id == selected.id)?'selected':'' ">
                                                <p class="finger" v-bind:style="{'background-color': (index === current_chosen) ? '#00eeee' : '#ffffff'}" v-on:mouseover="current_chosen=index;" @mouseleave="current_chosen=-1;">{{item.name}}</p>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            <div id="box2">
                                <router-link to="/DoM"><button class="btn btn-danger pull-right" >查询</button></router-link>
                            </div>
                    </div>
                </div> <!-- end major panel-->
            </div><!--end major column-->
        <Class-component></Class-component>
        </div><!--end row-->
    </div>
</div>
</template>

<script>
    import Class from "./Class.vue";
    import originOptions from "./Majors.js";

    export default {
        name: 'Major',
        components:{
            'Class-component':Class,
        },

        data(){
            return {
                //Todo : local data here
                majorSuccessClass: '',
                majorIconClass:'',
                originOptions,
                displayOptions: [],
                show: false,
                search: "",
                selected: {
                    id: "",
                    name: ""
                },
                current_chosen: -1,//mouseover event
            }
        },
        ready: function() {
            window.addEventListener("click", this.blur);
        },
        methods:{
            //checkMajorValidation : function(){
                //Todo : check the major validation
            //    if(this.$refs.txtMajor.checkValidity()){
            //        this.majorSuccessClass='has-success',
            //        this.majorIconClass='glyphicon glyphicon-ok form-control-feedback'
            //    }
            //    else{
            //        this.majorSuccessClass='has-error',
            //        this.majorIconClass='glyphicon glyphicon-remove form-control-feedback'
            //    }
            //},
            //InquireMajor : function(){
                //Todo : inquire for major information
            //},
            //InquireClass : function(){
                //Todo : inquire for class information
            //},
            myEmit(){
                this.$emit('pass',this.selected.id)
            },
            singleFocus: function() {
                if (!this.show) {
                    document.body.click();
                    console.log("single show");
                    this.show = true;
                    this.singleSearch();
                    this.searchInputFocus();
                }
                else {
                    this.blur();
                }
            },
            searchInputFocus: function() {
                var searchInput = this.$el.getElementsByClassName("search-input")[0];
                this.$nextTick(function() {
                    searchInput.focus();
                });
            },
            singleSelect: function(id) {
                var mySelf = this;
                var displayOptions = mySelf.displayOptions;
                for (var i = 0; i < displayOptions.length; i++) {
                    var item = displayOptions[i];
                    if (item.id == id) {
                        var selected = mySelf.selected;
                        selected.id = item.id;
                        selected.name = item.name;
                    }
                }
            mySelf.show = false;
            this.search = '';
            //this.$dispatch("selected", this.selected);
            },
            singleSearch: function() {
                var mySelf = this;
                var search = mySelf.search;
                var REG_RULE = new RegExp(search, "i");
                var originOptions = mySelf.originOptions;
                mySelf.displayOptions = [];

                for (var i = 0; i < originOptions.length; i++) {
                    var item = originOptions[i];
                    if (REG_RULE.test(item.name)) {
                        mySelf.displayOptions.push(item);
                    }
                }
            },
            blur: function() {
                console.log("hide single！！");
                this.show = false;
                this.search = "";
            }
        }
    
    }

</script>

<style >
/*@import '../../static/select-vue-component.css'*/
  @charset "UTF-8";
  body,div,section,ul,li,p,img,dl,dt,dd,table,tr,td,input,button,h1,h2,h3,h4,h5,h6,fieldset{margin: 0px;padding: 0px;font-family: "Microsoft Yahei";}
  input{
  	border: 1px solid #ccc;
  	outline:0;
  	transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  input:focus,select:focus,textarea:focus{
  	border-color: rgba(82,168,236,.8);
  	box-shadow: 0 0 8px rgba(82,168,236,.6);
  }
  .btn{
    background-color:#e96d6d;
  }
  .clearfix:after {content: "."; height: 0px; display: block; clear: both; visibility: hidden;}

  h3{
  	margin: 20px;
  }

  #box1{
    float:left
  }

  .wrapper{
  	width: 800px;
  	margin: 20px 0px 50px 20px;
  }

  /*功能下拉框 整体壁纸*/
  .functional-select-wrapper{
  	width: 80%;
  	position: relative;
  	font-size: 14px;
  }

  /*展示容器*/
  .functional-select-wrapper .display-container{
  	width: 100%;
  	min-height: 40px;
  	box-sizing: border-box;
  	position: relative;
  	display: block;
  	padding: 6px 12px 6px 80px;
  	color: #555;
  	background-color: #FFF;
  	border: 1px solid #CCC;
  	border-radius: 4px;
  	word-break: break-all;
  	cursor: pointer;
  }

  .functional-select-wrapper .display-container .single-selected{
  	float: left;
  }

  /*单选 搜索框获取焦点后 display-container下边框圆弧去掉radius*/
  .functional-select-wrapper .single-selected-focus{
  	border-bottom-left-radius: 0px;
  	border-bottom-right-radius: 0px;
  	transition: all 0.5s ease;
  }

  .functional-select-wrapper .display-container .drop{
  	position: absolute;
  	top: 4px;
  	right: 6px;
  	float: right;
  	font-style: normal;
  	transition: all 0.5s ease;
  }

  .functional-select-wrapper .display-container .drop-up{
  	transform: rotate(180deg);
  }

  /*选项容器*/
  .functional-select-wrapper .options-container{
  	width: 100%;
  	border: 1px solid #CCC;
  	background-color: #FFF;
  	position: absolute;
  	top: 100%;
  	margin-top: -1px;
  	box-sizing: border-box;
  	border-bottom-left-radius: 4px;
  	border-bottom-right-radius: 4px;
  	overflow: hidden;
  	z-index: 1;
  }

  .functional-select-wrapper .options-container .search-container{
  	display: block;
  	padding: 5px;
  }

  .functional-select-wrapper .options-container .search-container input{
  	width: 100%;
  	height: 30px;
  	box-sizing: border-box;
  	padding-left: 6px;
  	display: block;
  	border-radius: 4px;
  }

  .functional-select-wrapper .options-container .options-ul-list{
  	max-height: 160px;
  	list-style-type: none;
  	overflow-x: visible;
  	overflow-y: auto;
  	cursor: pointer;
  }

  .functional-select-wrapper .options-container .options-ul-list li{
  	height: 32px;
  	line-height: 20px;
  	box-sizing: border-box;
  	text-indent: 5px;
  	padding: 6px;
  }

  .functional-select-wrapper .options-container .options-ul-list li:hover{
  	background-color: #5897fb;
  	color: #FFF;
  	transition: all 0.3s ease;
  }

  .functional-select-wrapper .options-container .options-ul-list .selected{
  	background-color: #DDD;
  }
  /*单个选中的item*/
  .functional-select-wrapper .multiple-selected-item{
  	width: auto;
  	height: 20px;
  	line-height: 15px;
  	box-sizing: border-box;
  	margin: 0px 5px 5px 0px;
  	padding: 2px 15px 2px 6px;
  	border: 1px solid #ccc;
  	border-radius: 4px;
  	display: inline-block;
  	position: relative;
  	float: left;
  	background: #eee;
  }

  .functional-select-wrapper .multiple-selected-item i{
  	font-style: normal;
  	position: absolute;
  	right: 3px;
  	top: 0px;
  	cursor: pointer;
  	color: #aaa;
  }

  .functional-select-wrapper .multiple-selected-item i:hover{
  	font-weight: bolder;
  	color: #000;
  }
  .bb{
    text-align:left;
  }

  .finger {
      cursor: pointer;
      text-align: center;
  }
</style>
