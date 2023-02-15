<template>
  <!-- search results  -->
  <ul v-if="countrySearchResults" class="absolute bg-dollar-secondary text-white w-full shadow-md py2 px1 top-[120px]">
    <p v-if="searchError.error" class="py-2 px-2">
      {{ searchError.message }}
    </p>

    <!-- message error-->
    <p v-if="!searchError.error && countrySearchResults.length === 0" class="py-2 px-2">
      Sorry, something went wrong, please try again
    </p>

    <template v-else>
      <li v-for="searchResult in countrySearchResults" :key="searchResult.name.common"
        @click="goToCountry(searchResult)"
        class="py-2 px-2 border-b border-y-slate-100 hover:bg-dollar-third cursor-pointer">
        {{ searchResult.name.official }}
      </li>
    </template>
  </ul>
</template>

<script setup>

defineProps({
  countrySearchResults: {
    typeof: Array,
    default: null
  },

  searchError: {
    typeof: Object,
    default: { error: false, message: '' }
  },

  goToCountry: {
    typeof: Function,
    default: () => { }
  }

})

</script>

<style lang="scss" scoped>

</style>