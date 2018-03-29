import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Windex from 'components/index/windex'
import Repos from 'components/repos/repos'
import Book from 'components/book/book'
import Activ from 'components/activ/activ'
import Ai from 'components/tab/ai/ai'
import Android from 'components/tab/android/android'
import Article from 'components/tab/article/article'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页路由
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/index/article',
      children: [
        {
          path: '/index/ai',
          name: 'Ai',
          component: Ai
        },
        {
          path: '/index/android',
          name: 'android',
          component: Android
        },
        {
          path: '/index/article',
          name: 'article',
          component: Article
        }
      ]
    },
    // 无登录显示路由
    {
      path: '/windex',
      name: 'windex',
      component: Windex
    },
    // 册子路由
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    // 开源库路由
    {
      path: '/repos',
      name: 'repos',
      component: Repos
    },
    // 活动路由
    {
      path: '/activ',
      name: 'activ',
      component: Activ
    }
  ]
})
