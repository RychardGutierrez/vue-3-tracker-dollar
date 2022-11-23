<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-slate-200">
    <NavigationBar />
    <!-- Configuration router custom -->
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>

</style>
