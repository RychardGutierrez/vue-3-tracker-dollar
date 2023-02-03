<template>
  <main class="container text-black">
    <div class="pt-16 mb-8 relative">
      <!-- search country -->
      <input v-model="searchQuery" @input="getResults" type="text" placeholder="Search for country"
        class="py-2 px-1 w-full bg-transparent border-b border-y-slate-400 focus:border-dollar-primary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]" />

      <!-- search results  -->
      <ul v-if="countrySearchResults"
        class="absolute bg-dollar-secondary text-white w-full shadow-md py2 px1 top-[120px]">
        <p v-if="searchError" class="py-2 px-2">
          {{ searchError.message }}
        </p>
        <!-- message error in country -->
        <p v-if="!searchError && countrySearchResults.length === 0" class="py-2 px-2">
          Sorry, something went wrong, please try again
        </p>
        <template v-else>
          <li v-for="searchResult in countrySearchResults" :key="searchResult.ccn3" @click="goToCountry(searchResult)"
            class="py-2 px-2 border-b border-y-slate-100 hover:bg-dollar-third cursor-pointer">
            {{ searchResult.name.official }}
          </li>
        </template>

      </ul>
    </div>
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
import CountryList from '@/components/country/CountryList.vue';
import useSearchCountry from '@/composables/useSearchCountry';
import useRouteCountry from '@/composables/useRouteCountry';

const { getResults, searchQuery, searchError, countrySearchResults, } = useSearchCountry();

const { goToCountry } = useRouteCountry();

</script>
