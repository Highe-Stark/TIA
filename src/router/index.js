import Vue from 'vue'
import Router from 'vue-router'

import qaDetail from '../components/qa-detail'
import qaIndex from '../components/qa-index'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/detail/:id',
      name: 'qaDetail',
      component: qaDetail
    },
    {
      path: '/',
      name: 'qaIndex',
      component: qaIndex
    }
  ]
})
