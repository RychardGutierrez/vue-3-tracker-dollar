import { expect } from '@jest/globals';
import { flushPromises, shallowMount } from '@vue/test-utils';

import SearchBar from '../../../src/components/ui/SearchBar.vue';

const mockUseRouteCountry = {
  getResults: jest.fn(),
  searchQuery: '',
  searchError: { error: false, message: '' },
  countrySearchResults: null,
};

jest.mock('../../../src/composables/useSearchCountry', () => {
  const useRouteCountry = () => mockUseRouteCountry;
  return useRouteCountry;
});

describe('SearchBar composables', () => {
  let wraper = null;
  beforeEach(() => {
    wraper = shallowMount(SearchBar);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should to match with snapshot ', () => {
    expect(wraper.html()).toMatchSnapshot();
  });

  test('should get result when input have some text', async () => {
    wraper = shallowMount(SearchBar);
    const inputSearch = wraper.find('input');
    await inputSearch.setValue('Bolivia');
    await flushPromises();

    expect(mockUseRouteCountry.getResults).toHaveBeenCalledTimes(1);
  });
});
