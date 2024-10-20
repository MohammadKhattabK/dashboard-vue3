import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Customer from '@/views/customer/Customer.vue'
import Profile from '@/components/profile/Profile.vue'

const route = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'لوحة التحكم' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { title: 'الملف الشخصي' }
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Dashboard,
    meta: { title: 'المبيعات' }
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Dashboard,
    meta: { title: 'المشتريات' }
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer,
    meta: { title: 'الزبائن' }
  },
  {
    path: '/supplier',
    name: 'Supplier',
    component: Dashboard,
    meta: { title: 'الموردين' }
  },
  {
    path: '/items',
    name: 'Items',
    component: Dashboard,
    meta: { title: 'المنتجات' }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Dashboard,
    meta: { title: 'التقارير' }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Dashboard,
    meta: { title: 'الإعدادات' }
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})

export default router
