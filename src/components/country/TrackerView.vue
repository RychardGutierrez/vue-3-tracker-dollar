<template>
  <div class="flex flex-col flex-1 items-center">
    <BaseBanner v-if="route.query.preview">
      <p class="text-sm">{{ textModal }}</p>
    </BaseBanner>

    <!-- Overview -->
    <div class="flex flex-col items-center text-dollar-blue py-12">
      <div class="flex gap-7">
        <h1 class="text-5xl mb-2">{{ route.query.official }}</h1>
        <img :src="flagContry" :alt="nameDefaultFlag" class="w-24" />
      </div>
      <p class="text-base mb-2">{{ trackerDate }} - {{ trackerTime }}</p>
    </div>

    <div class="flex max-w-xl w-full py-4 px-12 bg-dollar-primary text-white justify-center rounded-md shadow-md mb-12"
      v-if="converterDollar">
      <h1 class="text-4xl m-4">
        1 USD = {{ converterDollar.result }} {{ simbolMoney }}
      </h1>
    </div>

    <hr class="border-white border-opacity-40 border w-full" />

    <div class="max-w-md w-full py-12 text-dollar-blue" v-if="trackerHistory">
      <h2 class="mb-4 text-center text-lg">7 Day Tracking history 1 USD</h2>
      <div v-for="(rate, key) in trackerHistory.quotes" :key="key"
        class="flex py-2 px-12 bg-dollar-secondary text-white rounded-md shadow-md mb-2">
        <p class="flex-1">{{ dateWeekDay(key) }}</p>

        <template class="flex gap-2 flex-1 justify-between" v-for="(value, key, index) in rate" :key="index">
          <p>{{ value }} {{ simbolMoney }}</p>
        </template>
      </div>
    </div>
    <div @click="removeTracker"
      class="flex flex-col items-center gap-2 text-orange-600 cursor-pointer duration-500 hover:text-red-700">
      <img @click="toogleModal" :src="iconDelete" alt="Remove Tracker" class="w-7" />
      <p>Remove</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import {
  getTrackerDate,
  getTrackerTime,
  dateWeekDay,
  getTrackerWeek,
} from '@/helper/dateTime';
import { getConvertDollar, getTrackerDollar } from '@/api/exchangeApi';
import { getFlagContries } from '@/api/countryApi';
import { removedStore } from '@/data/store';
import { useTrackerStore } from '@/store';

import BaseBanner from '@/components/ui/BaseBanner.vue';
import iconDelete from '@/assets/delete.svg';

const route = useRoute();
const router = useRouter();
const converterDollar = ref(null);
const countryError = ref({ error: false, message: '' });
const simbolMoney = ref(route.query.symbols);

const trackerDate = ref(getTrackerDate());
const trackerTime = ref(getTrackerTime());
const trackerHistory = ref(null);
const flagContry = ref(null);
const textModal =
  'You are currently previewing the dollar tracker for this country, click on the save icon to start tracking this country is dollar.';

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

const getFlagContry = async () => {
  const { 0: flag } = await getFlagContries(route.query.official);
  flagContry.value = flag.flags.svg;
  console.log(flagContry.value);
};

getAsyncConvertDollar();

getAsyncTrackerDollar();

getFlagContry();

const nameDefaultFlag = computed(() => `${route.params.country} - Flag Icon`);

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
</script>

<style scoped>
h1::first-letter {
  text-transform: capitalize;
}
</style>
