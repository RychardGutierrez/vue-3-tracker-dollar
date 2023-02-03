import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { updatedStore } from '@/data/store';
import { currentDate } from '@/helper/dateTime';
import { useTrackerStore } from '@/store';

export default function useNavigationBar() {
  const route = useRoute();
  const router = useRouter();
  const modalActive = ref(false);
  const trackerStore = useTrackerStore();

  const saveLocalStore = () => {
    // Route - update query and params
    const trackerObjec = {
      country: route.params.country,
      official: route.query.official,
      symbol: route.query.symbols,
      savedDate: currentDate(),
      rate: trackerStore.state.value,
    };

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
    modalActive
  };
}
