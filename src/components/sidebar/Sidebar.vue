<script lang="ts" setup>
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg'
import DashboardIcon from '@/assets/icons/dashboard.svg'
import DesignIcon from '@/assets/icons/design.svg'
import OrderIcon from '@/assets/icons/order.svg'
import InventoryIcon from '@/assets/icons/inventory.svg'
import TruckIcon from '@/assets/icons/truck.svg'
import ContactIcon from '@/assets/icons/contact.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import BillingIcon from '@/assets/icons/billing.svg'
import HelpIcon from '@/assets/icons/help.svg'
import LogoutIcon from '@/assets/icons/logout.svg'

defineProps<{
  isOpen: boolean
}>()
defineEmits(['close-sidebar'])

const menu = [
  { name: 'لوحة التحكم', to: 'Dashboard', icon: DashboardIcon },
  //   { name: 'المبيعات', to: 'Tables', icon: DesignIcon },
  // { name: 'Orders', to: 'Login', icon: OrderIcon },
  // { name: 'Inventory', to: 'Login', icon: InventoryIcon },
  // { name: 'Shipments', to: 'Login', icon: TruckIcon },
  // { name: 'Contacts', to: 'Login', icon: ContactIcon },
  // { name: 'Profile', to: 'Login', icon: ProfileIcon },
  // { name: 'Billing', to: 'Login', icon: BillingIcon },
  // { name: 'Help', to: 'Login', icon: HelpIcon },
  // { name: 'Logout', to: 'Logout', icon: LogoutIcon },
]
</script>
<template src="./Sidebar.html"></template>
<style src="./Sidebar.css"></style>
