<template lang="pug">
  .journal-single
    .journal-single-content
      .journal-single-image
        img(
          v-bind:src="'/assets/posts/' + post.id + '/' + post.image"
          v-on:load="onImgLoaded"
          )
      .journal-single-info
        .journal-single-title
          | {{post.title}}
        .journal-single-date
          | {{post.date}}
        .journal-single-titleBig
          | {{post.title}}
        .journal-single-author
          | By {{post.author}}
        .journal-single-text
          | {{post.text}}
</template>

<script>
  import {onLoad} from 'ducks/nav';
  import {store} from 'index';
  import {getPost} from 'store/fixtures';


  export default {
    name: "JournalItemComponent",
    
    data () {
      return {
        post: getPost(this.$route.params.post)
      }
    },
    
    methods: {
      onImgLoaded () {
        store.dispatch(onLoad(100));
      }
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
</style>
