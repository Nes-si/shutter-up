<template lang="pug">
  transition(name="main")
    .loader(v-if="loaderShow")
      transition(name="content")
        .loader-content(v-if="showContent")
          .loader-title
            | Doug Holt
          .loader-subtitle
            | Photography
      
          .loader-bar(v-bind:style="{width: progress + '%'}")
            .loader-bar-line
</template>

<script>
  export default {
    name: 'LoaderComponent',
  
    data () {
      return {
        nav: this.$select('nav'),
        progress: 0,
        destr: false,
        showContent: false,
        timeout: 0,
  
        loaderShow: true,
        loaderCan1: true,
        loaderCan2: false
      }
    },
    
    mounted () {
      this.timeout = setTimeout(() => {
        this.showContent = true;
  
        if (window.requestAnimationFrame) {
          let animate = () => {
            if (!this.loaderShow)
              return;
            if (this.progress < this.nav.loadProgress)
              this.progress++;
            window.requestAnimationFrame(animate);
          };
          animate();
        }
      }, 1500);
    },
    
    methods: {
      hide () {
        this.loaderShow = false;
        this.loaderCan1 = false;
        this.loaderCan2 = false;
        this.showContent = false;
        this.progress = 0;
        clearTimeout(this.timeout);
      }
    },
    
    watch: {
      'nav.loadProgress': {
        handler() {
          if (!this.loaderShow && this.nav.loadProgress < 100) {
            this.loaderShow = true;
            setTimeout(() => {
              this.loaderCan1 = true;
              if (this.loaderCan2)
                this.hide();
            }, 1500);
          } else if (this.nav.loadProgress == 100) {
            this.loaderCan2 = true;
            if (this.loaderCan1)
              this.hide();
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;

    z-index: 9999;

    &-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
  
      font-weight: 500;
      color: rgba(0,0,0,0.87);
      text-transform: uppercase;
    }

    &-title {
      font-size: 36px;
      letter-spacing: 3px;
    }

    &-subtitle {
      font-size: 28px;
      letter-spacing: 2.33px;
    }

    &-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30%;
      height: 10px;
      background: #000;
    }
  }

  .main-enter-active, .main-leave-active {
    transition: transform 1s ease-in-out .4s;
  }
  .main-enter, .main-leave-active {
    transform: translate3d(0, -100%, 0);
  }

  .content-enter-active, .content-leave-active {
    transition: opacity .5s, transform .5s;
  }
  .content-enter, .content-leave-active {
    opacity: 0;
    transform: translate3d(0, 70px, 0);
  }
</style>
