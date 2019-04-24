import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import { Icon,Button,Tabbar, TabbarItem,Cell, CellGroup,Tab, Tabs,Tag, NavBar} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use( Icon ).use(Button).use(Cell).use(CellGroup).use(Tab).use(Tabs).use(Tag).use( NavBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
