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
    path: '/shopbuy',
    name: 'ShopBuy',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopBuy.vue')
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
  {
    path: '/shop/buy/:item',
    name: 'BuyItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/Buy.vue'),
    props: true,
  },
  {
    path: '/shop/rent/:item',
    name: 'RentItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rent.vue'),
    props: true,
  },
  {
    path: '/shoprent/',
    name: 'ShopRent',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopRent.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
