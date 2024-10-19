<script lang="ts" setup>
interface BreadcrumbItem {
  text: string
  href?: string
  current?: boolean
}

const props = defineProps<{
  pageName: string
}>()
</script>

<template src="./Breadcrumb.html"></template>

<style src="./Breadcrumb.css" scoped></style>
