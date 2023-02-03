import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { getFlagContries } from '@/api/countryApi';

export default function useCountry() {
  const route = useRoute();
  const flagContry = ref(null);

  const getFlagContry = async () => {
    const { 0: flag } = await getFlagContries(route.query.official);
    flagContry.value = flag.flags.svg;
  };

  const nameDefaultFlag = computed(() => `${route.params.country} - Flag Icon`);

  const isPreview = computed(() => route.query.preview);

  return { getFlagContry, nameDefaultFlag, isPreview, flagContry };
}
