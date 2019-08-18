<template lang="pug">
  .sidebar__container
    .sidebar__message_title Сообщения
      span.sidebar__message_count {{getMessageCount}}
    .sidebar__message_item(v-for="(chatData, index) in getChatData" :key="index")
      .sidebar__message_divider
      SideBarItem(:subject="chatData.subject" :created="chatData.created" :id="chatData.id")
      .sidebar__message_divider

</template>

<script>
  import { mapGetters } from 'vuex';
  import SideBarItem from './SideBarItem';

  export default {
    name: 'SideBar',
    components: { SideBarItem },
    data: () => ({
      getMessageCount: 151
    }),
    computed: {
      ...mapGetters('chat', ['getChatData']),

    }
  };
</script>

<style lang="stylus">
  .sidebar__container
    background-color #F3F6F8;
    color #656B77
    overflow auto
    box-shadow inset -1px 0px 5px 0px rgba(0, 0, 0, 0.2);

    .sidebar__message_title
      font-size 14px
      margin-bottom 16px
      padding 20px


      .sidebar__message_count
        color #D2D8DE;
        margin-left 10px

    .sidebar__message_divider
      height 1px
      background-color #E9EDF2

    .sidebar__message_item

  /*height 50px*/


</style>
