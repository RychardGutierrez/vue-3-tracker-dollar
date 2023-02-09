import { flushPromises } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';

import useTrakerDollar from '../../src/composables/useTrakerDollar';
import { removedStore } from '../../src/data/store';

const mockResultConvertDollar = {
  success: true,
  query: {
    from: 'USD',
    to: 'BOB',
    amount: 1,
  },
  info: {
    timestamp: 1664082963,
    quote: 6.95361,
  },
  result: 6.95361,
};

const mockTrackerDollar = {
  success: true,
  timeframe: true,
  start_date: '2022-09-18',
  end_date: '2022-09-25',
  source: 'USD',
  quotes: {
    '2022-09-19': {
      USDBOB: 6.828416,
    },
    '2022-09-20': {
      USDBOB: 6.90908,
    },
    '2022-09-21': {
      USDBOB: 6.915233,
    },
    '2022-09-22': {
      USDBOB: 6.914142,
    },
    '2022-09-23': {
      USDBOB: 6.90469,
    },
    '2022-09-24': {
      USDBOB: 6.95361,
    },
    '2022-09-25': {
      USDBOB: 6.95361,
    },
  },
};

const mockUseRouter = {
  push: jest.fn(),
};

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({
    query: {
      official: 'Plurinational State of Bolivia',
      id: '9a9f07bea8f',
      symbols: 'BO',
    },
    params: { country: 'bolivia' },
  })),
  useRouter: () => mockUseRouter,
}));

jest.mock('../../src/api/exchangeApi.js', () => ({
  getConvertDollar: jest.fn(() => Promise.resolve(mockResultConvertDollar)),
  getTrackerDollar: jest.fn(() => Promise.resolve(mockTrackerDollar)),
}));

jest.mock('../../src/data/store.js', () => ({
  removedStore: jest.fn(() => ({
    error: false,
    message: 'Removed tracker',
  })),
}));

describe('useTrakerDollar composable', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test('should get convert dollar', async () => {
    const { getAsyncConvertDollar, converterDollar, countryError } =
      useTrakerDollar();
    await getAsyncConvertDollar();
    await flushPromises();

    expect(converterDollar.value).toMatchObject(mockResultConvertDollar);
    expect(countryError.value).toMatchObject({ message: '', error: false });
  });

  test('should get tracker dollar', async () => {
    const { getAsyncTrackerDollar, trackerHistory, countryError } =
      useTrakerDollar();

    await getAsyncTrackerDollar();
    await flushPromises();

    expect(trackerHistory.value).toMatchObject(mockTrackerDollar);
    expect(countryError.value).toMatchObject({ message: '', error: false });
  });

  test('should remove a tracker country', () => {
    const { removeTracker } = useTrakerDollar();

    removeTracker();

    expect(removedStore).toHaveBeenCalledWith('9a9f07bea8f');
    expect(mockUseRouter.push).toHaveBeenCalledWith({ name: 'home' });
  });
});
