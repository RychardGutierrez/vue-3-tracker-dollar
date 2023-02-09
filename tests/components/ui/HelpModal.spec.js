import { shallowMount, mount } from '@vue/test-utils';

import HelpModal from '../../../src/components/ui/HelpModal.vue';

describe('HelpModal component', () => {
  test('should to match with snapshot - mount', () => {
    const wrapper = mount(HelpModal);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should to match with snapshot - shallowMount', () => {
    const wrapper = shallowMount(HelpModal);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
