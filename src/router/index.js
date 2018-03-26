import Vue from 'vue'
import Router from 'vue-router'
import Nav from 'components/nav/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav
    }
  ]
})
