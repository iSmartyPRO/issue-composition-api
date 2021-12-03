import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/standard',
    name: 'Standard',
    component: () => import('../views/Standard.vue')
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import('../views/Composition.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
