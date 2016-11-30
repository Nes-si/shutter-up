<template lang="pug">
  .menu
    .logo
      | DOUG HOLT
      .logo-inner
        | PHOTOGRAPHY

    .nav
      .nav-item
        router-link(to="/") Home
      .nav-item.nav-work
        .nav-workLabel
          | Work
          .nav-arrow
        .nav-inner
          .nav-innerItem(
            v-for="(category, index) of categories"
            v-bind:key="index")
              router-link(to="/")
                | {{category.name}}
      .nav-item
        router-link(to="/about") About
      .nav-item
        router-link(to="/journal") Journal
      .nav-item
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

    padding: 10vh 36px;


    .logo {
      font-weight: 500;
      font-size: 18px;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1.5px;

      &-inner {
        margin-top: 3px;

        font-size: 14px;
        letter-spacing: 1.16px;
      }
    }

    .nav {
      margin-top: 18vh;

      font-size: 24px;
      color: rgba(0,0,0,0.54);
      letter-spacing: 2px;
      line-height: 24px;

      a {
        color: rgba(0,0,0,0.54);

        transition: color 0.2s ease;
        will-change: color;
      }

      &-item {
        margin-top: 24px;

        &:hover > a {
          color: #000000;
        }
      }

      &-work {

        &:hover {
          .nav-inner {
            display: block;
          }

          .nav-arrow {
            transform: rotate(180deg);
          }
        }

        &Label {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
        }

        .nav-arrow {
          background: url('~assets/images/menu-arrow.svg') no-repeat center center / contain;
          height: 6px;
          width: 12px;
          margin-left: 7px;

          transition: transform 0.2s ease;
          will-change: transform;
        }
      }

      &-inner {
        font-family: 'Marvel', sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: rgba(0,0,0,0.54);
        letter-spacing: 1.55px;
        line-height: 18px;
        text-transform: uppercase;

        display: none;

        &Item {
          margin-top: 12px;
          margin-left: 12px;

          &:hover a {
            color: #000000;
          }

          &:first-child {
            margin-top: 19px;
          }
        }
      }
    }
  }
</style>
