<script lang="ts" setup>
import DashboardIcon from '@/assets/icons/dashboard.svg'
import OrderIcon from '@/assets/icons/order.svg'
import InventoryIcon from '@/assets/icons/inventory.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import SettingsIcon from '@/assets/icons/settings.svg'
import ReportsIcon from '@/assets/icons/graph.svg'
import ProductIcon from '@/assets/icons/shopping-bag.svg'

defineProps<{
  isOpen: boolean
}>()
defineEmits(['close-sidebar'])

const menu = [
  { name: 'لوحة التحكم', to: 'Dashboard', icon: DashboardIcon },
  { name: 'المبيعات', to: 'Sales', icon: InventoryIcon },
  { name: 'المشتريات', to: 'Buy', icon: OrderIcon },
  { name: 'الزبائن', to: 'Customer', icon: ProfileIcon },
  { name: 'الموردين', to: 'Supplier', icon: ProfileIcon },
  { name: 'المنتجات', to: 'Items', icon: ProductIcon },
  { name: 'التقارير', to: 'Reports', icon: ReportsIcon },
  { name: 'الإعدادات', to: 'Settings', icon: SettingsIcon },
]
</script>
<template src="./Sidebar.html"></template>
<style src="./Sidebar.css"></style>
