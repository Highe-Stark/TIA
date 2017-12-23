import Vue from 'vue'
import App from './components/qa'
import router from './router'

import data from './data'

Vue.prototype.data = data

new Vue({
  el: '#qa',
  router,
  render: h => h(App)
})
