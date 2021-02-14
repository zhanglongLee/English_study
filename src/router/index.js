import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Translate from '../views/Translate.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"英语学习网站"
    }
  },
  {
    path: '/translate',
    name: 'Translate',
    component: Translate,
    meta:{
      title:"我要翻译"
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta:{
      title:"我要翻译"
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
