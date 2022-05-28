import Vue from 'vue'
import VueRouter from 'vue-router'

import NewWalk from "@/views/NewWalk";
import MainView from "@/views/MainView";
import AboutView from "@/views/AboutView";
import NewWalkPart2 from "@/views/NewWalkPart2";
import AddOpinion from "@/views/AddOpinion";
import Register from "@/views/RegisterUser";
import TrainerProfile from "@/views/TrainerProfile";
import YourWalks from "@/views/YourWalks";

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
    component: AboutView,
  },
  {
    path: '/new-walk-part-2',
    name: 'NewWalkPart2',
    component: NewWalkPart2,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/trainer-profile',
    name: 'TrainerProfile',
    component: TrainerProfile,
  },
  {
    path: '/your-walks',
    name: 'YourWalks',
    component: YourWalks,
  },
  {
    path: '/add-opinion',
    name: 'AddOpinion',
    component: AddOpinion,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
