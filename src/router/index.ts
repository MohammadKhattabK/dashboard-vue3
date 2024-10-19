import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Customer from '@/views/customer/Customer.vue'

const route = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Dashboard,
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Dashboard,
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer,
  },
  {
    path: '/supplier',
    name: 'Supplier',
    component: Dashboard,
  },
  {
    path: '/items',
    name: 'Items',
    component: Dashboard,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Dashboard,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Dashboard,
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})

export default router
