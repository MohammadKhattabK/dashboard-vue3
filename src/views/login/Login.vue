<script lang="ts" setup>
import { ref, reactive } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)
const errors = reactive({
  email: '',
  password: '',
})

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    errors.email = 'البريد الإلكتروني مطلوب.'
  } else if (!emailRegex.test(email.value)) {
    errors.email = 'ادخل صيغة البريد الإلكتروني بشكل صحيح'
  } else {
    errors.email = ''
  }
}

const validatePassword = () => {
  if (!password.value) {
    errors.password = 'كلمة المرور مطلوبة'
  } else if (password.value.length < 8) {
    errors.password = 'يجب أن لاتقل كلمة المرور عن 8 محارف'
  } else {
    errors.password = ''
  }
}

const handleSubmit = async () => {
  validateEmail()
  validatePassword()

  if (!errors.email && !errors.password) {
    isLoading.value = true
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    isLoading.value = false
    // Handle successful login here
    console.log('Login successful', {
      email: email.value,
      password: password.value,
      rememberMe: rememberMe.value,
    })
  }
}
</script>

<template src="./Login.html"></template>
<style src="./Login.css" scoped></style>
