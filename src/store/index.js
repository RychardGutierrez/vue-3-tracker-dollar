import { defineStore } from 'pinia';

export const useTrackerStore = defineStore('trackerStore', {
  state: () => ({
    rate: '',
  }),
  getters: {
    geRate() {
      return this.rate;
    },
  },
  actions: {
    setRate(rate) {
      this.rate = rate;
    },
  },
});
