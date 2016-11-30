<template lang="pug">
  .cssload-container
    ul.cssload-flex-container
      li
        span.cssload-loading
</template>

<script>
  export default {
    name: 'LoaderComponent'
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .cssload-container {
    margin: 19px auto 0 auto;
    max-width: 545px;
  }

  .cssload-flex-container {
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      list-style: none;
      padding: 10px;
      height: 97px;
      width: 97px;
      margin: 29px 19px;
      position: relative;
      text-align: center;
    }
  }

  .cssload-loading, .cssload-loading:after, .cssload-loading:before {
    display: inline-block;
    position: relative;
    width: 5px;
    height: 49px;
    background: rgb(255,255,255);
    margin-top: 5px;
    border-radius: 975px;
    animation: cssload-upDown2 1.15s ease infinite;
    animation-direction: alternate;
    animation-delay: 0.29s;
  }

  .cssload-loading:after, .cssload-loading:before {
    position: absolute;
    content: '';
    animation: cssload-upDown 1.15s ease infinite;
    animation-direction: alternate;
  }

  .cssload-loading:before {
    left: -10px;
  }

  .cssload-loading:after {
    left: 10px;
    animation-delay: 0.58s;
  }

  @keyframes cssload-upDown {
    from {
      transform: translateY(19px);
    }
    to {
      transform: translateY(-19px);
    }
  }

  @keyframes cssload-upDown2 {
    from {
      transform: translateY(29px);
    }
    to {
      transform: translateY(-19px);
    }
  }
</style>
