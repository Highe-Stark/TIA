import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routers from './routers'
import DoM from './components/DoM'

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
