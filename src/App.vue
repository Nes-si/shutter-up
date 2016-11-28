<template lang="pug">
  #app
    .curtain
    router-view.router-view
    menu-component
</template>

<script>
  import 'whatwg-fetch';
  
  import MenuComponent from 'components/Menu';

  export default {
    name: "App",
  
    components: {
      MenuComponent
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  #app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 216px;
    background: #F5F5F5;
  }
  
  .router-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>


<style>
  @import 'normalize.css';
</style>

<style lang="scss" rel="stylesheet/scss">
  /*
  @font-face {
  	font-family: 'Open Sans Hebrew Condensed';
  	src: url('assets/fonts/OpenSansHebrewCondensed-Regular.eot');
  	src: url('assets/fonts/OpenSansHebrewCondensed-Regular.eot?#iefix') format('embedded-opentype'),
  		url('assets/fonts/OpenSansHebrewCondensed-Regular.woff') format('woff'),
  		url('assets/fonts/OpenSansHebrewCondensed-Regular.ttf') format('truetype');
  	font-weight: normal;
  	font-style: normal;
  }
  */
</style>

<style lang="sss" rel="stylesheet/sass">
  *
    box-sizing: border-box

  html
    overflow: hidden
  body
    -webkit-font-smoothing: antialiased
    font-family: 'Helvetica', sans-serif
    overflow: hidden


</style>
