<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  showModal: boolean
}>()

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template src="./DialogDelete.html"></template>
<style src="./DialogDelete.css" scoped></style>
