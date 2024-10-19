import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '@/views/dashboard/Dashboard.vue'

const route = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})

export default router
