import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

import configureStore from 'store/configureStore';
import App from './App';
import Home from 'components/Home';
import About from 'components/About';
import Contacts from 'components/Contacts';
import Gallery from 'components/Gallery';
import {pageOpen} from 'ducks/nav';


export const PAGE_HOME      = 'home';
export const PAGE_GALLERY   = 'gallery';
export const PAGE_ABOUT     = 'about';
export const PAGE_CONTACTS  = 'contacts';

export const store = configureStore();

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: PAGE_HOME,
      path: '/',
      component: Home
    },
    {
      name: PAGE_GALLERY,
      path: '/gallery/:cat',
      component: Gallery
    },
    {
      name: PAGE_ABOUT,
      path: '/about',
      component: About
    },
    {
      name: PAGE_CONTACTS,
      path: '/contacts',
      component: Contacts
    }
  ]
});

router.afterEach((to, from) => {
  store.dispatch(pageOpen(to, from));
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
