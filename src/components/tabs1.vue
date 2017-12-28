<template>
<div id="container">
<ul id="myTab" class="nav nav-tabs">
	<li class="active">
		<a href="#home" data-toggle="tab">
			 基本信息
		</a>
	</li>
	<li><a href="#ios" data-toggle="tab">授课老师</a></li>
	<li><a href="#data" data-toggle="tab">教材</a></li>
</ul>
<div id="myTabContent" class="tab-content">
	<div class="tab-pane fade in active" id="home">
		<p><span class="info">课程名称</span>：{{detailselected.name}}（{{detailselected.ename}}）</p>
		<p><span class="info">学分</span>：{{detailselected.credit}}</p>
		<p><span class="info">课时</span>：{{detailselected.lesson}}</p>
		<p><span class="info">平均分</span>：{{detailselected.average}}</p>
		<p><span class="info">最高分</span>：{{detailselected.highest}}</p>
		<p><span class="info">人数</span>：{{detailselected.number}}</p>
		<p><span class="info">挂科率</span>：{{detailselected.failRate}}</p>
	</div>
	<div class="tab-pane fade" id="ios">
		<div v-for="teacher in detailselected.teachers">
			<p><span class="info">教师</span>：{{teacher.name+' '}} <span class="info">平均分</span>：{{teacher.average}}</p>
		</div>
	</div>
	<div class="tab-pane fade" id="data">
		<p>
			<span class="info">书本</span>：{{detailselected.textbook}}
			
		</p>
		<!--<img v-bind:src="detailselected.picture" height="200" width="200"/>-->
	</div>
</div>
</div>
</template>

<script>
export default{
  name:"tabs",
	props:['detailselected'],

}
</script>

<style>
p{
	font-size: 15px;
}
</style>
