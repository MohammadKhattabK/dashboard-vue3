<script setup lang="ts">
import { ref } from 'vue'
import {
  TrendingUpIcon,
  UsersIcon,
  ShoppingCartIcon,
  CreditCardIcon,
} from 'lucide-vue-next'

const stats = [
  {
    title: 'إجمالي المبيعات',
    value: '12,345',
    icon: TrendingUpIcon,
    color: 'bg-blue-500',
  },
  {
    title: 'العملاء الجدد',
    value: '321',
    icon: UsersIcon,
    color: 'bg-green-500',
  },
  {
    title: 'الطلبات',
    value: '543',
    icon: ShoppingCartIcon,
    color: 'bg-yellow-500',
  },
  {
    title: 'متوسط قيمة الطلب',
    value: '228',
    icon: CreditCardIcon,
    color: 'bg-purple-500',
  },
]
</script>

<template src="./Dashboard.html"></template>
<style src="./Dashboard.css" scoped></style>
