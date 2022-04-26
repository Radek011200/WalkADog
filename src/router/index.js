import Vue from 'vue'
import VueRouter from 'vue-router'

import NewWalk from "@/views/NewWalk";
import MainView from "@/views/MainView";
import AboutView from "@/views/AboutView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainView
  },
  {
    path: '/new-walk',
    name: 'NewWalk',
    component: NewWalk
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
