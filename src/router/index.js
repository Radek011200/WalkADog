import Vue from 'vue'
import VueRouter from 'vue-router'

import NewWalk from "@/views/NewWalk";
import MainView from "@/views/MainView";
import AboutView from "@/views/WalkList";
import NewWalkPart2 from "@/views/NewWalkPart2";
import TrainersList from "@/views/TrainersList";

Vue.use(VueRouter)

const routes = [{
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
        path: '/trainers',
        name: 'TrainersList',
        component: TrainersList
    },
    {
        path: '/walk-list',
        name: 'walklist',
        component: AboutView,
    },
    {
        path: '/new-walk-part-2',
        name: 'NewWalkPart2',
        component: NewWalkPart2,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router