import { expect } from '@jest/globals';
import { mount, shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { getRouter } from 'vue-router-mock';

import NavigationBar from '../../../src/components/ui/NavigationBar.vue';

jest.mock('../../../src/assets/dollar.svg', () => 'dollar-icon');
jest.mock('../../../src/assets/help.svg', () => 'help-icon');
jest.mock('../../../src/assets/save.svg', () => 'save-icon');

const mockUseNavigationBar = {
  saveLocalStore: jest.fn(),
  toogleModal: jest.fn(),
  isPreview: false,
  modalActive: false,
};

jest.mock('../../../src/composables/useNavigationBar', () => {
  const useNavigationBar = () => mockUseNavigationBar;
  return useNavigationBar;
});

describe('NavigationBar component', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(NavigationBar, { stubs: ['router-link'] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should to match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call toogleModal method when help is clicked', async () => {
    const helpModal = wrapper.find('[alt="Help"]');
    await helpModal.trigger('click');

    expect(mockUseNavigationBar.toogleModal).toHaveBeenCalledTimes(1);
  });
});
