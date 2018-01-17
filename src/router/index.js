import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home'
import time from '@/pages/time'
import about from '@/pages/about'
import error from '@/components/error/404'

import blogList from '@/pages/blog/list'
import blogView1 from '@/pages/blog/view/view-1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // 博客
    {
      path: '/blog',
      name: 'blog-list',
      component: blogList
    },
    {
      path: '/blog/view-1',
      name: 'blog-view-1',
      component: blogView1
    },
    // 时光轴
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    // 关于我
    // 404页面
    {
      path: '*',
      name: '404',
      component: error
    }
  ]
})
