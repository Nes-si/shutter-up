<template lang="pug">
  .home
    .index-view
      .screen
      .screen
      .screen
      .screen
</template>

<script>
  export default {
    name: "HomeComponent"
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .index-view {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-left: 216px;
  
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
  }
  
</style>
