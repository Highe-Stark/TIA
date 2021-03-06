教学信息查询
===========

> Teach Information assistant

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Introduction
    This program is aimed to provide convience to fetch information about specialities and courses for SJTUers.

## Structure

### · 首页
    
    三个按钮“专业”，“课程”，和一个用户账户按钮。
    点击“专业”可以输入院系、专业、入学年份，点击下方->箭头进行搜索；点击课程搜索课程。输入时搜索框下方列出相关候选项。
    
    若所查询专业分方向，或者该课程有多名老师开课，罗列搜索结果，点击跳转到对应专业详情页或者课程详情页

### · 专业详情页
    
    显示专业名称（+方向），专业简介，图形化表示就业率，出国率等数据，两个按钮分别跳转到问答区和评论区，显示培养计划。
    
    培养计划按年级分，显示专业课程安排，点击课程跳转课程详情页
    
    出国率，就业率等数据可以类似仪表盘

![仪表盘](.\img\Panel.png)

### · 课程详情页
    
    展示课程名称，老师，课程简介，显示评分，评分附近放评论区按钮。  
    简介下展示问答区部分质量高的问答，more按钮用于跳转到该问答区。  
    评论区只允许已登录、上过该课的同学评论。
    
### · 异常界面
    如果某门课程信息未导入，或者联网获取数据超时，显示异常界面。

## 项目框架
CSS: Bootstrap

Js: Vue.js

## 项目阶段
1. 页面设计  
    <2-3天>  
    完成上述四个页面的设计，业务逻辑。抓取教学信息服务网等网页内容暂不实现
2. 数据爬取，处理，展示  
    <5-7天>  
    实现抓取网页数据，处理数据并展示
3. 服务器  
    <3-4天>  
    搭建服务器，实现数据传输
4. 改善体验  
    优化使用体验


至少完成目标阶段2，后续根据时间考虑。第二阶段完成后，提供给用户测试体验。  
数据爬取等工作量比较大，需要安排较多时间，在显示专业详情、课程详情时需要抓取，参考网上教程实现。
