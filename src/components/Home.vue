<template lang="pug">
  .home
    .index-view
      .cont(
        v-for="(slide, index) of slides"
        v-bind:key="slide"
        )
        transition(name="slide")
          .screen(v-show="index == slideNum" v-bind:style="{ backgroundImage: 'url(' + path + slide + ')' }")
</template>

<script>
  const path = 'assets/img/slides/';
  const slides = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.jpg'
  ];
  
  export default {
    name: "HomeComponent",
    
    data: function () {
      return {
        path,
        slides,
        slideNum: 0
      }
    },
  
    mounted: function () {
      setInterval(() => this.slideNext(), 5000);
    },
    
    methods: {
      slideNext: function () {
        if (this.slideNum >= slides.length - 1)
          this.slideNum = 0;
        else
          this.slideNum++;
      },
  
      slidePrev: function () {
        if (this.slideNum == 0)
          this.slideNum = slides.length - 1;
        else
          this.slideNum--;
      }
    }
  }
  
  
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .index-view {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  
    .screen {
      position: absolute;
      top: 0;
      left: 175px;
      width: 100%;
      height: 100%;
      background: center center no-repeat / cover;
    }
  }
</style>

<style lang="sss" scoped rel="stylesheet/sass">
  .slide-enter-active
    transition: opacity 1s ease, transform 4s ease
    
  .slide-leave-active
    transition: opacity 1s ease-in, transform 4s ease
  
  .slide-enter
    opacity: 0
    transform: translate3d(-175px, 0, 0)
  
  .slide-leave-active
    opacity: 0
  
</style>
