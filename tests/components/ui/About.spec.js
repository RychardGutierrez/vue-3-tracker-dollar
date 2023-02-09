import { expect } from '@jest/globals';
import { shallowMount } from '@vue/test-utils';

import About from '../../../src/components/ui/About.vue';

describe('About component', () => {
  test('should to match with snapshot', () => {
    const wrapper = shallowMount(About);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should containt text about', () => {
    const wrapper = shallowMount(About);

    const aboutTitle = wrapper.find('h1');
    expect(aboutTitle.text()).toBe('About:');

    const subTitles = wrapper.findAll('h2');
    expect(subTitles.at(0).text()).toBe('How it works:');
    expect(subTitles.at(1).text()).toBe('Remove a country');
  });
});
