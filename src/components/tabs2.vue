<template>
<div id="container">
<ul id="myTab" class="nav nav-tabs">
	<li class="active">
		<a href="#home" data-toggle="tab">
			 基本信息
		</a>
	</li>
	<li><a href="#ios" data-toggle="tab">培养计划</a></li>
	<li>
		<a href="#data" data-toggle="tab">
			 数据
		</a>
	</li>
</ul>
<div id="myTabContent" class="tab-content">
	<div class="tab-pane fade in active" id="home">
		<p>假装这里有详情</p>
		<p></p>
		<p></p>
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
