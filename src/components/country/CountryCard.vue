<template>
  <div v-if="country"
    class="flex py-4 px-4 bg-dollar-primary hover:bg-green-600 text-white rounded-md shadow-md cursor-pointer">
    <div class="flex flex-col flex-1">
      <h2 class="text-2xl">{{ country.official }}</h2>
      <h3>{{ country.savedDate }}</h3>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-3cl self-end">{{ country.rate }} {{ country.symbol }}</p>
      <p class="text-3cl self-end">
        {{ country.defaultRate }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Props
defineProps({
  country: {
    type: Object,
    default: null,
  },
});
</script>
