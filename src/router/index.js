import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import reg from '../views/reg.vue'
import test from '../views/test.vue'
import forum from '../views/forum.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/reg',
    name:'reg',
    component:reg
  },
  {
    path:'/test',
    name:'test',
    component:test
  },
  {
    path:'/forum',
    name:'forum',
    component:forum
  }
]

const router = new VueRouter({
  routes
})

export default router
