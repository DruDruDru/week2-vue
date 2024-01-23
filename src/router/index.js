import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'
import { mapGetters } from 'vuex'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CatalogView,
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../components/Login.vue')
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
