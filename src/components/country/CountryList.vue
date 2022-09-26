<template>
  <div v-for="tracker in savedTrakers" :key="tracker.id">
    <CountryCard :country="tracker" @click="goToCountryView(tracker)" />
  </div>
  <p v-if="savedTrakers.length === 0" class="text-lg">
    No countries added. To start tracking a dollar to country, search in the
    field above.
  </p>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { readStore } from '@/data/store';

import CountryCard from './CountryCard.vue';

const router = useRouter();

const savedTrakers = ref([]);

const getSavedTrakers = () => {
  const { data } = readStore();
  savedTrakers.value = data.reverse();
};

const goToCountryView = (tracker) => {
  router.push({
    name: 'countryView',
    params: {
      country: tracker.country,
    },
    query: {
      official: tracker.official,
      symbols: tracker.symbol,
      id: tracker.id,
    },
  });
};

getSavedTrakers();
</script>

<style lang="scss" scoped></style>
