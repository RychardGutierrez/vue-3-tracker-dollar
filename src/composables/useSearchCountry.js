import { ref } from 'vue';
import { getSeachContries } from '@/api/countryApi';

export default function useSearchCountry() {
  const queryTimeout = ref(null);
  const searchError = ref({ error: false, message: '' });
  const searchQuery = ref('');
  const countrySearchResults = ref(null);

  const getResults = () => {
    clearTimeout(queryTimeout.value);

    queryTimeout.value = setTimeout(async () => {
      if (searchQuery.value === '') {
        return (countrySearchResults.value = null);
      }

      const result = await getSeachContries(searchQuery.value);

      if (result.error) {
        searchError.value.error = true;
        searchError.value.message = result.message;
        countrySearchResults.value = [];
        return;
      }

      searchError.value.error = false;
      searchError.value.message = '';
      countrySearchResults.value = result;
    }, 300);
  };

  return {
    getResults,
    searchQuery,
    searchError,
    countrySearchResults,
  };
}
