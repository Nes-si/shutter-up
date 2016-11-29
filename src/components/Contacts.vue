<template lang="pug">
  transition(appear)
    .contacts Телефон, адрес, блабла
</template>

<script>
  export default {
    name: "ContactsComponent"
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .contacts {
    margin-left: 216px;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  
  .v-enter-active, .v-leave-active {
    transition: transform 1s;
  }
  .v-enter, .v-leave-active {
    transform: translate3d(0, 100vh, 0);
  }

</style>
