import useRouteCountry from '../../src/composables/useRouteCountry';

const mockUseRouter = {
  push: jest.fn(),
};

jest.mock('vue-router', () => ({
  useRouter: () => mockUseRouter,
}));

describe('useRouteCountry composable', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should router push to countryView', () => {
    const { goToCountry } = useRouteCountry();

    const searchResult = {
      name: {
        common: 'Bolivia',
        official: 'Plurinational State of Bolivia',
      },
      currencies: {
        BOB: {
          name: 'Bolivian boliviano',
          symbol: 'Bs.',
        },
      },
    };

    goToCountry(searchResult);

    expect(mockUseRouter.push).toHaveBeenCalledWith({
      name: 'countryView',
      params: { country: 'bolivia' },
      query: {
        official: 'Plurinational State of Bolivia',
        preview: true,
        symbols: 'BOB',
      },
    });
  });

  test('should router push to countryView by tracker', () => {
    const { goToCountryByTracker } = useRouteCountry();
    const tracker = {
      country: 'bolivia',
      defaultRate: '1 USD',
      id: '9a9f07bea8f',
      official: 'Plurinational State of Bolivia',
      savedDate: 'Feb 8, 2023',
      symbol: 'BOB',
    };

    goToCountryByTracker(tracker);

    expect(mockUseRouter.push).toHaveBeenCalledWith({
      name: 'countryView',
      params: { country: 'bolivia' },
      query: {
        id: '9a9f07bea8f',
        official: 'Plurinational State of Bolivia',
        symbols: 'BOB',
      },
    });
  });
});
