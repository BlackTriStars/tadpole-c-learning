import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import saomiao from '@/pages/saomiao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/saomiao',
      name: 'saomiao',
      component: saomiao
    }
  ]
})
