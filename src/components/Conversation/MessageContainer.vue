<template lang="pug">
  .message__container(:class="{right: position === 'right', left: position !== 'right'}")
    .message__main_block
      .message__message {{message.text}}
      .message__secondary_block
        .message__author {{message.author}}
        .message__date {{message.created.replace(/-/g,'.')}}
</template>

<script>
  export default {
    name: 'MessageContainer',
    props: ['message', 'position']
  };
</script>

<style lang="stylus">
  .message__container
    margin-bottom 20px
    display flex

    &.right
      justify-content flex-end

      .message__main_block
        margin-right 10px

        max-width 95%

      .message__message
        overflow hidden
        text-overflow ellipsis
        background-color #E9F5F4
        padding 10px
        border-radius 8px 8px 0 8px;

      .message__secondary_block
        justify-content flex-end

    &.left
      justify-content flex-start

      .message__main_block
        margin-left 10px
        max-width 95%

        .message__message
          overflow hidden
          text-overflow ellipsis
          background-color #E9F5F4
          padding 10px
          border-radius 8px 8px 8px 0;

      .message__secondary_block
        justify-content flex-start

    .message__secondary_block
      display flex
      align-items center

      .message__author
        margin-right 10px
        font-size 13px
        font-weight bold

      .message__date
        color #B7C0C8
        padding-top 5px
        font-size 10px

</style>
