<template>
  <main class="container text-black">

    <SearchBar>
      <template v-slot="{ countrySearchResults, searchError }">
        <ListResult :countrySearchResults="countrySearchResults" :searchError="searchError"
          :goToCountry="goToCountry" />
      </template>
    </SearchBar>

    <div class="flex flex-col gap-4">
      <Suspense>
        <CountryList />
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import CountryList from '../components/country/CountryList.vue';
import SearchBar from '../components/ui/SearchBar.vue';
import ListResult from '../components/ui/ListResult.vue';

import useRouteCountry from '../composables/useRouteCountry';

const { goToCountry } = useRouteCountry();

</script>
