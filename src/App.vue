<template lang="pug">
  #app
    .curtain
    .menu
      | here is some menu
    .index-view
      .screen
      .screen
      .screen
      .screen


</template>
<script>
  import 'whatwg-fetch';
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
  .index-view {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-left: 216px;
  }
  .screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: trasform .3s ease;
    &:nth-child(4n-3) {
      background: red;
    }
    &:nth-child(4n-2) {
      background: green;
    }
    &:nth-child(4n-2) {
      background: blue;
    }
    &:nth-child(4n-1) {
      background: pink;
    }
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
