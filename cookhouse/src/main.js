import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import { Search,Icon,Button,Lazyload,Swipe, SwipeItem  } from 'vant';
Vue.use(Search).use( Icon ).use(Button).use(Lazyload).use(Swipe).use(SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
