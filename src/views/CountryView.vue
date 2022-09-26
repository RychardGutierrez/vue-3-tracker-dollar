<template>
  <Suspense>
    <CountryView />
    <template #fallback>
      <p>Loading ...</p>
    </template>
  </Suspense>
</template>

<script setup>
import CountryView from '../components/country/CountryView.vue';
</script>
