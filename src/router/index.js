import { createRouter, createWebHistory } from 'vue-router'
import Landingpage from '../views/Landingpage.vue'
import AdminView from '../views/AdminDash.vue'
import Payment from '../views/Payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landingpage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
     {
      path: '/adminDash',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    },
  ]
})

export default router
