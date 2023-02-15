import { shallowMount } from '@vue/test-utils';
import ListResult from '../../../src/components/ui/ListResult.vue';

describe('ListResult component', () => {
  let wrapper = null;
  const jestGoToCountry = jest.fn();
  const props = {
    countrySearchResults: [
      {
        name: {
          common: 'Venezuela',
          official: 'Bolivarian Republic of Venezuela',
        },
      },
      {
        name: {
          common: 'Bolivia',
          official: 'Plurinational State of Bolivia',
        },
      },
    ],
    searchError: { error: false, message: '' },
    goToCountry: jestGoToCountry,
  };

  beforeEach(() => {
    wrapper = shallowMount(ListResult, { props });
  });

  test('should to match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should show an error message', () => {
    wrapper = shallowMount(ListResult, {
      props: {
        ...props,
        searchError: { error: true, message: 'Ups something is wrong' },
      },
    });

    const messageError = wrapper.get('p');
    expect(messageError.text()).toBe('Ups something is wrong');
  });

  test('should show an error message when we do not have result', () => {
    wrapper = shallowMount(ListResult, {
      props: {
        ...props,
        countrySearchResults: [],
      },
    });

    const messageError = wrapper.get('p');
    expect(messageError.text()).toBe(
      'Sorry, something went wrong, please try again'
    );
  });
});
