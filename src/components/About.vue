<template lang="pug">
  transition(appear)
    .about Я пиздат!
</template>

<script>
  export default {
    name: "AboutComponent"
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .about {
    width: 100%;
    height: 100%;
    background: white;
  }

  .v-enter-active, .v-leave-active {
    transition: transform 1s;
  }
  .v-enter, .v-leave-active {
    transform: translate3d(0, 100vh, 0);
  }

</style>
