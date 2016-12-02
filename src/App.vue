<template lang="pug">
  #app
    .curtain
    router-view.router-view
    menu-component(v-if="nav.openedMenu")
    .menu(v-if="!nav.openedMenu")
    .menu-burger(@click="onMenuOpen")
</template>

<script>
  import 'whatwg-fetch';

  import MenuComponent from 'components/Menu';
  import {store} from 'index';


  export default {
    name: "App",

    components: {
      MenuComponent
    },

    data: function () {
      return {
        nav: this.$select('nav')
      }
    },

    methods: {
      onMenuOpen() {
        store.actions.nav.menuOpen();
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @font-face {
  	font-family: 'Marvel';
  	src: url('~assets/fonts/Marvel-Regular.eot');
  	src: url('~assets/fonts/Marvel-Regular.eot?#iefix') format('embedded-opentype'),
  		url('~assets/fonts/Marvel-Regular.woff') format('woff'),
  		url('~assets/fonts/Marvel-Regular.ttf') format('truetype');
  	font-weight: normal;
  	font-style: normal;
  }

  @font-face {
  	font-family: 'Marvel';
  	src: url('~assets/fonts/Marvel-Bold.eot');
  	src: url('~assets/fonts/Marvel-Bold.eot?#iefix') format('embedded-opentype'),
  		url('~assets/fonts/Marvel-Bold.woff') format('woff'),
  		url('~assets/fonts/Marvel-Bold.ttf') format('truetype');
  	font-weight: bold;
  	font-style: normal;
  }

  @import 'normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:100,300,400,500,700');

  * {
    box-sizing: border-box;
  }

  html {
    overflow: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Work Sans', sans-serif;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }
</style>

<style lang="scss" rel="stylesheet/scss">
  #app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .menu-burger {
    position: absolute;
    top: 26px;
    left: 26px;
    cursor: pointer;

    background: url('~assets/images/burger.svg') no-repeat center center / contain;
    width: 24px;
    height: 14px;

    opacity: 0.38;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  .router-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
