import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'chat' }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/ChatPage.vue'),
      children: [
        {
          path: '/chat/:id',
          name: 'conversation',
          component: () => import('./components/Conversation/Conversation.vue')
        }

      ]
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
