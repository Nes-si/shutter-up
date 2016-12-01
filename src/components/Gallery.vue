<template lang="pug">
  .gallery
    transition(
      v-bind:css="false"
      v-on:before-enter="scrollBeforeEnter"
      v-on:enter="scrollEnter"
      v-on:leave="scrollLeave"
      )
      .item-pic(v-bind:style="{ backgroundImage: 'url(/assets/data/' + category.name + '/items/' + category.items[itemNum].image + ')' }")
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
        
        scrollHandler: null
      }
    },
  
    mounted: function () {
      this.scrollHandler = new ScrollHandler(
        this.itemNext, this.itemPrev
      );
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
        el.style.transform = `translateX(${value})`;
      },
      scrollEnter: function (el, done) {
        let value = this.direction === 'right' ? '99%' : "-99%";
        Velocity(el, { translateX: [0, value], translateZ: 0 }, { duration: 400, complete: done });
      },
      scrollLeave: function (el, done) {
        let value = this.direction === 'right' ? '-100%' : "100%";
        Velocity(el, { translateX: value, translateZ: 0 }, { duration: 400, complete: done });
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
    
    .item-pic {
      position: absolute;
      top: 0;
      left: 175px;
      width: 100%;
      height: 100%;
      background: center center no-repeat / cover;
    }
  }
</style>
