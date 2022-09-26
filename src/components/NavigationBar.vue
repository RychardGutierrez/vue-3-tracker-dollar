<template>
  <header class="sticky top-0 bg-white shadow-sm">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-black py-6 px-0"
    >
      <RouterLink :to="routerHome">
        <div class="flex items-center gap-3">
          <img :src="iconDollar" alt="dollar" class="w-11" />
          <p class="text-2xl">Dollar Tracker</p>
        </div>
      </RouterLink>
      <div class="flex gap-5 flex-1 justify-end">
        <img
          v-if="route.query.preview"
          :src="iconSave"
          alt="Save Country"
          class="w-9 hover:shadow-xl duration-150 cursor-pointer"
          @click="handleSaved"
        />

        <img
          @click="toogleModal"
          :src="iconHelp"
          alt="Help"
          class="w-9 hover:shadow-xl rounded-full duration-150 cursor-pointer"
        />
      </div>
    </nav>
  </header>
  <HelpModal :modal-active="modalActive" @close-modal="toogleModal" />
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

import { useTrackerStore } from '@/store';
import { updatedStore } from '@/data/store';
import { currentDate } from '@/helper/dateTime';

import iconDollar from '@/assets/dollar.svg';
import iconHelp from '@/assets/help.svg';
import iconSave from '@/assets/save.svg';
import HelpModal from '@/components/HelpModal.vue';

const route = useRoute();
const router = useRouter();
const modalActive = ref(false);
const savedCities = ref([]);

const trackerStore = useTrackerStore();

const routerHome = { name: 'home' };

const toogleModal = () => {
  modalActive.value = !modalActive.value;
};

const handleSaved = () => {
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
</script>

<style lang="scss" scoped></style>
