import { shallowMount } from '@vue/test-utils';
import CountryCard from '../../../src/components/country/CountryCard.vue';

describe('CountryCard component', () => {
  test('should to match with snapshot', () => {
    const defaultProps = {
      country: {
        official: 'Plurinational State of Bolivia',
        savedDate: 'Feb 5, 2023',
        rate: '6.95361',
        symbol: 'BO',
        defaultRate: '1 USD',
      },
    };
    const wraper = shallowMount(CountryCard, { props: defaultProps });

    expect(wraper.html()).toMatchSnapshot();
  });
});
