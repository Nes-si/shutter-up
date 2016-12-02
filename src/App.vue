<template lang="pug">
  #app
    .curtain
    router-view.router-view
    transition(name="menu")
      menu-component(v-if="nav.openedMenu")
    .menu-burger(@click="onMenuToggle" v-if="!nav.showingMenu" v-html="require('assets/images/burger-new.inline.svg')")
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
        nav: this.$select('nav'),
        
        burgerLines1: null,
        burgerLines3: null,
        burgerArrow: null
      }
    },
    
    mounted: function () {
      this.burgerLine1 = document.querySelector('.menu-burger .line1');
      this.burgerLine3 = document.querySelector('.menu-burger .line3');
      this.burgerArrow = document.querySelector('.menu-burger .arrow');
    },

    methods: {
      onMenuToggle() {
        if (this.nav.openedMenu)
          store.actions.nav.menuClose();
        else
          store.actions.nav.menuOpen();
      }
    },
  
    watch: {
      'nav.openedMenu': {
        handler: function () {
          if (this.nav.openedMenu) {
            this.burgerArrow.classList.add('arrow-show');
            this.burgerLine1.classList.add('line13-show');
            this.burgerLine3.classList.add('line13-show');
          } else {
            this.burgerArrow.classList.remove('arrow-show');
            this.burgerLine1.classList.remove('line13-show');
            this.burgerLine3.classList.remove('line13-show');
          }
        }
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

    width: 35px;
    height: 14px;

    opacity: 0.38;
    transition: opacity 0.2s ease;
    
    z-index: 20;

    &:hover {
      opacity: 1;
    }
    
    .line1, .line3 {
      transition: transform 1s;
    }
    
    .arrow {
      opacity: .01;
      transform: scale(0);
      transition: transform 1s, opacity 1s;
    }
  
    .line13-show {
      transform: translate3d(11px, 0, 0);
    }
  
    .arrow-show {
      transform: scale(1);
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

  .menu-enter-active, .menu-leave-active {
    transition: transform .5s;
  }
  .menu-enter, .menu-leave-active {
    transform: translate3d(-100%, 0, 0);
  }

</style>
