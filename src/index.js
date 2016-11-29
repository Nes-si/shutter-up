import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

import configureStore from 'store/configureStore';
import App from './App';
import Home from 'components/Home';
import About from 'components/About';
import Contacts from 'components/Contacts';


export const store = configureStore();

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
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

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
