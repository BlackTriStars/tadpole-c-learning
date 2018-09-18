import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import saomiao from '@/pages/saomiao'


import loginMain from '@/pages/loginRegister/index'
import firstLogin from '@/pages/loginRegister/firstLogin'
import login from '@/pages/loginRegister/login'
import resetPassword from '@/pages/loginRegister/resetPassword'
import changePassword from '@/pages/loginRegister/changePassword'


import my from '@/pages/my/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页',
      },
      component: index
    },
    {
      path: '/saomiao',
      name: 'saomiao',
      meta: {
        title: '扫描二维码',
      },
      component: saomiao
    },
    {
      path: '/login&register',
      redirect: '/login',
      component: loginMain,
      children:[
        {
          path: '/firstLogin',
          name: 'firstLogin',
          meta: {
            title: '首次登录绑定',
          },
          component: firstLogin
        },
        {
          path: '/login',
          name: 'login',
          meta: {
            title: '注册登录',
          },
          component: login
        },
        {
          path: '/resetPassword',
          name: 'resetPassword',
          meta: {
            title: '重置密码',
          },
          component: resetPassword
        },
        {
          path: '/changePassword',
          name: 'changePassword',
          meta: {
            title: '修改密码',
          },
          component: changePassword
        },

      ]
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        title: '我的'
      },
      component: my
    }
  ]
})
