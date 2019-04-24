<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home" to='/'>首页</van-tabbar-item>
        <van-tabbar-item icon="fire-o" color="red" to='/hot'>热门</van-tabbar-item>
        <van-tabbar-item icon="comment-o" info="5" to='/discuss'>讨论区</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to='/cart'>购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to='/profile'>我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
