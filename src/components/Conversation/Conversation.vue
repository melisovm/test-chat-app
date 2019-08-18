<template lang="pug">
  .conversation__preloader(v-if="state === 'LOADING'")
    img(src="@/assets/big-tail-spin.svg")
  .conversation__container(v-else)
    .conversation__message(v-for="(message, index) in messages" :key="index")
      MessageContainer(:message="message" :position="message.author === firstMessageOwner ? 'left' : 'right'")
    TextArea
</template>

<script>
  import { mapGetters } from 'vuex';
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
      ...mapGetters('chat', ['getMessagesById', 'getFirstMessageOwner'])

    },
    methods: {
      changeState(state) {
        this.state = state;
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
      }

    }
  };
</script>

<style lang="stylus">
  .conversation__container
    display flex
    flex-direction column
    justify-content end
    width 70%
    overflow-y auto

    .conversation__message
      display flex
      flex-direction column

  .conversation__preloader
    display flex
    justify-content center
    align-items center
    margin 0 auto

</style>
