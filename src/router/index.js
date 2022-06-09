import Vue from 'vue'
import VueRouter from 'vue-router'

import NewWalk from "@/views/CreateWalk/NewWalk";
import MainView from "@/views/MainView";
import AboutView from "@/views/WalkList";
import NewWalkSummary from "@/views/CreateWalk/NewWalkSummary";
import AddOpinion from "@/views/AddOpinion"
import TestOpinionView from "@/views/TestOpinionView";
import TrainersList from "@/views/TrainersList";
import MapView from "@/views/CreateWalk/MapView";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainView
  },
  {
    path: '/map-view',
    name: 'MapView',
    component: MapView
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
    path: '/test_opinion',
    name: 'TestOpinion',
    component: TestOpinionView
  },
  {
    path: '/new-walk-summary',
    name: 'NewWalkSummary',
    component: NewWalkSummary,
  },
  {
    path: '/add-opinion',
    name: 'AddOpinion',
    component: AddOpinion,
  },
  {
    path: '/trainers',
    name: 'TrainersList',
    component: TrainersList
  },
  {
    path: '/walk-list',
    name: 'WalkList',
    component: AboutView,
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router