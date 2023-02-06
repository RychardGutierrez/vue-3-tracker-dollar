<template>
  <div class="pt-16 mb-8 relative">
    <!-- search country -->
    <input v-model="searchQuery" @input="getResults" type="text" placeholder="Search for country"
      class="py-2 px-1 w-full bg-transparent border-b border-y-slate-400 focus:border-dollar-primary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]" />

    <!-- Slot- you custom list result -->
    <slot :countrySearchResults="countrySearchResults" :searchError="searchError" />
  </div>
</template>

<script setup>

import useSearchCountry from '@/composables/useSearchCountry';

const { getResults, searchQuery, searchError, countrySearchResults } = useSearchCountry();

</script>

<style lang="scss" scoped>

</style>