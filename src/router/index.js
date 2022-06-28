import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Store.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/fish',
    name: 'Fish',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fish.vue'),
    props: true,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/fish/fishdetails/:fish',
    name: 'FishDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/FishDetails.vue'),
    props: true,
  },
  {
    path: '/fish/fishcategory',
    name: 'Category',
    component: () => import(/* webpackChunkName: "about" */ '../views/FishCategory.vue'),
  },
  {
    path: '/profile/statistics',
    name: 'Statistics',
    component: () => import(/* webpackChunkName: "about" */ '../views/FishesCaught.vue'),
  },
  {
    path: '/profile/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileUpload.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
