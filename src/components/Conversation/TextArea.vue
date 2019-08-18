<template lang="pug">
  .textarea__container
    .textarea__text_field
      textarea-autosize(placeholder="Введите текст..."
        :min-height="5"
        :max-height="80"
        v-model="message")
      .textarea__text_send
        img(src="@/assets/tail-spin.svg" v-if="sendingState === 'LOADING'" )
        img(src="@/assets/send.svg" v-else @click="setSendMessage()")
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'TextArea',
    data: () => ({
      message: ''
    }),
    computed: {
      ...mapState('chat', ['sendingState'])
    },
    methods: {
      ...mapActions('chat', ['sendMessage']),
      setSendMessage() {
        if (this.message) {
          const created = this.$moment()
            .format('YYYY-MM-DD HH:mm');
          this.sendMessage({
            chatId: this.$route.params.id,
            message: this.message,
            created
          });
          this.message = '';
        }
      }
    },
  };
</script>

<style lang="stylus">
  .textarea__container
    border-top 1px solid #E9EDF2
    max-height 100px
    position relative
    align-items center

    .textarea__text_field
      display flex
      padding-top 10px

      margin auto 10px
      align-items flex-end

      textarea
        font-size 12px
        border none
        font-family 'TT Norms'
        width 90%
        resize vertical

      .textarea__text_send
        position absolute
        user-select none
        cursor pointer
        height 100%
        width 40px
        right 0
        bottom 0
        background-color #398BFF
        display flex
        align-items center
        justify-content center
        color #ffffff
</style>
