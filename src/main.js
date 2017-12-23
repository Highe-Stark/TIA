import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routers from './routers'

import data from './data'

Vue.prototype.data = data

Vue.use (VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#qa',
  router,
  render: h => h(App)
})
