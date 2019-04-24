import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Detail from './views/Detail.vue'
import Cart from './views/Cart.vue'
import Talk from './views/Talk.vue'
import Hot from './views/Hot.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/talk',
      name: 'talk',
      component: Talk
    },
    {
      path:'/hot',
      name:'hot',
      component:Hot
    }
  ]
})
