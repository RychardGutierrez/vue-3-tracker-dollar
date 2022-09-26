import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTrackerStore = defineStore('tracker', () => {
  const state = ref({});

  const reset = () => {
    Object.assign(state.value, {});

    console.log('reset');
  };

  return { state, reset };
});
