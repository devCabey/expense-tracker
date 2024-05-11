<template>
  <main class="w-screen h-screen border-4">
    <div class="">
      <RouterLink v-for="route in appRoutes" :key="route.path" :to="route.path">
        {{ route.meta.label }}
      </RouterLink>
    </div>
    <div class=""><RouterView /></div>
  </main>
</template>

<script setup>
import routes from '@/router/routes'
import { computed } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const appRoutes = computed(() => routes.filter((d) => d.meta.layout === 'App'))
</script>

<style scoped></style>
