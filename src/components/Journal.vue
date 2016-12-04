<template lang="pug">
  transition(appear)
    .journal
      .journal-title
        | Journal

      .journal-content
        router-link.journal-item(to="/journal/item1")
          img.journal-image(src="~assets/images/journal-post-1.png")
          .journal-date
            | 10—2016
          .journal-name
            | Blog Post 1: A Few Of Our Favorite Things
        router-link.journal-item(to="/journal/item2")
          img.journal-image(src="~assets/images/journal-post-2.png")
          .journal-date
            | 08—2016
          .journal-name
            | Blog Post 2: New Blog Title
        router-link.journal-item(to="/journal/item3")
          img.journal-image(src="~assets/images/journal-post-3.png")
          .journal-date
            | 03—2016
          .journal-name
            | Blog Post 3: Not all names need a colon
        router-link.journal-item(to="/journal/item4")
          img.journal-image(src="~assets/images/journal-post-4.png")
          .journal-date
            | 12—2015
          .journal-name
            | Short & Sweet
        router-link.journal-item(to="/journal/item5")
          img.journal-image(src="~assets/images/journal-post-5.png")
          .journal-date
            | 10—2015
          .journal-name
            | Another Amazing Blog Article
        router-link.journal-item(to="/journal/item6")
          img.journal-image(src="~assets/images/journal-post-6.png")
          .journal-date
            | 10—2015
          .journal-name
            | Last example post
</template>

<script>
  import {onLoad} from 'ducks/nav';
  import {store} from 'index';
  import {posts} from 'store/fixtures';


  export default {
    name: "JournalComponent",

    mounted () {
      store.dispatch(onLoad(100));
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .journal {
    width: 100%;
    height: 100%;
    background: white;

    overflow-y: scroll;

    padding: 0 10% 11vw;

    &-title {
      margin-top: 14vw;
      margin-bottom: 14vw;

      font-size: 2.2vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 2px;
      line-height: 3vw;

      text-align: center;
    }

    &-content {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    &-item {
      flex: 0 0 43%;
    }

    &-image {
      width: 100%;
    }

    &-date {
      margin-top: 3.2vw;
      padding: 0 3.4vw;

      font-family: 'Marvel', sans-serif;
      font-weight: bold;
      font-size: 1.2vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1.55px;
      line-height: 1.4vw;
    }

    &-name {
      margin-top: 0.8vw;
      margin-bottom: 10vw;
      padding: 0 3.4vw;

      font-size: 2vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1px;
      line-height: 2.6vw;
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
