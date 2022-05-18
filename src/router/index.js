import Vue from 'vue'
import VueRouter from 'vue-router'

import NewWalk from "@/views/NewWalk";
import MainView from "@/views/MainView";
import AboutView from "@/views/WalkList";
import NewWalkPart2 from "@/views/NewWalkPart2";
import NewWalkSummary from "@/views/NewWalkSummary";
import AddOpinion from "@/views/AddOpinion"
import TestOpinionView from "@/views/TestOpinionView";
import TrainersList from "@/views/TrainersList";

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
    name: 'AddOpinon',
    component: AddOpinion,
  },
  {
    path: '/trainers',
    name: 'TrainersList',
    component: TrainersList
  },
  {
    path: '/walk-list',
    name: 'walklist',
    component: AboutView,
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router