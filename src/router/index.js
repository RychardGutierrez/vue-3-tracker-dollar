import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CountryView from '@/views/CountryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Add new routes
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/tracker/:country',
      name: 'countryView',
      component: CountryView,
      meta: {
        title: 'Country',
      },
      alias: '/tracker/:country',
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.country ? `${to.params.country.toUpperCase()}` : to.meta.title
  } | Dollar Tracker`;
  next();
});

export default router;
