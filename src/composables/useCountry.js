import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getFlagCountries } from '../../src/api/countryApi';

export default function useCountry() {
  const route = useRoute();
  const flagCountry = ref(null);

  const getFlagCountry = async () => {
    const { 0: flag } = await getFlagCountries(route.query.official);
    flagCountry.value = flag.flags.svg;
  };

  const nameDefaultFlag = computed(() => `${route.params.country} - Flag Icon`);

  const isPreview = computed(() => route.query.preview);

  return { getFlagCountry, nameDefaultFlag, isPreview, flagCountry };
}
