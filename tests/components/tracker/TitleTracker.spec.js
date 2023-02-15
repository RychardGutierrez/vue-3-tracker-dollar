import { shallowMount } from '@vue/test-utils';

import TitleTracker from '../../../src/components/tracker/TitleTracker.vue';

describe('TitleTracker component', () => {
  test('should to match with snapshot', () => {
    const props = {
      official: 'Plurinational State of Bolivia',
      flagContry: 'https://flagcdn.com/bo.svg',
      nameDefaultFlag: 'bolivia - Flag Icon',
      trackerDate: 'Sat, February 11',
      trackerTime: '8:20 PM',
    };

    const wrapper = shallowMount(TitleTracker, { props });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
