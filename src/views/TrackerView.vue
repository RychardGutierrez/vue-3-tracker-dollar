<template>
  <div class="flex flex-col flex-1 items-center">
    <BaseBanner v-if="isPreview">
      <p class="text-sm">{{ textModal }}</p>
    </BaseBanner>

    <!-- Overview -->
    <TitleTracker :official="official" :flagContry="flagCountry" :nameDefaultFlag="nameDefaultFlag"
      :trackerDate="trackerDate" :trackerTime="trackerTime" />

    <CurrentStatusDollat :converterDollar="converterDollar" :simbolMoney="simbolMoney" />

    <hr class="border-white border-opacity-40 border w-full" />

    <HistoryTracker :history="history" :dateWeekDay="dateWeekDay" :simbolMoney="simbolMoney" />

    <RemoveTracker :removeTracker="removeTracker" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import TitleTracker from '@/components/tracker/TitleTracker.vue';
import CurrentStatusDollat from '@/components/tracker/CurrentStatusDollar.vue';
import HistoryTracker from '@/components/tracker/HistoryTracker.vue';
import RemoveTracker from '@/components/tracker/RemoveTracker.vue';

import {
  getTrackerDate, getTrackerTime, dateWeekDay
} from '@/helper/dateTime';
import BaseBanner from '@/components/ui/BaseBanner.vue';

import useTrakerDollar from '@/composables/useTrakerDollar';
import useCountry from '@/composables/useCountry';

const trackerDate = ref(getTrackerDate());
const trackerTime = ref(getTrackerTime());

const textModal =
  'You are currently previewing the dollar tracker for this country, click on the save icon to start tracking this country is dollar.';

const { getFlagCountry, nameDefaultFlag, isPreview, flagCountry } = useCountry()
const {
  getAsyncConvertDollar,
  getAsyncTrackerDollar,
  converterDollar,
  official,
  trackerHistory: history,
  simbolMoney,
  removeTracker
} = useTrakerDollar();

getAsyncConvertDollar();
getAsyncTrackerDollar();
getFlagCountry();

</script>

<style scoped>
h1::first-letter {
  text-transform: capitalize;
}
</style>
