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
import LoginView from "@/views/LoginView";
import MapView from "@/views/MapView";
import NotFoundView from "@/views/NotFoundView";
import AccountView from "@/views/AccountView";
import DogsView from "@/views/dog/DogsView";
import DogPreview from "@/views/dog/DogPreview";
import DogCreateView from "@/views/dog/DogCreateView";
import DogEditView from "@/views/dog/DogEditView";


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
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '*',
        redirect: '/404',
    },
    {
        path: '/404',
        component: NotFoundView,
    },
    {
        path: '/account',
        component: AccountView,
        name: 'AccountView',
    },
    {
        path: '/dogs',
        component: DogsView,
        name: 'DogsView',
    },
    {
        path: '/dogs/:dogId',
        component: DogPreview,
        name: 'DogsPreview',
    },
    {
        path: '/dogs/:dogId/edit',
        component: DogEditView,
        name: 'DogEditView'
    },
    {
        path: '/dog/add-dog',
        component: DogCreateView,
        name: 'DogsCreateView',
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router