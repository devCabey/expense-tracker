<template>
  <main v-show="layout === 'App'">
    <AppLayout />
  </main>
  <main v-show="layout === 'Auth'">
    <AuthLayout />
  </main>
  <main v-show="layout === '404'">
    <NotFoundLayout />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from './components/AppLayout.vue'
import AuthLayout from './components/AuthLayout.vue'
import NotFoundLayout from './components/_404Layout.vue'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'App':
      return 'App'
    case 'Auth':
      return 'Auth'
    default:
      return '404'
  }
})
</script>

<style scoped></style>
