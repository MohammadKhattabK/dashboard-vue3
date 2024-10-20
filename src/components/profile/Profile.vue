<script setup lang="ts">
import { ref } from 'vue'
import FilterIcon from '@/assets/icons/filter.svg'
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import {
  ReceiptIcon,
  HandCoinsIcon,
  ReceiptTextIcon,
  SquareArrowOutUpRightIcon,
  PhoneIcon,
} from 'lucide-vue-next'

interface Profile {
  name: string
  title: string
  phone: string
  avatar: string
  paidAmount: string
  dueAmount: string
}

interface Stat {
  title: string
  value: number
  icon: any
}

interface Invoice {
  id: string
  name: string
  amount: string
  date: string
  avatar: string
  detail: any
}

const profile: Profile = {
  name: 'محمد أحمد',
  title: 'مطور برمجيات',
  phone: '0123456789',
  avatar:
    'https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg',
  paidAmount: '5000 ريال',
  dueAmount: '2000 ريال',
}

const stats: Stat[] = [
  { title: 'عدد الفواتير', value: 20, icon: ReceiptTextIcon },
  { title: 'المبالغ المدفوعة', value: 99, icon: ReceiptIcon },
  { title: 'المبالغ المتبقية', value: 50, icon: HandCoinsIcon },
]

const invoices: Invoice[] = [
  {
    id: 'INV001',
    name: 'أحمد محمود',
    amount: '1000 ريال',
    date: '2023-05-01',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    detail: SquareArrowOutUpRightIcon,
  },
  {
    id: 'INV002',
    name: 'فاطمة علي',
    amount: '1500 ريال',
    date: '2023-05-15',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    detail: SquareArrowOutUpRightIcon,
  },
  {
    id: 'INV003',
    name: 'خالد عمر',
    amount: '2000 ريال',
    date: '2023-05-30',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    detail: SquareArrowOutUpRightIcon,
  },
  {
    id: 'INV004',
    name: 'زينب حسن',
    amount: '1800 ريال',
    date: '2023-06-10',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    detail: SquareArrowOutUpRightIcon,
  },
  {
    id: 'INV005',
    name: 'عمر فاروق',
    amount: '2200 ريال',
    date: '2023-06-25',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    detail: SquareArrowOutUpRightIcon,
  },
]

const showStatement = ref(false)
</script>

<template src="./Profile.html"></template>
<style scoped></style>
