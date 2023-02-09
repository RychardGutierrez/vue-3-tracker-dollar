import useCountry from '../../src/composables/useCountry';

import { COUNTRY_DATA as mockCountryData } from '../../src/data/trackerMock';
import { flushPromises } from '@vue/test-utils';

jest.mock('../../src/api/countryApi', () => {
  return {
    getFlagCountries: jest.fn(() => Promise.resolve(mockCountryData)),
  };
});

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({
    query: {
      official: 'Plurinational State of Bolivia',
      preview: true,
    },
    params: { country: 'bolivia' },
  })),
}));

describe('useCountry composable', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should getFlagCountry', async () => {
    const { getFlagCountry, flagCountry } = useCountry();
    getFlagCountry();
    await flushPromises();

    expect(flagCountry.value).toBe('https://flagcdn.com/bo.svg');
  });

  test('should get name default of the flag', () => {
    const { nameDefaultFlag } = useCountry();

    expect(nameDefaultFlag.value).toBe('bolivia - Flag Icon');
  });

  test('should get isPreview', () => {
    const { isPreview } = useCountry();

    expect(isPreview.value).toBe(true);
    expect(isPreview.value).toBeTruthy();
  });
});
