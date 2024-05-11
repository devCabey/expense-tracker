<template>
  <main class="container">
    <div class="sidebar">
      <RouterLink v-for="route in appRoutes" :key="route.path" :to="route.path">
        {{ route.meta.label }}
      </RouterLink>
    </div>
    <div class="wrapper"><RouterView /></div>
  </main>
</template>

<script setup>
import routes from '@/router/routes'
import { computed } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const appRoutes = computed(() => routes.filter((d) => d.meta.layout === 'App'))
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
}
.sidebar {
  width: 200px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
}
.wrapper {
  flex: 1;
  padding: 5px;
}
</style>
