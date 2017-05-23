import Vue from 'vue'
import Router from 'vue-router'

// Pages
import home from '@/pages/home/index'
import todos from '@/pages/todos/index'
import testFire from '@/pages/testFire/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/todos',
    name: 'todos',
    component: todos
  },
  {
    path: '/testFire',
    name: 'testFire',
    component: testFire
  }
]

export default new Router({
  routes
})
