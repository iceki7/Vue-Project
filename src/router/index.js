import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import reg from '../views/reg.vue'
import test from '../views/test.vue'
import forum from '../views/forum.vue'
import forumpost from '../views/forumpost.vue' 
import classicalArt from '../views/classicalArt.vue'
import historyFacts from '../views/historyFacts.vue'
import introduction from '../views/introduction.vue'
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
    path:'/forumpost',
    name:'forumpost',
    component:forumpost
  },
  {
    path:'/classicalArt',
    name:'classicalArt',
    component:classicalArt
  },
  {
    path:'/forum',
    name:'forum',
    component:forum
  },{
    path:'/historyFacts',
    name:'historyFacts',
    component:historyFacts
  },
  {
    path:'/introduction',
    name:'/introduction',
    component:introduction
  }
]

const router = new VueRouter({
  routes
})

export default router
