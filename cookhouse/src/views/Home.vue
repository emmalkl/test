<template>
  <div class="home">
    <p>厨汇</p>
    <van-icon name="search" class="home-logo"/>
    <input type="text" placeholder="今日厨房" class="home-inp">
    <van-button type="primary">搜索</van-button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
 .home{
   position: fixed;
   top: 0;
   left:0;
   right:0;
  &-logo{
    height: 5px;
    width: 5px;
  }
  &-inp{
    width: 80%;
    height: 20px;
  }
  
 }
</style>

