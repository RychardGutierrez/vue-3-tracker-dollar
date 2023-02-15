import { shallowMount } from '@vue/test-utils';

import HistoryTracker from '../../../src/components/tracker/HistoryTracker.vue';

describe('HistoryTracker composable', () => {
  test('should to match with snapshot', () => {
    const props = {
      history: {
        quotes: {
          '2022-09-19': {
            USDBOB: 6.828416,
          },
          '2022-09-20': {
            USDBOB: 6.90908,
          },
          '2022-09-21': {
            USDBOB: 6.915233,
          },
          '2022-09-22': {
            USDBOB: 6.914142,
          },
          '2022-09-23': {
            USDBOB: 6.90469,
          },
          '2022-09-24': {
            USDBOB: 6.95361,
          },
          '2022-09-25': {
            USDBOB: 6.95361,
          },
        },
      },
      simbolMoney: 'BO',
      dateWeekDay: jest.fn(() => 'Monday'),
    };
    const wrapper = shallowMount(HistoryTracker, { props });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
