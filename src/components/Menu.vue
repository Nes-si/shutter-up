<template lang="pug">
  .menu
    h1 Menu
    ul
      li
        router-link(to="/") Home
      li
        | Work
        ul
          li(
            v-for="(category, index) of categories"
            v-bind:key="index")
            | {{category.name}}
      li
        router-link(to="/about") About
      li
        router-link(to="/contacts") Contact
</template>

<script>
  import {data} from 'store/fixtures';

  export default {
    name: "MenuComponent",

    data: function () {
      return {
        categories: data
      }
    }
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
