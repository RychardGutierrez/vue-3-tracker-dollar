import { expect } from '@jest/globals';
import routerTracker from '../../src/router';

jest.mock('../../src/views/HomeView.vue', () => jest.fn());
jest.mock('../../src/views/CountryView.vue', () => jest.fn());

describe('Router tracket module', () => {
  test('should router tracket have this configuration', () => {
    expect(routerTracker.options.routes).toMatchObject([
      {
        path: '/',
        name: 'home',
        component: expect.any(Function),
        meta: {
          title: 'Home',
        },
      },
      {
        path: '/tracker/:country',
        name: 'countryView',
        component: expect.any(Function),
        meta: {
          title: 'Country',
        },
        alias: '/tracker/:country',
      },
    ]);
  });
});
