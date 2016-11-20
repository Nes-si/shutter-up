<template lang="pug">
  #app Hello!
</template>

<script>

</script>

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
  .container
    display: flex
    flex-flow: column nowrap
    align-items: center

    max-width: 1200px
    padding: 0 30px
    margin: 0 auto

  *
    box-sizing: border-box

  html
    background: #fff

  body
    -webkit-font-smoothing: antialiased
    font-family: 'Open Sans Hebrew Condensed', sans-serif

  textarea
    line-height: 1.6
    resize: vertical

  a
    outline: none
    text-decoration: none

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

  input[type=checkbox],
  input[type=radio]
    opacity: 0
    position: absolute
    z-index: 12
    width: 18px
    height: 18px
    cursor: pointer

  input[type=checkbox]:checked,
  input[type=radio]:checked,
  input[type=checkbox]:focus,
  input[type=radio]:focus
    outline: none !important
</style>

<style lang="scss" scoped rel="stylesheet/scss">
</style>
