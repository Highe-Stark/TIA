import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routers from './routers'
//import layout from './components/layout'
//import qaindex from './components/qa-index'
//import qadetail from './components/qa-detail'
//import qa from './components/qa'
//import tabs2 from './components/tabs2'

// import data from './data'

// Vue.prototype.data = data

Vue.use (VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
