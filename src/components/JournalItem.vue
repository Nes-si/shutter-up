<template lang="pug">
  transition(appear)
    .journal-single
      .journal-single-content
        .journal-single-image
          img(src="~assets/images/journal-post-1.png")
        .journal-single-info
          .journal-single-title
            | Blog Post 1: A Few Of Our Favourite Things
          .journal-single-date
            | 10—2016
          .journal-single-titleBig
            | Blog Post 1: A Few Of Our Favorite Things
          .journal-single-author
            | By Doug Holt
          .journal-single-text
            | A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
          .journal-single-text
            | I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream.
          .journal-single-text
            | I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes.
</template>

<script>
  import {onLoad} from 'ducks/nav';
  import {store} from 'index';


  export default {
    name: "JournalItemComponent",

    mounted: function () {
      store.dispatch(onLoad(100));
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .journal-single {
    width: 100%;
    height: 100%;
    background: white;

    overflow-y: scroll;

    padding: 0 6% 5vw;

    &-content {
      padding: 26px 0;

      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }

    &-image {
      margin-top: 46px;

      flex: 0 0 45%;

      img {
        width: 100%;
      }
    }

    &-info {
      flex: 0 0 50%;
    }

    &-title {
      font-size: 18px;
      color: rgba(0,0,0,0.87);
      letter-spacing: 0;
      line-height: 18px;

      padding-bottom: 46px;
      border-bottom: 1px solid rgba(0,0,0,0.38);
      text-align: center;
    }

    &-date {
      margin-top: 16px;

      font-family: 'Marvel', sans-serif;
      font-size: 16px;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1.55px;
      line-height: 18px;
      text-align: center;
      padding: 0 30px;
    }

    &-titleBig {
      margin-top: 75px;
      font-size: 40px;
      color: rgba(0,0,0,0.87);
      letter-spacing: 0;
      line-height: 46px;
      text-align: center;
      padding: 0 30px;
    }

    &-author {
      font-size: 18px;
      color: rgba(0,0,0,0.54);
      letter-spacing: 1px;
      line-height: 18px;

      padding: 55px 30px 79px;
      text-align: center;
    }

    &-text {
      margin-top: 18px;

      font-size: 18px;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1px;
      line-height: 24px;
      padding: 0 30px;
    }
  }

  .v-enter-active {
    transition: transform 1s ease 1s;
  }
  .v-leave-active {
    transition: transform 1s;
  }
  .v-enter, .v-leave-active {
    transform: translate3d(0, 100vh, 0);
  }
</style>
