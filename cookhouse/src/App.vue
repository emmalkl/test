<template>
  <div id="app">
    <router-view></router-view>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home" to='/'>首页</van-tabbar-item>
        <van-tabbar-item icon="fire-o" color="red" to='/hot'>热门</van-tabbar-item>
        <van-tabbar-item icon="comment-o" info="5" to='/talk'>讨论区</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to='/cart'>购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to='/profile'>我的</van-tabbar-item>
      </van-tabbar>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
