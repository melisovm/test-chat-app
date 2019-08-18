<template lang="pug">
  router-link(:to='/chat/ + id').sidebar_item__link
    .sidebar_item__container
      .sidebar_item__main_block
        .sidebar_item__subject {{subject}}
        .sidebar_item__date {{getFormattedDate}}
      .sidebar_item__last_message {{getLastMessageById(id)}}
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'SideBarItem',
    data: () => ({}),
    props: ['subject', 'created', 'id'],
    computed: {
      ...mapGetters('chat', ['getLastMessageById']),
      getFormattedDate() {
        const momentTime = this.$moment(this.created, 'YYYY-MM-DD');
        return `${momentTime.format('Do MMMM YYYY')}`;
      }

    },
    methods: {},
    mounted() {
    }
  };
</script>

<style lang="stylus">
  .sidebar_item__container
    padding 20px !important
    color #7D8790;

    .sidebar_item__main_block
      display flex
      justify-content space-between
      margin-bottom 5px
      align-items flex-start

      .sidebar_item__subject
        white-space nowrap
        font-size 14px
        color #35383D
        font-weight bold

      .sidebar_item__date
        font-size 10px
        padding-top 3px
        text-transform capitalize
        text-align right

    .sidebar_item__last_message
      font-size 13px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis

  .sidebar_item__link
    text-decoration none;
    outline none

    &:hover
      text-decoration: none;
      cursor: pointer;

    &.router-link-exact-active.router-link-active
      .sidebar_item__container
        background-color #ffffff
        box-shadow inset -1px 0px 5px 0px rgba(0, 0, 0, 0.2);
        border-left 3px solid #398BFF


</style>
