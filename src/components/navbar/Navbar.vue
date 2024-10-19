<script lang="ts" setup>
import { ref } from 'vue'
import { ChevronDown, LogOut } from 'lucide-vue-next'

defineProps<{
  hasScrolled: boolean
}>()

const isProfileOpen = ref(false)
</script>

<template src="./Navbar.html"></template>

<style src="./Navbar.css"></style>
