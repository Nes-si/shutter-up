<template lang="pug">
  .home
    .category(
      v-for="(category, catIndex) of categories"
      v-bind:key="catIndex"
      )
      .slide(
        v-for="(slide, slIndex) of category.slides"
        v-bind:key="slIndex"
        )
        .bg
        .product
          | Product
          span Title 1
        transition(name="slide" appear)
          .screen(
            v-show="slIndex == slideNum && catIndex == portfolio.category"
            v-bind:style="{ backgroundImage: 'url(assets/data/' + category.name + '/slides/' + slide + ')' }"
            )
</template>
<script>
  import {TweenLite} from 'gsap';
  import ScrollToPlugin from 'gsap/src/uncompressed/plugins/ScrollToPlugin';

  import {store} from 'index';
  import {data} from 'store/fixtures';
  import ScrollHandler from 'utils/scrollhandler';


  export default {
    name: "HomeComponent",

    data: function () {
      return {
        categories: data,
        scrollHandler: null,
        portfolio: this.$select('portfolio'),
        slideNum: 0,
        slidesLength: 3,

        height: 0,
        mainElm: null
      }
    },

    mounted: function () {
      setInterval(() => this.slideNext(), 5000);

      this.scrollHandler = new ScrollHandler(
        store.actions.portfolio.categoryNext,
        store.actions.portfolio.categoryPrev
      );

      this.height = window.innerHeight;
      this.mainElm = document.querySelector('.home');
    },

    beforeDestroy: function () {
      this.scrollHandler.destroy();
    },

    methods: {
      slideNext: function () {
        if (this.slideNum >= this.slidesLength - 1)
          this.slideNum = 0;
        else
          this.slideNum++;
      }
    },

    watch: {
      'portfolio.category': {
        handler: function () {
          TweenLite.to(this.mainElm, 1, {scrollTo: this.portfolio.category * this.height});
        }
      }
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  .home {
    overflow-y: hidden;
    overflow-x: hidden;

    .category {
      height: 100vh;
      width: 100%;
      position: relative;
      margin-left: 216px;

      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.2;

        z-index: 9;
      }

      .product {
        font-family: 'Marvel', sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 1px;
        text-transform: uppercase;

        display: flex;
        flex-flow: column nowrap;

        position: absolute;
        left: 78px;
        bottom: 134px;

        z-index: 10;

        span {
          text-transform: none;
          margin-top: 6px;

          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
          font-size: 22px;
          color: rgba(255,255,255,0.70);
          letter-spacing: 1px;
        }
      }

      .screen {
        position: absolute;
        top: 0;
        left: 0px;
        width: 100%;
        height: 100%;
        background: center center no-repeat / cover;
      }
    }
  }

  .slide-enter-active {
    transition: opacity 1s ease, transform 4s ease;
  }

  .slide-leave-active {
    transition: opacity 1s ease-in, transform 4s ease;
  }

  .slide-enter {
    opacity: 0;
    transform: translate3d(-175px, 0, 0);
  }

  .slide-leave-active {
    opacity: 0;
  }
</style>
