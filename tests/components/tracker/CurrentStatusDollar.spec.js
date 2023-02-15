const { shallowMount } = require('@vue/test-utils');

import CurrenStatusDollar from '../../../src/components/tracker/CurrentStatusDollar.vue';

describe('CurrentStatusDollar component', () => {
  test('should to match with snapshot', () => {
    const props = {
      converterDollar: {
        result: '6.98',
      },
      simbolMoney: 'BO',
    };

    const wrapper = shallowMount(CurrenStatusDollar, { props });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
