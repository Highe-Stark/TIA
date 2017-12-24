<template>
<div id="container">
<ul id="myTab" class="nav nav-tabs">
	<li class="active">
		<a href="#home" data-toggle="tab">
			 基本信息
		</a>
	</li>
	<li><a href="#ios" data-toggle="tab">经验</a></li>
	<li><a href="#data" data-toggle="tab">数据</a></li>
</ul>
<div id="myTabContent" class="tab-content">
	<div class="tab-pane fade in active" id="home">
		<p><span class="info">课程名称</span>：{{detailselected.name}}（{{detailselected.ename}}）</p>
		<p><span class="info">学分</span>：{{detailselected.credit}}</p>
		<p><span class="info">课时</span>：{{detailselected.lesson}}</p>
		<p>假装填些内容</p>
		<p>假装填些内容</p>
		<p>假装填些内容</p>
		<p>假装填些内容</p>
		<p>假装填些内容</p>
		<p>假装填些内容</p>
	</div>
	<div class="tab-pane fade" id="ios">
		<p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple
			TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>
	</div>
	<div class="tab-pane fade" id="data">
		<p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
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
</style>
