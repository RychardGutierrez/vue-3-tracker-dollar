<template>
  <div v-for="tracker in listTrakers" :key="tracker.id">
    <CountryCard :country="tracker" @click="goToCountryByTracker(tracker)" />
  </div>
  <p v-if="listTrakers.length === 0" class="text-lg">
    No countries added. To start tracking a dollar to country, search in the
    field above.
  </p>
</template>

<script setup>
import useTrakerDollar from "@/composables/useTrakerDollar"
import useRouteCountry from '@/composables/useRouteCountry';

import CountryCard from './CountryCard.vue';

const { getTrakers, listTrakers } = useTrakerDollar();
const { goToCountryByTracker } = useRouteCountry()

getTrakers();
</script>

<style lang="scss" scoped>

</style>
