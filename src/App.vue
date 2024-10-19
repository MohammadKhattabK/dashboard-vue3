<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar :isOpen="isSidebarOpen" @close-sidebar="isSidebarOpen = !isSidebarOpen" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar :hasScrolled="hasScrolled" />

      <main
        ref="mainContent"
        class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6"
        @scroll="handleScroll"
        :style="{ marginRight: isSidebarOpen ? '16rem' : '5rem' }"
      >
      <div class="container mx-auto">
        <Breadcrumb :pageName="currentPageName" /> 
          <RouterView/>
        </div>
      </main>
    </div>
  </div> 
 

</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch,computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Navbar from '@/components/navbar/Navbar.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue' 

const route = useRoute()

const isSidebarOpen = ref(true)
const hasScrolled = ref(false)
const mainContent = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (mainContent.value) {
    hasScrolled.value = mainContent.value.scrollTop > 50
  }
}

onMounted(() => {
  if (mainContent.value) {
    mainContent.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (mainContent.value) {
    mainContent.value.removeEventListener('scroll', handleScroll)
  }
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

watch(isSidebarOpen, () => {
  if (mainContent.value) {
    mainContent.value.style.marginRight = isSidebarOpen.value ? '16rem' : '0'
  }
})

const currentPageName = computed(() => { 
  return route.meta.title || route.name || 'لوحة التحكم'   
})
 
</script>

<style scoped>
.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
