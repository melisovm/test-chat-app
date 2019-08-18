import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '../store/store';
import './plugins/moment';
import VueTextareaAutosize from 'vue-textarea-autosize';

Vue.config.productionTip = false;
Vue.use(VueTextareaAutosize);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
