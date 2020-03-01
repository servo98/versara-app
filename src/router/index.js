import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Request from '@/components/Request.vue'
import Payment from "@/components/Payment.vue"
import Credit from '@/components/Credit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/request',
    name: 'Solicitud',
    component: Request
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/payments',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/credit',
    name: 'Credit',
    component: Credit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
