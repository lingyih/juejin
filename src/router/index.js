import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Windex from 'components/index/windex'
import Repos from 'components/repos/repos'
import Book from 'components/book/book'
import Activ from 'components/activ/activ'
import Wtitle from 'components/title/wtitle'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页路由
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // 无登录显示路由
    {
      path: '/windex',
      name: 'windex',
      component: Windex,
      redirect: 'windex/wtitle',
      children: [
        {
          path: '/windex/wtitle',
          name: 'wtitle',
          component: Wtitle
        }
      ]
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
