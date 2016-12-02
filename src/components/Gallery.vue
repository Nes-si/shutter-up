<template lang="pug">
  .gallery
    .title
      | {{ category.name }}

    .menu-burger
    .menu
      .menu-bg
      .menu-inner
        .menu-title
          | {{ category.name }} List
        .menu-list
          .menu-header
            .menu-order
              | Order
            .menu-name
              | Title
            .menu-client
              | Client
          .menu-item(v-for="(item, i) of category.items")
            .menu-order
              | {{ i + 1 }}
            .menu-name
              .menu-dot
                .menu-dotBg(
                  v-bind:key="i"
                  v-if="i == itemNum"
                  )
              | {{ item.title }}
            .menu-client
              | {{ item.client }}

    transition(
      v-bind:css="false"
      v-on:before-enter="scrollBeforeEnter"
      v-on:enter="scrollEnter"
      v-on:leave="scrollLeave"
      )
      .cont(
        v-for="(item, i) of category.items"
        v-bind:key="i"
        v-if="i == itemNum"
        )
        .item-pic(v-bind:style="{ backgroundImage: 'url(/assets/data/' + category.name + '/items/' + item.image + ')' }")
    .count
      .count-index-wrapper(v-bind:style="{ minWidth: counterWidth + 'px' }")
        transition(
          v-bind:css="false"
          v-on:before-enter="counterBeforeEnter"
          v-on:enter="counterEnter"
          v-on:leave="counterLeave"
          )
          .count-index(
            v-for="(item, i) of category.items"
            v-bind:key="i"
            v-if="i == itemNum"
            ) {{ i + 1 }}
      .count-items / {{ category.items.length }}
      .count-name-wrapper
        transition(
          v-bind:css="false"
          v-on:before-enter="counterBeforeEnter"
          v-on:enter="counterEnter"
          v-on:leave="counterLeave"
          )
          .count-name(
            v-for="(item, i) of category.items"
            v-bind:key="i"
            v-if="i == itemNum"
            ) {{ item.title }}
</template>

<script>
  import Velocity from 'velocity-animate';

  import {store} from 'index';
  import {data} from 'store/fixtures';
  import ScrollHandler from 'utils/scrollhandler';


  export default {
    name: "GalleryComponent",

    data: function () {
      return {
        portfolio: this.$select('portfolio'),
        category: data[this.$select('portfolio').category],

        itemNum: 0,
        direction: 'right',

        scrollHandler: null,

        counterWidth: 13
      }
    },

    mounted: function () {
      this.scrollHandler = new ScrollHandler(
        this.itemNext, this.itemPrev, 'h'
      );
      if (this.category.items.length > 9)
        this.counterWidth = 24;
    },

    beforeDestroy: function () {
      this.scrollHandler.destroy();
    },

    methods: {
      itemNext: function () {
        if (this.itemNum >= this.category.items.length - 1)
          return;
        this.itemNum++;
        this.direction = 'right';
      },
      itemPrev: function () {
        if (this.itemNum <= 0)
          return;
        this.itemNum--;
        this.direction = 'left';
      },

      scrollBeforeEnter: function (el) {
        let value = this.direction === 'right' ? '100%' : "-100%";
        el.style.transform = `translate3d(${value}, 0, 0)`;
      },
      scrollEnter: function (el, done) {
        let value = this.direction === 'right' ? '99%' : "-99%";
        Velocity(el, { translateX: [0, value], translateZ: 0 }, { duration: 400, complete: done });
      },
      scrollLeave: function (el, done) {
        let value = this.direction === 'right' ? '-100%' : "100%";
        Velocity(el, { translateX: value, translateZ: 0}, { duration: 400, complete: done });
      },

      counterBeforeEnter: function (el) {
        let value = this.direction === 'right' ? '100%' : "-100%";
        el.style.transform = `translate3d(0, ${value}, 0)`;
      },
      counterEnter: function (el, done) {
        let value = this.direction === 'right' ? '99%' : "-99%";
        Velocity(el, { translateY: [0, value], translateZ: 0 }, { duration: 400, complete: done });
      },
      counterLeave: function (el, done) {
        let value = this.direction === 'right' ? '-100%' : "100%";
        Velocity(el, { translateY: value, translateZ: 0}, { duration: 400, complete: done });
      },
    },

    watch: {
      'portfolio.category': {
        handler: function () {
          this.category = data[this.portfolio.category];
          this.itemNum = 0;
        }
      }
    }
  }


</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .gallery {
    .title {
      font-size: 18px;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1.5px;

      position: absolute;
      top: 26px;
      left: 0;

      width: 100%;
      text-align: center;
    }

    .count {
      position: absolute;
      bottom: 26px;
      height: 20px;
      overflow: hidden;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      font-size: 18px;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1.5px;

      width: 100%;
      padding: 0 26px;

      &-index-wrapper {
        min-width: 13px;
        min-height: 20px;
        position: relative;
      }

      &-index {
        text-align: right;
        width: 100%;
        position: absolute;
      }

      &-items {
        margin-left: 10px;
      }

      &-name-wrapper {
        min-width: 303px;
        min-height: 20px;
        position: relative;
      }

      &-name {
        margin-left: 34px;
        position: absolute;
        white-space: nowrap;
      }
    }

    .cont {
      position: absolute;
      top: 20%;
      left: 10%;
      width: 80%;
      height: 60%;

      .item-pic {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: center center no-repeat / contain;
      }
    }

    .menu {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;

      z-index: 500;

      &-inner {
        position: absolute;
        right: 0;
        top: 0;

        background: #FFFFFF;

        width: 502px;
        height: 100%;
        padding: 36px 80px;
      }

      &-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        background: #FFFFFF;
        opacity: 0.7;
      }

      &-title {
        font-size: 18px;
        color: rgba(0,0,0,0.87);
        letter-spacing: 1px;
      }

      &-header,
      &-item {
        display: flex;
        flex-flow: row nowrap;
      }

      &-list {
        margin-top: 105px;
      }

      &-header {
        font-family: 'Marvel', sans-serif;
        font-weight: bold;
        font-size: 13px;
        color: rgba(0,0,0,0.87);
        letter-spacing: 1.26px;
        line-height: 13px;

        padding-bottom: 8px;
        border-bottom: 1px solid rgba(0,0,0,0.24);
      }

      &-item {
        font-size: 14px;
        color: rgba(0,0,0,0.87);
        letter-spacing: 0.5px;
        line-height: 20px;

        padding: 8px 0;
        border-bottom: 1px solid rgba(0,0,0,0.24);

        .menu-order {
          text-align: center;
        }
      }

      &-order {
        flex: 0 0 10%;
      }

      &-name {
        flex: 0 0 50%;
        margin-left: 8%;

        position: relative;
      }

      &-client {
        flex: 0 0 32%;
      }

      &-dot {
        position: absolute;
        left: -14px;
        top: 8px;

        width: 6px;
        height: 6px;
        border: 1px rgba(0,0,0,0.87) solid;
        border-radius: 100px;

        &Bg {
          background: rgba(0,0,0,0.87);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
