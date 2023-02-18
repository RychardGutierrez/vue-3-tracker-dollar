import { flushPromises, mount, shallowMount } from '@vue/test-utils';
import CountryList from '../../../src/components/country/CountryList.vue';

import { LIST_TRACKER_COUNTRY as mockListTrackerCountry } from '../../../src/data/trackerMock';

jest.mock('../../../src/composables/useTrakerDollar', () => {
  const useTrakerDollar = () => ({
    getTrakers: jest.fn(),
    listTrakers: mockListTrackerCountry,
  });

  return useTrakerDollar;
});

const mockGoToCountryByTracker = jest.fn();

jest.mock('../../../src/composables/useRouteCountry', () => {
  const useRouteCountry = () => ({
    goToCountryByTracker: mockGoToCountryByTracker,
  });

  return useRouteCountry;
});

describe('CountryList component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should to match with snapshot - mount', () => {
    const wraper = mount(CountryList);

    expect(wraper.html()).toMatchSnapshot();
  });

  test('should to match with snapshot - shallowMount', () => {
    const wraper = shallowMount(CountryList);

    expect(wraper.html()).toMatchSnapshot();
  });

  test('should call toCountryByTracker', async () => {
    const tracker = {
      country: 'bolivia',
      defaultRate: '1 USD',
      id: '9a9f07bea8f',
      official: 'Plurinational State of Bolivia',
      savedDate: 'Feb 8, 2023',
      symbol: 'BOB',
    };
    const wraper = shallowMount(CountryList);
    await flushPromises();

    let countryCart = wraper.find('country-card-stub');
    await countryCart.trigger('click');
    expect(mockGoToCountryByTracker).toHaveBeenCalledWith(tracker);

    countryCart = wraper.find('[data-test="card-9a9f07bea8f"]');
    await countryCart.trigger('click');
    expect(mockGoToCountryByTracker).toHaveBeenCalledWith(tracker);
  });
});
