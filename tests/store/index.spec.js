import { expect } from '@jest/globals';
import { setActivePinia, createPinia } from 'pinia';
import { useTrackerStore } from '../../src/store';

const LIST_COUNTRY = [
  { name: 'Bolivia', isTracket: true, flag: 'Bolivia' },
  { name: 'Peru', isTracket: false, flag: 'Peru' },
  { name: 'Chile', isTracket: false, flag: 'Chile' },
];

describe('Tracker Store - Pinia ', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test('should get thet initial store', () => {
    const store = useTrackerStore();

    expect(store.rate).toBe('');
    expect(store.country).toMatchObject({
      name: '',
      trackets: [],
      isTracket: false,
      flag: '',
    });
  });

  test('should get rate', () => {
    const store = useTrackerStore();
    expect(store.getRate).toBe('');

    store.setRate(6.95361);
    expect(store.getRate).toBe(6.95361);
  });

  test('should get all countries', () => {
    const store = useTrackerStore();
    expect(store.getAllCountry).toMatchObject([]);

    store.setListCoutries(LIST_COUNTRY);
    expect(store.getAllCountry).toMatchObject(LIST_COUNTRY);
  });

  test('should get all countries', () => {
    const store = useTrackerStore();

    store.setListCoutries(LIST_COUNTRY);
    expect(store.getCountryByName('Bolivia')).toMatchObject([
      { flag: 'Bolivia', isTracket: true, name: 'Bolivia' },
    ]);
  });
});
