<template lang="pug">
  .conversation__preloader(v-if="state === 'LOADING'")
    img(src="@/assets/big-tail-spin.svg")
  .conversation__container(v-else)
    .conversation__message_container#scrollBottom(ref="scrollBottom")
      .conversation__message(v-for="(message, index) in messages" :key="index")
        MessageContainer(:message="message" :position="message.author === firstMessageOwner ? 'left' : 'right'")
      .conversation__bottom#bottom
    TextArea(@scroll="scroll")
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import TextArea from './TextArea';
  import MessageContainer from './MessageContainer';

  export default {
    name: 'Conversation',
    components: {
      MessageContainer,
      TextArea
    },
    data: () => ({
      messages: [],
      firstMessageOwner: '',
      state: ''
    }),
    computed: {
      ...mapGetters('chat', ['getMessagesById', 'getFirstMessageOwner']),
      ...mapState('chat', ['sendingState'])

    },
    methods: {
      changeState(state) {
        this.state = state;
      },
      scroll() {
        const container = this.$refs.scrollBottom;
        container.scrollTop = container.scrollHeight;
      }
    },
    watch: {
      '$route.params.id': {
        handler: function (value) {
          this.changeState('LOADING');
          setTimeout(() => {
            value = parseInt(value);
            this.messages = this.getMessagesById(value);
            this.firstMessageOwner = this.getFirstMessageOwner(value);
            this.changeState('SUCCESS');
          }, 1500);

        },
        deep: true,
        immediate: true
      },

    }
  };
</script>

<style lang="stylus">
  .conversation__container
    display: flex
    -webkit-display flex;
    -moz-display flex;
    -ms--display flex;
    flex-direction column
    justify-content flex-end
    width 70%
    overflow auto

    .conversation__message_container
      overflow auto

    .conversation__message
      display flex
      -webkit-display flex;
      -moz-display flex;
      -ms--display flex;
      flex-direction column
      flex 1;

  .conversation__preloader
    display flex
    -webkit-display flex;
    -moz-display flex;
    -ms--display flex;
    justify-content center
    align-items center
    margin 0 auto

</style>
