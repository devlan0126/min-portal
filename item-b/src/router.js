import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/layout';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/user',
      children: [
        {
          path: '/user',
          name: 'User',
          component: () => import('@/views/User.vue'),
        },
        {
          path: '/account',
          name: 'Account',
          component: () => import('@/views/Account.vue'),
        },
      ],
    },
  ],
});
