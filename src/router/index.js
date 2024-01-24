import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    },
  },
  {
    path: '/sighup',
    name: 'sighup',
    component: function () {
      return import('../views/SighupView.vue')
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../views/CartView.vue')
    },
  },
  {
    path: '/orders',
    name: 'orders',
    component: function () {
      return import('../views/OrdersView.vue')
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
