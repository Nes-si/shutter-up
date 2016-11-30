import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

import configureStore from 'store/configureStore';
import App from './App';
import Home from 'components/Home';
import About from 'components/About';
import Contacts from 'components/Contacts';
import Gallery from 'components/Gallery';


export const store = configureStore();

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/gallery/:cat',
      component: Gallery
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contacts',
      component: Contacts
    }
  ]
});

router.afterEach((to, from) => {
  // ...
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
