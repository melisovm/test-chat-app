<template lang="pug">
  #app
    router-view
</template>
<style lang="stylus">
  body
    margin 0
    padding 0

  #app
    font-family 'TT Norms', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    display flex
    align-items center
    justify-content center
    height 100vh
    margin 0
    background-color #E5E5E5

  @font-face
    font-family 'TT Norms'
    font-style normal
    src url("fonts/TTNorms-Light.ttf")

  #nav
    padding 30px

    a
      font-weight bold
      color #2c3e50

      &.router-link-exact-active
        color #42b983
</style>
