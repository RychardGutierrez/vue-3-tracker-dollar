import { computed, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useTrackerStore } from '@/store';
import { getTrackerWeek } from '@/helper/dateTime';
import { getConvertDollar, getTrackerDollar } from '@/api/exchangeApi';
import { removedStore, readStore } from '@/data/store';

export default function useTrakerDollar() {
  const route = useRoute();
  const router = useRouter();

  const countryError = ref({ error: false, message: '' });
  const simbolMoney = ref(route.query.symbols);
  const converterDollar = ref(null);
  const trackerHistory = ref(null);
  const listTrakers = ref([]);

  const getTrakers = () => {
    const { data } = readStore();
    listTrakers.value = data.reverse();
  };

  const getAsyncConvertDollar = async () => {
    const result = await getConvertDollar(simbolMoney.value);

    if (result.error) {
      countryError.value.error = true;
      countryError.value.message = result.message;
      countrySearchResults.value = [];
      return;
    }

    countryError.value.error = false;
    countryError.value.message = '';
    converterDollar.value = result;
  };

  const getAsyncTrackerDollar = async () => {
    const resultTraker = await getTrackerDollar({
      symbol: simbolMoney.value,
      ...getTrackerWeek(),
    });

    if (resultTraker.error) {
      countryError.value.error = true;
      countryError.value.message = resultTraker.message;
      countrySearchResults.value = [];
      return;
    }

    countryError.value.error = false;
    countryError.value.message = '';
    trackerHistory.value = resultTraker;
  };

  const official = computed(() => route.query.official);

  // Pinia Store
  const trackerStore = useTrackerStore();
  watchEffect(() => {
    if (converterDollar.value) {
      trackerStore.state.value = converterDollar.value.result;
    }
  });

  const removeTracker = () => {
    const { error } = removedStore(route.query.id);
    if (error) {
      console.log(error);
      return;
    }

    // store reset manual
    trackerStore.state.value = {};

    // go to home from router
    router.push({
      name: 'home',
    });
  };

  return {
    getAsyncConvertDollar,
    getAsyncTrackerDollar,
    converterDollar,
    official,
    trackerHistory,
    simbolMoney,
    removeTracker,
    getTrakers,
    listTrakers
  };
}
