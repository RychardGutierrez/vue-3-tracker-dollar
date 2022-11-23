<template>
  <Suspense>
    <TrackerView />
    <template #fallback>
      <p>Loading ...</p>
    </template>
  </Suspense>
</template>

<script setup>
import TrackerView from '../components/country/TrackerView.vue';
</script>
