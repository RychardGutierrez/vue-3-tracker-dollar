<template>
  <Suspense>
    <TrackerView />
    <template #fallback>
      <p>Loading ...</p>
    </template>
  </Suspense>
</template>

<script setup>
import TrackerView from './TrackerView.vue';
</script>
