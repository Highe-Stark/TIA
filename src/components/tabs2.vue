<template>
<div id="container" style="margin-top:20px">
<ul id="myTab" class="nav nav-tabs">
	<li class="active">
		<a href="#home" data-toggle="tab">
			 专业简介
		</a>
	</li>
	<li>
		<a href="#ios" data-toggle="tab">
			培养计划
		</a>
	</li>
	<li>
		<a href="#data" data-toggle="tab">
			 毕业情况
		</a>
	</li>
</ul>
<div id="myTabContent" class="tab-content">
	<div class="tab-pane fade in active" id="home">
		<pre class = "text-left">{{detailselected.information}}</pre>
	</div>
	<div class="tab-pane fade" id="ios"  style="margin-top:20px">
		<div v-for="item in detailselected.data">
			<img v-bind:src="item.sources" />
		</div>

	</div>
	<div class="tab-pane fade" id="data">
		<br />
		<img v-bind:src="detailselected.data1" height="380" width="700"/>

		<img v-bind:src="detailselected.data2" height="380" width="700" style="margin-top:50px" />
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
pre{
	margin-top: 20px;
	font-size: 18px
}
</style>
