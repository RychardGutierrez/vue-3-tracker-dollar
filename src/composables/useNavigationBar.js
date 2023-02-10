import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import { updatedStore } from '../data/store';
import { currentDate } from '../helper/dateTime';
import { useTrackerStore } from '../store';

export default function useNavigationBar() {
  const route = useRoute();
  const router = useRouter();
  const modalActive = ref(false);
  const trackerStore = useTrackerStore();

  const { getRate } = storeToRefs(trackerStore);
  const saveLocalStore = () => {
    // Route - update query and params
    const trackerObjec = {
      country: route.params.country,
      official: route.query.official,
      symbol: route.query.symbols,
      savedDate: currentDate(),
      rate: getRate.value,
    };
    console.log(trackerObjec);
    const { id } = updatedStore(trackerObjec);

    let query = Object.assign({}, route.query);
    delete query.preview;
    query.id = id;
    router.replace({ query });
  };

  // Emit - call from BaseModal
  const toogleModal = () => {
    modalActive.value = !modalActive.value;
  };

  const isPreview = computed(() => route.query.preview);

  return {
    saveLocalStore,
    toogleModal,
    isPreview,
    modalActive,
  };
}
