import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: "/recommend",
    children: [
      {
        name: "home-recommend",
        path: "recommend",
        component: () => import("@/views/recommend")
      },
      {
        name: "home-search",
        path: "search",
        component: () => import("@/views/search")
      },
      {
        name: "home-hot",
        path: "hot",
        component: () => import("@/views/hot")
      },
    ]
  }
  ,
  {
    path: '/song',
    name: 'song',
    // route level code-splitting
    // this generates a separate chunk (song.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "song" */ '../views/song.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
