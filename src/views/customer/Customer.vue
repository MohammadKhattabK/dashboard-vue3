<script lang="ts" setup>
import OverviewIcon from '@/assets/icons/overview.svg'
import ShoppingBagIcon from '@/assets/icons/shopping-bag.svg'
import GraphIcon from '@/assets/icons/graph.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
import WalletIcon from '@/assets/icons/wallet.svg'
import FileIcon from '@/assets/icons/file.svg'
import ChatIcon from '@/assets/icons/chat.svg'
import GroupChatIcon from '@/assets/icons/group-chat.svg'
import SettingsIcon from '@/assets/icons/settings.svg'
import LogoutIcon from '@/assets/icons/logout.svg'
import PlusIcon from '@/assets/icons/plus.svg'
import LayersIcon from '@/assets/icons/layers.svg'
import DraftIcon from '@/assets/icons/draft.svg'
import InvisibleIcon from '@/assets/icons/invisible.svg'
import RejectedIcon from '@/assets/icons/rejected.svg'
import MailIcon from '@/assets/icons/mail.svg'
import FilterIcon from '@/assets/icons/filter.svg'
import FigmaIcon from '@/assets/icons/figma.svg'
import SketchIcon from '@/assets/icons/sketch.svg'
import AIIcon from '@/assets/icons/ai.svg'
import PencilIcon from '@/assets/icons/pencil.svg'
import TrashIcon from '@/assets/icons/trash.svg'
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import imageItem from '@/assets/img/background-login.jpg'

const status = [
  { name: 'Published', icon: LayersIcon },
  { name: 'Draft', icon: DraftIcon },
  { name: 'Hidden', icon: InvisibleIcon },
  { name: 'Rejected', icon: RejectedIcon },
  { name: 'Under Review', icon: MailIcon },
]

const products = [
  {
    name: 'Organic Landing page',
    category: 'Web Design',
    imageUrl: imageItem,
    price: 20,
    downloaded: 793,
    rating: 4.9, 
    createdAt: '12/01/22',
  },
  {
    name: 'Traffic Landing page',
    category: 'Web Design',
    imageUrl: imageItem,
    price: 24,
    downloaded: 34,
    rating: 4.4, 
    createdAt: '10/01/22',
  },
  {
    name: 'POS Dashboard',
    category: 'Web Design',
    imageUrl: imageItem,
    price: 16,
    downloaded: 896,
    rating: 4.6, 
    createdAt: '01/01/22',
  },
  {
    name: 'Gallery page',
    category: 'Web Design',
    imageUrl: imageItem,
    price: 38,
    downloaded: 194,
    rating: 4.6, 
    createdAt: '04/01/22',
  },
  {
    name: 'WFH Landing page',
    category: 'Web Design',
    imageUrl: imageItem,
    price: 22,
    downloaded: 404,
    rating: 4.3, 
    createdAt: '12/12/21',
  },
]
</script>

<template src="./Customer.html"></template>

<style src="./Customer.css" scoped></style>
