import { expect } from '@jest/globals';
import { flushPromises, shallowMount } from '@vue/test-utils';

import RemoveTracker from '../../../src/components/tracker/RemoveTracker.vue';

jest.mock('../../../src/assets/delete.svg', () => 'iconDelete');

describe('RemoveTracker component', () => {
  let wrapper = null;

  const jestRemoveTracker = jest.fn();

  beforeEach(() => {
    const props = {
      removeTracker: jestRemoveTracker,
    };

    wrapper = shallowMount(RemoveTracker, { props });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should to match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should click on Remove and call removeTracker method', async () => {
    const iconRemove = wrapper.find('div');

    await iconRemove.trigger('click');

    expect(jestRemoveTracker).toHaveBeenCalledTimes(1);
  });
});
