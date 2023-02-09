import { flushPromises } from '@vue/test-utils';

import useSearchCountry from '../../src/composables/useSearchCountry';
import { LIST_RESULT_SEARCH as mockListResultSearch } from '../../src/data/trackerMock';

jest.mock('../../src/api/countryApi', () => {
  return {
    getSeachContries: jest.fn(() => Promise.resolve(mockListResultSearch)),
  };
});

describe('useSearchCountry composable', () => {
  beforeEach(() => {
    jest.setTimeout(1);
  });

  test('should get list result country by search', async () => {
    const { getResults, searchQuery, searchError, countrySearchResults } =
      useSearchCountry();

    searchQuery.value = 'Bolivia';
    jest.useFakeTimers();
    getResults();
    jest.runAllTimers();

    await flushPromises();

    expect(countrySearchResults.value).toEqual(mockListResultSearch);
    expect(searchError.value).toEqual({ error: false, message: '' });

    jest.useRealTimers();
  });
});
