<template lang="pug">
  .chatpage__container
    SideBar.chatpage__side_menu
    router-view.chatpage__main_menu
</template>

<script>
  import SideBar from '../components/SideBar/SideBar';
  import Conversation from '../components/Conversation/Conversation';

  export default {
    name: 'ChatPage',
    components: {
      Conversation,
      SideBar
    }
  };
</script>

<style lang="stylus">
  .chatpage__container
    display flex;
    height 90%
    width 60%
    background-color #ffffff
    border-radius 5px
    -webkit-box-shadow: -5px -3px 15px -4px rgba(0, 0, 0, 0.55);
    -moz-box-shadow: -5px -3px 15px -4px rgba(0, 0, 0, 0.55);
    box-shadow: -5px -3px 15px -4px rgba(0, 0, 0, 0.55);

    .chatpage__side_menu
      width 30%
</style>
