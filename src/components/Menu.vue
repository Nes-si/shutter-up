<template lang="pug">
  .menu
    h1 Menu
    ul
      li
        router-link(to="/") Home
      li
        router-link(to="/about") About
</template>

<script>
  export default {
    name: "MenuComponent"
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 216px;
    background: #F5F5F5;
  }
</style>
