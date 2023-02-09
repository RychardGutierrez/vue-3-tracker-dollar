import { createPinia, setActivePinia } from 'pinia';
import { useTrackerStore } from '../../src/store';

import useNavigationBar from '../../src/composables/useNavigationBar';
import { expect } from '@jest/globals';

jest.mock('../../src/helper/dateTime', () => {
  return {
    currentDate: () => 'Feb 5, 2023',
  };
});

const mockUseRouter = {
  replace: jest.fn(),
};

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({
    query: {
      official: 'Plurinational State of Bolivia',
      preview: true,
      symbols: 'BO',
    },
    params: { country: 'bolivia' },
  })),
  useRouter: () => mockUseRouter,
}));

describe('useNavigationBar composable', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should save in local store', () => {
    const trackerStore = useTrackerStore();
    trackerStore.setRate(6.95361);

    const { saveLocalStore } = useNavigationBar();
    saveLocalStore();
    const data = JSON.parse(localStorage.getItem('savedTrackers'));

    expect(data).toMatchObject([
      {
        country: 'bolivia',
        defaultRate: '1 USD',
        id: expect.any(String),
        official: 'Plurinational State of Bolivia',
        savedDate: 'Feb 5, 2023',
        symbol: 'BO',
      },
    ]);

    expect(mockUseRouter.replace).toHaveBeenCalledWith({
      query: {
        id: expect.any(String),
        official: 'Plurinational State of Bolivia',
        symbols: 'BO',
      },
    });
  });
});
