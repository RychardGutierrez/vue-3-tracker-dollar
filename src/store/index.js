import { defineStore } from 'pinia';

export const useTrackerStore = defineStore('trackerStore', {
  state: () => ({
    rate: '',
    // onlyh to test
    countries: [],
    country: { name: '', trackets: [], isTracket: false, flag: '' },
  }),
  getters: {
    getRate() {
      return this.rate;
    },
    getAllCountry() {
      return this.countries;
    },
    getCountryByName() {
      return (country) => this.countries.filter(({ name }) => name === country);
    },
  },
  actions: {
    setRate(rate) {
      this.rate = rate;
    },
    setListCoutries(countries) {
      this.countries = [...countries];
    },
  },
});
