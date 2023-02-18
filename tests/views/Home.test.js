import { shallowMount } from '@vue/test-utils';
import HomeView from '../../src/views/HomeView.vue';

jest.mock('../../src/composables/useRouteCountry', () => {
  const useRouteCountry = () => ({
    goToCountry: jest.fn(),
  });
  return useRouteCountry;
});

jest.mock('../../src/components/country/CountryList.vue', () => jest.fn());

describe('HomeView', () => {
  test('should to match with snapshot', () => {
    const wraper = shallowMount(HomeView);

    expect(wraper.html()).toMatchSnapshot();
  });
});
